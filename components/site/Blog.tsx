const posts = [
  {
    h: "Uluslararası Standartlarda Film, Dizi ve Dijital İçerik Üretimi",
    s: "Meridyen Film Yapım; sinema filmleri, televizyon dizileri, reklam kampanyaları ve dijital platform projeleri geliştiren İstanbul merkezli bağımsız bir yapım şirketidir.",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
  },
  {
    h: "Güçlü Hikâyeler, Kalıcı Yapımlar",
    s: "Sinema, televizyon ve dijital platformlar için yaratıcı fikirleri profesyonel prodüksiyon süreçleriyle buluşturarak iz bırakacak içerikler üretiyoruz.",
    img: "https://images.unsplash.com/photo-1500210600060-44b6bbf83f43?q=80&w=1200&auto=format&fit=crop",
  },
  {
    h: "Sinema, Televizyon ve Marka İçerikleri İçin Profesyonel Yapım Çözümleri",
    s: "2010'dan bu yana faaliyet gösteren Meridyen Film Yapım; bağımsız sinema filmleri, televizyon projeleri, reklam kampanyaları ve dijital medya içerikleri üretir.",
    img: "https://images.unsplash.com/photo-1604975999044-188783d54fb3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    h: "Yaratıcı Fikirlerden Güçlü Yapımlara",
    s: "Geliştirme aşamasından post-prodüksiyona kadar tüm süreçleri yöneten; film, dizi, reklam ve dijital medya projeleri üreten İstanbul merkezli bir yapım şirketi.",
    img: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=1200&auto=format&fit=crop",
  },
];

export function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-12">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
          <span className="h-2 w-2 rounded-full bg-primary" /> Bilgi Merkezi
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Yapım dünyasından{" "}
          <span className="italic font-serif text-muted-foreground">notlar.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {posts.map((p, i) => (
          <article
            key={i}
            className="group overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-foreground/30"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={p.img}
                alt={p.h}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-7">
              <h3 className="font-display text-2xl leading-snug md:text-3xl">
                {p.h}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                {p.s}
              </p>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
              >
                Daha Fazlası <span aria-hidden>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
