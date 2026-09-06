import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { apps } from "@/data/apps";

export function AppsSection() {
  return (
    <section id="apps" className="section-pad py-24 sm:py-32" aria-labelledby="apps-title">
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="apps-title"
            eyebrow="Apps"
            title="Published on Google Play"
            description="Android applications I've shipped. More will land here as they go live."
          />
        </Reveal>

        <div className="mt-12 grid gap-6">
          {apps.map((app, index) => (
            <Reveal key={app.id} delay={index * 0.05}>
              <article className="overflow-hidden rounded-[28px] border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                        {app.platform} · {app.status}
                      </p>
                      {app.version ? (
                        <p className="text-xs text-muted">v{app.version}</p>
                      ) : null}
                    </div>
                    <h3 className="display mt-4 text-3xl text-foreground sm:text-4xl">
                      {app.name}
                    </h3>
                    <p className="mt-4 max-w-2xl text-muted">{app.description}</p>

                    {app.whyBuilt ? (
                      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
                        <span className="text-foreground">Why I built it: </span>
                        {app.whyBuilt}
                      </p>
                    ) : null}

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {app.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {app.googlePlayUrl ? (
                      <div className="mt-8">
                        <Button href={app.googlePlayUrl} external variant="secondary">
                          View on Google Play <ExternalLink size={14} />
                        </Button>
                      </div>
                    ) : null}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {app.screenshots.map((shot) => (
                      <div
                        key={shot.src}
                        className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border"
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
