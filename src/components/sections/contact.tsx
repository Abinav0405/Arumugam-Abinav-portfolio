"use client";

import { FormEvent, useState } from "react";
import { Mail, Send } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/ui/github-icon";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="section-pad py-24 sm:py-32"
      aria-labelledby="contact-title"
    >
      <div className="container-wide grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionHeading
            id="contact-title"
            eyebrow="Contact"
            title="Let's build something."
            description="Got an idea, a question, or just want to say hi? Reach out — I'm always curious."
          />

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-muted transition hover:border-accent hover:text-accent"
            >
              <GitHubIcon width={16} height={16} />
              github.com/{siteConfig.social.githubUsername}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-[28px] border border-border bg-surface p-6 shadow-[var(--shadow)] sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm text-muted">
                Name
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent"
                  autoComplete="name"
                />
              </label>
              <label className="block text-sm text-muted">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent"
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="mt-4 block text-sm text-muted">
              Message
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full resize-y rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <div className="mt-6">
              <Button type="submit">
                Send message <Send size={14} />
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted">
              Opens your email app with the message ready to send to{" "}
              {siteConfig.email}.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
