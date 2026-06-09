"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Projeler", href: "#projeler" },
  { label: "Blog", href: "#blog" },
  { label: "İletişim", href: "#iletisim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-background/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <svg width="34" height="34" viewBox="0 0 40 40" className="text-foreground" aria-hidden>
            <path
              d="M4 32 V8 L20 24 L36 8 V32"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-display text-base tracking-[-0.02em] md:text-lg">
            MERİDYEN FİLM
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-all hover:text-foreground border-b-2 border-transparent hover:border-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#iletisim"
          className="group inline-flex items-center gap-2 rounded-full lime-pill px-5 py-2.5 text-sm font-semibold shadow-[0_10px_30px_-12px_oklch(0.92_0.22_130/0.8)] transition-transform hover:scale-[1.03]"
        >
          Şimdi Başvur
          <span className="grid h-6 w-6 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
            ↗
          </span>
        </a>
      </div>
    </header>
  );
}
