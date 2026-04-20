import type { IEvent } from "@/database";

export type EventItem = Pick<
  IEvent,
  | "title"
  | "slug"
  | "description"
  | "overview"
  | "image"
  | "venue"
  | "location"
  | "date"
  | "time"
  | "mode"
  | "audience"
  | "agenda"
  | "organiser"
  | "tags"
>;

const events: EventItem[] = [
  {
    title: "Google I/O 2026",
    slug: "google-io-2026",
    description:
      "Google's flagship developer conference focused on AI, Android, web, cloud, and the latest platform announcements.",
    overview:
      "A large-scale developer event featuring keynotes, technical sessions, product demos, and community networking for builders across the Google ecosystem.",
    image: "/images/event1.png",
    venue: "Shoreline Amphitheatre",
    location: "Mountain View, CA, USA",
    date: "2026-05-19",
    time: "10:00 AM",
    mode: "hybrid",
    audience: "Software engineers, product teams, founders, and Google platform developers.",
    agenda: [
      "08:30 AM - 09:30 AM | Opening Keynote and Product Announcements",
      "09:45 AM - 11:00 AM | Breakout Sessions for AI, Android, Web, and Cloud",
      "11:15 AM - 12:30 PM | Hands-on Demos and Developer Networking",
      "12:30 PM - 01:30 PM | Lunch Break",
      "01:30 PM - 03:00 PM | Workshops: Build with Google Platforms",
      "03:15 PM - 04:30 PM | Community Q&A and Closing Session",
    ],
    organiser: "Google",
    tags: ["google", "ai", "android", "cloud", "web"],
  },
  {
    title: "Open Source Summit North America 2026",
    slug: "open-source-summit-north-america-2026",
    description:
      "A major gathering for open-source maintainers, enterprise teams, and contributors shaping the future of open technologies.",
    overview:
      "The summit brings together leaders from across the open-source ecosystem for talks, collaboration, policy discussions, and community-driven learning.",
    image: "/images/event2.png",
    venue: "Minneapolis Convention Center",
    location: "Minneapolis, Minnesota, USA",
    date: "2026-05-18",
    time: "09:00 AM",
    mode: "offline",
    audience: "Open-source maintainers, DevOps engineers, platform teams, and technical leaders.",
    agenda: [
      "08:30 AM - 09:30 AM | Conference Keynote and Ecosystem Updates",
      "09:45 AM - 11:00 AM | Linux, Cloud Native, Security, and Governance Tracks",
      "11:15 AM - 12:30 PM | Maintainer Stories and Community Talks",
      "12:30 PM - 01:30 PM | Lunch Break",
      "01:30 PM - 03:00 PM | Contributor Meetups and Technical Workshops",
      "03:15 PM - 04:30 PM | Partner Networking and Open Collaboration Sessions",
    ],
    organiser: "Linux Foundation",
    tags: ["open-source", "linux", "cloud-native", "devops", "security"],
  },
  {
    title: "DevNetwork AI + ML Hackathon 2026",
    slug: "devnetwork-ai-ml-hackathon-2026",
    description:
      "A builder-focused hackathon for creating practical AI and machine learning products with modern tools and APIs.",
    overview:
      "Teams prototype AI-driven apps, compete for prizes, and learn from mentors while exploring the latest developer platforms for machine learning.",
    image: "/images/event3.png",
    venue: "South San Francisco Conference Center",
    location: "South San Francisco, CA, USA",
    date: "2026-05-11",
    time: "09:00 AM",
    mode: "hybrid",
    audience: "Developers, startup teams, students, and AI builders looking to ship prototypes quickly.",
    agenda: [
      "08:30 AM - 09:30 AM | Kickoff, Team Formation, and Sponsor Challenge Briefing",
      "09:45 AM - 11:00 AM | Rapid Ideation and Project Planning",
      "11:15 AM - 12:30 PM | Build Session with Mentor Office Hours",
      "12:30 PM - 01:30 PM | Lunch Break",
      "01:30 PM - 03:00 PM | Prototype Development and Product Reviews",
      "03:15 PM - 04:30 PM | Project Demos, Judging, and Awards Ceremony",
    ],
    organiser: "DevNetwork",
    tags: ["hackathon", "ai", "machine-learning", "developers", "startups"],
  },
  {
    title: "TechCrunch Disrupt 2026",
    slug: "techcrunch-disrupt-2026",
    description:
      "A high-profile startup and technology conference covering founders, investors, emerging products, and the future of tech.",
    overview:
      "Disrupt combines interviews, startup showcases, networking, and industry commentary for teams building and backing the next generation of technology companies.",
    image: "/images/event4.png",
    venue: "Moscone West",
    location: "San Francisco, CA, USA",
    date: "2026-10-13",
    time: "09:00 AM",
    mode: "offline",
    audience: "Founders, investors, product leaders, startup operators, and tech media.",
    agenda: [
      "08:30 AM - 09:30 AM | Main Stage Interviews and Opening Keynotes",
      "09:45 AM - 11:00 AM | Startup Battlefield and Emerging Product Showcases",
      "11:15 AM - 12:30 PM | Founder Panels and Investor Perspectives",
      "12:30 PM - 01:30 PM | Lunch Break",
      "01:30 PM - 03:00 PM | Ecosystem Networking and Demo Sessions",
      "03:15 PM - 04:30 PM | Closing Fireside Chat on the Future of Tech",
    ],
    organiser: "TechCrunch",
    tags: ["startups", "technology", "founders", "investors", "conference"],
  },
  {
    title: "GitHub Universe 2026",
    slug: "github-universe-2026",
    description:
      "GitHub's annual event for developers exploring modern software delivery, collaboration, DevSecOps, and AI-assisted coding.",
    overview:
      "Universe highlights new GitHub capabilities, customer stories, and practical sessions for engineering teams shipping software at scale.",
    image: "/images/event5.png",
    venue: "GitHub Universe Conference Venue",
    location: "San Francisco, CA, USA",
    date: "2026-10-28",
    time: "08:30 AM",
    mode: "hybrid",
    audience: "Developers, engineering managers, DevOps teams, and platform leaders.",
    agenda: [
      "08:30 AM - 09:30 AM | Product Keynote and Roadmap Updates",
      "09:45 AM - 11:00 AM | Collaboration, Security, and AI Coding Breakouts",
      "11:15 AM - 12:30 PM | Customer Stories and Engineering Spotlights",
      "12:30 PM - 01:30 PM | Lunch Break",
      "01:30 PM - 03:00 PM | Workshops: DevSecOps and Platform Productivity",
      "03:15 PM - 04:30 PM | Community Networking and Closing Session",
    ],
    organiser: "GitHub",
    tags: ["github", "developers", "devops", "security", "ai"],
  },
  {
    title: "Web Summit Developer Summit 2026",
    slug: "web-summit-developer-summit-2026",
    description:
      "A developer-centered program within Web Summit focused on software engineering trends, tooling, and the builder community.",
    overview:
      "The event connects developers with fast-moving startups, major tech companies, and technical speakers through talks, panels, and networking experiences.",
    image: "/images/event6.png",
    venue: "MEO Arena",
    location: "Lisbon, Portugal",
    date: "2026-11-09",
    time: "09:00 AM",
    mode: "offline",
    audience: "Frontend, backend, mobile, and full-stack developers interested in new tools and trends.",
    agenda: [
      "08:30 AM - 09:30 AM | Developer-focused Talks and Trend Briefings",
      "09:45 AM - 11:00 AM | Panels with Engineering Leaders and Founders",
      "11:15 AM - 12:30 PM | Product Demos and Technical Showcases",
      "12:30 PM - 01:30 PM | Lunch Break",
      "01:30 PM - 03:00 PM | Workshops on Modern Developer Tooling",
      "03:15 PM - 04:30 PM | Community Meetups and Networking Opportunities",
    ],
    organiser: "Web Summit",
    tags: ["web", "developers", "summit", "engineering", "networking"],
  },
  {
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    description:
      "Google Cloud's flagship conference focused on AI, cloud infrastructure, data, security, and application development.",
    overview:
      "Google Cloud Next 2026 brings builders and enterprise teams together in Las Vegas for keynotes, technical sessions, hands-on learning, and product announcements across Google's cloud platform.",
    image: "/images/event7.png",
    venue: "Mandalay Bay Convention Center",
    location: "Las Vegas, NV, USA",
    date: "2026-04-22",
    time: "09:00 AM",
    mode: "offline",
    audience: "Cloud engineers, developers, architects, IT leaders, and teams building with AI and Google Cloud.",
    agenda: [
      "08:30 AM - 09:30 AM | Opening Keynote: AI, Infrastructure, and Product Announcements",
      "09:45 AM - 11:00 AM | Breakout Sessions: Cloud Infrastructure, Data, and Security",
      "11:15 AM - 12:30 PM | Demos and Expert Talks: Building AI Applications on Google Cloud",
      "12:30 PM - 01:30 PM | Lunch Break",
      "01:30 PM - 03:00 PM | Hands-on Labs: Modernize and Scale with Google Cloud",
      "03:15 PM - 04:30 PM | Customer Stories and Closing Fireside Chat",
    ],
    organiser:
      "Google Cloud is Google's enterprise cloud computing division, providing infrastructure, data, AI, security, and developer platforms used by startups, global enterprises, and public sector teams. Through flagship events like Google Cloud Next, the organisation brings together engineers, architects, and technology leaders to share product launches, best practices, customer stories, and hands-on learning experiences across the Google Cloud ecosystem.",
    tags: ["google", "ai", "android", "cloud", "web"],
  },
];

export default events;
