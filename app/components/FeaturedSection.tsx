import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function FeaturedSection() {
  return (
    <section className="bg-[#111111] py-16 sm:py-20 md:py-32 lg:py-[180px] px-6 md:px-16 lg:px-20 relative overflow-hidden flex flex-col justify-center border-b border-[#2a2a2a] w-full">
      {/* Background Graphic */}
      <div className="absolute right-[-150px] md:right-[-250px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] text-white opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.1" className="w-full h-full">
          <g transform="translate(50, 50) rotate(-18)">
            {[0, 72, 144, 216, 288].map(angle => (
               <path key={angle} transform={`rotate(${angle})`} d="M 0 0 C 15 -10, 45 -25, 0 -50 C -45 -25, -15 -10, 0 0" />
            ))}
          </g>
        </svg>
      </div>

      <ScrollReveal className="max-w-[1550px] mx-auto w-full relative z-10 flex flex-col items-start xl:px-4">
        <div className="flex items-center gap-3 mb-6 md:mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8aff20]"></span>
          <span className="text-[14px] md:text-[16px] font-medium text-[#888] tracking-wide">
            {'{'}01{'}'} — Biz Kimiz?
          </span>
        </div>

        <h2 className="text-[2.35rem] sm:text-[3rem] md:text-[5.5rem] lg:text-[7rem] leading-[1.08] sm:leading-[1.03] tracking-[-0.04em] font-normal text-white max-w-[1200px] mb-8 sm:mb-12 md:mb-[72px]">
          <span className="block">Hikâyeleri Görüntüye Dönüştüren</span>
          <span className="block">Yapım Şirketi</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center w-full mb-10 sm:mb-16">
          <div className="text-[16px] sm:text-[18px] md:text-[20px] text-[#888] leading-[1.6]">
            Meridyen Film Yapım nedir ve ne iş yapar? Meridyen Film Yapım, 2010 yılından bu yana sinema, televizyon ve dijital mecralar için profesyonel içerik üreten bir yapım şirketidir. İstanbul merkezli şirketimiz; yaratıcı fikirlerin geliştirilmesinden senaryolaştırma süreçlerine, ana çekim prodüksiyonlarından şirket içi post-prodüksiyon (kurgu, renk, ses) aşamalarına kadar tüm süreçleri uçtan uca yönetir.
          </div>
          <div className="rounded-[24px] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80" alt="Sinematik kamera arkası" className="w-full h-auto object-cover aspect-[4/3]" />
          </div>
        </div>

        <div className="w-full text-center mt-6 mb-10 sm:mt-8 sm:mb-16">
          <p className="text-[17px] sm:text-[20px] md:text-[24px] lg:text-[28px] font-medium text-white italic leading-[1.45]">
            "Hikâye, sahnenin önünde kurulmaz — bir ekibin ortak nefesinde kurulur."
          </p>
          <p className="text-[#888] mt-4">— Kurucu Yönetim Kurulu</p>
        </div>

        <div>
           <button className="relative group bg-[#8aff20] hover:bg-[#7eef1b] text-[#111] w-full sm:w-auto pl-7 pr-3 py-3 sm:pl-8 md:pl-10 md:pr-4 md:py-4 rounded-full flex sm:inline-flex items-center justify-between sm:justify-start gap-6 md:gap-8 text-[17px] sm:text-[18px] md:text-[21px] font-medium transition-all shadow-[0_0_50px_rgba(138,255,32,0.25)] hover:shadow-[0_0_80px_rgba(138,255,32,0.4)] z-20">
              Proje Başlat
              <span className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-[#111]" strokeWidth={2.5} />
              </span>
            </button>
        </div>
      </ScrollReveal>
    </section>
  );
}
