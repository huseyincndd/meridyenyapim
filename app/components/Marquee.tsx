import React from 'react';
import { StarIcon } from './Icons';

const marqueeItems = [
  { value: "Global", label: "ortak prodüksiyon" },
  { value: "Sinemayı", label: "yeniden tanımlıyoruz" },
  { value: "İstanbul", label: "merkezli stüdyo" },
  { value: "Ödüllü", label: "ekip" },
];

function MarqueeItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex items-center gap-4 sm:gap-10 mx-4 sm:mx-10 whitespace-nowrap">
      <div className="text-[22px] sm:text-[32px] font-semibold tracking-tight">
        <span className="text-[#8aff20]">{value}</span>
        <span className="text-white ml-2">{label}</span>
      </div>
      <StarIcon />
    </div>
  );
}

export function Marquee() {
  return (
    <div className="relative bg-[#141414] border-y border-[#2a2a2a] w-full">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#141414] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#141414] to-transparent z-10 pointer-events-none"></div>
      
      <div className="py-5 sm:py-8 overflow-hidden flex relative w-full">
        <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0">
          {marqueeItems.concat(marqueeItems).map((item, i) => (
            <MarqueeItem key={i} value={item.value} label={item.label} />
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0" aria-hidden="true">
          {marqueeItems.concat(marqueeItems).map((item, i) => (
            <MarqueeItem key={i + 'dup'} value={item.value} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
