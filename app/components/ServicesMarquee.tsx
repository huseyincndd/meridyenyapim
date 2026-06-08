import React from 'react';
import { StarIcon } from './Icons';

const servicesMarqueeItems = [
  "Netflix",
  "BluTV",
  "GAIN",
  "TRT",
  "Show TV",
  "Kanal D",
  "Star TV",
  "Exxen",
  "HBO Max",
  "Atv TV",
  "Fox Tv"
];

function ServicesMarqueeItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-6 sm:gap-14 mx-6 sm:mx-14 whitespace-nowrap">
      <div className="text-[26px] sm:text-[36px] font-medium tracking-tight text-[#888]">
        {label}
      </div>
      <StarIcon />
    </div>
  );
}

export function ServicesMarquee() {
  return (
    <div className="relative bg-[#1a1a1a] border-y border-[#2a2a2a] w-full">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none"></div>
      
      <div className="py-8 sm:py-10 overflow-hidden flex relative w-full">
        <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0">
          {servicesMarqueeItems.concat(servicesMarqueeItems).map((label, i) => (
            <ServicesMarqueeItem key={i} label={label} />
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0" aria-hidden="true">
          {servicesMarqueeItems.concat(servicesMarqueeItems).map((label, i) => (
            <ServicesMarqueeItem key={i + 'dup'} label={label} />
          ))}
        </div>
      </div>
    </div>
  );
}
