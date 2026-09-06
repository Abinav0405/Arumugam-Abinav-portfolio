export interface JourneyEntry {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export const journey: JourneyEntry[] = [
  {
    id: "early",
    title: "Early experimentation",
    description:
      "Messing around with technology, breaking things on purpose, and figuring out what was possible.",
  },
  {
    id: "learning",
    title: "Learning programming",
    description:
      "Picking up languages and tools the way I learn best — by trying to make something exist.",
  },
  {
    id: "websites",
    title: "Building websites and applications",
    description:
      "Moving from small experiments into real interfaces people can open and use.",
  },
  {
    id: "games",
    title: "Exploring games",
    description:
      "Building interactive experiences like Block Croser to learn through playable projects.",
  },
  {
    id: "ai",
    title: "Exploring AI",
    description:
      "Experimenting with AI coding tools, APIs, and workflows — wanting to build with AI, not only consume it.",
  },
  {
    id: "akk",
    title: "Building software for AKK Engineering",
    description:
      "Starting to turn real operational problems into digital systems for an actual organisation.",
  },
  {
    id: "timesheet",
    title: "AKK Timesheet Manager",
    description:
      "A workforce platform for attendance, leave, payroll, vehicle tracking, and more — web and Android.",
    date: "From Dec 2025",
  },
  {
    id: "material",
    title: "AKK Material Tracker",
    description:
      "A material request and tracking workflow for requests, approvals, issuing, and returns.",
  },
  {
    id: "play",
    title: "Publishing mobile applications",
    description:
      "Shipping AKK Timesheet Manager to Google Play so the product could live on phones.",
  },
  {
    id: "entrepreneurship",
    title: "Exploring entrepreneurship",
    description:
      "Thinking beyond features — SaaS ideas, products, and how software becomes something people rely on.",
  },
  {
    id: "now",
    title: "Current projects",
    description:
      "Still a student. Still shipping. This is the beginning, not the highlight reel.",
  },
];
