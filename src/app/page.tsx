import { PianoVisual } from "@/components/piano-visual";

export default function Home() {
  return (
    <section className="relative h-screen overflow-hidden bg-neutral-950 text-neutral-100">
      {/* Text */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-2xl px-6">
          <p className="text-sm tracking-wide text-neutral-400">
            Music · Code · Experience
          </p>

          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            I design and build
            <br />
            expressive web experiences
          </h1>

          <p className="mt-6 text-neutral-400">
            Inspired by music, rhythm, and structure.
          </p>
        </div>
      </div>

      {/* Piano */}
      <PianoVisual />
    </section>
  );
}
