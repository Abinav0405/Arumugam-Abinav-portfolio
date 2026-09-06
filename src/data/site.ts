export const siteConfig = {
  name: "Arumugam Abinav",
  shortName: "Abinav",
  title: "Arumugam Abinav — Student, Developer & Builder in Singapore",
  description:
    "Arumugam Abinav is a student at Riverside Secondary School in Singapore who builds real software — from workforce platforms to AI experiments. Developer, builder, and aspiring entrepreneur.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://arumugam-abinav.akk.sg",
  locale: "en_SG",
  email: "arumugamabinav22@gmail.com",
  school: {
    name: "Riverside Secondary School",
    location: "Singapore",
  },
  location: "Singapore",
  roles: [
    "Student",
    "Developer",
    "Builder",
    "AI Enthusiast",
    "Entrepreneur",
  ],
  philosophy: "Think of an idea. Build it. Break it. Fix it. Make it better.",
  status: "Currently building & learning",
  social: {
    github: "https://github.com/Abinav0405",
    githubUsername: "Abinav0405",
  },
  keywords: [
    "Arumugam Abinav",
    "Abinav",
    "Abinav developer",
    "Arumugam Abinav Singapore",
    "Abinav Riverside Secondary School",
    "student developer Singapore",
    "AKK Timesheet Manager",
    "AKK Material Tracker",
  ],
} as const;
