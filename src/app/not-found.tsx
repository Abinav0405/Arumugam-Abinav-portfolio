import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="section-pad flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <p className="text-sm tracking-[0.18em] text-accent uppercase">404</p>
      <h1 className="display mt-4 text-5xl text-foreground sm:text-6xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        That route doesn&apos;t exist yet. Maybe it&apos;s still being built.
      </p>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
      <Link href="/#projects" className="mt-4 text-sm text-muted hover:text-accent">
        Or browse projects
      </Link>
    </div>
  );
}
