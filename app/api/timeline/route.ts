import { PrismaClient } from "@/generated/prisma";
import { CreateTimelineBody, createTimelineSchema } from "@/schemas/timeline";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const rawBody: CreateTimelineBody = await request.json();
    const {
      success,
      data: body,
      error: parseError,
    } = createTimelineSchema.safeParse(rawBody);

    if (!success) {
      return NextResponse.json({ error: parseError }, { status: 400 });
    }

    const timelineEntry = await prisma.timeline.create({
      data: {
        title: body.title,
        company: body.company,
        location: body.location,
        type: body.type,
        description: body.description,
        achievements: body.achievements || [],
        technologies: body.technologies || [],
        start_year: body.start_year,
        end_year: body.end_year,
        priority: body.priority,
      },
    });

    if (!timelineEntry) {
      return NextResponse.json(
        { error: "Timeline entry not created" },
        { status: 500 }
      );
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
    const timeLine = await prisma.timeline.findMany({
      orderBy: {
        priority: "asc",
      },
    });

    if (!timeLine) {
      return NextResponse.json(
        { error: "Timeline not found" },
        { status: 404 }
      );
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
