import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-waves">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-16 md:pt-24 lg:grid-cols-[320px_1fr] lg:gap-16">
        {/* Left identity */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-background">
              <img
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop"
                alt="Meridyen Film stüdyosu"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-display text-lg">Meridyen Film</div>
              <div className="text-sm text-muted-foreground">
                Sinema · Dizi · Dijital Yapım
              </div>
            </div>
          </div>
          <div className="hidden text-sm text-muted-foreground lg:block">
            (2010 — BUGÜN) · İSTANBUL
          </div>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-10">
          <FadeIn delay={100}>
            <div className="inline-flex w-fit items-center gap-2 text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="text-foreground/80">
                Yeni proje başvuruları açık
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <h1 className="font-display text-5xl sm:text-[56px] leading-[1.02] tracking-[-0.04em] text-foreground md:text-6xl lg:text-[76px]">
              <span className="inline-flex items-center rounded-full bg-card px-5 py-1 align-middle text-[0.9em] shadow-sm ring-1 ring-border">
                Meridyen Film Yapım
              </span>{" "}
              | İstanbul Merkezli{" "}
              <span className="inline-flex items-center rounded-full ink-pill px-5 py-1 align-middle text-[0.9em]">
                Dizi
              </span>
              , Sinema ve{" "}
              <span className="inline-flex items-center rounded-full bg-primary text-foreground px-5 py-1 align-middle text-[0.9em] shadow-sm">
                Reklam
              </span>{" "}
              Film Yapım Şirketi
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              Meridyen Film Yapım; 2010 yılından bu yana film yapımı, dizi prodüksiyonu, reklam filmi üretimi, dijital içerik geliştirme ve uluslararası ortak yapım alanlarında faaliyet gösteren İstanbul merkezli bağımsız bir film yapım şirketidir.
            </p>
          </FadeIn>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/iletisim"
              className="group inline-flex items-center gap-3 rounded-full lime-pill px-6 py-3.5 text-sm font-semibold shadow-[0_10px_40px_-10px_oklch(0.92_0.22_130/0.7)] transition-transform hover:scale-[1.03]"
            >
              Proje Başlat
              <span className="grid h-7 w-7 place-items-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                ↗
              </span>
            </a>
            <a
              href="/projeler"
              className="rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Projelerimiz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
