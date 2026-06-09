const steps = [
  {
    n: "01",
    title: "Geliştirme",
    desc: "Fikirlerin projelendirilmesi, senaryo yazımı, dramaturji analizleri ve kreatif yönün belirlenmesi.",
  },
  {
    n: "02",
    title: "Planlama",
    desc: "Bütçelendirme, cast direktörlüğü, mekan keşifleri ve yasal izinlerin tamamlanması (Pre-Production).",
  },
  {
    n: "03",
    title: "Prodüksiyon",
    desc: "Ödüllü yönetmen kadromuz ve son teknoloji ekipmanlarla ana çekim süreçlerinin yürütülmesi.",
  },
  {
    n: "04",
    title: "Post-Prodüksiyon",
    desc: "Stüdyomuzda kurgu, ses tasarımı, VFX ve profesyonel renk derecelendirme süreçlerinin tamamlanması.",
  },
  {
    n: "05",
    title: "Yayın & Dağıtım",
    desc: "Festivallere gönderim, sinema vizyon süreçleri veya dijital platform entegrasyonlarının yönetimi.",
  },
];

export function Process() {
  return (
    <section id="surec" className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mb-14">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Yapım Sürecimiz
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Fikirden vizyona,{" "}
          <span className="italic font-serif text-primary">
            beş aşama.
          </span>
        </h2>
      </div>

      <ol className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <li
            key={s.n}
            className={`group relative overflow-hidden rounded-3xl border border-border p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(162,255,50,0.1)] ${
              i % 2 === 1 ? "bg-foreground text-background" : "bg-card"
            }`}
          >
            <div className={`font-display text-5xl transition-colors text-primary opacity-50 group-hover:opacity-100`}>
              {s.n}
            </div>
            <h3 className="mt-6 font-display text-xl md:text-2xl">{s.title}</h3>
            <p className="mt-3 text-sm opacity-75">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
