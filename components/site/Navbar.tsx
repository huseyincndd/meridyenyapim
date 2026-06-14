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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center ${
        scrolled
          ? "top-4 w-[calc(100%-2rem)] max-w-5xl rounded-[2rem] backdrop-blur-2xl bg-background/70 border border-foreground/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] py-2.5 px-4 md:px-6"
          : "top-0 w-full max-w-7xl rounded-none bg-transparent border border-transparent py-6 px-6 md:px-8"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="transition-transform duration-500 group-hover:rotate-180">
            <svg viewBox="0 0 22 22" width="28" height="28" aria-hidden>
              <path d="M 5.579 0 L 0.079 0 L 0.079 5.5 C 0.079 8.301 2.172 10.613 4.88 10.956 C 2.134 11.264 0 13.594 0 16.422 L 0 21.922 L 5.5 21.922 C 8.301 21.922 10.613 19.828 10.956 17.12 C 11.264 19.866 13.594 22 16.422 22 L 21.922 22 L 21.922 16.5 C 21.922 13.699 19.828 11.387 17.12 11.044 C 19.866 10.736 22 8.406 22 5.579 L 22 0.079 L 16.5 0.079 C 13.699 0.079 11.387 2.172 11.044 4.88 C 10.736 2.134 8.406 0 5.579 0 Z" fill="var(--color-primary)"></path>
            </svg>
          </div>
          <span className="font-display text-base tracking-[-0.02em] md:text-lg">
            MERİDYEN FİLM
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex bg-foreground/5 rounded-full px-2 py-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-all hover:text-foreground hover:bg-foreground/10 px-4 py-2 rounded-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/iletisim"
            className={`hidden lg:group lg:inline-flex items-center gap-2 rounded-full lime-pill text-sm font-semibold transition-all duration-300 ${
              scrolled ? "px-5 py-2.5" : "px-6 py-3"
            } hover:scale-[1.03]`}
          >
            Şimdi Başvur
            <span className="grid h-6 w-6 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
              ↗
            </span>
          </Link>

          <button
            className="lg:hidden relative flex h-11 w-11 items-center justify-center rounded-full border border-border/50 bg-foreground/5 transition-colors hover:bg-foreground/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span
                className={`h-[2px] w-full rounded-full bg-foreground transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] rounded-full bg-foreground transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "w-0 opacity-0" : "w-full opacity-100"
                }`}
              />
              <span
                className={`h-[2px] w-full rounded-full bg-foreground transition-all duration-300 ease-out ${
                  mobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute left-0 right-0 overflow-hidden bg-background/98 backdrop-blur-3xl border-border/50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        } ${
          scrolled ? "top-[calc(100%+0.5rem)] rounded-[2.5rem] border shadow-2xl mx-0" : "top-full border-b rounded-b-[2.5rem] shadow-xl"
        }`}
      >
        <div className="p-6 md:p-8 flex flex-col">
          <div className="flex flex-col mb-8">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between py-4 text-2xl font-display tracking-[-0.02em] text-foreground/80 transition-all duration-300 hover:text-foreground hover:translate-x-2 border-b border-foreground/5 last:border-0"
              >
                <span>{l.label}</span>
                <span className="text-foreground/20 transition-colors duration-300 group-hover:text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
          
          <div className="rounded-3xl bg-foreground/5 p-6 flex flex-col items-center gap-3 text-center border border-foreground/5">
            <div className="text-sm font-medium text-foreground/60 uppercase tracking-widest">Yeni Bir Proje Mi?</div>
            <Link
              href="/iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full lime-pill px-6 py-4 text-base font-semibold w-full shadow-[0_10px_40px_-10px_oklch(0.92_0.22_130/0.7)] transition-transform hover:scale-[1.02]"
            >
              Hemen Başvur
              <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
