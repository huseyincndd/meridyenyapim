import React from 'react';

const statsStripItems = [
  { value: "16+ /", label: "Yıllık Sektörel Deneyim" },
  { value: "100+ /", label: "Tamamlanan İçerik ve Proje" },
  { value: "20+ /", label: "Alanında Uzman Ekip Kadrosu" },
  { value: "45.000+ /", label: "Saat Profesyonel Prodüksiyon" },
];

function StatsStripItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex items-center gap-6 sm:gap-12 mx-6 sm:mx-12 whitespace-nowrap">
      <div className="text-[22px] sm:text-[28px] font-medium tracking-tight flex items-center gap-2">
        <span className="text-[#8aff20]">{value}</span>
        <span className="text-white">{label}</span>
      </div>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#8aff20]">
        <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07L19.07 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function StatsStripMarquee() {
  const items = statsStripItems.concat(statsStripItems, statsStripItems);
  
  return (
    <div className="bg-[#151515] py-8 sm:py-10 overflow-hidden flex relative w-full border-t border-[#2a2a2a]">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-r from-[#151515] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-l from-[#151515] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex animate-marquee min-w-full shrink-0 items-center" style={{ animationDuration: '100s' }}>
        {items.map((item, i) => (
          <StatsStripItem key={i} value={item.value} label={item.label} />
        ))}
      </div>
      <div className="flex animate-marquee min-w-full shrink-0 items-center" aria-hidden="true" style={{ animationDuration: '100s' }}>
        {items.map((item, i) => (
          <StatsStripItem key={i + 'dup'} value={item.value} label={item.label} />
        ))}
      </div>
    </div>
  );
}
