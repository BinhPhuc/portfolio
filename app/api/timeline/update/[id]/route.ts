import { prisma } from "@/lib/prisma";
import { CreateTimelineBody, createTimelineSchema } from "@/schemas/timeline";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const rawBody: CreateTimelineBody = await request.json();
    const {
      success,
      data: body,
      error: parseError,
    } = createTimelineSchema.safeParse(rawBody);

    if (!success) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    const timelineUpdated = await prisma.timeline.update({
      where: {
        id,
      },
      data: {
        title: body.title,
        company: body.company,
        location: body.location,
        type: body.type,
        description: body.description,
        achievements: body.achievements,
        technologies: body.technologies,
        start_year: body.start_year,
        end_year: body.end_year,
        priority: body.priority,
      },
    });

    if (!timelineUpdated) {
      return NextResponse.json(
        { error: "Timeline entry not updated" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: timelineUpdated }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
