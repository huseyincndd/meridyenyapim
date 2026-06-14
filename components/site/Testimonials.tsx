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
    quote: "17 yıllık sektörel deneyimim boyunca çok sayıda sette çalıştım ancak Meridyen Film Yapım'ın kurumsal şeffaflık ve sözleşme disiplini seviyesine az rastladım. İstanbul merkez ofisimizden çıkan lojistik planlama, set izinleri ve ekipman parkuru yönetimi sayesinde en zorlu dönem projelerinde bile sıfır aksamayla ana çekim süreçlerini tamamlıyoruz. Set arkasındaki gizli kahramanlara hak ettikleri değeri veren bir şirket."
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

import { FadeIn } from "./FadeIn";

type Testimonial = typeof items[number];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="flex h-full w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-border bg-card p-8 md:w-[400px]">
      <div>
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span>5.0<span className="text-muted-foreground">/5</span></span>
            <div className="flex text-primary text-base">
              ★★★★★
            </div>
          </div>
          <div className="font-serif text-6xl leading-none text-muted-foreground/20">
            ”
          </div>
        </div>
        <p className="text-base leading-relaxed text-foreground/90">
          {t.quote}
        </p>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground/10 text-sm font-bold">
          {t.initials}
        </span>
        <div>
          <div className="text-sm font-semibold">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.role}</div>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({ items, direction = "left", speed = "100s" }: { items: Testimonial[]; direction?: "left" | "right", speed?: string }) {
  const row = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex">
        <div
          className="flex shrink-0 gap-6 pr-6"
          style={{
            animationName: "marquee",
            animationDuration: speed,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: direction === "right" ? "reverse" : "normal",
            animationPlayState: "running"
          }}
        >
          {row.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
        <div
          className="flex shrink-0 gap-6 pr-6"
          aria-hidden="true"
          style={{
            animationName: "marquee",
            animationDuration: speed,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: direction === "right" ? "reverse" : "normal",
            animationPlayState: "running"
          }}
        >
          {row.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="referanslar" className="py-24 md:py-32">
      <FadeIn className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" /> Başarı Hikayeleri
        </div>
        <h2 className="font-display text-4xl tracking-[-0.035em] md:text-6xl">
          Birlikte çalıştığımız{" "}
          <span className="italic font-serif text-muted-foreground">isimler.</span>
        </h2>
      </FadeIn>

      <div className="flex flex-col gap-6">
        <FadeIn delay={100}><MarqueeRow items={items} direction="left" speed="800s" /></FadeIn>
      </div>
    </section>
  );
}
