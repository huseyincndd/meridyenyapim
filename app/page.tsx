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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
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
