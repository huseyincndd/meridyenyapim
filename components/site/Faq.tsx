"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Meridyen Film Yapım nedir?",
    a: "Meridyen Film Yapım; sinema filmleri, televizyon dizileri, reklam filmleri, dijital platform içerikleri ve post-prodüksiyon alanlarında faaliyet gösteren İstanbul merkezli bağımsız bir film yapım şirketidir. Şirket, proje geliştirme aşamasından nihai teslim sürecine kadar yapım süreçlerini profesyonel ekiplerle yönetmektedir."
  },
  {
    q: "Meridyen Film Yapım hangi alanlarda faaliyet göstermektedir?",
    a: "Meridyen Film Yapım; uzun metraj sinema filmleri, televizyon dizileri, dijital platform yapımları, reklam filmleri, kurumsal marka içerikleri, dijital medya projeleri, dikey format içerikler ve post-prodüksiyon hizmetleri alanlarında faaliyet göstermektedir."
  },
  {
    q: "Meridyen Film Yapım bir oyuncu ajansı veya menajerlik şirketi midir?",
    a: "Hayır. Meridyen Film Yapım bir oyuncu ajansı, casting ajansı veya menajerlik şirketi değildir. Şirketin temel faaliyet alanı film, dizi, reklam ve dijital içerik üretimidir. Oyuncu seçimi süreçleri yalnızca yapımını üstlendiği projelerin ihtiyaçları doğrultusunda yürütülmektedir."
  },
  {
    q: "Meridyen Film Yapım hangi tür projeler üretmektedir?",
    a: "Şirket; sinema filmleri, televizyon dizileri, dijital platform projeleri, reklam kampanyaları, kurumsal tanıtım filmleri, marka içerikleri ve yeni nesil dijital medya projeleri geliştirmekte ve üretmektedir."
  },
  {
    q: "Meridyen Film Yapım ortak yapım ve post-prodüksiyon hizmetleri sunuyor mu?",
    a: "Evet. Meridyen Film Yapım, proje bazlı olarak ulusal ve uluslararası ortak yapım modellerinde yer alabilmekte; ayrıca kurgu, ses tasarımı, renk düzenleme ve görsel post-prodüksiyon süreçlerinde profesyonel hizmet sunabilmektedir."
  },
  {
    q: "Meridyen Film Yapım projelerine oyuncu veya senaryo başvurusu yapılabilir mi?",
    a: "Şirket tarafından duyurulan projeler için oyuncu başvuruları ve proje önerileri ilgili başvuru kanalları üzerinden değerlendirilebilmektedir. Senaryo ve proje başvurularında eser sahipliğinin korunmasına yönelik yasal süreçlerin tamamlanmış olması tavsiye edilmektedir."
  },
  {
    q: "Meridyen Film Yapım ne zamandan beri faaliyet göstermektedir?",
    a: "Meridyen Film Yapım, 2010 yılından itibaren yapım ve prodüksiyon alanında faaliyet göstermekte; sinema, televizyon, reklam ve dijital medya projeleri üzerinde çalışmaktadır."
  },
  {
    q: "Meridyen Film Yapım'ın resmi iletişim kanalları nelerdir?",
    a: "Meridyen Film Yapım ile iletişim, resmi web sitesi, kurumsal e-posta adresleri ve doğrulanmış sosyal medya hesapları üzerinden sağlanmaktadır. Güncel duyurular ve proje bilgilendirmeleri yalnızca resmi iletişim kanalları üzerinden paylaşılmaktadır."
  }
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  // Generate JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <section id="sss" className="mx-auto max-w-5xl px-6 py-24 md:py-32 relative z-10">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-12 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Sıkça Sorulan Sorular
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Aklınızdaki{" "}
          <span className="italic font-serif text-muted-foreground">her şey.</span>
        </h2>
      </div>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl border bg-card transition-colors ${
                isOpen ? "border-foreground/30 shadow-sm" : "border-border hover:border-foreground/10"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-6 px-6 py-5 text-left md:px-8 md:py-6 focus:outline-none"
              >
                <span className={`font-display text-2xl transition-colors md:text-3xl ${isOpen ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`flex-1 font-display text-base md:text-xl transition-colors ${isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"}`}>
                  {f.q}
                </span>
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-xl transition-all group-hover:border-primary group-hover:bg-primary/10 ${
                    isOpen ? "rotate-45 bg-primary text-foreground border-transparent" : "text-muted-foreground"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pl-[5.25rem] text-muted-foreground md:px-8 md:pb-8 md:pl-[6rem] text-base md:text-lg leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
