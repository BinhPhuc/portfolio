import { prisma } from "@/lib/prisma";
import { CreateTimelineBody, createTimelineSchema } from "@/schemas/timeline";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const deleteTimeline = await prisma.timeline.delete({
      where: {
        id,
      },
    });

    if (!deleteTimeline) {
      return NextResponse.json(
        { error: "Timeline entry not deleted" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: deleteTimeline }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
