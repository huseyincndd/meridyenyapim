import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FallbackImage } from "@/components/site/FallbackImage";
import { blogs } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog ve Sektörel Rehber | Meridyen Film Yapım",
  description:
    "Sinema, dizi ve reklam prodüksiyonu dünyasına dair ipuçları, yapım süreçleri ve sektörel rehberler. Meridyen Film Yapım bilgi havuzu.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 border-b border-border">
          <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="h-2 w-2 rounded-full bg-primary" /> Bilgi Havuzu
            </div>
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[6.5rem] leading-[1.1] max-w-5xl animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              Sektörel Rehber <span className="italic font-serif text-muted-foreground">& Blog</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
              Film yapımı, reklam prodüksiyonu ve post-prodüksiyon dünyasının mutfağından profesyonel notlar, süreç analizleri ve sektörel rehberler.
            </p>
          </div>
        </section>

        {/* BLOG LİSTESİ */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group flex flex-col gap-6"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-muted/30 border border-border">
                  <FallbackImage
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/10"></div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                    <time dateTime={blog.date}>{blog.date}</time>
                    <span className="h-1 w-1 rounded-full bg-border"></span>
                    <span>{blog.readTime} Okuma</span>
                  </div>
                  
                  <h2 className="font-display text-2xl md:text-3xl mb-4 transition-colors group-hover:text-primary tracking-[-0.035em] leading-snug">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {blog.metaDescription}
                  </p>
                  
                  <div className="mt-6 inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    Devamını Oku 
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA BÖLÜMÜ */}
        <section className="dark bg-background text-foreground py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem] px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-4xl md:text-6xl lg:text-[5rem] mb-6 tracking-[-0.035em] leading-[1.1]">
              Bir Sonraki Hikâyeyi <br/>
              <span className="italic font-serif text-muted-foreground">Birlikte Başlatalım</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Projenizin kreatif geliştirme, bütçelendirme veya prodüksiyon süreçlerini başlatmak ya da profesyonel havuzumuza dahil olmak için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-transform hover:scale-[1.02]">
                Proje Başlat
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link href="/iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-border hover:bg-card px-8 py-4 text-lg font-semibold transition-all group">
                Başvuru Formu
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
