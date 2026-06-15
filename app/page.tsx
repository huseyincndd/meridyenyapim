import { Metadata } from "next";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBand } from "@/components/site/TrustBand";
import { Counters } from "@/components/site/Counters";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Press } from "@/components/site/Press";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Meridyen Film Yapım | İstanbul Merkezli Yapım Şirketi",
  description: "Meridyen Film Yapım; 2009 yılından bu yana sinema filmleri, televizyon dizileri ve reklam filmleri üreten İstanbul merkezli bağımsız bir yapım şirketidir.",
  alternates: {
    canonical: "https://meridyenfilm.com",
  },
  openGraph: {
    title: "Meridyen Film Yapım | İstanbul Merkezli Yapım Şirketi",
    description: "Meridyen Film Yapım; sinema filmleri, diziler ve reklam projeleri geliştirir.",
    url: "https://meridyenfilm.com",
    siteName: "Meridyen Film Yapım",
    locale: "tr_TR",
    type: "website",
  },
};

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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  }
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-background text-foreground">
        <Navbar />
        <Hero />
      </div>
      
      <div className="dark bg-background text-foreground">
        <TrustBand />
        <Counters />
      </div>
      
      <div className="bg-background text-foreground">
        <About />
      </div>
      
      <div className="dark bg-background text-foreground">
        <WhyUs />
      </div>
      
      <div className="bg-background text-foreground">
        <Services />
      </div>
      
      <div className="dark bg-background text-foreground">
        <Process />
      </div>
      
      <div className="bg-background text-foreground">
        <Projects />
      </div>
      
      <div className="dark bg-background text-foreground">
        <Press />
      </div>
      
      <div className="bg-background text-foreground">
        <Testimonials />
      </div>
      
      <div className="dark bg-background text-foreground">
        <Blog />
      </div>
      
      <div className="bg-background text-foreground border-t border-border">
        <Faq />
        <Contact />
      </div>
      
      <div className="dark bg-background text-foreground">
        <Footer />
      </div>
    </div>
  );
}
