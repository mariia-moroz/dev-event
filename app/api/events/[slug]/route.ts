import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { Event } from "@/database";

type RouteParams = {
  params: Promise<{ slug: string }>;
};

export async function GET(req: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  try {
    await connectDB();

    const { slug } = await params;

    if (!slug || typeof slug !== "string" || slug.trim() === "") {
      return NextResponse.json(
        {
          message: "Invalid or midding slug parameter",
        },
        { status: 400 },
      );
    }

    const sanitisedSlug = slug.trim().toLowerCase();

    const event = await Event.findOne({ slug: sanitisedSlug }).lean();

    if (!event) {
      return NextResponse.json({ message: `Event with '${sanitisedSlug}' not found` }, { status: 404 });
    }

    return NextResponse.json({ message: "Event fetched successfully", event }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Event fetching failed",
        error: err instanceof Error ? err.message : "Unknown",
      },
      { status: 500 },
    );
  }
}
