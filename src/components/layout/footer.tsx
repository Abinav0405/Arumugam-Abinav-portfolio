import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon } from "@/components/ui/github-icon";
import { siteConfig } from "@/data/site";

const footerLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#apps", label: "Apps" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="section-pad border-t border-border pb-10 pt-16">
      <div className="container-wide grid gap-10 md:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <p className="display text-3xl text-foreground sm:text-4xl">
            {siteConfig.name.toUpperCase()}
          </p>
          <p className="mt-3 text-muted">Student. Developer. Builder.</p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent"
            aria-label="Email Abinav"
          >
            <Mail size={16} />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent"
            aria-label="GitHub profile"
          >
            <GitHubIcon width={16} height={16} />
          </a>
        </div>
      </div>

      <div className="container-wide mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>Built by Abinav.</p>
      </div>
    </footer>
  );
}
