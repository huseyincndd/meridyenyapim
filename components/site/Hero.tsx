"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 40, damping: 15 }
  },
};

const leftPanel: Variants = {
  hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 40, damping: 15, delay: 0.5 }
  },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background">
      <motion.div
        initial={{ scale: 1.15, opacity: 0, filter: "blur(20px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://framerusercontent.com/images/LPWGL7rFF0pjhd6IZOMCT5H39XY.jpg')" }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 md:px-12 pb-40 pt-40 lg:pb-56 lg:pt-56 lg:grid-cols-[320px_1fr] lg:gap-20">
        {/* Left identity */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={leftPanel}
          className="flex flex-col gap-8 lg:mt-32"
        >
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/meridyenfilm/" target="_blank" rel="noopener noreferrer" className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-background hover:scale-105 transition-transform block">
              <img
                src="https://villaqrmenu.b-cdn.net/meridyenfilmyapim/meridyen-film-yapim-logo.webp"
                alt="Meridyen Film Yapım stüdyosu"
                className="h-full w-full object-cover"
              />
            </a>
            <div>
              <div className="font-display text-lg">Meridyen Film Yapım</div>
              <div className="text-sm text-muted-foreground">
                Sinema · Dizi · Reklam Filmi
              </div>
            </div>
          </div>
          <div className="hidden text-sm text-muted-foreground lg:block">
            (2009 — BUGÜN) · İSTANBUL
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-14"
        >
          <motion.div variants={item}>
            <div className="inline-flex w-fit items-center gap-2 text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-foreground/80">
                Özgün Hikâyeler, Güçlü Yapımlar
              </span>
            </div>
          </motion.div>

          <motion.h1 variants={item} className="font-display font-medium text-[32px] sm:text-[44px] leading-[1.35] md:leading-[1.15] tracking-[-0.02em] text-foreground md:text-6xl lg:text-[76px]">
            <span className="inline-flex items-center rounded-full bg-card px-4 md:px-5 py-1 align-middle text-[0.75em] md:text-[0.9em] shadow-sm ring-1 ring-border">
              Meridyen Film Yapım
            </span>
            <span className="hidden md:inline"> | </span>
            <br className="md:hidden" />
            <span className="md:hidden mt-2 inline-block" />
            İstanbul Merkezli{" "}
            <span className="inline-flex items-center rounded-full ink-pill px-3 md:px-5 py-1 align-middle text-[0.8em] md:text-[0.9em]">
              Dizi
            </span>
            , Sinema ve{" "}
            <span className="inline-flex items-center rounded-full bg-primary text-foreground px-3 md:px-5 py-1 align-middle text-[0.8em] md:text-[0.9em] shadow-sm">
              Reklam
            </span>{" "}
            Film Yapım Şirketi
          </motion.h1>

          <motion.p variants={item} className="max-w-3xl text-sm sm:text-base leading-relaxed text-muted-foreground md:text-lg">
            Meridyen Film Yapım; 2009 yılından bu yana film yapımı, dizi prodüksiyonu, reklam filmi üretimi, dijital içerik geliştirme ve uluslararası ortak yapım alanlarında faaliyet gösteren İstanbul merkezli bağımsız bir film yapım şirketidir.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-6">
            <Link
              href="/iletisim"
              className="group inline-flex items-center gap-4 rounded-full lime-pill px-8 py-4 text-base font-semibold shadow-[0_10px_40px_-10px_oklch(0.92_0.22_130/0.7)] transition-transform hover:scale-[1.03]"
            >
              Proje Teklifi Gönder
              <span className="grid h-8 w-8 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45 text-lg">
                ↗
              </span>
            </Link>
            <Link
              href="/projeler"
              className="rounded-full border border-border bg-card px-8 py-4 text-base font-medium transition-colors hover:bg-secondary"
            >
              Projelerimiz
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}