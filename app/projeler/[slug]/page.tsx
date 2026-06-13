import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getProjectBySlug, projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı | Meridyen Film Yapım",
    };
  }

  // Meta Description şablonu: [Proje Adı], Meridyen Film Yapım tarafından [yıl] yılında üretilen [tür] projesidir. [Logline kısaltması].
  const description = `${project.title}, Meridyen Film Yapım tarafından ${project.year} yılında üretilen ${project.genre} projesidir. ${project.logline.slice(0, 100)}...`;

  return {
    title: `${project.title} | ${project.genre} | Meridyen Film Yapım`,
    description,
    alternates: {
      canonical: `https://www.meridyenfilm.com/projeler/${project.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": project.schemaType,
        "name": project.title,
        "genre": project.genre,
        "dateCreated": project.year,
        "description": project.logline,
        "producer": {
          "@type": "Organization",
          "name": "Meridyen Film Yapım",
          "url": "https://www.meridyenfilm.com",
        },
        "director": {
          "@type": "Person",
          "name": project.director,
        },
        "image": project.image,
        ...(project.youtubeId
          ? {
              "thumbnailUrl": `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`,
              "embedUrl": `https://www.youtube.com/embed/${project.youtubeId}`,
              "publisher": {
                "@type": "Organization",
                "name": "Meridyen Film Yapım",
              },
            }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ana Sayfa",
            "item": "https://www.meridyenfilm.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projeler",
            "item": "https://www.meridyenfilm.com/projeler",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://www.meridyenfilm.com/projeler/${project.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* HERO IMAGE */}
        <section className="relative h-[60vh] md:h-[80vh] w-full mt-20">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        </section>

        {/* PROJE BAŞLIĞI VE KÜNYE */}
        <section className="relative z-10 -mt-32 md:-mt-48 px-6 mb-24 md:mb-32">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[7rem] leading-[1] mb-8 drop-shadow-sm">
              {project.title}
            </h1>
            
            {/* Künye Şeridi */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm md:text-lg font-medium tracking-widest uppercase text-muted-foreground">
              <span>{project.genre}</span>
              <span className="h-1 w-1 rounded-full bg-border"></span>
              <span>{project.year}</span>
              <span className="h-1 w-1 rounded-full bg-border"></span>
              <span className="text-foreground">{project.status}</span>
              <span className="h-1 w-1 rounded-full bg-border"></span>
              <span>Yön: {project.director}</span>
            </div>
          </div>
        </section>

        {/* LOGLINE VE HAKKINDA */}
        <section className="mx-auto max-w-4xl px-6 mb-24 md:mb-32">
          <h2 className="font-serif text-3xl md:text-5xl italic leading-relaxed text-center mb-16 px-4 md:px-12 text-foreground/90">
            "{project.logline}"
          </h2>
          
          <div className="prose prose-lg md:prose-xl prose-neutral dark:prose-invert mx-auto text-muted-foreground leading-relaxed">
            {project.about.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* YOUTUBE EMBED (Varsa) */}
        {project.youtubeId && (
          <section className="mx-auto max-w-6xl px-6 mb-24 md:mb-32">
            <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border border-border shadow-xl">
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0`}
                title={`${project.title} | Meridyen Film Yapım`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
              ></iframe>
            </div>
          </section>
        )}

        {/* GÖRSEL GALERİ */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 mb-32 md:mb-48">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" /> Setten Kareler
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <div key={idx} className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-border bg-card">
                  <img
                    src={imgUrl}
                    alt={`${project.title} - Galeri Görseli ${idx + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

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
