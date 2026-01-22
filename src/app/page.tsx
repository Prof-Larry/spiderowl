import { PianoVisual } from "@/components/piano-visual";
import { ProjectItem } from "@/components/project-item";

export default function Home() {
  return (
    <main className="w-full">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen bg-neutral-950 text-neutral-100 overflow-hidden">
        {/* Hero text */}
        <div className="relative z-10 flex min-h-screen items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <p className="text-sm tracking-wide text-neutral-400">
              Music · Code · Experience
            </p>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              I design and build
              <br />
              expressive web experiences
            </h1>

            <p className="mt-6 text-neutral-400">
              Inspired by music, rhythm, and structure.
            </p>
          </div>
        </div>

        {/* Piano visual (overlay, does not affect layout) */}
        <PianoVisual />

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-wide text-neutral-400">
          Scroll ↓
        </div>
      </section>

      {/* Transition spacer between hero and projects */}
      <div className="h-24 bg-background" />

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="bg-background text-foreground">
        {/* Section header */}
        <div className="mx-auto max-w-3xl px-6 pt-32 pb-8">
          <h2 className="text-3xl font-semibold tracking-tight">
            Selected Work
          </h2>
          <p className="mt-3 text-muted-foreground">
            A few projects where I explored structure, systems, and experience.
          </p>
        </div>

        <ProjectItem
          title="PDI Inspection – Windals Precision"
          description="Designed and developed a full-stack web application to streamline inventory tracking and quality inspection workflows in a manufacturing environment, improving fault detection across 40+ products."
          tech={["React", "Node.js", "Express", "MongoDB"]}
          href="/projects/windals"
          delay={0}
        />

        <ProjectItem
          title="E-commerce Order Management System"
          description="Built a backend-heavy system to manage orders, payments, and inventory synchronization, with a focus on reliability, data integrity, and scalable APIs."
          tech={["Node.js", "Express", "PostgreSQL", "REST APIs"]}
          href="/projects/order-management"
          delay={120}
        />
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-6 py-32">
          <h2 className="text-3xl font-semibold tracking-tight">About</h2>

          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I’m a software engineer who enjoys building systems that feel
              deliberate, calm, and intuitive. I care about structure—not just
              in code, but in how an experience unfolds over time.
            </p>

            <p>
              My interest in music strongly influences how I approach
              development. Rhythm, pacing, and repetition matter just as much in
              interfaces as they do in compositions. A good product, to me,
              feels balanced rather than loud.
            </p>

            <p>
              I enjoy working across the stack, thinking through edge cases,
              performance, and long-term maintainability while keeping the user
              experience simple and focused.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-6 py-32">
          <h2 className="text-3xl font-semibold tracking-tight">
            Get in touch
          </h2>

          <p className="mt-6 text-muted-foreground">
            If you’d like to discuss a project, collaboration, or role, feel
            free to reach out. I’m always open to thoughtful conversations.
          </p>

          <div className="mt-10 flex flex-col gap-4 text-sm">
            <a
              href="mailto:ujjwalshirpurkar1@gmail.com"
              className="w-fit underline-offset-4 hover:underline"
            >
              ujjwalshirpurkar1@gmail.com
            </a>

            <a
              href="https://github.com/Prof-Larry"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit underline-offset-4 hover:underline"
            >
              GitHub →
            </a>

            <a
              href="https://www.linkedin.com/in/ujwal-shirpurkar-04840617b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit underline-offset-4 hover:underline"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
