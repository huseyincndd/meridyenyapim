"use client";

import Link from "next/link";
import { useState } from "react";

function LogoIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <g transform="translate(11 11)">
        {[45, 135, -45, -135].map((angle) => (
          <rect
            key={angle}
            x="-2.25"
            y="-9"
            width="4.5"
            height="9"
            rx="2.25"
            fill="#A3FF33"
            transform={`rotate(${angle})`}
          />
        ))}
      </g>
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#projeler", label: "Projeler" },
  { href: "#blog", label: "Blog" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-transparent">
      {/* Mobile */}
      <div className="relative mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between px-6 py-5 md:hidden">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoIcon />
          <span className="text-[17px] font-bold tracking-[-0.02em] text-[#1A1A1A]">
            MERİDYEN FİLM
          </span>
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
        >
          <span className="flex flex-col items-end gap-[5px]">
            <span
              className={`block h-[2px] w-4 rounded-full bg-[#1A1A1A] transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#1A1A1A] transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-[2px] w-4 rounded-full bg-[#1A1A1A] transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-t border-[#e8e8e8] bg-white/95 px-6 py-6 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-md">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-[16px] font-medium text-[#333333] transition-colors hover:bg-[#f5f5f5]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex w-full items-center justify-center rounded-full bg-[#1A1A1A] px-6 py-3.5 text-[15px] font-medium text-white"
            >
              Şimdi Başvur
            </Link>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="mx-auto hidden min-h-[108px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-10 py-8 md:grid lg:px-16 lg:py-9">
        <Link href="/" className="flex items-center gap-2.5 justify-self-start">
          <LogoIcon />
          <span className="text-[17px] font-bold tracking-[-0.02em] text-[#1A1A1A]">
            MERİDYEN FİLM
          </span>
        </Link>

        <nav className="flex items-center gap-10 justify-self-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-[#333333] transition-opacity hover:opacity-65"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-7 justify-self-end">
          <p className="whitespace-nowrap text-[14px]">
            <span className="text-[#999999]">E-posta: </span>
            <span className="font-medium text-[#1A1A1A]">
              info@meridyenfilm.com
            </span>
          </p>
          <Link
            href="#contact"
            className="shrink-0 rounded-full bg-[#1A1A1A] px-7 py-2.5 text-[14px] font-medium leading-none text-white transition-colors hover:bg-[#2D2D2D]"
          >
            Şimdi Başvur
          </Link>
        </div>
      </div>
    </header>
  );
}
