import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { experiments } from "@/data/projects";

export function ExperimentsSection() {
  return (
    <section
      id="experiments"
      className="section-pad py-24 sm:py-28"
      aria-labelledby="experiments-title"
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="experiments-title"
            eyebrow="Lab"
            title="Experiments"
            description="Not every idea needs to be a product. Some just need to exist so I can learn from them."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {experiments.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="h-full rounded-[22px] border border-border bg-surface p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="display text-2xl text-foreground">{item.name}</h3>
                  <span className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
