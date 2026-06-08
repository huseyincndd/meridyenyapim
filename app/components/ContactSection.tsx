import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { CornerDownRight } from 'lucide-react';
import { ContactXIcon, BehanceIcon, ContactChevronBg, InstagramIcon, DribbbleIcon } from './Icons';

function ContactCard({ 
  name, 
  icon: Icon, 
  colSpan = 1,
  variant = 'light' 
}: { 
  name: string, 
  icon: React.ElementType,
  colSpan?: 1 | 2,
  variant?: 'light' | 'green'
}) {
  return (
    <div className={`
      rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 flex flex-col justify-between items-start h-[140px] sm:h-[200px] md:h-[220px] 
      shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] 
      transition-all duration-300 group cursor-pointer hover:-translate-y-1 w-full
      ${variant === 'green' ? 'bg-[#8aff20]' : 'bg-white'}
      ${colSpan === 2 ? 'md:col-span-2' : 'col-span-1'}
    `}>
      <span className={`text-[16px] md:text-[18px] text-[#111] font-medium tracking-tight`}>{name}</span>
      {variant === 'green' ? (
        <div className="self-end mt-auto transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1">
           <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#111] stroke-[2]" />
        </div>
      ) : (
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#8aff20] flex items-center justify-center self-end group-hover:scale-110 transition-transform duration-300">
           <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#111]" />
        </div>
      )}
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="bg-[#fbfbfb] py-16 sm:py-20 md:py-32 lg:py-[180px] px-6 md:px-16 lg:px-20 relative flex flex-col justify-center items-center w-full overflow-hidden border-t border-[#e5e5e5]">
      <ContactChevronBg />
      
      <ScrollReveal className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col">
        {/* Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8aff20]"></span>
            <span className="text-[14px] md:text-[16px] font-medium text-[#888] tracking-wide">
              {'{'}06{'}'} — İletişim
            </span>
          </div>

          <h2 className="text-[2.35rem] sm:text-[3rem] md:text-[5.5rem] lg:text-[6.5rem] text-[#111] leading-[1.08] sm:leading-[1.05] tracking-[-0.04em] font-normal">
            Bize Ulaşın
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
          <ContactCard name="Moda Caddesi, Kadıköy / İstanbul" icon={ContactXIcon} />
          <ContactCard name="+90 212 000 00 00" icon={InstagramIcon} />
          <ContactCard name="info@meridyenfilm.com" icon={DribbbleIcon} />
          <ContactCard name="Hızlı WhatsApp Hattı" icon={BehanceIcon} />
          <ContactCard name="Proje Başlat" icon={CornerDownRight} colSpan={2} variant="green" />
        </div>
      </ScrollReveal>
    </section>
  );
}
