import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";
import { v2 as cloudinary } from "cloudinary";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();

    const formData = await req.formData();

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

    // upload image

    const file = formData.get("image") as File;

    if (!file) {
      return NextResponse.json(
        {
          message: "Image file is required",
        },
        { status: 400 },
      );
    }

    const tags = JSON.parse(formData.get("tags") as string);
    const agenda = JSON.parse(formData.get("agenda") as string);

    const arrayBuffer = await file.arrayBuffer();

    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: "image", folder: "DevEvent" }, (error, result) => {
          if (error) {
            return reject(error);
          }
          return resolve(result);
        })
        .end(buffer);
    });

    event.image = (uploadResult as { secure_url: string }).secure_url;

    const createdEvent = await Event.create({ ...event, tags: tags, agenda: agenda });

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

export async function GET(): Promise<NextResponse> {
  try {
    await connectDB();

    const events = await Event.find().sort({ createdAt: -1 });

    return NextResponse.json({ message: "Events fetched successfully", events }, { status: 200 });
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
