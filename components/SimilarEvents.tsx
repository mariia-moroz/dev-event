import { IEvent } from "@/database";
import EventCard from "./EventCard";
import { getSimilarEventsBySlug } from "@/lib/actions/event.action";

const SimilarEvents = async ({ slug }: { slug: string }) => {
  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  if (similarEvents.length === 0) {
    return (
      <div className='flex w-full flex-col gap-4 pt-20'>
        <h2>Similar Events</h2>
        <p>No similar events</p>
      </div>
    );
  }

  return (
    <div className='flex w-full flex-col gap-4 pt-20'>
      <h2>Similar Events</h2>
      <div className='events'>
        {similarEvents.map((similarEvent: IEvent) => (
          <EventCard key={similarEvent.slug} {...similarEvent} />
        ))}
      </div>
    </div>
  );
};

export default SimilarEvents;
