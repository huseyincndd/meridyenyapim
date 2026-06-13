const cards = [
  {
    n: "01",
    title: "Yaratıcı Geliştirme",
    desc: "Fikir aşamasından senaryo geliştirmeye kadar projelerin yaratıcı temelini deneyimli ekiplerimizle oluşturuyoruz.",
  },
  {
    n: "02",
    title: "Güvenilir Prodüksiyon",
    desc: "Planlama, bütçe yönetimi ve çekim süreçlerini şeffaf, kontrollü ve profesyonel bir yaklaşımla yürütüyoruz.",
  },
  {
    n: "03",
    title: "Kurumsal Şeffaflık",
    desc: "Net bütçelendirme, açık iletişim ve sürdürülebilir iş ortaklıklarıyla güvene dayalı çalışma modeli benimsiyoruz.",
  },
  {
    n: "04",
    title: "Uluslararası Standartlar",
    desc: "Projelerimizi güncel yayın, teknik ve prodüksiyon standartlarına uygun şekilde geliştiriyoruz.",
  },
  {
    n: "05",
    title: "Teknolojik Altyapı",
    desc: "Yeni nesil kamera sistemleri, profesyonel ekipman altyapısı ve dijital üretim teknolojileriyle çalışıyoruz.",
  },
  {
    n: "06",
    title: "Tek Noktadan Çözüm",
    desc: "Yaratıcı geliştirmeden teslim aşamasına kadar tüm süreçleri tek bir koordinasyon yapısı altında yönetiyoruz.",
  },
];

export function WhyUs() {
  return (
    <section id="neden" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Neden Meridyen Film Yapım?
          </div>
          <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
            Fark yaratan değerler ve{" "}
            <span className="italic font-serif text-muted-foreground">sürdürülebilir yapım kültürü.</span>
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

      <div className="mt-16 flex justify-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-4 rounded-3xl md:rounded-full border border-border/80 bg-card/60 px-6 py-4 shadow-sm backdrop-blur-md md:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="font-medium text-sm md:text-base tracking-wide">16+ Yıllık Deneyim</span>
          </div>
          <div className="hidden h-5 w-px bg-border md:block" />
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="font-medium text-sm md:text-base tracking-wide">100+ Proje</span>
          </div>
          <div className="hidden h-5 w-px bg-border md:block" />
          <div className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <span className="font-medium text-sm md:text-base tracking-wide">Uçtan Uca Yapım Yönetimi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
