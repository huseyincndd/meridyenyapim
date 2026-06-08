import React from 'react';
import { Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

function ProcessStep({ 
  category, 
  number, 
  title, 
  time, 
  bullets 
}: { 
  category: string, 
  number: string, 
  title: string, 
  time: string, 
  bullets: { label: string, desc: string }[] 
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 py-10 lg:py-16 border-b border-[#2a2a2a] last:border-0 relative">
      {/* Time for mobile (top) or desktop (absolute right) */}
      <div className="flex lg:hidden items-center gap-2 text-[#777] text-[13px] md:text-[14px] mb-4">
        <Clock className="w-4 h-4" />
        <span>/{time}/</span>
      </div>

      {/* Category button */}
      <div className="lg:w-[200px] shrink-0">
        <div className="inline-flex items-center justify-center border border-[#333] text-white rounded-full px-5 py-2.5 text-[14px] font-medium cursor-default">
          {category}
        </div>
      </div>

      {/* Number and Content */}
      <div className="flex gap-6 lg:gap-10 flex-col sm:flex-row flex-1">
         {/* Number */}
         <div className="text-[32px] sm:text-[40px] font-medium leading-none tracking-tighter shrink-0 w-16">
           <span className="text-[#8aff20]">/</span>
           <span className="text-white">{number}</span>
         </div>
         
         {/* Content container */}
         <div className="flex flex-col gap-6 lg:gap-8 flex-1 lg:max-w-3xl lg:pr-32">
           <h3 className="text-[22px] sm:text-[26px] lg:text-[28px] xl:text-[32px] text-white font-medium tracking-tight leading-[1.2]">
             {title}
           </h3>
           
           <ul className="flex flex-col gap-3">
             {bullets.map((bullet, i) => (
               <li key={i} className="flex items-start gap-4 text-[14px] sm:text-[15px] leading-[1.6]">
                 <div className="mt-[6px] shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8aff20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                      <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07L19.07 4.93"/>
                    </svg>
                 </div>
                 <div className="text-[#999]">
                   <strong className="text-white font-medium">{bullet.label} </strong>
                   {bullet.desc}
                 </div>
               </li>
             ))}
           </ul>
         </div>

         {/* Time (Desktop absolute right) */}
         <div className="hidden lg:flex items-center gap-2 text-[#777] text-[14px] absolute right-4 lg:right-0 top-16">
            <Clock className="w-[14px] h-[14px]" />
            <span>/{time}/</span>
         </div>
      </div>
    </div>
  );
}

const steps = [
  {
    category: "Geliştirme",
    number: "01",
    title: "Fikirlerin projelendirilmesi ve kreatif yönün belirlenmesi",
    time: "Aşama 1",
    bullets: [
      { label: "Senaryo Yazımı:", desc: "Fikirlerin projelendirilmesi ve senaryo yazımı." },
      { label: "Dramaturji:", desc: "Dramaturji analizleri ve kreatif yönün belirlenmesi." }
    ]
  },
  {
    category: "Planlama",
    number: "02",
    title: "Bütçelendirme ve yasal izinlerin tamamlanması",
    time: "Aşama 2",
    bullets: [
      { label: "Pre-Production:", desc: "Bütçelendirme, cast direktörlüğü (oyuncu seçimi)." },
      { label: "Mekan & İzinler:", desc: "Mekan keşifleri ve yasal izinlerin tamamlanması." }
    ]
  },
  {
    category: "Prodüksiyon",
    number: "03",
    title: "Ana çekim süreçlerinin yürütülmesi",
    time: "Aşama 3",
    bullets: [
      { label: "Production:", desc: "Ödüllü yönetmen kadromuz ve son teknoloji ekipman altyapımızla ana çekim süreçlerinin yürütülmesi." }
    ]
  },
  {
    category: "Post-Prodüksiyon",
    number: "04",
    title: "Kurgu, ses tasarımı, VFX ve renk derecelendirme",
    time: "Aşama 4",
    bullets: [
      { label: "Stüdyo Hizmetleri:", desc: "Şirket içi stüdyomuzda kurgu, ses tasarımı, VFX ve profesyonel renk derecelendirme süreçlerinin tamamlanması." }
    ]
  },
  {
    category: "Yayın ve Dağıtım",
    number: "05",
    title: "Festivallere gönderim ve vizyon süreçleri",
    time: "Aşama 5",
    bullets: [
      { label: "Dağıtım:", desc: "Festivallere gönderim, sinema vizyon süreçleri veya dijital platform entegrasyonlarının yönetilmesi." }
    ]
  }
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#111111] py-16 sm:py-20 md:py-32 lg:py-[180px] px-6 md:px-16 lg:px-20 relative overflow-hidden flex flex-col justify-center border-b border-[#2a2a2a] w-full">
      <ScrollReveal className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col">
        <div className="flex items-center gap-3 mb-6 md:mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8aff20]"></span>
          <span className="text-[14px] md:text-[16px] font-medium text-[#888] tracking-wide">
            {'{'}03{'}'} — Yapım Sürecimiz
          </span>
        </div>

        <h2 className="text-[2.35rem] sm:text-[3rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7rem] leading-[1.08] sm:leading-[1.03] tracking-[-0.04em] font-normal text-white max-w-[1200px] mb-8 sm:mb-12 lg:mb-[60px]">
          Nasıl Çalışıyoruz?
        </h2>

        <div className="flex flex-col border-t border-[#2a2a2a]">
           {steps.map((step, idx) => (
             <ProcessStep key={idx} {...step} />
           ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
