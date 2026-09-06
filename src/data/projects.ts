export type ProjectCategory =
  | "production"
  | "ecosystem"
  | "mobile"
  | "experiment"
  | "game";

export type ProjectStatus = "active" | "shipped" | "experimental" | "ongoing";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectLinks {
  website?: string;
  github?: string;
  googlePlay?: string;
}

export interface ProjectStats {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  year?: string;
  status: ProjectStatus;
  technologies: string[];
  features: string[];
  images: ProjectImage[];
  links: ProjectLinks;
  problem?: string;
  solution?: string;
  whyBuilt?: string;
  architecture?: string[];
  challenges?: string[];
  whatILearned?: string[];
  timeline?: string;
  futurePlans?: string[];
  stats?: ProjectStats[];
  role?: string;
}

export const projects: Project[] = [
  {
    slug: "akk-timesheet-manager",
    name: "AKK Timesheet Manager",
    shortDescription:
      "A production workforce platform for timesheets, attendance, leave, payroll, and vehicle tracking.",
    description:
      "A production workforce management platform built for AKK Engineering Pte. Ltd. that handles timesheets, attendance, leave, payroll/payslips, and vehicle journey tracking — available as a web app and Android app.",
    category: "production",
    featured: true,
    year: "2025–present",
    status: "active",
    role: "Builder & developer",
    technologies: [
      "React 18",
      "Vite",
      "TypeScript",
      "JavaScript/JSX",
      "Tailwind CSS",
      "Radix UI",
      "TanStack React Query",
      "React Router",
      "Supabase",
      "PostgreSQL",
      "Supabase Edge Functions",
      "Supabase Realtime",
      "Supabase Storage",
      "Capacitor",
      "Firebase Cloud Messaging",
      "face-api.js",
      "Leaflet",
      "Framer Motion",
      "jsPDF",
      "html2canvas",
      "xlsx",
    ],
    features: [
      "Worker, admin, and manager/supervisor portals",
      "QR clock-in, break management, and clock-out",
      "GPS geofencing",
      "Face ID verification",
      "Leave requests, approvals, and balances",
      "Payslip generation and payroll calculations",
      "CPF / SINDA / SDL logic",
      "Timesheet management and attendance reports",
      "Site management",
      "Vehicle journey tracking with live GPS maps",
      "Push notifications and announcements",
      "Feedback forms",
      "PDF and Excel exports",
      "Guided onboarding tours",
      "Google Play in-app updates",
      "Role-based authentication and RLS security",
    ],
    images: [
      {
        src: "/projects/timesheet-manager/portal.png",
        alt: "AKK Timesheet Manager portal selection screen with Employee, Admin, and Managers portals",
      },
      {
        src: "/projects/timesheet-manager/play-store.png",
        alt: "AKK Timesheet Manager listing on Google Play Store",
      },
    ],
    links: {
      website: "https://timesheet-manager.akk.sg",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.akk.timesheetmanager",
    },
    problem:
      "AKK Engineering had workflows involving employee working hours, shifts, breaks, leave, overtime, payslips, and other operational processes — work that needed a proper digital system, not scattered manual steps.",
    solution:
      "A full workforce platform with role-based portals, QR attendance, GPS verification, leave and payroll logic, vehicle tracking, and notifications — shipped for both web and Android.",
    whyBuilt:
      "I wanted to solve a real problem rather than build another project that only existed as a demo. What started as a timesheet project grew into a much larger workforce platform. The project taught me that real software isn't just about making features work — it has to understand the people and processes behind those features.",
    architecture: [
      "React + Vite frontend with TypeScript and Tailwind",
      "Supabase for auth, PostgreSQL database, storage, realtime, and Edge Functions",
      "Capacitor wrapper for the Android application",
      "Role-based access with Row Level Security",
      "Firebase Cloud Messaging for push notifications",
    ],
    challenges: [
      "Designing workflows that match how people actually work on site",
      "Balancing web and Android behaviour in one product",
      "Payroll and leave logic that has to be correct, not just pretty",
      "Security and role separation across worker, manager, and admin portals",
    ],
    whatILearned: [
      "Real software is about people, workflows, and reliability — not only UI",
      "Production apps need careful auth, data rules, and ongoing iteration",
      "Shipping to Google Play changes how you think about updates and stability",
      "Small ideas can grow into much larger systems when they solve real problems",
    ],
    timeline:
      "Development began around December 25, 2025 and has continued actively since.",
    futurePlans: [
      "Keep refining based on real usage",
      "Improve reporting and operational workflows",
      "Continue polishing the Android experience",
    ],
    stats: [
      { label: "Page files", value: "25" },
      { label: "Components", value: "38" },
      { label: "Library modules", value: "35" },
      { label: "Database tables", value: "33" },
      { label: "Migrations", value: "22" },
      { label: "Edge Functions", value: "3" },
      { label: "Git commits", value: "183" },
      { label: "Platforms", value: "Web + Android" },
    ],
  },
  {
    slug: "akk-material-tracker",
    name: "AKK Material Tracker",
    shortDescription:
      "A material request, approval, issuing, and returns workflow for AKK Engineering.",
    description:
      "A material management and tracking system designed for AKK Engineering. Users can request materials through a structured workflow for requests, approvals, issuing, and returns — making material movement easier to track.",
    category: "production",
    featured: true,
    status: "active",
    role: "Builder & developer",
    technologies: [],
    features: [
      "Worker request portal",
      "Admin portal for approvals and inventory oversight",
      "Material request workflow",
      "Approvals and declines",
      "Issuing and returns tracking",
      "Request history",
    ],
    images: [
      {
        src: "/projects/material-tracker/portal.png",
        alt: "AKK Material Tracking System portal with Worker Access and Admin Access",
      },
    ],
    links: {
      website: "https://material-tracker.akk.sg",
    },
    problem:
      "In an engineering environment, materials can pass between different people and projects. Keeping track of requests, approvals, issuing, and returns through scattered or manual records makes that harder than it should be.",
    solution:
      "A centralised digital workflow with separate worker and admin portals so it's clearer what was requested, who requested it, what was approved, and what happened afterwards.",
    whyBuilt:
      "I created Material Tracker to solve a practical problem: keeping track of materials as they move through requests, approvals, issuing and returns. It represents the kind of software I enjoy building most — software that solves a real problem behind the scenes.",
    whatILearned: [
      "Operational tools succeed when the workflow is clear",
      "Role-based portals keep complex processes understandable",
      "Useful software doesn't have to be flashy to matter",
    ],
    futurePlans: [
      "Continue improving the request and inventory experience",
      "Expand reporting and tracking clarity as needed",
    ],
  },
  {
    slug: "akk-engineering-website",
    name: "AKK Engineering Website",
    shortDescription:
      "Part of the AKK Engineering digital ecosystem connecting the company's online presence and tools.",
    description:
      "The AKK Engineering digital presence at akk.sg — part of a wider ecosystem that connects the company site with operational tools like Timesheet Manager and Material Tracker.",
    category: "ecosystem",
    featured: true,
    status: "shipped",
    role: "Part of the AKK Engineering digital ecosystem",
    technologies: [],
    features: [
      "Company digital presence",
      "Links into Timesheet Manager and Material Tracker",
      "Part of a connected software ecosystem",
    ],
    images: [
      {
        src: "/projects/akk-engineering/hero.jpg",
        alt: "AKK Engineering Pte. Ltd. website homepage",
      },
    ],
    links: {
      website: "https://akk.sg",
    },
    whyBuilt:
      "This sits alongside the operational tools I build for AKK Engineering. Together, the company site, Timesheet Manager, and Material Tracker form a coherent digital ecosystem rather than disconnected projects.",
    solution:
      "A connected story: AKK Engineering → Timesheet Manager → Material Tracker — software that supports a real organisation.",
  },
  {
    slug: "google-play-applications",
    name: "Google Play Applications",
    shortDescription:
      "Published Android applications, starting with AKK Timesheet Manager on Google Play.",
    description:
      "Mobile applications published on Google Play. The first production release is AKK Timesheet Manager (com.akk.timesheetmanager), bringing the workforce platform to Android.",
    category: "mobile",
    featured: true,
    status: "shipped",
    role: "Developer",
    technologies: ["Capacitor", "Android", "React", "Firebase Cloud Messaging"],
    features: [
      "Published Android distribution",
      "In-app update support for Timesheet Manager",
      "Mobile access to production workforce workflows",
    ],
    images: [
      {
        src: "/projects/timesheet-manager/play-store.png",
        alt: "AKK Timesheet Manager on Google Play",
      },
    ],
    links: {
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.akk.timesheetmanager",
      website: "https://timesheet-manager.akk.sg",
    },
    whyBuilt:
      "Real tools need to meet people where they work. Publishing on Google Play meant the Timesheet Manager could live on phones, not only in a browser.",
  },
  {
    slug: "personal-experimental-projects",
    name: "Personal / Experimental Projects",
    shortDescription:
      "Side builds, experiments, and ideas I'm testing — some useful, some just curious.",
    description:
      "A growing collection of personal experiments across web, AI, automation, and product ideas. Not every experiment becomes a product — and that's the point.",
    category: "experiment",
    featured: true,
    status: "experimental",
    technologies: ["React", "Python", "AI tools", "Web technologies"],
    features: [
      "Portfolio experiments",
      "AI workflow experiments",
      "Automation ideas",
      "Small product prototypes",
    ],
    images: [],
    links: {
      github: "https://github.com/Abinav0405",
    },
    whyBuilt:
      "I like taking an idea and actually trying it. Experiments help me learn faster than tutorials alone.",
  },
  {
    slug: "games-interactive-projects",
    name: "Games / Interactive Projects",
    shortDescription:
      "Interactive experiments and games, including Block Croser — a Pygame platformer.",
    description:
      "Games and interactive experiences built for fun and learning. Includes Block Croser, a Pygame platformer experiment.",
    category: "game",
    featured: true,
    status: "experimental",
    technologies: ["Python", "Pygame"],
    features: [
      "Block Croser — Pygame platformer experiment",
      "Interactive gameplay experiments",
      "Learning through playable prototypes",
    ],
    images: [],
    links: {},
    whyBuilt:
      "Games are a fun way to learn logic, interaction, and how software feels when someone is actually using it.",
  },
];

export const experiments = [
  {
    name: "Block Croser",
    description: "A Pygame platformer experiment — built to learn by making something playable.",
    tags: ["Python", "Pygame", "Game"],
    status: "Experimental",
  },
  {
    name: "Web & UI experiments",
    description: "Small interfaces, motion studies, and layout ideas I'm testing as I learn.",
    tags: ["React", "CSS", "Motion"],
    status: "Ongoing",
  },
  {
    name: "AI workflow experiments",
    description: "Trying AI coding tools, APIs, and automation to understand how to build with AI — not just use it.",
    tags: ["AI", "Automation"],
    status: "Exploring",
  },
  {
    name: "Three.js / WebGL sketches",
    description: "Occasional 3D and visual experiments when I want to push the interface further.",
    tags: ["Three.js", "WebGL"],
    status: "Exploring",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
