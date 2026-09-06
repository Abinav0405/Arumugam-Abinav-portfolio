import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/sections/project-card";
import { getFeaturedProjects } from "@/data/projects";

export function ProjectsSection() {
  const projects = getFeaturedProjects();

  return (
    <section
      id="projects"
      className="section-pad py-24 sm:py-32"
      aria-labelledby="projects-title"
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow="Projects"
            title="Things I've Built"
            description="Some of the ideas I've turned into real software."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
