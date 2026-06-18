import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FallbackImage } from "@/components/site/FallbackImage";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | Meridyen Film Yapım | Film, Dizi ve Reklam Filmi Yapımcılığı",
  description:
    "Sinema filmi, dizi, reklam filmi, dikey dizi ve post-prodüksiyon hizmetleri. Meridyen Film Yapım'ın İstanbul merkezli uçtan uca yapım çözümleri.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/hizmetler",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    q: "Sadece bir hizmet kalemi için çalışıyor musunuz, yoksa tüm süreci mi yönetiyorsunuz?",
    a: "Her ikisi de mümkündür. Projelerimiz ekseriyetle fikir aşamasından nihai yayın teslimine kadar uçtan uca yönetilir. Ancak endüstriyel esnekliğimiz gereği; harici projeleriniz için yalnızca post-prodüksiyon stüdyosu kullanımı, yalnızca saha çekim yönetimi veya yalnızca senaryo geliştirme gibi bağımsız tekil hizmetler de sunmaktayız."
  },
  {
    q: "Bir reklam filmi projesi ne kadar sürer?",
    a: "Projenin kreatif kapsamına, senaryonun mekan/cast karmaşıklığına ve post-prodüksiyon gereksinimlerine bağlı olarak takvim değişiklik gösterir. Pre-prodüksiyon aşamasından nihai teslimata kadar olan tüm süreç, çekim öncesinde şeffaf bir iş planıyla sunulur ve taahhüt edilen tarihte teslim edilir."
  },
  {
    q: "İstanbul dışında veya yurt dışında çekim yapıyor musunuz?",
    a: "Evet. Meridyen Film Yapım olarak hem Türkiye genelinde hem de yurt dışı bölgelerde saha ve set yönetimi sağlıyoruz. Aynı zamanda, Türkiye'de çekim gerçekleştirmek isteyen yabancı yapım şirketlerine de yerel servis prodüksiyonu ve hat yapımcılığı desteği veriyoruz."
  },
  {
    q: "Dikey dizi projesi için bütçe nasıl belirlenir?",
    a: "Dikey dizi bütçesi; toplam bölüm sayısına, bölüm sürelerine, planlanan ana çekim günlerine, oyuncu kadrosunun ölçeğine ve projenin yayınlanacağı platformun teknik teslim gereksinimlerine göre şekillenir. Brifing sonrasında şeffaf bir bütçe planı hazırlanır."
  },
  {
    q: "Ortak yapım (Co-production) projelerinde yer alıyor musunuz?",
    a: "Evet. Meridyen Film Yapım, proje bazlı olarak ulusal ve uluslararası ortak yapım modellerinde yapım ortağı olarak yer alabilmektedir. Ortak yapım süreçleri, yasal mevzuatlara ve uluslararası sektörel standartlara tam uyumlu olarak yürütülür."
  },
  {
    q: "Post-prodüksiyon hizmetleriniz harici projelere açık mı?",
    a: "Evet. Kurgu, ses tasarımı, renk düzenleme ve görsel efekt süreçlerini kapsayan post-prodüksiyon altyapımız, şirket dışındaki bağımsız yönetmen, yapımcı ve ajansların harici projelerine de bağımsız bir servis olarak sunulmaktadır."
  },
  {
    q: "Hizmet süreçlerinizde oyunculardan veya başvuranlardan ücret talep edilir mi?",
    a: "Hayır. Meridyen Film Yapım bir yapım şirketi olup, etik yapımcılık ilkeleri gereği üstlendiği projelerin hiçbir aşamasında oyuncu adaylarından veya katılımcılardan kayıt, dosya, albüm ya da üyelik ücreti talep etmez."
  },
  {
    q: "Projeleriniz için teknik ve operasyonel standartlarınız nelerdir?",
    a: "Tüm prodüksiyon ve post-prodüksiyon süreçleri; küresel sinema, televizyon ve dijital platformların (Netflix, Amazon Prime vb.) teknik kabul şartnamelerine, yasal KVKK mevzuatlarına ve telif hakları yönergelerine tam uyumlu olarak yürütülmektedir."
  }
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "MovieProductionCompany",
      "name": "Meridyen Film Yapım",
      "url": "https://www.meridyenfilm.com",
      "legalName": "YENİ PRODÜKSİYON REKLAM HİZMETLERİ SANAYİ VE TİCARET LİMİTED ŞİRKETİ",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Yapım Hizmetleri",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Post-Prodüksiyon",
              "url": "https://www.meridyenfilm.com/hizmetler/post-produksiyon",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Reklam Filmi Prodüksiyonu",
              "url": "https://www.meridyenfilm.com/hizmetler/reklam-filmi",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dizi Yapımı",
              "url": "https://www.meridyenfilm.com/hizmetler/dizi-yapimi",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Sinema Filmi Yapımı",
              "url": "https://www.meridyenfilm.com/hizmetler/sinema-filmi",
            },
          }
        ],
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Film Yapım Süreci",
    "description": "Meridyen Film Yapım bünyesinde bir projenin fikirden yayına kadar geçtiği 5 temel uçtan uca yapım aşaması.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Geliştirme",
        "text": "Fikir, kreatif konsept, senaryo, dramaturji analizi ve finansal bütçe planlaması süreçleri yürütülür.",
      },
      {
        "@type": "HowToStep",
        "name": "Planlama",
        "text": "Cast (oyuncu seçimi), mekan keşfi, yasal izinlerin alınması ve operasyonel çekim takvimi (Pre-Production) organize edilir.",
      },
      {
        "@type": "HowToStep",
        "name": "Prodüksiyon",
        "text": "Profesyonel teknik ekip, reji kadrosu ve 4K/8K sinematik kamera-ışık ekipmanlarıyla ana çekimler sahada gerçekleştirilir.",
      },
      {
        "@type": "HowToStep",
        "name": "Post-Prodüksiyon",
        "text": "Şirket içi stüdyolarımızda kurgu, ses tasarımı, görsel efekt (VFX) ve sinematik renk derecelendirme bandı tamamlanır.",
      },
      {
        "@type": "HowToStep",
        "name": "Yayın ve Dağıtım",
        "text": "Uluslararası festival başvuruları, sinema vizyon organizasyonu veya dijital platform teslim şartnamelerine uygun teknik dağıtım sağlanır.",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://www.meridyenfilm.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Hizmetler",
        "item": "https://www.meridyenfilm.com/hizmetler",
      },
    ],
  },
];

