"use server";

import { revalidatePath } from "next/cache";
import connectDB from "../mongodb";
import { Booking } from "@/database";

export const createBooking = async ({
  eventId,
  email,
  slug,
}: {
  eventId: string;
  email: string;
  slug: string;
}) => {
  try {
    await connectDB();
    const emailAlreadyUsed = await Booking.findOne({ eventId: eventId, email: email }).lean();
    if (emailAlreadyUsed) {
      return { success: false, emailUsed: true };
    }

    const booking = await Booking.create({ eventId, email });
    revalidatePath(`/events/${slug}`);

    return { success: true, bookingId: booking._id.toString() };
  } catch (err) {
    console.error("Create booking failed", err);
    return {
      success: false,
    };
  }
};

export const getBookingsByEventId = async ({ eventId }: { eventId: string }) => {
  try {
    await connectDB();
    const bookings = await Booking.find({ eventId: eventId }).lean();

    if (!bookings) {
      return { success: false, bookings: [] };
    }

    return { success: true, bookings };
  } catch (err) {
    console.error(`No bookings found for ${eventId}`, err);
    return {
      success: false,
      bookings: [],
    };
  }
};

export const getBookingsCountByEventId = async ({ eventId }: { eventId: string }) => {
  try {
    await connectDB();
    const bookingsCount = await Booking.countDocuments({ eventId });

    return { success: true, bookingsCount };
  } catch (err) {
    console.error(`No bookings count found for ${eventId}`, err);
    return {
      success: false,
      bookingsCount: 0,
    };
  }
};
