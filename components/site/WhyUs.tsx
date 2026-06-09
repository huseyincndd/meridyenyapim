const cards = [
  {
    n: "01",
    title: "Yaratıcı Geliştirme",
    desc: "Fikirden senaryoya, her aşamada derinlikli dramaturji ve senaryo doktorluğu desteği.",
  },
  {
    n: "02",
    title: "Güvenilir Prodüksiyon",
    desc: "Bütçe planlamasından set yönetimine kadar uçtan uca, şeffaf ve profesyonel süreç yönetimi.",
  },
  {
    n: "03",
    title: "Şirket İçi Post-Prodüksiyon",
    desc: "Kurgu, VFX, ses tasarımı ve sinematik renk derecelendirmenin tek çatı altında çözülmesi.",
  },
  {
    n: "04",
    title: "Uluslararası Standartlar",
    desc: "Global dijital platformların ve festivallerin teknik ve hukuki mevzuatlarına tam uyumluluk.",
  },
  {
    n: "05",
    title: "Teknolojik Altyapı",
    desc: "4K/8K sinematik kamera sistemleri ve yeni nesil dijital içerik formatlarına uygun altyapı.",
  },
  {
    n: "06",
    title: "Tek Noktadan Çözüm",
    desc: "Fikirden nihai dağıtıma kadar tüm süreçlerin tek bir muhatap üzerinden eksiksiz yönetilmesi.",
  },
];

export function WhyUs() {
  return (
    <section id="neden" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Neden Meridyen?
          </div>
          <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
            Fark yaratan{" "}
            <span className="italic font-serif text-muted-foreground">değerler.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <article
            key={c.n}
            className={`group flex flex-col justify-between rounded-3xl border border-border p-7 transition-all hover:-translate-y-1 ${
              i === 0 || i === 5
                ? "bg-foreground text-background lg:col-span-2"
                : "bg-card"
            } ${i === 3 ? "lg:col-span-2" : ""}`}
          >
            <div>
              <div className="font-display text-5xl text-primary opacity-80">{c.n}</div>
              <h3 className="mt-6 font-display text-2xl md:text-3xl">{c.title}</h3>
              <p className="mt-3 max-w-md text-sm opacity-75 md:text-base">{c.desc}</p>
            </div>
            <div className="mt-8 inline-flex h-9 w-9 items-center justify-center rounded-full border border-current/30 text-lg transition-transform group-hover:rotate-45">
              ↗
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