const services = [
  {
    id: "post",
    title: "Post-Prodüksiyon",
    geo: "Post-Prodüksiyon Stüdyosu",
    desc: "Sahada çekimleri tamamlanan ham görüntüler, stüdyomuzda kurgu (montaj), ses tasarımı, miksaj, görsel efekt (VFX) ve sinematik renk derecelendirme (Color Grading) aşamalarından geçerek nihai haline ulaşır. Kendi yapımlarımızın yanı sıra, harici sinema, dizi ve reklam projelerine de stüdyo hizmeti sağlıyoruz.",
    scope: [
      "Kurgu (montaj) ve alternatif versiyon yönetimi",
      "Sinematik renk derecelendirme (Color Grading)",
      "Ses tasarımı, miksaj ve dublaj koordinasyonu",
      "Görsel efekt (VFX) ve temizlik (cleanup) işlemleri",
      "Uluslararası teknik teslim (delivery) şartnamelerine uygun çıktı",
      "Harici projelere yalnızca post-prodüksiyon hizmeti"
    ],
    link: "/hizmetler/post-produksiyon",
    image: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/Meridyen%20film%20yap%C4%B1m%20Post-Prod%C3%BCksiyon.webp"
  },
  {
    id: "reklam",
    title: "Reklam Filmleri",
    geo: "Kurumsal Reklam Filmi Çekimi",
    desc: "Markaların kimliğini ve mesajını sinematik bir dille aktaran reklam filmleri üretiyoruz. Süreç; markadan alınan kreatif brifing ile başlar, senaryo ve storyboard onayıyla devam eder, profesyonel set ortamında çekim ve post-prodüksiyonda marka mesajının optimize edilmesiyle tamamlanır. Taahhüt edilen teslim tarihi, şeffaf iş planıyla baştan netleştirilir.",
    scope: [
      "Kreatif konsept geliştirme ve senaryo yazımı",
      "Storyboard ve çekim öncesi görselleştirme",
      "Cast seçimi, mekan keşfi ve set organizasyonu",
      "TV, dijital ve sosyal medya formatlarında çoklu versiyon üretimi",
      "Marka uyumlu renk derecelendirme ve ses miksajı"
    ],
    link: "/hizmetler/reklam-filmi",
    image: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/Meridyen%20film%20yap%C4%B1m%20Reklam%20Filmleri.webp"
  },
  {
    id: "dizi",
    title: "Dizi Yapımları",
    geo: "Dijital Platform Dizi Prodüksiyonu",
    desc: "Televizyon kanalları ve global dijital platformlar için çok bölümlü dizi projeleri geliştiriyoruz. Uzun soluklu yapımlar; sürdürülebilir bütçe yönetimi, geniş oyuncu kadrosu koordinasyonu ve bölüm bazlı teslim disiplini gerektirir. Meridyen Film Yapım, dizi yapımının tüm operasyonel yükünü tek merkezden yönetir.",
    scope: [
      "Konsept geliştirme, pilot bölüm senaryosu ve sezon planlaması",
      "Platform teknik şartnamelerine (delivery spec) tam uyumlu üretim",
      "Cast direktörlüğü ve geniş kadro koordinasyonu",
      "Bölüm bazlı çekim takvimi ve set lojistiği",
      "Sezonluk post-prodüksiyon hattı: kurgu, renk, ses, teslim"
    ],
    link: "/hizmetler/dizi-yapimi",
    image: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/Meridyen%20film%20yap%C4%B1m%20Dizi%20Yap%C4%B1mlar%C4%B1.webp"
  },
  {
    id: "sinema",
    title: "Sinema Filmleri",
    geo: "Uzun Metraj Yapım Şirketi",
    desc: "Uzun metraj sinema filmi yapımı; senaryo geliştirme ve dramaturji çalışmasından finansman planlamasına, çekim yönetiminden festival ve vizyon dağıtımına uzanan çok katmanlı bir süreçtir. Meridyen Film Yapım, bağımsız sinema diliyle ürettiği uzun metraj projelerde bu sürecin tamamını yönetir.",
    scope: [
      "Senaryo geliştirme, dramaturji analizi ve senaryo doktorluğu",
      "Ulusal (Bakanlık, TRT) ve uluslararası (Eurimages) fon başvuru desteği",
      "Ortak yapım (co-production) yapılandırması",
      "4K/8K sinematik kamera sistemleriyle ana çekim yönetimi",
      "Festival stratejisi, vizyon organizasyonu ve dijital platform teslimi"
    ],
    link: "/hizmetler/sinema-filmi",
    image: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/meridyen%20film%20yap%C4%B1m%20Sinema%20Filmleri.webp"
  }
];


