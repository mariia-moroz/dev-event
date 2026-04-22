import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";
import { notFound } from "next/navigation";
import { cacheLife } from "next/cache";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Page = async () => {
  "use cache";
  cacheLife("hours");

  let events;

  try {
    const request = await fetch(`${BASE_URL}/api/events`);

    if (!request.ok) {
      if (request.status === 400) {
        return notFound();
      }

      throw new Error(`Failed to fetch event: ${request.statusText}`);
    }

    const response = await request.json();
    events = response.events;

    if (!events) {
      return notFound();
    }
  } catch (err) {
    console.error("Error fetching event:", err);
    return notFound();
  }

  return (
    <section>
      <h1 className='text-center'>
        The hub for Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className='text-center mt-5'>Hackathons, Meetups, and Conferences, All in One Place</p>

      <ExploreBtn />

      <div className='mt-20 space-y-7' id="events">
        <h3>Featured Events</h3>
        <ul className='events'>
          {events &&
            events.length > 0 &&
            events.map((event: IEvent, index: number) => (
              <li key={event.slug}>
                <EventCard {...event} priority={index === 0} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;
