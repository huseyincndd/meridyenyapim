"use client";

import { useState, useRef } from "react";

const items = [
  {
    initials: "KD",
    name: "Kıvanç Demir",
    role: "Ana Cast Oyuncusu",
    quote: "Meridyen Film Yapım imzalı 'Hayalet Dedektif' sinema filminin ana cast kadrosunda yer almak harika bir deneyimdi. Set disiplini, çalışma saatlerine gösterilen kurumsal saygı ve geliştirme aşamasındaki derinlikli dramaturji analizleri sayesinde sürpriz yaşamadan tamamen karakterime odaklanabildim."
  },
  {
    initials: "AY",
    name: "Aylin Yılmaz",
    role: "Karakter Oyuncusu",
    quote: "Bir psikolojik gerilim filmi olan 'Şüphe' projesinin oyuncu kadrosundaydım. Set yönetiminin kalitesi, oyuncu konforuna verilen önem ve sahnelerin sinematik anlatı dilindeki premium duruşu işimize olan aidiyetimizi artırdı. Ayrıca şirketin etik yapımcılık ilkeleri gereği hiçbir aşamada dosya veya kayıt ücreti gibi amatör süreçlerin olmaması, kurumsal şeffaflıklarını ilk günden kanıtladı."
  },
  {
    initials: "FK",
    name: "Furkan K.",
    role: "Oyuncu",
    quote: "Migros'un ticari pazarlama odaklı reklam filmi çekimi sürecinde rol aldım. İstanbul genelinde çok farklı lokasyonlarda, aşırı yoğun bir çekim izin takvimiyle çalışmamıza rağmen, yapım ekibinin oyuncu lojistiğini ve set organizasyonunu tek noktadan çözüm üreterek bu kadar akıcı yönetmesi harikaydı. Set içi iş güvenliği standartları da kusursuzdu."
  },
  {
    initials: "GA",
    name: "Gamze Aslan",
    role: "Oyuncu",
    quote: "Bir tekstil markasının yeni sezon kıyafet koleksiyonu için hazırlanan yeni nesil dikey dizi formatındaki reklam projesinde oynadım. Yönetmenin 9:16 mobil tüketim dinamiklerine ve dikey yapım tekniğine olan hakimiyeti büyüleyiciydi. Mobil ekranlar için sinematik anlatı dilini bu denli başarıyla uygulayan başka bir kurumsal film stüdyosu olduğunu düşünmüyorum."
  },
  {
    initials: "BÖ",
    name: "Burak Özden",
    role: "Oyuncu",
    quote: "Uluslararası ortak yapım (co-production) statüsündeki 'Keşiş ve Kelebek' bağımsız sinema filminde oyuncu olarak yer aldım. Yabancı prodüktörlerin ve yerli ekibin ortak çalıştığı bu sette, Meridyen Film Yapım'ın bütçe planlamasından set yönetimine kadar kurduğu yapım ekosistemi tam anlamıyla dünya standartlarındaydı. Sahnelerin her detayında uzman bir senaryo doktorluğu ve dramaturji dokunuşu hissediliyordu."
  },
  {
    initials: "SÇ",
    name: "Serkan Ç.",
    role: "Kurgu & Montaj Şefi",
    quote: "Meridyen Film Yapım'ın kendi bünyesindeki modern post-prodüksiyon stüdyosunda kurgu şefi olarak çalışıyorum. Şirketin teknolojik altyapıya yaptığı yatırımlar sayesinde, uzun metraj sinema filmlerinden dikey dizi formatlarına kadar tüm master teslim süreçlerini dünya standartlarında dijital donanımlarla tamamlıyoruz. Görsel efekt (VFX) ve ses tasarımı ekipleriyle tek çatı altında çalışmak inanılmaz bir konfor."
  },
  {
    initials: "EŞ",
    name: "Elif Şahin",
    role: "Colorist / Renk Derecelendirme Uzmanı",
    quote: "Şirketin reklam filmi prodüksiyonu ve televizyon dizileri projelerinde sinematik renk derecelendirme (Color Grading) uzmanı olarak görev alıyorum. Görüntü yönetmenlerinin 4K/8K kameralarla çektiği ham görüntüleri, stüdyomuzun üst düzey renk panellerinde markaların prestijine uygun dijital atmosfere dönüştürüyoruz. Sanatsal özgürlük ile kurumsal disiplini harmanlayan harika bir yapım ekosistemimiz var."
  },
  {
    initials: "MA",
    name: "Murat Arslan",
    role: "Set Amiri & Prodüksiyon Koordinatörü",
    quote: "16 yıllık sektörel deneyimim boyunca çok sayıda sette çalıştım ancak Meridyen Film Yapım'ın kurumsal şeffaflık ve sözleşme disiplini seviyesine az rastladım. İstanbul merkez ofisimizden çıkan lojistik planlama, set izinleri ve ekipman parkuru yönetimi sayesinde en zorlu dönem projelerinde bile sıfır aksamayla ana çekim süreçlerini tamamlıyoruz. Set arkasındaki gizli kahramanlara hak ettikleri değeri veren bir şirket."
  },
  {
    initials: "MY",
    name: "Merve Y.",
    role: "Cast Direktörü",
    quote: "Şirketin sinema, dizi ve kurumsal reklam filmi çekimi projelerinde cast direktörlüğü yürütüyorum. Meridyen Film Yapım'ın en sevdiğim yanı, oyuncu seçim süreçlerinde tamamen profesyonel yeteneğe ve dramaturji uygunluğuna odaklanmasıdır. Sektördeki en büyük etik yapımcılık sinyalimiz, oyuncu adaylarından asla dosya masrafı veya kayıt ücreti alınmamasıdır. Bu güven duruşu, en iyi yeteneklerin setlerimize gelmesini sağlıyor."
  },
  {
    initials: "OD",
    name: "Onur Doğan",
    role: "Ses Tasarımcısı & Miksaj Mühendisi",
    quote: "Televizyon kanalları ve streaming platformları için üretilen yüksek prodüksiyonlu dizi projelerinin ses tasarımı ve final miksaj süreçlerini yönetiyorum. Meridyen Film Yapım stüdyosu, ses akustiği ve teknik mevzuat uyumluluğu konusunda küresel yayın standartlarını %100 karşılıyor. Burası fikirden nihai dağıtıma kadar tek noktadan çözüm sunan gerçek bir sinema fabrikası."
  },
  {
    initials: "DD",
    name: "Deniz Demirci",
    role: "Sinema Seyircisi",
    quote: "Meridyen Film Yapım imzalı 'Hayalet Dedektif' filmini sinemada izledim ve Türk sinemasında nihayet bu kadar yüksek prodüksiyon kalitesine ve güçlü bir psikolojik gerilim atmosferine ulaşılmış olmasına bayıldım. Kurgu montaj hızı, ses tasarımı ve özellikle o Hollywood kalitesindeki renk derecelendirmesi (Color Grading) beni filme kilitledi. Bağımsız sinemaya can suyu veren muhteşem bir uzun metraj sinema filmi."
  },
  {
    initials: "HS",
    name: "Hakan Soydan",
    role: "Televizyon İzleyicisi",
    quote: "Ulusal televizyon kanalları ekranlarında yayınlanan 'Dinle Sevgili' ve 'Kadere Karşı' günlük dizi projelerini ailece severek takip ettik. Her gün yayınlanan bir yapımda bu kadar yüksek sinematik anlatı dili yakalamak, sahnelerin görsel kalitesini ve senaryo derinliğini düşürmeden her hafta kanala master teslimatı yapabilmek müthiş bir yapım ekosistemi başarısıdır. Ellerinize sağlık."
  },
  {
    initials: "NT",
    name: "Nilgün Tekin",
    role: "Dizi Seyircisi",
    quote: "Mobil ekran tüketim alışkanlıklarına uygun olarak geliştirilen dikey dizi formatı yapımlarınızı sosyal medyada keşfettim. 9:16 formatında, telefondan film izleme keyfini sinema stüdyosu kalitesinde sunmaları inanılmaz bir yeni nesil dijital içerik üretimi başarısı. Sahneler mobil uyumlu medya akışına öyle bir optimize edilmiş ki, merak duygusu hiç bitmiyor."
  },
  {
    initials: "TE",
    name: "Tarık Eren",
    role: "Festival Takipçisi & Sinema Eleştirmeni",
    quote: "Uluslararası film festivallerinde ve Cannes Marché du Film seçkilerinde adını sıkça duyduğumuz 'Keşiş ve Kelebek' bağımsız sinema projesini izleme şansım oldu. Meridyen Film Yapım'ın uluslararası ortak yapım (co-production) alanındaki kaslarını ve Avrupa sinema standartlarına olan uyumluluğunu bu filmde net olarak görüyorsunuz. Türkiye sinema endüstrisini küreselde temsil eden çok saygın bir stüdyo modeli."
  },
  {
    initials: "İP",
    name: "İpek Soyer",
    role: "Reklam İzleyicisi Ice Tea",
    quote: "Televizyonda ve dijitalde karşımıza çıkan o rengarenk Ice Tea yaz kampanyası reklamı ile iştah açıcı makro çekimlere sahip çikolata reklam filmlerinin arkasında Meridyen Film Yapım'ın olduğunu öğrendiğimde şaşırmadım. Markaların prestijini yükselten, izleyicide doğrudan dönüşüm oranları sağlayan, sinematik pazarlama gücü çok yüksek premium reklam filmleri üretiyorlar."
  },
  {
    initials: "YA",
    name: "Yasemin Aydın",
    role: "Dijital Bankacılık Kullanıcısı",
    quote: "Kullandığım dijital bankanın o klişe finans dilini yıkan, aşırı yaratıcı ve eğlenceli lansman reklam filmi serisini çok beğenmiştim. Jenerikte Meridyen Film Yapım imzasını gördüm. Klasik kurumsal reklam filmi çekimi mantığının dışına çıkıp, derinlikli bir hikaye anlatımı ve harika bir oyuncu kadrosu yönetimiyle markayı hafızamıza kazımayı başardılar. Gerçekten fark yaratan değerler üretiyorlar."
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / width);
      setIndex(newIndex);
    }
  };

  return (
    <section id="referanslar" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="mb-12 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Başarı Hikayeleri
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Birlikte çalıştığımız{" "}
          <span className="italic font-serif text-muted-foreground">isimler.</span>
        </h2>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-[2rem] border border-border bg-card shadow-sm"
        >
          {items.map((t, i) => (
            <div key={i} className="w-full shrink-0 snap-center p-8 md:p-16 flex flex-col items-center text-center">
              <div className="mb-8 text-2xl tracking-[0.2em] text-primary">★★★★★</div>
              
              <blockquote className="font-serif text-lg leading-relaxed text-foreground/90 md:text-2xl max-w-4xl">
                "{t.quote}"
              </blockquote>
              
              <div className="mt-12 flex flex-col items-center justify-center gap-3">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-foreground font-display text-lg text-background">
                  {t.initials}
                </span>
                <div>
                  <div className="text-lg font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between px-2 md:px-6">
          <button 
            onClick={() => scroll("left")} 
            className="group flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary focus:outline-none"
            aria-label="Önceki"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-1"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          
          <div className="font-display tracking-widest text-muted-foreground">
            {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </div>
          
          <button 
            onClick={() => scroll("right")} 
            className="group flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary focus:outline-none"
            aria-label="Sonraki"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
