import Link from "next/link";
import { blogs } from "@/lib/blogs";
import { FallbackImage } from "@/components/site/FallbackImage";
import { FadeIn } from "@/components/site/FadeIn";

export function Blog() {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <FadeIn className="mb-12">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
          <span className="h-2 w-2 rounded-full bg-primary" /> Bilgi Merkezi
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Yapım dünyasından{" "}
          <span className="italic font-serif text-muted-foreground">notlar.</span>
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {blogs.map((p, i) => (
          <FadeIn key={i} delay={i * 150} className="h-full">
            <Link
              href={`/blog/${p.slug}`}
              className="group overflow-hidden h-full rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_20px_40px_-15px_rgba(162,255,50,0.1)] flex flex-col"
            >
            <div className="relative aspect-[16/9] overflow-hidden bg-muted/30">
              <FallbackImage
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-7 flex flex-col flex-1">
              <h3 className="font-display text-2xl leading-snug md:text-3xl mb-3 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground md:text-base line-clamp-3 mb-5">
                {p.metaDescription}
              </p>
              <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 group-hover:gap-3 transition-all">
                Daha Fazlası <span aria-hidden>→</span>
              </div>
            </div>
            </Link>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={300} className="mt-12 text-center">
        <Link href="/blog" className="inline-flex items-center justify-center gap-3 rounded-full border border-border hover:bg-card px-8 py-4 text-sm md:text-base font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_20px_-10px_rgba(162,255,50,0.2)] group">
          Tüm Makaleleri Oku
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>
      </FadeIn>
    </section>
  );
}
