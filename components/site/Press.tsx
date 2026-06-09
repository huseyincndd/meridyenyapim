const items = [
  {
    outlet: "Variety Türkiye",
    title: "Meridyen Film'in yeni festival çıkışı uluslararası ilgi topladı",
    date: "Mart 2025",
  },
  {
    outlet: "Cannes Marché",
    title: "Türk yapım şirketi Avrupa ortak yapımına katıldı",
    date: "Mayıs 2024",
  },
  {
    outlet: "Sinema Dergisi",
    title: "Yönetmen söyleşisi: Yeni nesil dijital prodüksiyon",
    date: "Kasım 2024",
  },
  {
    outlet: "Hollywood Reporter",
    title: "Meridyen Film, dikey dizi formatında öne çıkıyor",
    date: "Şubat 2025",
  },
];

export function Press() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mb-12">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Basında
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Meridyen Film,{" "}
          <span className="italic font-serif text-primary">basında.</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(162,255,50,0.1)]"
          >
            <div className="inline-block w-fit rounded-full bg-primary/20 px-3 py-1 text-xs uppercase tracking-wider text-primary">
              {p.outlet}
            </div>
            <h3 className="mt-6 font-display text-xl leading-snug md:text-2xl">
              {p.title}
            </h3>
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span>{p.date}</span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors group-hover:border-primary/50 group-hover:text-primary">
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
