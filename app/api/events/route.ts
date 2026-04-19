import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    console.log(formData);

    let event;

    try {
      event = Object.fromEntries(formData.entries());
    } catch (err) {
      return NextResponse.json(
        {
          message: "Invalid JSON data format",
          error: err instanceof Error ? err.message : "Unknown",
        },
        { status: 400 },
      );
    }

    const createdEvent = await Event.create(event);

    return NextResponse.json(
      {
        message: "Event created successfully",
        event: createdEvent,
      },
      { status: 201 },
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Event creation failed",
        error: err instanceof Error ? err.message : "Unknown",
      },
      { status: 500 },
    );
  }
}
