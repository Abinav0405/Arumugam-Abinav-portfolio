import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { interests } from "@/data/skills";

export function BeyondSection() {
  return (
    <section
      id="beyond"
      className="section-pad py-24 sm:py-28"
      aria-labelledby="beyond-title"
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="beyond-title"
            eyebrow="Personality"
            title="Beyond development"
            description="I enjoy experimenting with AI coding tools, automation, web and mobile development, 3D/WebGL, SaaS ideas, and business ideas — usually by building something small and seeing where it goes."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="group h-full rounded-[22px] border border-border bg-surface p-6 transition duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow)]">
                <h3 className="display text-2xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
