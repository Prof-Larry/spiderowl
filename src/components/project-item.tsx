"use client";

import Link from "next/link";
import { useInView } from "@/lib/use-in-view";

type ProjectItemProps = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  delay?: number;
};

export function ProjectItem({
  title,
  description,
  tech,
  href,
  delay = 0,
}: ProjectItemProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group mx-auto max-w-3xl py-24 transition-[opacity,transform] duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>

      <p className="mt-4 text-muted-foreground">{description}</p>

      <ul className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
        {tech.map((item) => (
          <li key={item} className="rounded-full border px-3 py-1">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href={href}
          className="text-sm font-medium underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          View project →
        </Link>
      </div>
    </section>
  );
}
