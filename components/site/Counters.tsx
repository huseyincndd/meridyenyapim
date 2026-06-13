"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 16, suffix: "+", label: "Yıllık Sektörel Deneyim" },
  { value: 100, suffix: "+", label: "Tamamlanan İçerik ve Proje" },
  { value: 20, suffix: "+", label: "Alanında Uzman Ekip Kadrosu" },
  { value: 45000, suffix: "+", label: "Saat Profesyonel Prodüksiyon" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  return (
    <span className="font-display text-4xl sm:text-5xl tracking-[-0.04em] md:text-7xl text-primary">
      {target.toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}

export function Counters() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-2 gap-y-10 gap-x-4 md:gap-x-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-start gap-2 border-l border-border pl-4 md:pl-6">
            <Counter target={s.value} suffix={s.suffix} />
            <span className="max-w-[200px] text-xs sm:text-sm text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
