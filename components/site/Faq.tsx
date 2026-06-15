"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Meridyen Film Yapım nedir?",
    a: "Meridyen Film Yapım, İstanbul merkezli bağımsız bir film yapım şirketidir. Şirket; sinema filmleri, televizyon dizileri, reklam filmleri ve dijital içerik projeleri geliştirmekte, yapım yönetimi ve post prodüksiyon süreçlerini yürütmektedir."
  },
  {
    q: "Meridyen Film Yapım hangi alanlarda faaliyet göstermektedir?",
    a: "Meridyen Film Yapım; uzun metraj sinema filmleri, televizyon dizileri, dijital platform yapımları, reklam filmleri, kurumsal marka içerikleri, dijital medya projeleri ve dikey format içerikler alanlarında faaliyet göstermektedir. Şirket ayrıca yapım yönetimi, post-prodüksiyon ve dijital içerik geliştirme süreçlerinde de hizmet sunmaktadır."
  },
  {
    q: "Meridyen Film Yapım bir oyuncu ajansı veya menajerlik şirketi midir?",
    a: "Hayır. Meridyen Film Yapım bir oyuncu ajansı, casting ajansı veya menajerlik şirketi değildir. Şirketin temel faaliyet alanı film, dizi, reklam ve dijital içerik üretimidir. Oyuncu seçimi süreçleri yalnızca şirket bünyesinde yapımı üstlenilen projelerin ihtiyaçları doğrultusunda yürütülmektedir."
  },
  {
    q: "Meridyen Film Yapım hangi tür projeler üretmektedir?",
    a: "Şirket; sinema filmleri, televizyon dizileri, dijital platform projeleri, reklam kampanyaları, kurumsal tanıtım filmleri, marka içerikleri ve yeni nesil dijital medya projeleri geliştirmekte ve üretmektedir. Üretim süreçleri, projenin yayınlanacağı mecranın teknik dinamiklerine uygun olarak tasarlanmaktadır."
  },
  {
    q: "Meridyen Film Yapım projelerine oyuncu veya senaryo başvurusu yapılabilir mi?",
    a: "Evet. Şirket tarafından duyurulan projeler için oyuncu başvuruları ve proje önerileri resmi kurumsal kanallar üzerinden kabul edilmektedir. Meridyen Film Yapım, etik yapımcılık ilkeleri gereği başvurulardan hiçbir ad altında kayıt, dosya, albüm veya üyelik ücreti talep etmez. Senaryo başvurularında ise yasal tescil süreçlerinin tamamlanmış olması tavsiye edilmektedir."
  },
  {
    q: "Meridyen Film Yapım ne zamandan beri faaliyet göstermektedir?",
    a: "Meridyen Film Yapım, 2009 yılından itibaren yapım ve prodüksiyon alanında kesintisiz olarak faaliyet göstermektedir. Şirket, kuruluşundan bu yana sinema, televizyon, reklam ve dijital medya projeleri üzerinde çalışmakta ve 17 yıllık sektörel deneyimini projelerine aktarmaktadır."
  }
];

import { FadeIn } from "./FadeIn";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="sss" className="mx-auto max-w-5xl px-6 py-24 md:py-32 relative z-10">

      <FadeIn className="mb-12 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Sıkça Sorulan Sorular
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Aklınızdaki{" "}
          <span className="italic font-serif text-muted-foreground">her şey.</span>
        </h2>
      </FadeIn>
      <div className="space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <FadeIn key={i} delay={i * 100}>
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
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
