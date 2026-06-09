"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 16, suffix: "+", label: "Yıllık Sektörel Deneyim" },
  { value: 100, suffix: "+", label: "Tamamlanan İçerik ve Proje" },
  { value: 20, suffix: "+", label: "Alanında Uzman Ekip Kadrosu" },
  { value: 45000, suffix: "+", label: "Saat Profesyonel Prodüksiyon" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1600;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  
  return (
    <span ref={ref} className="font-display text-5xl tracking-[-0.04em] md:text-7xl text-primary">
      {val.toLocaleString("tr-TR")}
      {suffix}
    </span>
  );
}

export function Counters() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-start gap-3 border-l border-border pl-6">
            <Counter target={s.value} suffix={s.suffix} />
            <span className="max-w-[200px] text-sm text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
