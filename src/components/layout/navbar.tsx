import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar({ transparent = false }: { transparent?: boolean }) {
  return (
    <header
      className={`${
        transparent ? "absolute inset-x-0 top-0 z-50" : "border-b"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold">
          "Logo"
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="#projects" className="text-sm text-muted-foreground">
            Projects
          </Link>
          <Link href="#about" className="text-sm text-muted-foreground">
            About
          </Link>
          <Link href="#contact" className="text-sm text-muted-foreground">
            Contact
          </Link>

          <Button size="sm">Resume</Button>
        </nav>
      </div>
    </header>
  );
}
