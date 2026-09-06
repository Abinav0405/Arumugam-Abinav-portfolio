import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export function StudentSection() {
  return (
    <section
      id="student"
      className="section-pad py-20 sm:py-24"
      aria-labelledby="student-title"
    >
      <div className="container-narrow">
        <Reveal>
          <div className="rounded-[28px] border border-border bg-surface px-6 py-10 text-center sm:px-10">
            <SectionHeading
              id="student-title"
              align="center"
              eyebrow="Student identity"
              title="Still learning. Still building."
              description={`${siteConfig.school.name} · ${siteConfig.school.location}`}
            />
            <p className="mx-auto mt-6 max-w-2xl text-muted">
              I balance school with software development and personal projects.
              Being a student while shipping real applications is part of the
              story — not a side note.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
