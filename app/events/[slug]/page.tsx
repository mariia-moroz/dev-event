import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import EventDetailsItem from "@/components/EvenDetailsItem";
import EventAgenda from "@/components/EventAgenda";
import EventTags from "@/components/EventTags";
import BookEvent from "@/components/BookEvent";
import SimilarEvents from "@/components/SimilarEvents";
import { cacheLife } from "next/cache";
import { getBookingsCountByEventId } from "@/lib/actions/booking.action";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const BookingSidebar = async ({ eventId, slug }: { eventId: string; slug: string }) => {
  const { success, bookingsCount } = await getBookingsCountByEventId({ eventId });
  const count = success ? bookingsCount : 0;

  return (
    <div className='signup-card'>
      <h2>Book Your Spot</h2>
      {count > 0 ? (
        <p className='text-sm'>Join {count} people who have already booked their spot!</p>
      ) : (
        <p className='text-sm'>Be the first to boor your spot!</p>
      )}

      <BookEvent eventId={eventId} slug={slug} />
    </div>
  );
};

const EventDetailsContent = async ({ params }: { params: Promise<{ slug: string }> }) => {
  "use cache";
  cacheLife("hours");

  const { slug } = await params;

  let event;

  try {
    const request = await fetch(`${BASE_URL}/api/events/${slug}`, { next: { revalidate: 60 } });

    if (!request.ok) {
      if (request.status === 400) {
        return notFound();
      }

      throw new Error(`Failed to fetch event: ${request.statusText}`);
    }

    const response = await request.json();
    event = response.event;

    if (!event) {
      return notFound();
    }
  } catch (err) {
    console.error("Error fetching event:", err);
    return notFound();
  }

  const {
    _id,
    title,
    description,
    image,
    overview,
    date,
    time,
    location,
    mode,
    agenda,
    audience,
    organiser,
    tags,
  } = event;

  return (
    <section id='event'>
      <div className='header'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className='details'>
        {/* Left Side - Event Content */}
        <div className='content'>
          <Image
            src={image}
            alt='Event Banner'
            width={800}
            height={800}
            loading='eager'
            className='banner h-auto'
          />

          <section className='flex-col-gap-2'>
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>

          <section className='flex-col-gap-2'>
            <h2>Event Details</h2>
            <EventDetailsItem icon='/icons/calendar.svg' alt='calendar' label={date} />
            <EventDetailsItem icon='/icons/clock.svg' alt='clock' label={time} />
            <EventDetailsItem icon='/icons/pin.svg' alt='pin' label={location} />
            <EventDetailsItem icon='/icons/mode.svg' alt='mode' label={mode} />
            <EventDetailsItem icon='/icons/audience.svg' alt='audience' label={audience} />
          </section>

          <EventAgenda agendaItems={agenda} />

          <section className='flex-col-gap-2'>
            <h2>About The Organiser</h2>
            <p>{organiser}</p>
          </section>

          <EventTags tags={tags} />
        </div>

        {/* Right Side - Booking Form */}
        <aside className='booking'>
          <Suspense fallback={<div className='signup-card'>Loading bookings...</div>}>
            <BookingSidebar eventId={_id} slug={slug} />
          </Suspense>
        </aside>
      </div>

      <Suspense fallback={<div>No events</div>}>
        <SimilarEvents slug={slug} />
      </Suspense>
    </section>
  );
};

const EventDetailsPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <Suspense
      fallback={
        <section id='event'>
          <div className='header'>
            <h1>Loading event...</h1>
            <p>Fetching event details</p>
          </div>
        </section>
      }
    >
      <EventDetailsContent params={params} />
    </Suspense>
  );
};

export default EventDetailsPage;
