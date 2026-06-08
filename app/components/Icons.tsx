import React from 'react';

export function LogoIcon() {
  return (
    <div className="flex flex-wrap w-[22px] h-[22px] gap-[2px] rotate-45 origin-center">
      <div className="w-[10px] h-[10px] bg-[#a9ff26] rounded-tl-full rounded-tr-sm rounded-br-sm rounded-bl-sm"></div>
      <div className="w-[10px] h-[10px] bg-[#a9ff26] rounded-tr-full rounded-br-sm rounded-bl-sm rounded-tl-sm"></div>
      <div className="w-[10px] h-[10px] bg-[#a9ff26] rounded-bl-full rounded-br-sm rounded-tl-sm rounded-tr-sm"></div>
      <div className="w-[10px] h-[10px] bg-[#a9ff26] rounded-br-full rounded-bl-sm rounded-tl-sm rounded-tr-sm"></div>
    </div>
  );
}

export function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[18px] h-[18px] text-[#222]" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8aff20" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M12 2v20 M2 12h20 M4.93 4.93l14.14 14.14 M4.93 19.07L19.07 4.93"/>
    </svg>
  );
}

export const ContactXIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-2.804h4.813c-.046-2.158-1.571-2.977-2.483-3.011-1.392-.047-2.247 1.054-2.33 3.011zm-8.805-5.696c3.226 0 4.316.529 5.097 1.835.631 1.053.642 2.327.348 3.26-.525 1.666-2.228 2.062-2.923 2.146 1.48.246 2.87 1.157 3.07 2.949.197 1.761-.639 3.195-2.072 3.864-.812.38-2.618.441-4.137.441h-6.588v-14.502h7.205zm-1.892 5.867h1.498c.552 0 1.294-.037 1.761-.318.514-.308.775-.765.775-1.465 0-1.282-1.272-1.472-2.23-1.472h-1.804v3.255zm0 6.135h2.155c1.077 0 2.65-.224 2.65-1.859 0-1.706-1.545-1.921-2.637-1.921h-2.168v3.78z"/>
  </svg>
);

export const ContactChevronBg = () => {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-full sm:w-[800px] overflow-hidden pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" stroke="#e0e0e0" strokeWidth="1.5">
        <path d="M-50 50 L350 400 L-50 750" />
        <path d="M150 50 L550 400 L150 750" />
        <path d="M350 50 L750 400 L350 750" />
      </svg>
    </div>
  );
}

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12c2-4 8-6 12-6M6 16c4-2 10-2 14 0M9 20c3-3 9-5 13-5" />
  </svg>
);
