import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function ProjectCards() {
  return (
    <section className="bg-[#111111] border-b border-[#2a2a2a] w-full">
      <ScrollReveal className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Card */}
        <div className="p-4 pt-8 pb-4 sm:p-5 sm:pt-14 sm:pb-5 lg:p-6 lg:pt-16 lg:pb-6 xl:p-8 xl:pt-20 xl:pb-8 border-b lg:border-b-0 lg:border-r border-[#2a2a2a] flex flex-col group hover:bg-[#151515] transition-colors duration-500 cursor-pointer">
          <div className="px-1 sm:px-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <div className="text-[13px] md:text-[14px] font-semibold tracking-tight">
              <span className="text-[#8aff20]">{"{"}</span>
              <span className="text-white mx-1.5">Uzun Metraj Yapım Şirketi</span>
              <span className="text-[#8aff20]">{"}"}</span>
            </div>
            <div className="text-[#666] text-[13px] md:text-[14px] font-medium">Vizyonda</div>
          </div>
          
          <h3 className="px-2 sm:px-4 text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] leading-[1.1] font-normal tracking-[-0.03em] text-white mb-2">
            Sinema Filmleri
          </h3>
          
          <p className="px-2 sm:px-4 text-[#777] text-[13px] md:text-[14px] mb-8 lg:mb-12">
            Ulusal ve uluslararası vizyon ile festival hedefli uzun metraj yapımlar.
          </p>

          <div className="mt-auto rounded-[12px] md:rounded-[16px] overflow-hidden w-full bg-[#1a1a1a]">
            <img 
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80" 
              alt="Sinema Filmleri" 
              className="w-full h-auto aspect-[1.1] sm:aspect-[1.3] md:aspect-[1.4] lg:aspect-[1.15] xl:aspect-[1.3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="p-4 pt-8 pb-4 sm:p-5 sm:pt-14 sm:pb-5 lg:p-6 lg:pt-16 lg:pb-6 xl:p-8 xl:pt-20 xl:pb-8 flex flex-col group hover:bg-[#151515] transition-colors duration-500 cursor-pointer">
          <div className="px-1 sm:px-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <div className="text-[13px] md:text-[14px] font-semibold tracking-tight">
              <span className="text-[#8aff20]">{"{"}</span>
              <span className="text-white mx-1.5">Dijital Platform Dizi Prodüksiyonu</span>
              <span className="text-[#8aff20]">{"}"}</span>
            </div>
            <div className="text-[#666] text-[13px] md:text-[14px] font-medium">Post-Prodüksiyon</div>
          </div>
          
          <h3 className="px-2 sm:px-4 text-[1.6rem] sm:text-[1.8rem] lg:text-[2rem] xl:text-[2.2rem] leading-[1.1] font-normal tracking-[-0.03em] text-white mb-2">
            Dizi Yapımları
          </h3>
          
          <p className="px-2 sm:px-4 text-[#777] text-[13px] md:text-[14px] mb-8 lg:mb-12">
            Televizyon kanalları ve global dijital platformlar için geliştirilen dizi projeleri.
          </p>

          <div className="mt-auto rounded-[12px] md:rounded-[16px] overflow-hidden w-full bg-[#1a1a1a]">
            <img 
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=1200&q=80" 
              alt="Dizi Yapımları" 
              className="w-full h-auto aspect-[1.1] sm:aspect-[1.3] md:aspect-[1.4] lg:aspect-[1.15] xl:aspect-[1.3] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export function ProjectCardsRow2() {
  return (
    <section className="bg-[#111111] border-b border-[#2a2a2a] w-full">
      <ScrollReveal className="w-full grid grid-cols-1 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="p-4 pt-8 pb-4 sm:p-5 sm:pt-14 sm:pb-5 lg:p-6 lg:pt-16 lg:pb-6 xl:p-8 xl:pt-20 xl:pb-8 border-b lg:border-b-0 lg:border-r border-[#2a2a2a] flex flex-col group hover:bg-[#151515] transition-colors duration-500 cursor-pointer">
          <div className="px-1 sm:px-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <div className="text-[13px] md:text-[14px] font-semibold tracking-tight">
              <span className="text-[#8aff20]">{"{"}</span>
              <span className="text-white mx-1.5">Kurumsal Reklam Filmi Çekimi</span>
              <span className="text-[#8aff20]">{"}"}</span>
            </div>
            <div className="text-[#666] text-[13px] md:text-[14px] font-medium">Geliştirme Sürecinde</div>
          </div>
          
          <h3 className="px-2 sm:px-4 text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] leading-[1.1] font-normal tracking-[-0.03em] text-white mb-2">
            Reklam Filmleri
          </h3>
          
          <p className="px-2 sm:px-4 text-[#777] text-[13px] md:text-[14px] mb-8 lg:mb-12">
            Marka kimliğini ve prestijini güçlendiren sinematik reklam kampanyaları.
          </p>

          <div className="mt-auto rounded-[12px] md:rounded-[16px] overflow-hidden w-full bg-[#1a1a1a]">
            <img 
              src="https://images.unsplash.com/photo-1604998103924-89e012e5265a?auto=format&fit=crop&w=800&q=80" 
              alt="Reklam Filmleri" 
              className="w-full h-auto aspect-[1.1] sm:aspect-[1.3] md:aspect-[1.4] lg:aspect-[1.15] xl:aspect-[1.2] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="p-4 pt-8 pb-4 sm:p-5 sm:pt-14 sm:pb-5 lg:p-6 lg:pt-16 lg:pb-6 xl:p-8 xl:pt-20 xl:pb-8 border-b lg:border-b-0 lg:border-r border-[#2a2a2a] flex flex-col group hover:bg-[#151515] transition-colors duration-500 cursor-pointer">
          <div className="px-1 sm:px-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
            <div className="text-[13px] md:text-[14px] font-semibold tracking-tight">
              <span className="text-[#8aff20]">{"{"}</span>
              <span className="text-white mx-1.5">Dikey Dizi Formatı</span>
              <span className="text-[#8aff20]">{"}"}</span>
            </div>
            <div className="text-[#666] text-[13px] md:text-[14px] font-medium">Vizyonda</div>
          </div>
          
          <h3 className="px-2 sm:px-4 text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] leading-[1.1] font-normal tracking-[-0.03em] text-white mb-2">
            Dijital İçerik Üretimi
          </h3>
          
          <p className="px-2 sm:px-4 text-[#777] text-[13px] md:text-[14px] mb-8 lg:mb-12">
            Yeni nesil mobil ve web platformları için optimize edilmiş dinamik formatlar.
          </p>

          <div className="mt-auto rounded-[12px] md:rounded-[16px] overflow-hidden w-full bg-[#1a1a1a]">
            <img 
              src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?auto=format&fit=crop&w=800&q=80" 
              alt="Dijital İçerik Üretimi" 
              className="w-full h-auto aspect-[1.1] sm:aspect-[1.3] md:aspect-[1.4] lg:aspect-[1.15] xl:aspect-[1.2] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        {/* Card 3 - Green CTA */}
        <div className="p-4 sm:p-5 lg:p-6 xl:p-8 flex flex-col group cursor-pointer border-[#2a2a2a]">
          <div className="w-full h-full rounded-[12px] md:rounded-[16px] bg-[#8aff20] flex flex-col items-center justify-center hover:bg-[#7eef1b] transition-colors duration-500 min-h-[200px] sm:min-h-[300px] xl:min-h-[400px]">
             <div className="flex w-full max-w-[280px] items-center justify-between gap-4 px-6 sm:w-auto sm:max-w-none sm:justify-center sm:px-0">
              <span className="text-[#111] text-[18px] sm:text-[20px] md:text-[24px] xl:text-[28px] font-normal tracking-tight">Tüm Projeleri Gör</span>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#111] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>

      </ScrollReveal>
    </section>
  );
}
