const top = [
  {
    title: "Kuzey Rüzgârı",
    type: "Drama / Uzun Metraj",
    year: "2025",
    status: "Vizyonda",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Karanlık Saat",
    type: "Psikolojik Gerilim",
    year: "2025",
    status: "Post-Prodüksiyon",
    img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "İstanbul Meridyeni",
    type: "Belgesel Dizi",
    year: "2024",
    status: "Yayında",
    img: "https://images.unsplash.com/photo-1518132006221-e3eaa0aa1e85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Son Perde",
    type: "Dram / Dizi",
    year: "2024",
    status: "Yayında",
    img: "https://images.unsplash.com/photo-1604975999044-188783d54fb3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sahne Arkası",
    type: "Belgesel",
    year: "2023",
    status: "Festival",
    img: "https://images.unsplash.com/photo-1500210600060-44b6bbf83f43?q=80&w=1200&auto=format&fit=crop",
  },
];

const bottom = [
  {
    title: "Anadolu Hikâyeleri",
    type: "Antoloji Dizi",
    year: "2025",
    status: "Geliştirme",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Mavi Saat",
    type: "Romantik Drama",
    year: "2024",
    status: "Vizyonda",
    img: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Dikey Hikâyeler",
    type: "Dikey Dizi",
    year: "2025",
    status: "Yayında",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Beyoğlu Geceleri",
    type: "Suç / Dram",
    year: "2024",
    status: "Post-Prodüksiyon",
    img: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Ses ve Gölge",
    type: "Sanat Filmi",
    year: "2023",
    status: "Festival",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  },
];

type Project = (typeof top)[number];

function Card({ p }: { p: Project }) {
  return (
    <article className="group relative w-[320px] shrink-0 overflow-hidden rounded-3xl border border-border bg-card md:w-[380px]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={p.img}
          alt={`${p.title} — ${p.type}, ${p.year}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
          {p.status}
        </span>
      </div>
      <div className="flex items-end justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-xl">{p.title}</h3>
          <div className="text-xs text-muted-foreground">{p.type}</div>
        </div>
        <div className="font-display text-base text-muted-foreground">{p.year}</div>
      </div>
    </article>
  );
}

function Row({ items, direction }: { items: Project[]; direction: "left" | "right" }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex">
        <div
          className="flex shrink-0 gap-5 pr-5"
          style={{
            animation: `marquee 60s linear infinite`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {row.map((p, i) => (
            <Card key={i} p={p} />
          ))}
        </div>
        <div
          className="flex shrink-0 gap-5 pr-5"
          aria-hidden="true"
          style={{
            animation: `marquee 60s linear infinite`,
            animationDirection: direction === "right" ? "reverse" : "normal",
          }}
        >
          {row.map((p, i) => (
            <Card key={i} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projeler" className="py-24 md:py-32">
      <div className="mx-auto mb-12 max-w-7xl px-6">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Filmografi
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Öne çıkan{" "}
          <span className="italic font-serif text-muted-foreground">projelerimiz.</span>
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <Row items={top} direction="left" />
        <Row items={bottom} direction="right" />
      </div>
    </section>
  );
}
