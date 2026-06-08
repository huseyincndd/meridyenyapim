import React from 'react';

const testimonials = [
  {
    rating: "5.0",
    text: "Set disiplini ve prodüksiyon yönetimi konusunda sektörde denk geldiğim en profesyonel ekip. Pre-prodüksiyon aşamasındaki titizlikleri, çekim sürecinde hiçbir sürprizle karşılaşmamamızı sağladı.",
    name: "Ahmet Yılmaz (Yönetmen)",
    avatarUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=80"
  },
  {
    rating: "5.0",
    text: "Post-prodüksiyon süreçlerindeki hızları ve renk derecelendirmedeki estetik anlayışları beklentilerimizin çok ötesindeydi. Markamızın vizyonunu tam olarak ekrana yansıttılar.",
    name: "Zeynep Kaya (Marka Müdürü)",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
  },
  {
    rating: "5.0",
    text: "Uluslararası festival standartlarında bir prodüksiyon kalitesini yerel bütçelerle nasıl elde edeceklerini çok iyi biliyorlar. Ortak yapım sürecimiz son derece verimli geçti.",
    name: "Maria Carvalho (Prodüktör)",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
  },
  {
    rating: "5.0",
    text: "Dikey dizi formatındaki yaratıcı süreç yönetimleri etkileyiciydi. Mobil tüketim dinamiklerini çok iyi kavramışlar; her sahneyi platforma göre optimize ettiler.",
    name: "Elif Sarıoğlu (Dijital İçerik Direktörü)",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  }
];

function TestimonialCard({ rating, text, name, avatarUrl }: { rating: string, text: string, name: string, avatarUrl: string }) {
  return (
    <div className="bg-[#151515] border border-[#2a2a2a] rounded-[24px] p-8 md:p-10 flex flex-col w-[340px] md:w-[420px] h-full shrink-0 hover:bg-[#1a1a1a] transition-colors duration-300">
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-3">
          <span className="text-white text-[13px] font-semibold tracking-wide">{rating} <span className="text-[#666] font-medium">/ 5</span></span>
          <div className="flex items-center gap-[3px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i === 4 && rating === "4.5" ? "#333" : "#8aff20"}>
                <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
              </svg>
            ))}
          </div>
        </div>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#2a2a2a">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <p className="text-[17px] md:text-[20px] text-white leading-[1.6] font-normal tracking-[-0.01em] mb-12">
        {text}
      </p>

      <div className="flex items-center gap-4 mt-auto pt-4">
        <img src={avatarUrl} alt={name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover grayscale opacity-80" />
        <span className="text-[#aaa] text-[15px] font-medium tracking-tight">{name}</span>
      </div>
    </div>
  );
}

export function TestimonialsMarquee() {
  const cards = testimonials.concat(testimonials);
  
  return (
    <div className="bg-[#111111] pb-24 md:pb-32 lg:pb-[180px] overflow-hidden flex relative w-full pt-4 md:pt-10">
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-full">
        <div className="flex animate-marquee min-w-full shrink-0 items-stretch" style={{ animationDuration: '120s' }}>
          {cards.map((t, i) => (
            <div className="px-3 sm:px-4 shrink-0 flex" key={i}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee min-w-full shrink-0 items-stretch" aria-hidden="true" style={{ animationDuration: '120s' }}>
          {cards.map((t, i) => (
            <div className="px-3 sm:px-4 shrink-0 flex" key={i + 'dup'}>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
