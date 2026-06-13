import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FallbackImage } from "@/components/site/FallbackImage";
import { getBlogBySlug, blogs } from "@/lib/blogs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return {
      title: "Blog Bulunamadı | Meridyen Film Yapım",
    };
  }

  return {
    title: blog.title,
    description: blog.metaDescription,
    alternates: {
      canonical: `https://www.meridyenfilm.com/blog/${blog.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const blog = getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const jsonLd: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": blog.title,
      "description": blog.metaDescription,
      "image": blog.image,
      "datePublished": blog.date, // Note: For real SEO, this should be ISO format like "2026-06-10T08:00:00+03:00"
      "author": {
        "@type": "Organization",
        "name": "Meridyen Film Yapım",
        "url": "https://www.meridyenfilm.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Meridyen Film Yapım",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.meridyenfilm.com/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.meridyenfilm.com/blog/${blog.slug}`,
      },
    },
    {
      "@context": "https://schema.org",
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
          "name": "Blog",
          "item": "https://www.meridyenfilm.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blog.title,
          "item": `https://www.meridyenfilm.com/blog/${blog.slug}`,
        },
      ],
    },
  ];

  if (blog.faqs && blog.faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": blog.faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a,
        },
      })),
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* BLOG HEADER */}
        <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 border-b border-border">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
              <time dateTime={blog.date}>{blog.date}</time>
              <span className="h-1 w-1 rounded-full bg-border"></span>
              <span>{blog.readTime} Okuma</span>
            </div>
            
            <h1 className="font-display text-4xl tracking-[-0.035em] md:text-5xl lg:text-6xl leading-[1.15] mb-8">
              {blog.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {blog.metaDescription}
            </p>
          </div>
        </section>

        {/* FEATURED IMAGE */}
        <section className="px-4 md:px-6 -mt-10 md:-mt-16 mb-24 relative z-10">
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-border bg-card shadow-2xl">
              <FallbackImage
                src={blog.image}
                alt={blog.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-3xl px-6 mb-24 md:mb-32">
          {/* Prose container applies premium typography styling to the raw HTML */}
          <article 
            className="prose prose-lg md:prose-xl prose-neutral dark:prose-invert prose-headings:font-display prose-headings:tracking-[-0.035em] prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-3xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-li:text-muted-foreground mx-auto [&_.lead]:text-2xl [&_.lead]:font-medium [&_.lead]:text-foreground [&_.lead]:mb-12 [&_.lead]:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </section>

        {/* FAQS (If present) */}
        {blog.faqs && blog.faqs.length > 0 && (
          <section className="mx-auto max-w-3xl px-6 mb-32 md:mb-48 border-t border-border pt-24">
            <div className="mb-12">
              <h2 className="font-display text-3xl md:text-4xl tracking-[-0.035em]">Sıkça Sorulan Sorular</h2>
            </div>
            <div className="space-y-4">
              {blog.faqs.map((f, i) => (
                <details key={i} className="group rounded-[1.5rem] border border-border bg-card p-6 open:bg-muted/30 transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between font-display text-lg md:text-xl list-none [&::-webkit-details-marker]:hidden outline-none">
                    <span className="pr-8">{f.q}</span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-background group-open:border-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                    </span>
                  </summary>
                  <div className="mt-6 text-muted-foreground leading-relaxed text-base animate-in fade-in slide-in-from-top-2 duration-300">
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* CTA BÖLÜMÜ */}
        <section className="dark bg-background text-foreground py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem] px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-4xl md:text-6xl lg:text-[5rem] mb-6 tracking-[-0.035em] leading-[1.1]">
              Kendi Hikâyenizi <br/>
              <span className="italic font-serif text-muted-foreground">Ekrana Taşıyın</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Uzman yapım ekibimizle projenizi geliştirmek ve hayata geçirmek için hemen bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-transform hover:scale-[1.02]">
                Proje Başlat
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
