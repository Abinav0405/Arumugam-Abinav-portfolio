export interface AppEntry {
  id: string;
  name: string;
  icon?: string;
  description: string;
  shortDescription: string;
  platform: "Android" | "iOS" | "Web";
  googlePlayUrl?: string;
  packageId?: string;
  version?: string;
  versionCode?: string;
  screenshots: { src: string; alt: string }[];
  technologies: string[];
  features: string[];
  whyBuilt?: string;
  developmentStory?: string;
  role?: string;
  year?: string;
  status: "published" | "in-development" | "coming-soon";
}

/**
 * Add published Google Play apps here.
 * Keep structure ready — do not invent apps, ratings, or download counts.
 */
export const apps: AppEntry[] = [
  {
    id: "akk-timesheet-manager",
    name: "AKK Timesheet Manager",
    icon: "/projects/timesheet-manager/play-store.png",
    shortDescription:
      "Workforce management on Android — timesheets, attendance, leave, and more.",
    description:
      "The Android release of AKK Timesheet Manager, a production workforce platform for AKK Engineering Pte. Ltd.",
    platform: "Android",
    googlePlayUrl:
      "https://play.google.com/store/apps/details?id=com.akk.timesheetmanager",
    packageId: "com.akk.timesheetmanager",
    version: "2.1.3",
    versionCode: "83",
    screenshots: [
      {
        src: "/projects/timesheet-manager/portal.png",
        alt: "AKK Timesheet Manager portal selection interface",
      },
      {
        src: "/projects/timesheet-manager/play-store.png",
        alt: "AKK Timesheet Manager Google Play listing",
      },
    ],
    technologies: [
      "React",
      "Capacitor",
      "Android",
      "Supabase",
      "Firebase Cloud Messaging",
    ],
    features: [
      "Employee, admin, and manager portals",
      "QR-based attendance flows",
      "Push notifications",
      "In-app update support",
    ],
    whyBuilt:
      "So workers and managers can use the system on their phones — not only on desktop.",
    developmentStory:
      "The Android app is built with Capacitor around the same product experience as the web platform, so updates can ship across both surfaces.",
    role: "Developer",
    year: "2025–present",
    status: "published",
  },
];
