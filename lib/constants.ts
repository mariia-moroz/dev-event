export interface EventItem {
  title: string;
  slug: string;
  category: "conference" | "hackathon" | "meetup";
  image: string;
  location: string;
  date: string;
  time: string;
  organizer: string;
  sourceUrl: string;
}

const events: EventItem[] = [
  {
    title: "Google I/O 2026",
    slug: "google-io-2026",
    category: "conference",
    image: "/images/event1.png",
    location: "Shoreline Amphitheatre, Mountain View, CA",
    date: "2026-05-19",
    time: "10:00 AM",
    organizer: "Google",
    sourceUrl: "https://io.google/",
  },
  {
    title: "Open Source Summit North America 2026",
    slug: "open-source-summit-north-america-2026",
    category: "conference",
    image: "/images/event2.png",
    location: "Minneapolis, Minnesota",
    date: "2026-05-18",
    time: "09:00 AM",
    organizer: "Linux Foundation",
    sourceUrl: "https://events.linuxfoundation.org/open-source-summit-north-america/",
  },
  {
    title: "DevNetwork AI + ML Hackathon 2026",
    slug: "devnetwork-ai-ml-hackathon-2026",
    category: "hackathon",
    image: "/images/event3.png",
    location: "South San Francisco Conference Center + Online",
    date: "2026-05-11",
    time: "09:00 AM",
    organizer: "DevNetwork",
    sourceUrl: "https://devnetwork-ai-ml-hack-2026.devpost.com/",
  },
  {
    title: "TechCrunch Disrupt 2026",
    slug: "techcrunch-disrupt-2026",
    category: "conference",
    image: "/images/event4.png",
    location: "Moscone West, San Francisco, CA",
    date: "2026-10-13",
    time: "09:00 AM",
    organizer: "TechCrunch",
    sourceUrl: "https://techcrunch.com/events/techcrunch-disrupt/",
  },
  {
    title: "GitHub Universe 2026",
    slug: "github-universe-2026",
    category: "conference",
    image: "/images/event5.png",
    location: "San Francisco, USA",
    date: "2026-10-28",
    time: "08:30 AM",
    organizer: "GitHub",
    sourceUrl: "https://githubuniverse.com/",
  },
  {
    title: "Web Summit Developer Summit 2026",
    slug: "web-summit-developer-summit-2026",
    category: "meetup",
    image: "/images/event6.png",
    location: "MEO Arena, Lisbon, Portugal",
    date: "2026-11-09",
    time: "09:00 AM",
    organizer: "Web Summit",
    sourceUrl: "https://websummit.com/tracks/developer-summit/",
  },
];

export default events;
