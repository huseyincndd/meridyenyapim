"use client";

import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { ContactXIcon, InstagramIcon, DribbbleIcon } from './Icons';
import { ScrollReveal } from './ScrollReveal';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] w-full flex flex-col relative overflow-hidden">
      {/* Top Bar */}
      <div className="w-full border-t border-b border-[#2a2a2a] px-6 md:px-12 lg:px-16 xl:px-24 py-8 md:py-10">
        <ScrollReveal className="max-w-[1600px] mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
             <span className="w-2.5 h-2.5 rounded-full bg-[#8aff20]"></span>
             <span className="text-[13px] sm:text-[14px] md:text-[16px] font-medium text-white tracking-wide">Yeni projeler için hazırız</span>
          </div>
          <div 
            onClick={scrollToTop}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <span className="hidden sm:inline text-[14px] md:text-[15px] font-medium text-[#888] group-hover:text-white transition-colors">Yukarı çık</span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center group-hover:bg-[#8aff20] transition-colors shrink-0">
              <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-[#111]" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Main Content */}
      <ScrollReveal className="max-w-[1600px] mx-auto w-full px-6 md:px-12 lg:px-16 xl:px-24 pt-14 pb-16 sm:pt-20 sm:pb-24 md:pt-32 md:pb-32 lg:pt-[160px] lg:pb-[180px] grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-12 xl:gap-24 relative z-10">
        
        {/* Abstract shapes SVG for left side */}
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[60vw] pointer-events-none z-0 opacity-[0.03] text-white">
           <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" stroke="currentColor" strokeWidth="1" preserveAspectRatio="xMinYMin slice">
             <path d="M 0 150 h 200 a 200 200 0 0 1 200 200 v 250 a 200 200 0 0 0 -200 200 h -200" />
             <line x1="400" y1="0" x2="400" y2="800" />
             <path d="M 400 350 a 200 200 0 0 1 200 -200 h 200" />
             <path d="M 400 600 a 200 200 0 0 0 200 200 h 200" />
             <path d="M 400 150 a 200 200 0 0 0 -200 200" />
             <path d="M 600 350 a 200 200 0 0 0 -200 250" />
           </svg>
        </div>

        {/* Left Col (7 cols) */}
        <div className="lg:col-span-7 relative z-10 flex flex-col justify-between">
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[1] sm:leading-[0.95] tracking-[-0.04em] font-normal text-white md:mb-20 lg:mb-0">
            Bir sonraki<br/>
            hikaye<br/>
            sizinki<br/>
            olsun<span className="text-[#8aff20]">.</span>
          </h2>
          
          <p className="text-[16px] md:text-[20px] text-[#888] font-medium tracking-tight mt-12 lg:mt-32">
            Meridyen Film Yapım, İstanbul merkezli, 16 yıllık deneyimle sinema, dizi, reklam ve yeni nesil medya üreten bağımsız bir yapım kuruluşudur.
          </p>
        </div>

        {/* Right Col (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start relative z-10 lg:pl-10">
          
          {/* Profile Block */}
          <div className="flex items-center gap-5 sm:gap-6 mb-16 md:mb-24">
            <div className="relative flex items-center">
              {/* Decorative shapes behind avatar */}
              <div className="flex -space-x-4 mr-1 sm:mr-2 opacity-30 text-[#aaaaaa]">
                <div className="w-5 sm:w-6 h-12 sm:h-14 border border-current rounded-l-full border-r-0"></div>
                <div className="w-5 sm:w-6 h-12 sm:h-14 border border-current rounded-l-full border-r-0 bg-[#111]"></div>
                <div className="w-5 sm:w-6 h-12 sm:h-14 border border-current rounded-l-full border-r-0 bg-[#111]"></div>
                <div className="w-5 sm:w-6 h-12 sm:h-14 border border-current rounded-l-full border-r-0 bg-[#111]"></div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" 
                alt="Meridyen Film Yapım" 
                className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full object-cover relative z-10 grayscale border border-[#333]"
              />
            </div>
            
            <div className="flex flex-col">
              <h4 className="text-[18px] sm:text-[20px] font-medium text-white tracking-tight">Meridyen Film Yapım</h4>
              <p className="text-[13px] sm:text-[14px] text-[#888] mb-2 sm:mb-3">Sinema ve Dijital Prodüksiyon</p>
              <div className="flex items-center gap-3">
                 <ContactXIcon className="w-[14px] h-[14px] sm:w-4 sm:h-4 text-[#888] hover:text-white cursor-pointer transition-colors" />
                 <InstagramIcon className="w-[14px] h-[14px] sm:w-4 sm:h-4 text-[#888] hover:text-white cursor-pointer transition-colors" />
                 <DribbbleIcon className="w-[14px] h-[14px] sm:w-4 sm:h-4 text-[#888] hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-10 md:mb-12">
            <span className="text-[12px] sm:text-[13px] font-semibold text-[#888] mb-2 tracking-wide uppercase">Bize Ulaşın</span>
            <a href="mailto:info@meridyenfilm.com" className="text-[22px] sm:text-[36px] lg:text-[42px] font-medium text-white tracking-tight hover:text-[#8aff20] transition-colors leading-none break-all sm:break-normal">
              info@meridyenfilm.com
            </a>
          </div>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#888] max-w-[420px] mb-10 md:mb-12 leading-[1.5] tracking-tight">
            Vizyonunuzu hayata geçirecek <span className="text-white font-medium">hızlı, güvenilir ve profesyonel</span> bir prodüksiyon ekibi arıyorsanız, bize ulaşın.
          </p>

          <button className="bg-[#8aff20] hover:bg-[#9bff3d] text-[#111] w-full sm:w-auto pl-6 pr-2 py-2.5 sm:py-2 rounded-[32px] flex items-center justify-between sm:justify-start gap-4 text-[16px] font-medium tracking-wide transition-all shadow-[0_0_30px_rgba(138,255,32,0.1)] hover:shadow-[0_0_40px_rgba(138,255,32,0.2)]">
            Proje Başlat
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-[20px] h-[20px] text-[#111]" strokeWidth={2.5} />
            </div>
          </button>

        </div>

      </ScrollReveal>

      {/* Bottom Footer Bar */}
      <div className="w-full bg-[#111111] px-6 md:px-12 lg:px-16 xl:px-24 py-8 relative z-10 border-t border-[#1a1a1a]">
        <div className="max-w-[1600px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6 text-center md:text-left text-[#888] text-[11px] sm:text-[13px] md:text-[14px]">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 11.5a7.5 7.5 0 0 1 7.5-7.5V11.5H4z" fill="#8aff20"/>
              <path d="M20 11.5a7.5 7.5 0 0 0-7.5-7.5V11.5H20z" fill="#8aff20"/>
              <path d="M4 12.5a7.5 7.5 0 0 0 7.5 7.5V12.5H4z" fill="#8aff20"/>
              <path d="M20 12.5a7.5 7.5 0 0 1-7.5 7.5V12.5H20z" fill="#8aff20"/>
            </svg>
            <span className="text-white font-semibold text-[17px] tracking-tight">MERİDYEN FİLM</span>
          </div>

          {/* Center */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span>© 2010 Meridyen Film Yapım. Tüm hakları saklıdır. İstanbul.</span>
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-[#aaa] sm:text-white font-medium text-[10px] sm:text-[13px] leading-relaxed max-w-[320px] sm:max-w-none">
              <span>Ticaret Sicil No: XXXXXX</span>
              <span className="hidden sm:inline">·</span>
              <span>MERSİS No: XXXXXXXXXXXXXXXX</span>
              <span className="hidden sm:inline">·</span>
              <span>Vergi Dairesi: Kadıköy / V.N: XXXXXXXXXX</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            <span className="text-[#888]">KVKK Aydınlatma Metni · Gizlilik Politikası</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
