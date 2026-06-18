const top = [
  {
    title: "AJet",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/ajet-meridyen-film-yapim.webp",
  },
  {
    title: "Akbank",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/akbank-baba-bank-meridyen-film-yapim.webp",
  },
  {
    title: "Algida",
    type: "Reklam Filmi",
    year: "2023",
    status: "TVC",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/algida-meridyen-film-yapim.webp",
  },
  {
    title: "Allianz",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/allianz-meridyen-film-yapim.webp",
  },
  {
    title: "Tavuk Dünyası",
    type: "Reklam Filmi",
    year: "2023",
    status: "TVC",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/burasi-tavuk-dunyasi-meridyen-film-yapim.webp",
  },
  {
    title: "Burger King",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/burger-king-getir-yemek-meridyen-film-yapim.webp",
  },
  {
    title: "DeFacto",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/defacto-meridyen-film-yapim.webp",
  },
  {
    title: "Doritos",
    type: "Reklam Filmi",
    year: "2023",
    status: "TVC",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/doritos-herkes-meridyen-film-yapim.webp",
  },
  {
    title: "Eti",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/eti-meridyen-film-yapim.webp",
  },
  {
    title: "Getir",
    type: "Reklam Filmi",
    year: "2023",
    status: "TVC",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/getir-meridyen-film-yapim.webp",
  },
];

const bottom = [
  {
    title: "Hepsiburada",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/hepsiburada-meridyen-film-yapim.webp",
  },
  {
    title: "İş Bankası",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/is-bankasi-maximum-meridyen-film-yapim.webp",
  },
  {
    title: "Karaca",
    type: "Reklam Filmi",
    year: "2023",
    status: "TVC",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/karaca-meridyen-film-yapim.webp",
  },
  {
    title: "Kiğılı",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/kigili-meridyen-film-yapim.webp",
  },
  {
    title: "LC Waikiki",
    type: "Reklam Filmi",
    year: "2023",
    status: "TVC",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/lc-waikiki-meridyen-film-yapim.webp",
  },
  {
    title: "Lipton Ice Tea",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/lipton-ice-tea-meridyen-film-yapim.webp",
  },
  {
    title: "McDonald's",
    type: "Reklam Filmi",
    year: "2023",
    status: "TVC",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/mc-donalds-meridyen-film-yapim.webp",
  },
  {
    title: "Migros",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/migros-hemen-meridyen-film-yapim.webp",
  },
  {
    title: "Garanti BBVA",
    type: "Reklam Filmi",
    year: "2024",
    status: "Yayında",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/milyonlarca-garanti-bbva-meridyen-film-yapim.webp",
  },
  {
    title: "Türk Hava Yolları",
    type: "Reklam Filmi",
    year: "2023",
    status: "TVC",
    img: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/projeler/turk-hava-yollari-meridyen-film-yapim.webp",
  },
];

type Project = (typeof top)[number];

function Card({ p }: { p: Project }) {
  return (
    <article className="group relative w-[320px] shrink-0 overflow-hidden rounded-3xl border border-border bg-card md:w-[460px] transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_15px_30px_-10px_rgba(162,255,50,0.15)]">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={p.img}
          alt={`${p.title} — ${p.type}, ${p.year}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
          {p.status}
        </span>
      </div>
      <div className="flex items-end justify-between gap-3 p-5">
        <div>
          <h3 className="font-display text-xl transition-colors duration-300 group-hover:text-primary">{p.title}</h3>
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
      <div className="flex">
        <div
          className="flex shrink-0 gap-5 pr-5"
          style={{
            animation: `marquee 150s linear infinite`,
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
            animation: `marquee 150s linear infinite`,
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

import { FadeIn } from "./FadeIn";

export function Projects() {
  return (
    <section id="projeler" className="py-24 md:py-32">
      <FadeIn className="mx-auto mb-12 max-w-7xl px-6">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Filmografi
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Öne çıkan{" "}
          <span className="italic font-serif text-muted-foreground">çalışmalarımız.</span>
        </h2>
      </FadeIn>
      <div className="flex flex-col gap-6">
        <FadeIn delay={100}><Row items={top} direction="left" /></FadeIn>
        <FadeIn delay={200}><Row items={bottom} direction="right" /></FadeIn>
      </div>
    </section>
  );
}