const processSteps = [
  { title: "Geliştirme", desc: "Fikir, senaryo, dramaturji ve bütçe planlaması." },
  { title: "Planlama", desc: "Cast, mekan keşfi, izinler ve çekim takvimi (Pre-Production)." },
  { title: "Prodüksiyon", desc: "Profesyonel ekip ve 4K/8K ekipmanla ana çekim." },
  { title: "Post-Prodüksiyon", desc: "Kurgu, ses, VFX ve renk derecelendirme." },
  { title: "Yayın ve Dağıtım", desc: "Festival, vizyon veya platform teslimi." }
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden scroll-smooth">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 border-b border-border">
          <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[6.5rem] leading-[1.1] max-w-5xl animate-in slide-in-from-bottom-8 fade-in duration-700">
              Fikirden Vizyona: <br className="hidden md:block" />
              <span className="italic font-serif text-muted-foreground">Uçtan Uca Yapım Hizmetleri</span>
            </h1>
            <p className="mt-8 max-w-4xl text-lg md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              Meridyen Film Yapım; sinema filmleri, televizyon dizileri, reklam filmleri, dikey dizi formatları ve post-prodüksiyon alanlarında uçtan uca yapım hizmetleri sunmaktadır. Tüm projeler; fikir geliştirme ve senaryolaştırma aşamasından çekim yönetimine, şirket içi stüdyolarda yürütülen kurgu, ses tasarımı ve renk derecelendirme süreçlerinden nihai teslim ve dağıtıma kadar tek çatı altında, dış kaynak kullanılmadan yürütülür.
            </p>
          </div>
        </section>

        {/* STICKY ANCHOR MENU */}
        <div className="sticky top-[73px] z-40 w-full bg-background/80 backdrop-blur-xl border-b border-border py-4 hidden md:block">
          <div className="mx-auto max-w-7xl px-6 flex items-center justify-center gap-8">
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>

        {/* HİZMET BLOKLARI */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 space-y-32 md:space-y-48">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div id={service.id} key={service.id} className="scroll-mt-32 group">
                <div className={`flex flex-col gap-12 lg:gap-24 ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-primary" /> {service.geo}
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em] mb-6">{service.title}</h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <div className="mb-10">
                      <h4 className="font-bold text-foreground mb-4 uppercase tracking-widest text-sm">Kapsam:</h4>
                      <ul className="space-y-3">
                        {service.scope.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={service.link} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all">
                      Detayları İncele 
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  </div>
                  
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <Link href={service.link} className="block relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-border bg-muted/30">
                      <FallbackImage
                        src={service.image}
                        alt={`Meridyen Film Yapım ${service.title} — İstanbul`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Logo Overlay */}
                      <div className="absolute bottom-6 right-6 z-10 w-12 md:w-16 drop-shadow-md">
                        <img 
                          src="https://villaqrmenu.b-cdn.net/meridyenfilmyapim/meridyen-film-yapim-logo.webp" 
                          alt="Meridyen Film Yapım Logo" 
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ORTA SÜREÇ ŞERİDİ (TIMELINE) */}
        <section className="bg-muted/30 border-y border-border py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="font-display text-4xl md:text-5xl tracking-[-0.035em]">Film <span className="italic font-serif text-muted-foreground">Yapım Süreci.</span></h2>
            </div>
            
            {/* Desktop Horizontal / Mobile Vertical Timeline */}
            <div className="relative">
              {/* Line */}
              <div className="absolute left-6 top-0 h-full w-[2px] bg-border md:left-0 md:top-6 md:h-[2px] md:w-full" />
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 relative z-10">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="relative pl-16 md:pl-0">
                    {/* Node */}
                    <div className="absolute left-0 top-0 grid h-12 w-12 shrink-0 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground font-display text-xl md:left-1/2 md:-translate-x-1/2 md:-top-6 shadow-sm">
                      0{idx + 1}
                    </div>
                    
                    <div className="md:pt-12 md:text-center">
                      <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SIKÇA SORULAN SORULAR */}
        <section className="mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em]">Sıkça Sorulan <span className="italic font-serif text-muted-foreground">Sorular.</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-[2rem] border border-border bg-card p-6 md:p-8 open:bg-muted/30 transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between font-display text-xl md:text-2xl list-none [&::-webkit-details-marker]:hidden outline-none">
                  <span className="pr-8">{f.q}</span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-xl transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-background group-open:border-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                  </span>
                </summary>
                <div className="mt-8 text-muted-foreground leading-relaxed text-lg animate-in fade-in slide-in-from-top-4 duration-300 max-h-0 overflow-hidden group-open:max-h-[1000px] group-open:overflow-visible transition-[max-height]">
                  <p>{f.a}</p>
                </div>
              </details>
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
                Proje Teklifi Gönder
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link href="/oyuncu-basvurusu" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-border hover:bg-card px-8 py-4 text-lg font-semibold transition-all group">
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
