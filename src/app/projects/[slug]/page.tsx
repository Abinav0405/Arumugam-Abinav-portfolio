import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { projects, getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const title = `${project.name} — Project by ${siteConfig.name}`;
  const description = project.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: project.images[0]
        ? [{ url: project.images[0].src, alt: project.images[0].alt }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const softwareLd =
    project.category === "production" || project.category === "mobile"
      ? {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: project.name,
          description: project.description,
          applicationCategory: "BusinessApplication",
          operatingSystem:
            project.links.googlePlay && project.links.website
              ? "Web, Android"
              : project.links.googlePlay
                ? "Android"
                : "Web",
          url: project.links.website ?? project.links.googlePlay,
          author: {
            "@type": "Person",
            name: siteConfig.name,
          },
        }
      : null;

  return (
    <article className="section-pad pt-28 pb-24 sm:pt-32">
      {softwareLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
        />
      ) : null}

      <div className="container-wide">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            <ArrowLeft size={14} /> Back to projects
          </Link>

          <p className="mt-8 text-xs tracking-[0.18em] text-accent uppercase">
            Case study
            {project.year ? ` · ${project.year}` : ""}
            {project.status ? ` · ${project.status}` : ""}
          </p>
          <h1 className="display mt-4 max-w-4xl text-5xl text-foreground sm:text-6xl md:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-muted sm:text-xl">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.website ? (
              <Button href={project.links.website} external>
                Visit website <ExternalLink size={14} />
              </Button>
            ) : null}
            {project.links.googlePlay ? (
              <Button href={project.links.googlePlay} external variant="secondary">
                Google Play <ExternalLink size={14} />
              </Button>
            ) : null}
            {project.links.github ? (
              <Button href={project.links.github} external variant="secondary">
                GitHub <ExternalLink size={14} />
              </Button>
            ) : null}
          </div>
        </Reveal>

        {project.images[0] ? (
          <Reveal delay={0.08}>
            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[28px] border border-border shadow-[var(--shadow)]">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                priority
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
          </Reveal>
        ) : null}

        {project.stats && project.stats.length > 0 ? (
          <Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface px-4 py-5"
                >
                  <p className="display text-3xl text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ) : null}

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-10">
            {project.problem ? (
              <Reveal>
                <section>
                  <h2 className="display text-3xl text-foreground">The problem</h2>
                  <p className="mt-4 leading-relaxed text-muted">{project.problem}</p>
                </section>
              </Reveal>
            ) : null}
            {project.solution ? (
              <Reveal>
                <section>
                  <h2 className="display text-3xl text-foreground">The idea</h2>
                  <p className="mt-4 leading-relaxed text-muted">{project.solution}</p>
                </section>
              </Reveal>
            ) : null}
            {project.whyBuilt ? (
              <Reveal>
                <section>
                  <h2 className="display text-3xl text-foreground">Why I built it</h2>
                  <p className="mt-4 leading-relaxed text-muted">{project.whyBuilt}</p>
                </section>
              </Reveal>
            ) : null}
          </div>

          <div className="space-y-10">
            {project.features.length > 0 ? (
              <Reveal>
                <section className="rounded-[24px] border border-border bg-surface p-6 sm:p-8">
                  <h2 className="display text-3xl text-foreground">Features</h2>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-2 text-sm text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ) : null}

            {project.technologies.length > 0 ? (
              <Reveal>
                <section>
                  <h2 className="display text-3xl text-foreground">Technology</h2>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ) : null}
          </div>
        </div>

        {project.architecture && project.architecture.length > 0 ? (
          <Reveal>
            <section className="mt-16">
              <h2 className="display text-3xl text-foreground">Architecture</h2>
              <ol className="mt-6 grid gap-3 md:grid-cols-2">
                {project.architecture.map((item, index) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-border bg-surface p-5"
                  >
                    <p className="text-xs tracking-[0.14em] text-accent uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-muted">{item}</p>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
        ) : null}

        {project.images.length > 1 ? (
          <Reveal>
            <section className="mt-16">
              <h2 className="display text-3xl text-foreground">Screenshots</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {project.images.slice(1).map((image) => (
                  <div
                    key={image.src}
                    className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        ) : null}

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {project.challenges && project.challenges.length > 0 ? (
            <Reveal>
              <section className="rounded-[24px] border border-border bg-surface p-6 sm:p-8">
                <h2 className="display text-3xl text-foreground">Challenges</h2>
                <ul className="mt-5 space-y-3">
                  {project.challenges.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ) : null}

          {project.whatILearned && project.whatILearned.length > 0 ? (
            <Reveal>
              <section className="rounded-[24px] border border-border bg-surface p-6 sm:p-8">
                <h2 className="display text-3xl text-foreground">What I learned</h2>
                <ul className="mt-5 space-y-3">
                  {project.whatILearned.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ) : null}
        </div>

        {(project.timeline || project.futurePlans) && (
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {project.timeline ? (
              <Reveal>
                <section>
                  <h2 className="display text-3xl text-foreground">Timeline</h2>
                  <p className="mt-4 text-muted">{project.timeline}</p>
                </section>
              </Reveal>
            ) : null}
            {project.futurePlans && project.futurePlans.length > 0 ? (
              <Reveal>
                <section>
                  <h2 className="display text-3xl text-foreground">Future plans</h2>
                  <ul className="mt-4 space-y-2">
                    {project.futurePlans.map((item) => (
                      <li key={item} className="text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ) : null}
          </div>
        )}

        <Reveal>
          <div className="mt-20 rounded-[28px] border border-border bg-surface px-6 py-10 text-center sm:px-10">
            <p className="display text-3xl text-foreground sm:text-4xl">
              Want to talk about this project?
            </p>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              I&apos;m {siteConfig.name} — a student developer in Singapore who
              likes turning ideas into real products.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/#contact">Get in touch</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
