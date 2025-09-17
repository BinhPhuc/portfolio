import { createClient } from "@/lib/supabase/server";
import { CreateTimelineBody, createTimelineSchema } from "@/schemas/timeline";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const rawBody: CreateTimelineBody = await request.json();
    const {
      success,
      data: body,
      error: parseError,
    } = createTimelineSchema.safeParse(rawBody);

    if (!success) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    const { data: timelineEntry, error: insertError } = await supabase
      .from("time_line")
      .insert([
        {
          title: body.title,
          company: body.company,
          location: body.location,
          type: body.type,
          description: body.description,
          achievements: body.achievements || [],
          technologies: body.technologies || [],
          start_year: body.start_year,
          end_year: body.end_year,
        },
      ])
      .select()
      .single();

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 400 });
    }

    return NextResponse.json({ data: timelineEntry }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const supabase = await createClient();

    const { data: timeLine, error } = await supabase
      .from("time_line")
      .select("*")
      .order("start_year", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({
      data: timeLine,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
