"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Meridyen Film Yapım ortak yapım (co-production) projelerini kabul ediyor mu?",
    a: "Evet, hem ulusal (Bakanlık, TRT vb.) hem de uluslararası (Eurimages vb.) fonlu ortak yapım projelerini, kreatif ve finansal standartlarımıza uygunluğu doğrultusunda değerlendiriyoruz.",
  },
  {
    q: "Bir reklam veya marka içeriği üretimi ne kadar sürer?",
    a: "Projenin kapsamına ve senaryo karmaşıklığına bağlı olarak; pre-prodüksiyondan post-prodüksiyona kadar takvim, çekim öncesinde şeffaf bir iş planıyla sunulur ve taahhüt edilen tarihte eksiksiz teslim edilir.",
  },
  {
    q: "Uluslararası projelerde ve dış çekimlerde çalışıyor musunuz?",
    a: "Evet, küresel standartlardaki teknik altyapımız, çok dilli ekibimiz ve uluslararası ortak yapım tecrübemizle hem Türkiye'deki yabancı yapımlara servis sağlıyor hem de yurt dışı projelerinde aktif rol alıyoruz.",
  },
  {
    q: "Dikey dizi ve dijital içerik üretiminde hangi standartları uyguluyorsunuz?",
    a: "Mobil tüketim alışkanlıklarına uygun olarak 9:16 formatında, yüksek tempolu kurgu mimarisine sahip ve yeni nesil dijital platformların güncel algoritmalarıyla tam uyumlu prodüksiyonlar üretiyoruz.",
  },
  {
    q: "Şirketiniz bünyesinde harici projeler için sadece post-prodüksiyon hizmeti sunuluyor mu?",
    a: "Evet, kendi projelerimiz dışındaki sinema, dizi ve reklam projelerine de kurgu, ses tasarımı, görsel efekt (VFX) ve sinematik renk derecelendirme (Color Grading) stüdyo hizmetleri sağlıyoruz.",
  },
  {
    q: "Meridyen Film bünyesindeki projelere senaryo veya oyuncu başvurusu nasıl yapılır?",
    a: "Senaryo, sinopsis veya oyuncu portfolyolarınızı web sitemizdeki 'Şimdi Başvur' formu üzerinden, KVKK metni onayıyla güvenle iletebilirsiniz. Şirketimiz başvurulardan hiçbir ad altında ücret talep etmez.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="sss" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
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
                isOpen ? "border-foreground/30" : "border-border"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-6 px-6 py-5 text-left md:px-8 md:py-6"
              >
                <span className="font-display text-2xl text-muted-foreground md:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-base md:text-2xl">
                  {f.q}
                </span>
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-lg transition-all group-hover:border-primary group-hover:bg-primary/10 ${
                    isOpen ? "rotate-45 bg-primary text-foreground border-transparent" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pl-[5.25rem] text-muted-foreground md:px-8 md:pb-8 md:pl-[6rem]">
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
