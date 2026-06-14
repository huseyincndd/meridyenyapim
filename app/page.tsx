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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProductionCompany",
  name: "Meridyen Film Yapım",
  url: "https://meridyenfilm.com",
  logo: "https://meridyenfilm.com/logo.png",
  description: "İstanbul merkezli bağımsız film, dizi ve reklam yapım şirketi.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR"
  }
};

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
