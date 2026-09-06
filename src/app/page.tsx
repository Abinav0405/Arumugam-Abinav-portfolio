import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { BeyondSection } from "@/components/sections/beyond";
import { ProjectsSection } from "@/components/sections/projects";
import { AppsSection } from "@/components/sections/apps";
import { JourneySection } from "@/components/sections/journey";
import { StudentSection } from "@/components/sections/student";
import { SkillsSection } from "@/components/sections/skills";
import { AISection } from "@/components/sections/ai";
import { EntrepreneurshipSection } from "@/components/sections/entrepreneurship";
import { ExperimentsSection } from "@/components/sections/experiments";
import { ContactSection } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BeyondSection />
      <ProjectsSection />
      <AppsSection />
      <JourneySection />
      <StudentSection />
      <SkillsSection />
      <AISection />
      <EntrepreneurshipSection />
      <ExperimentsSection />
      <ContactSection />
    </>
  );
}
