"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 });
  const glowX = useSpring(x, { stiffness: 160, damping: 20 });
  const glowY = useSpring(y, { stiffness: 160, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX}px ${glowY}px, var(--accent-soft), transparent 42%)`;

  function onMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;
    x.set(px);
    y.set(py);
    const rx = ((py - rect.height / 2) / rect.height) * -6;
    const ry = ((px - rect.width / 2) / rect.width) * 6;
    rotateX.set(rx);
    rotateY.set(ry);
  }

  function onLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ delay: index * 0.06, duration: 0.65 }}
    >
      <Link
        ref={ref}
        href={`/projects/${project.slug}`}
        className={cn(
          "group relative block overflow-hidden rounded-[28px] border border-border bg-surface p-5 shadow-[var(--shadow)] transition sm:p-6",
          "hover:border-accent/35",
        )}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
          style={{ background: glow }}
          aria-hidden
        />
        <motion.div style={{ rotateX, rotateY, transformPerspective: 900 }}>
          <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface-elevated">
            {project.images[0] ? (
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent-soft via-transparent to-sky-500/10 p-6">
                <p className="display text-3xl text-foreground/80">
                  {project.name}
                </p>
              </div>
            )}
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.16em] text-accent uppercase">
                {project.category}
                {project.year ? ` · ${project.year}` : ""}
              </p>
              <h3 className="display mt-2 text-2xl text-foreground sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {project.shortDescription}
              </p>
            </div>
            <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition group-hover:border-accent group-hover:text-accent">
              <ArrowUpRight size={16} />
            </span>
          </div>

          {project.technologies.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-2 opacity-90 transition group-hover:opacity-100">
              {project.technologies.slice(0, 5).map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                >
                  {tech}
                </li>
              ))}
              {project.technologies.length > 5 ? (
                <li className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted">
                  +{project.technologies.length - 5}
                </li>
              ) : null}
            </ul>
          ) : null}
        </motion.div>
      </Link>
    </motion.div>
  );
}
