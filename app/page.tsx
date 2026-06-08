import Header from "./components/Header";
import Hero from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { FeaturedSection } from "./components/FeaturedSection";
import { ProjectCards, ProjectCardsRow2 } from "./components/ProjectCards";
import { ToolsSection } from "./components/ToolsSection";
import { ServicesMarquee } from "./components/ServicesMarquee";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { StatsAndTestimonialsSection } from "./components/StatsAndTestimonialsSection";
import { TestimonialsMarquee } from "./components/TestimonialsMarquee";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { StatsStripMarquee } from "./components/StatsStripMarquee";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans bg-[#fafafa] text-[#1a1a1a] overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 bg-[#F7F7F7] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://framerusercontent.com/images/LPWGL7rFF0pjhd6IZOMCT5H39XY.jpg)",
        }}
        aria-hidden
      />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <Hero />
        <Marquee />
        <FeaturedSection />
        <ProjectCards />
        <ProjectCardsRow2 />
        <ToolsSection />
        <ServicesMarquee />
        <HowItWorksSection />
        <StatsAndTestimonialsSection />
        <TestimonialsMarquee />
        <FAQSection />
        <ContactSection />
        <StatsStripMarquee />
        <FooterSection />
      </div>
    </div>
  );
}
