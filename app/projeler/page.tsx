import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projelerimiz | Meridyen Film Yapım | Filmografi ve Yapımlar",
  description:
    "Meridyen Film Yapım imzalı sinema filmleri, diziler, reklam filmleri ve dikey dizi projeleri. 2009'dan bu yana 100'ün üzerinde yapım.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/projeler",
  },
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6">
          <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="h-2 w-2 rounded-full bg-primary" /> Filmografi
            </div>
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[6.5rem] leading-[1.1] max-w-5xl animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              Yapımlarımız: <span className="italic font-serif text-muted-foreground">17 Yılın Filmografisi</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
              Meridyen Film Yapım, 2009 yılından bu yana sinema filmi, televizyon dizisi, reklam filmi ve dikey dizi alanlarında 100'ün üzerinde yapıma imza atmıştır. Bu sayfada öne çıkan projelerimizi; türü, yapım yılı ve mevcut durumuyla birlikte inceleyebilirsiniz.
            </p>
          </div>
        </section>

        {/* PROJE LİSTESİ */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {projects.map((project, index) => (
              <Link 
                key={project.slug} 
                href={`/projeler/${project.slug}`}
                className="group flex flex-col gap-6"
                data-description={project.logline}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-muted/30 border border-border">
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6 z-10 rounded-full bg-background/90 backdrop-blur px-4 py-2 text-xs font-semibold uppercase tracking-widest text-foreground shadow-sm">
                    {project.status}
                  </div>
                  
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.genre}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/10"></div>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">
                    <span itemProp="genre">{project.genre}</span>
                    <span className="h-1 w-1 rounded-full bg-border"></span>
                    <span itemProp="dateCreated">{project.year}</span>
                  </div>
                  
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl md:text-4xl transition-colors group-hover:text-primary tracking-[-0.035em]" itemProp="name">
                      {project.title}
                    </h3>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-background">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA BÖLÜMÜ */}
        <section className="dark bg-background text-foreground py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem] px-6 mt-12 md:mt-24">
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
