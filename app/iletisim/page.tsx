import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "İletişim | Meridyen Film Yapım | İstanbul",
  description:
    "Meridyen Film Yapım ile proje başlatmak veya başvuru yapmak için iletişime geçin. Adres: Moda Caddesi, Kadıköy / İstanbul. Telefon, e-posta ve başvuru formu.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/iletisim",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "İletişim — Meridyen Film Yapım",
      "url": "https://www.meridyenfilm.com/iletisim",
      "mainEntity": {
        "@type": "Organization",
        "name": "Meridyen Film Yapım",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+90-212-000-00-00",
            "contactType": "customer service",
            "email": "info@meridyenfilm.com",
            "areaServed": "TR",
            "availableLanguage": ["Turkish", "English"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "10:00",
              "closes": "19:00",
            },
          },
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Moda Caddesi",
          "addressLocality": "Kadıköy",
          "addressRegion": "İstanbul",
          "postalCode": "34710",
          "addressCountry": "TR",
        },
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Başvuruma ne kadar sürede dönüş yapılır?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tüm başvurular ve proje talepleri en kısa süre içinde değerlendirilir ve size whatsapp veya telefon ile dönüş yapılır. Yoğun dönemlerde bu süre kısa bir miktar uzayabilir.",
          },
        },
        {
          "@type": "Question",
          "name": "Ofise randevusuz gelebilir miyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Görüşmelerimiz randevu ile yürütülmektedir. Telefon, e-posta veya form üzerinden ön iletişim kurduktan sonra ofis ziyareti planlayabiliriz.",
          },
        },
        {
          "@type": "Question",
          "name": "Proje teklifi almak için hangi bilgileri iletmeliyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Formdaki \"Marka / Proje Başlat\" seçeneğini kullanarak projenizin türü, tahmini kapsamı ve hedef yayın mecrası hakkında kısa bir özet iletmeniz yeterlidir. Detaylı brifing görüşmesi sonrasında kapsamlı ve şeffaf bir teklif sunulur.",
          },
        },
      ],
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
          "name": "İletişim",
          "item": "https://www.meridyenfilm.com/iletisim",
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Başvuruma ne kadar sürede dönüş yapılır?",
    a: "Tüm başvurular ve proje talepleri en kısa süre içinde değerlendirilir ve size whatsapp veya telefon ile dönüş yapılır. Yoğun dönemlerde bu süre kısa bir miktar uzayabilir.",
  },
  {
    q: "Ofise randevusuz gelebilir miyim?",
    a: "Görüşmelerimiz randevu ile yürütülmektedir. Telefon, e-posta veya form üzerinden ön iletişim kurduktan sonra ofis ziyareti planlayabiliriz.",
  },
  {
    q: "Proje teklifi almak için hangi bilgileri iletmeliyim?",
    a: "Formdaki \"Marka / Proje Başlat\" seçeneğini kullanarak projenizin türü, tahmini kapsamı ve hedef yayın mecrası hakkında kısa bir özet iletmeniz yeterlidir. Detaylı brifing görüşmesi sonrasında kapsamlı ve şeffaf bir teklif sunulur.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
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
              İletişim ve <span className="italic font-serif text-muted-foreground">Başvuru</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              Yeni bir proje başlatmak, mevcut bir yapım için teklif almak ya da profesyonel yetenek havuzumuza katılmak için bize ulaşabilirsiniz. Tüm başvurular ve proje talepleri en kısa süre içinde yanıtlanır.
            </p>
          </div>
        </section>

        {/* İLETİŞİM İKİ SÜTUN */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* SOL SÜTUN (5/12) */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-8 tracking-[-0.035em]">Kurumsal Bilgiler</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Adres</h3>
                      <p className="text-muted-foreground leading-relaxed">Moda Caddesi<br/>Kadıköy / İstanbul 34710</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Telefon</h3>
                      <a href="tel:+902120000000" className="text-muted-foreground hover:text-primary transition-colors">+90 212 000 00 00</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">E-posta</h3>
                      <a href="mailto:info@meridyenfilm.com" className="text-muted-foreground hover:text-primary transition-colors">info@meridyenfilm.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Çalışma Saatleri</h3>
                      <p className="text-muted-foreground">Pazartesi – Cuma, 10:00 – 19:00<br/><span className="italic text-sm">(Randevu İle)</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sosyal Medya */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-display text-xl mb-6">Bizi Takip Edin</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { n: "Instagram", u: "https://www.instagram.com/meridyenfilm" },
                    { n: "YouTube", u: "https://www.youtube.com/@meridyenfilmyapim" },
                    { n: "LinkedIn", u: "https://www.linkedin.com/company" },
                    { n: "Vimeo", u: "https://vimeo.com" },
                    { n: "IMDb", u: "https://www.imdb.com" }
                  ].map((s, i) => (
                    <a key={i} href={s.u} target="_blank" rel="noopener noreferrer" className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-all">
                      {s.n}
                    </a>
                  ))}
                </div>
              </div>

              {/* Harita */}
              <div className="pt-8 border-t border-border">
                <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6508933458897!2d29.0210217765103!3d40.98906997135245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab8675122f30b%3A0x6e3c3b0df020df11!2sModa%20Cd.%2C%20Cafera%C4%9Fa%2C%2034710%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Meridyen Film Yapım — Kadıköy İstanbul ofis konumu"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* SAĞ SÜTUN (7/12) - FORM */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* SIKÇA SORULAN SORULAR */}
        <section className="mx-auto max-w-4xl px-6 mb-32 md:mb-48">
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
                <div className="mt-8 text-muted-foreground leading-relaxed text-lg animate-in fade-in slide-in-from-top-4 duration-300">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
