"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <Link href="/" className="flex items-center gap-2.5">
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
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-all hover:text-foreground border-b-2 border-transparent hover:border-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/iletisim"
            className="hidden lg:group lg:inline-flex items-center gap-2 rounded-full lime-pill px-5 py-2.5 text-sm font-semibold shadow-[0_10px_30px_-12px_oklch(0.92_0.22_130/0.8)] transition-transform hover:scale-[1.03]"
          >
            Şimdi Başvur
            <span className="grid h-6 w-6 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
              ↗
            </span>
          </Link>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground/90 py-2 border-b border-border/50"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 group inline-flex items-center justify-center gap-2 rounded-full lime-pill px-5 py-3 text-sm font-semibold text-center w-full shadow-[0_10px_30px_-12px_oklch(0.92_0.22_130/0.8)] transition-transform"
          >
            Şimdi Başvur
          </Link>
        </div>
      )}
    </header>
  );
}
