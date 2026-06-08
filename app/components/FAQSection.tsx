"use client";

import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    num: "01",
    question: "Meridyen Film Yapım ortak yapım (co-production) projelerini kabul ediyor mu?",
    answer: "Evet, hem ulusal (Bakanlık, TRT vb.) hem de uluslararası (Eurimages vb.) fonlu ortak yapım projelerini, kreatif ve finansal standartlarımıza uygunluğu doğrultusunda değerlendiriyoruz."
  },
  {
    num: "02",
    question: "Bir reklam veya marka içerikleri üretimi ne kadar sürer?",
    answer: "Projenin kapsamına ve senaryo karmaşıklığına bağlı olarak, pre-prodüksiyondan post-prodüksiyon süreçleri dahil nihai teslime kadar olan takvim, çekim öncesinde şeffaf bir iş planıyla sunulur ve taahhüt edilen tarihte eksiksiz teslim edilir."
  },
  {
    num: "03",
    question: "Uluslararası projelerde ve dış çekimlerde çalışıyor musunuz?",
    answer: "Evet, küresel standartlardaki teknik altyapımız, çok dilli ekibimiz ve uluslararası ortak yapım tecrübemizle hem Türkiye'deki yabancı yapımlara servis sağlıyor hem de yurt dışı projelerinde aktif rol alıyoruz."
  },
  {
    num: "04",
    question: "Dikey dizi ve dijital içerik üretiminde hangi standartları uyguluyorsunuz?",
    answer: "Mobil tüketim alışkanlıklarına uygun olarak 9:16 formatında, yüksek tempolu kurgu mimarisine sahip ve yeni nesil dijital platformların en güncel ses/görüntü algoritmalarıyla %100 uyumlu, yüksek kaliteli prodüksiyonlar üretiyoruz."
  },
  {
    num: "05",
    question: "Şirketiniz bünyesinde harici projeler için sadece post-prodüksiyon hizmeti sunuluyor mu?",
    answer: "Evet, kendi geliştirdiğimiz projelerin yanı sıra harici sinema, dizi ve reklam projelerine de kurgu, ses tasarımı, görsel efekt (VFX) ve sinematik renk derecelendirme (Color Grading) stüdyo hizmetleri sağlamaktayız."
  },
  {
    num: "06",
    question: "Meridyen Film Yapım bünyesindeki projelere senaryo veya oyuncu başvurusu nasıl yapılır?",
    answer: "Kreatif ekibimiz ve casting birimimiz tarafından değerlendirilmesini istediğiniz senaryo, sinopsis veya güncel oyuncu portfolyolarınızı web sitemizde yer alan \"Şimdi Başvur\" formu üzerinden, yasal haklarınızı koruyan KVKK metni onayıyla güvenle iletebilirsiniz. Şirketimiz, başvurulardan hiçbir ad altında kayıt veya dosya ücreti talep etmez."
  }
];

function FAQItem({ num, question, answer }: { num: string, question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border ${isOpen ? 'border-[#bcbcbc]' : 'border-[#e5e5e5]'} rounded-[16px] bg-white overflow-hidden transition-colors duration-300 cursor-pointer`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-start sm:items-center gap-2 md:gap-3 min-w-0">
           <span className="text-[#888] font-medium text-[14px] sm:text-[15px] md:text-[18px] w-6 shrink-0 pt-0.5 sm:pt-0">{num}/</span>
           <h4 className="text-[#111] font-medium text-[14px] sm:text-[15px] md:text-[18px] tracking-tight leading-snug">{question}</h4>
        </div>
        <div className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[#111] text-white' : 'bg-[#f5f5f5] text-[#111]'}`}>
          {isOpen ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
        </div>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
        style={{ 
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0
        }}
      >
        <div className="px-5 pb-6 pt-0 text-[#666] text-[14px] md:text-[15px] leading-[1.6]">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-32 lg:py-[180px] px-6 md:px-16 lg:px-20 relative flex flex-col justify-center items-center w-full">
      <ScrollReveal className="max-w-[800px] mx-auto w-full flex flex-col">
        <div className="flex flex-col items-center text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8aff20]"></span>
            <span className="text-[14px] md:text-[16px] font-medium text-[#888] tracking-wide">
              {'{'}05{'}'} — FAQ
            </span>
          </div>

          <h2 className="text-[2.35rem] sm:text-[3rem] md:text-[5.5rem] lg:text-[6.5rem] text-[#111] leading-[1.08] sm:leading-[1.05] tracking-[-0.04em] font-normal">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} {...faq} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
