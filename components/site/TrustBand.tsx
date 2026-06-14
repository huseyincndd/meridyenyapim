const platforms = [
  "Netflix",
  "BluTV",
  "GAIN",
  "TRT",
  "Show TV",
  "Kanal D",
  "Star TV",
  "Exxen",
  "HBO Max",
  "ATV",
  "Fox TV",
];

import { FadeIn } from "./FadeIn";

export function TrustBand() {
  const row = [...platforms, ...platforms, ...platforms];
  return (
    <section
      aria-label="İş Birliği, Referanslar ve Sektörel Ağımız"
      className="border-y border-border bg-background"
    >
      <FadeIn className="mx-auto max-w-7xl px-6 py-10">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex">
            <div className="flex shrink-0 animate-marquee gap-14 pr-14 whitespace-nowrap">
              {row.map((p, i) => (
                <span
                  key={i}
                  className="font-display text-xl tracking-[-0.02em] md:text-2xl text-foreground/50"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="flex shrink-0 animate-marquee gap-14 pr-14 whitespace-nowrap" aria-hidden="true">
              {row.map((p, i) => (
                <span
                  key={i}
                  className="font-display text-xl tracking-[-0.02em] md:text-2xl text-foreground/50"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
