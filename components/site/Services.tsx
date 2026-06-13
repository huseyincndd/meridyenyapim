const services = [
  {
    n: "01",
    title: "Sinema Filmleri",
    tag: "Uzun Metraj Yapım Şirketi",
    desc: "Ulusal ve uluslararası vizyon hedefiyle geliştirilen uzun metraj film projelerinin yapım süreçlerini yönetiyoruz.",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop",
  },
  {
    n: "02",
    title: "Dizi Yapımları",
    tag: "Dijital Platform Dizi Prodüksiyonu",
    desc: "Televizyon kanalları ve dijital yayın platformları için dizi projeleri geliştiriyor ve üretiyoruz.",
    img: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=1400&auto=format&fit=crop",
  },
  {
    n: "03",
    title: "Reklam Filmleri",
    tag: "Kurumsal Reklam Filmi Çekimi",
    desc: "Markaların hikâyelerini yaratıcı ve etkili prodüksiyon süreçleriyle ekrana taşıyoruz.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    n: "04",
    title: "Dijital İçerik Üretimi",
    tag: "Dikey Dizi ve Dijital İçerik Formatları",
    desc: "Dijital platformlar, sosyal medya ve mobil ekranlar için yeni nesil içerikler üretiyoruz.",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1400&auto=format&fit=crop",
  },
  {
    n: "05",
    title: "Post-Prodüksiyon",
    tag: "Post-Prodüksiyon Stüdyosu",
    desc: "Kurgu, ses tasarımı, renk düzenleme ve teslim süreçlerini profesyonel stüdyo altyapımızla yönetiyoruz.",
    img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1400&auto=format&fit=crop",
  },
];

import { FadeIn } from "./FadeIn";

export function Services() {
  return (
    <section id="hizmetler" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <FadeIn className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Hizmetlerimiz
          </div>
          <h2 className="font-display text-5xl tracking-[-0.035em] md:text-6xl">
            Neler{" "}
            <span className="italic font-serif text-muted-foreground">yapıyoruz?</span>
          </h2>
        </div>
        <a
          href="/iletisim"
          className="rounded-full border border-border bg-card px-5 py-2.5 text-sm hover:bg-secondary"
        >
          Daha Fazlası →
        </a>
      </FadeIn>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((s) => (
          <article
            key={s.n}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_30px_rgba(162,255,50,0.15)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <span className="absolute left-4 top-4 rounded-full bg-foreground text-primary px-3 py-1 font-display text-sm shadow-md">
                {s.n}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-xl md:text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-4 inline-block w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] uppercase tracking-wider text-foreground">
                {s.tag}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
