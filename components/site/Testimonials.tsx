const items = [
  {
    quote:
      "Set disiplini ve prodüksiyon yönetimi konusunda sektörde denk geldiğim en profesyonel ekip. Pre-prodüksiyondaki titizlikleri sürpriz yaşatmadı.",
    name: "Ahmet Yılmaz",
    role: "Yönetmen",
    initials: "AY",
  },
  {
    quote:
      "Post-prodüksiyon hızı ve renk derecelendirmedeki estetik anlayışları beklentilerimizin çok ötesindeydi. Markamızın vizyonunu ekrana tam yansıttılar.",
    name: "Zeynep Kaya",
    role: "Marka Müdürü",
    initials: "ZK",
  },
  {
    quote:
      "Uluslararası festival standartlarında bir prodüksiyon kalitesini yerel bütçelerle nasıl elde edeceklerini çok iyi biliyorlar. Ortak yapımımız verimliydi.",
    name: "Maria Carvalho",
    role: "Prodüktör, Portekiz",
    initials: "MC",
  },
  {
    quote:
      "Dikey dizi formatındaki yaratıcı süreç yönetimleri etkileyiciydi. Mobil tüketim dinamiklerini çok iyi kavramışlar; her sahneyi platforma göre optimize ettiler.",
    name: "Elif Sarıoğlu",
    role: "Dijital İçerik Direktörü",
    initials: "ES",
  },
];

export function Testimonials() {
  return (
    <section id="referanslar" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-12">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Başarı Hikayeleri
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Birlikte çalıştığımız{" "}
          <span className="italic font-serif text-muted-foreground">isimler.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {items.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-border bg-card p-6"
          >
            <div className="text-primary text-lg tracking-[0.2em]">★★★★★</div>
            <blockquote className="mt-4 text-sm text-foreground/90">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground font-display text-sm text-background">
                {t.initials}
              </span>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
