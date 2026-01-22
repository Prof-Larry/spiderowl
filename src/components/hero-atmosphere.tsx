"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export function HeroAtmosphere() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // generate ONCE on client (safe for hydration)
    const generated = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 4 + Math.random() * 8,
      duration: 25 + Math.random() * 20,
      delay: Math.random() * 15,
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10%] rounded-full bg-white/10"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animation: `hero-float ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
