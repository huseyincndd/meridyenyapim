import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function StatsAndTestimonialsSection() {
  return (
    <section className="bg-[#111111] pt-16 sm:pt-20 md:pt-32 lg:pt-[180px] pb-10 sm:pb-12 px-6 md:px-16 lg:px-20 flex flex-col justify-center items-center w-full border-t border-[#2a2a2a]">
      <ScrollReveal className="w-full flex flex-col items-center">
      {/* 3 Cards */}
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-24 lg:mb-48">
        
        {/* Card 1 */}
        <div className="relative bg-[#8aff20] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden flex flex-col justify-between group shadow-sm transition-transform duration-500 hover:-translate-y-2">
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[240px] h-[240px] rounded-full border-[50px] border-white/20 pointer-events-none transition-transform duration-700 group-hover:scale-105"></div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full bg-white/20 pointer-events-none transition-transform duration-700 group-hover:scale-105"></div>
          
          <h3 className="text-[3.25rem] sm:text-[4rem] lg:text-[4.5rem] font-light text-[#111] leading-none relative z-10 tracking-tight">16+</h3>
          <div className="flex flex-col items-end text-right relative z-10 mt-auto">
            <span className="text-[13px] lg:text-[14px] font-medium text-[#222] mb-0.5">Yıllık</span>
            <span className="text-[18px] lg:text-[22px] font-normal text-[#111] leading-tight tracking-tight">sektörel deneyim</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2 hover:bg-[#1f1f1f]">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[240px] h-[240px] text-[#222] pointer-events-none transition-transform duration-700 group-hover:scale-105 mt-4">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
               <path d="M50 0 C 65 35, 100 50, 100 50 C 65 65, 50 100, 50 100 C 35 65, 0 50, 0 50 C 35 35, 50 0, 50 0" />
            </svg>
          </div>
          
          <h3 className="text-[3.25rem] sm:text-[4rem] lg:text-[4.5rem] font-light text-white leading-none relative z-10 tracking-tight">100+</h3>
          <div className="flex flex-col items-end text-right relative z-10 mt-auto">
            <span className="text-[13px] lg:text-[14px] font-medium text-white mb-0.5">Tamamlanan</span>
            <span className="text-[18px] lg:text-[22px] font-normal text-[#888] leading-tight tracking-tight">
               <span className="text-white">içerik</span> ve proje
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 h-[220px] sm:h-[260px] lg:h-[280px] overflow-hidden flex flex-col justify-between group shadow-sm transition-transform duration-500 hover:-translate-y-2">
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[240px] h-[240px] text-[#f0f0f0] pointer-events-none transition-transform duration-700 group-hover:scale-105">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
               <rect x="36" y="0" width="28" height="100" rx="3" />
               <rect x="0" y="36" width="100" height="28" rx="3" />
               <rect x="36" y="0" width="28" height="100" rx="3" transform="rotate(45 50 50)" />
               <rect x="0" y="36" width="100" height="28" rx="3" transform="rotate(45 50 50)" />
            </svg>
          </div>
          
          <h3 className="text-[3.25rem] sm:text-[4rem] lg:text-[4.5rem] font-light text-[#111] leading-none relative z-10 tracking-tight">20+</h3>
          <div className="flex flex-col items-end text-right relative z-10 mt-auto">
            <span className="text-[13px] lg:text-[14px] font-medium text-[#222] mb-0.5">Alanında</span>
            <span className="text-[18px] lg:text-[22px] font-normal text-[#888] leading-tight tracking-tight">
               uzman ekip kadrosu
            </span>
          </div>
        </div>

      </div>

      {/* Testimonials Header */}
      <div className="flex flex-col items-center text-center max-w-[900px] mx-auto w-full relative z-10">
         <div className="flex items-center justify-center gap-3 mb-8 md:mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8aff20]"></span>
          <span className="text-[14px] md:text-[16px] font-medium text-[#888] tracking-wide">
            {'{'}04{'}'} — Başarı Hikayeleri
          </span>
        </div>

        <h2 className="text-[2.35rem] sm:text-[3rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7rem] leading-[1.08] sm:leading-[1.05] tracking-[-0.04em] font-normal text-white">
          <span className="block">Sözlerimizi değil</span>
          <span className="block items-center justify-center">
            onları dinleyin
            <span className="text-[#8aff20] ml-1 font-medium">*</span>
          </span>
        </h2>
        
        <div className="mt-10 opacity-80 hover:opacity-100 transition-opacity cursor-default">
           <span className="text-[#8aff20] font-medium mr-2">*</span> 
           <span className="text-[#aaa] text-[14px] md:text-[16px] font-medium tracking-wide">Sektörel referanslar</span>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
