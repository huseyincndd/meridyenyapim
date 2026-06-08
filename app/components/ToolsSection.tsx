import React from 'react';
import { ScrollReveal } from './ScrollReveal';

function ToolCard({ iconUrl, name, description, percentage }: { iconUrl: string, name: string, description: string, percentage: number }) {
  return (
    <div className="bg-white rounded-[16px] md:rounded-[20px] p-6 lg:p-8 flex flex-col w-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
      <div className="flex items-center gap-5 sm:gap-6">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0">
           <img src={iconUrl} alt={name} className="w-full h-full object-contain" />
        </div>
        <div>
           <h4 className="text-[17px] sm:text-[19px] font-medium text-[#111] leading-tight mb-1 tracking-tight">{name}</h4>
           <p className="text-[14px] sm:text-[15px] text-[#888] font-medium">{description}</p>
        </div>
      </div>
      
      <div className="relative w-full mt-6">
        <div className="relative w-full h-[4px] bg-[#efefef] rounded-full">
           <div 
             className="absolute left-0 top-0 h-full bg-[#8aff20] rounded-full"
             style={{ width: `${percentage}%` }}
           ></div>
        </div>
        <div 
          className="absolute top-[2px] -translate-y-1/2 -translate-x-1/2 bg-[#8aff20] text-[#111] text-[10px] md:text-[11px] font-bold px-2 py-[2px] rounded-full flex items-center justify-center leading-none"
          style={{ left: `${percentage}%` }}
        >{percentage}%</div>
      </div>
    </div>
  );
}

export function ToolsSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20 md:py-32 lg:py-[160px] px-6 md:px-16 lg:px-20 relative overflow-hidden flex flex-col justify-center w-full">
       <ScrollReveal className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div className="flex flex-col items-start lg:items-end lg:text-right">
            <div className="flex items-center gap-3 mb-6 md:mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#8aff20]"></span>
              <span className="text-[14px] md:text-[16px] font-medium text-[#888] tracking-wide">
                {'{'}02{'}'} — Neden Meridyen Film Yapım?
              </span>
            </div>
            <h2 className="text-[2.35rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] leading-[1.08] sm:leading-[1.03] tracking-[-0.04em] font-normal text-[#111]">
              <span className="block">Fark Yaratan</span>
              <span className="block">Değerlerimiz</span>
            </h2>
          </div>

          {/* Right: Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <ToolCard 
              iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg"
              name="Yaratıcı Geliştirme"
              description="Fikirden senaryoya, her aşamada derinlikli dramaturji ve senaryo doktorluğu desteği."
              percentage={100}
            />
            <ToolCard 
              iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              name="Güvenilir Prodüksiyon"
              description="Bütçe planlamasından set yönetimine kadar uçtan uca, şeffaf ve profesyonel süreç yönetimi."
              percentage={100}
            />
            <ToolCard 
              iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
              name="Şirket İçi Post-Prodüksiyon"
              description="Kurgu, görsel efekt (VFX), ses tasarımı ve sinematik renk derecelendirme (Color Grading)."
              percentage={100}
            />
            <ToolCard 
              iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framer/framer-original.svg"
              name="Uluslararası Standartlar"
              description="Global dijital platformların ve prestijli film festivallerinin teknik ve hukuki mevzuatlarına tam uyumluluk."
              percentage={100}
            />
            <ToolCard 
              iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              name="Teknolojik Altyapı"
              description="4K/8K sinematik kamera sistemleri ve yeni nesil dijital içerik formatlarına uygun modern sistemler."
              percentage={100}
            />
            <ToolCard 
              iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
              name="Tek Noktadan Çözüm"
              description="Fikirden nihai dağıtıma kadar tüm süreçlerin tek bir muhatap üzerinden, eksiksiz yönetilmesi."
              percentage={100}
            />
          </div>
       </ScrollReveal>
    </section>
  );
}
