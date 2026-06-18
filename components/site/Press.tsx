"use client";

import { useState } from "react";

const pressItems = [
  {
    outlet: "Ekonomi Business",
    title: "Meridyen Film Yapım, Yeni Sinema Projesiyle Uluslararası Arenaya Açılıyor",
  },
  {
    outlet: "Breaking Post",
    title: "Bağımsız Sinemada Yeni Dönem: Meridyen Film Yapım’dan Avrupa Ortak Yapımı",
  },
  {
    outlet: "Meridyen Basın",
    title: "Televizyon ve Dijital Platformlarda Meridyen Film Yapım İmzası",
  },
  {
    outlet: "News Portal",
    title: "Küresel Eğilimleri Yakalamak: Meridyen Film Yapım ve Dikey Dizi Formatları",
  },
  {
    outlet: "Sinema Dergisi",
    title: "Marka Otoritesini Güçlendiren Reklam Çözümleri: Meridyen Film Yapım",
  },
  {
    outlet: "Sinema Dergisi",
    title: "Tek Çatı Altında Eksiksiz Çözüm: Meridyen Film Yapım Post-Prodüksiyon Stüdyosu",
  },
  {
    outlet: "Medya Mecmuası",
    title: "Meridyen Film Yapım Sürdürülebilir Yapım Yaklaşımıyla Sektöre Örnek Oluyor",
  },
  {
    outlet: "Film Dergisi",
    title: "Meridyen Film Yapım Küresel Yayın ve Teknik Standartlara Tam Uyum Sağlıyor",
  },
  {
    outlet: "Sinematik Medya",
    title: "Yapım Şirketleri Dijital Platform Dönemine Nasıl Uyum Sağlıyor?",
  },
  {
    outlet: "Fox Medya",
    title: "Meridyen Film Yapım Dikey Dizi Formatları ile Yapım Sektöründe Yeni Bir Dönem Başlatıyor",
  },
  {
    outlet: "Star Medya",
    title: "Meridyen Film Yapımın Uluslararası Ortak Yapımları Türk Yapım Sektöründe Önem Kazanıyor",
  },
  {
    outlet: "Türkiye Medya",
    title: "Meridyen Film Yapım Dijital Platformlar İçin Üretilen Diziler ve Yeni Üretim Modelleri Oluşturuyor",
  },
];

type PressItem = (typeof pressItems)[number];

function PressCard({ p }: { p: PressItem }) {
  return (
    <article className="group flex h-full w-[300px] shrink-0 flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(162,255,50,0.1)] md:w-[380px]">
      <div className="inline-block w-fit rounded-full bg-primary/20 px-3 py-1 text-xs uppercase tracking-wider text-primary">
        {p.outlet}
      </div>
      <h3 className="mt-6 flex-1 font-display text-lg leading-snug md:text-xl">
        {p.title}
      </h3>
      <div className="mt-6 flex items-center justify-end text-xs text-muted-foreground">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors group-hover:border-primary/50 group-hover:text-primary">
          ↗
        </span>
      </div>
    </article>
  );
}

function MarqueeRow({ items, direction = "left", speed = "100s" }: { items: PressItem[]; direction?: "left" | "right", speed?: string }) {
  const row = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex">
        <div
          className="flex shrink-0 gap-5 pr-5"
          style={{
            animationName: "marquee",
            animationDuration: speed,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: direction === "right" ? "reverse" : "normal",
            animationPlayState: "running"
          }}
        >
          {row.map((p, i) => (
            <PressCard key={i} p={p} />
          ))}
        </div>
        <div
          className="flex shrink-0 gap-5 pr-5"
          aria-hidden="true"
          style={{
            animationName: "marquee",
            animationDuration: speed,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: direction === "right" ? "reverse" : "normal",
            animationPlayState: "running"
          }}
        >
          {row.map((p, i) => (
            <PressCard key={i} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { FadeIn } from "./FadeIn";

export function Press() {
  const half = Math.ceil(pressItems.length / 2);
  const row1 = pressItems.slice(0, half);
  const row2 = pressItems.slice(half);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Basında
          </div>
          <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
            Meridyen Film Yapım,{" "}
            <span className="italic font-serif text-primary">basında.</span>
          </h2>
        </div>
      </FadeIn>
      
      <div className="flex flex-col gap-6">
        <FadeIn delay={100}><MarqueeRow items={row1} direction="left" speed="120s" /></FadeIn>
        <FadeIn delay={200}><MarqueeRow items={row2} direction="right" speed="125s" /></FadeIn>
      </div>
    </section>
  );
}
