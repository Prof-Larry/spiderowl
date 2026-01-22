export default function WindalsProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <h1 className="text-4xl font-semibold tracking-tight">
        PDI Inspection – Windals Precision
      </h1>

      <p className="mt-6 text-muted-foreground">
        A production-grade web application built to support inventory tracking
        and quality inspection workflows in a manufacturing environment.
      </p>

      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">Problem</h2>
        <p className="text-muted-foreground">
          Manual inspection processes made it difficult to consistently track
          product defects, inventory movement, and inspection outcomes across
          multiple product lines.
        </p>

        <h2 className="text-2xl font-semibold">Solution</h2>
        <p className="text-muted-foreground">
          I designed and developed a full-stack application that centralized
          inspection data, improved traceability, and reduced human error
          through structured workflows and role-based access.
        </p>

        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <ul className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {["React", "Node.js", "Express", "MongoDB"].map((tech) => (
            <li key={tech} className="rounded-full border px-3 py-1">
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
