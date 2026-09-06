export type SkillLevel =
  | "Exploring"
  | "Learning"
  | "Building with"
  | "Experienced with";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  title: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: [
      { name: "JavaScript", level: "Building with" },
      { name: "TypeScript", level: "Building with" },
      { name: "Python", level: "Building with" },
      { name: "C", level: "Learning" },
      { name: "SQL", level: "Building with" },
      { name: "HTML", level: "Experienced with" },
      { name: "CSS", level: "Experienced with" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Building with" },
      { name: "Vite", level: "Building with" },
      { name: "React Router", level: "Building with" },
      { name: "Tailwind CSS", level: "Building with" },
      { name: "Radix UI", level: "Building with" },
      { name: "Framer Motion", level: "Building with" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Supabase", level: "Building with" },
      { name: "PostgreSQL", level: "Building with" },
      { name: "Edge Functions", level: "Building with" },
      { name: "REST / RPC", level: "Building with" },
      { name: "Authentication", level: "Building with" },
      { name: "RLS", level: "Building with" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Capacitor", level: "Building with" },
      { name: "Android", level: "Building with" },
      { name: "React Native", level: "Exploring" },
      { name: "Expo", level: "Exploring" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Git", level: "Building with" },
      { name: "GitHub", level: "Building with" },
      { name: "Three.js", level: "Exploring" },
      { name: "WebGL", level: "Exploring" },
      { name: "Firebase Cloud Messaging", level: "Building with" },
      { name: "QR systems", level: "Building with" },
      { name: "Geolocation", level: "Building with" },
      { name: "PDF generation", level: "Building with" },
      { name: "Excel generation", level: "Building with" },
      { name: "AI development tools", level: "Building with" },
    ],
  },
];

export const interests = [
  {
    title: "Technology",
    text: "I like understanding how things work — then trying to build my own version.",
  },
  {
    title: "AI",
    text: "Not just using AI tools. Figuring out how to build with them.",
  },
  {
    title: "Entrepreneurship",
    text: "I care about products people actually use, not only code that looks cool in a repo.",
  },
  {
    title: "Design",
    text: "If something is confusing, it isn't finished. UI/UX is part of building.",
  },
  {
    title: "Games",
    text: "Interactive experiments teach timing, logic, and how software feels to use.",
  },
  {
    title: "Experimentation",
    text: "Some projects start as \"what if?\" and turn into something real.",
  },
  {
    title: "Learning",
    text: "School by day, shipping by night. Still learning. Still building.",
  },
];
