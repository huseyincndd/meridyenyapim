import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Dizi Yapımları | Meridyen Film Yapım",
  description: "Televizyon ve Dijital Platformlar İçin Profesyonel Dizi Yapım Hizmetleri. Fikirden teslime kadar uçtan uca prodüksiyon.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/hizmetler/dizi-yapimi",
  },
};

const faqs = [
  {
    q: "Dizi yapım süreci nasıl ilerler?",
    a: "Süreç; konsept geliştirme, senaryo çalışmaları, yapım öncesi hazırlıklar, çekim süreci, post-prodüksiyon ve yayın teslim aşamalarından oluşur. Her proje kendi ölçeği ve ihtiyaçlarına göre planlanır."
  },
  {
    q: "Dijital platform dizileri ile televizyon dizileri arasındaki fark nedir?",
    a: "Dijital platform dizileri genellikle daha kısa sezon yapısına ve daha esnek bölüm sürelerine sahipken, televizyon dizileri yayın akışına bağlı olarak daha uzun bölüm süreleri ve yoğun bir üretim temposu gerektirebilir. Teslim standartları da farklılaşır: platformlar çoğunlukla IMF tabanlı master ve çok dilli lokalizasyon ister."
  },
  {
    q: "Bir writers' room (yazım odası) modeli nedir?",
    a: "Writers' room, baş yazar (showrunner) önderliğinde bir yazar ekibinin sezonun hikâye hattını, bölüm kırılımlarını ve karakter gelişimini birlikte kurguladığı çalışma modelidir. Çok bölümlü projelerde tutarlı bir anlatı ve sürdürülebilir bir yazım temposu sağlar."
  },
  {
    q: "Dizinin fikrî mülkiyet (IP) ve yayın hakları nasıl yönetilir?",
    a: "Proje başında senaryo, format ve müzik haklarının kime ait olduğu, yayıncıya verilen lisansın kapsamı, bölge ve süre koşulları sözleşmelerle netleştirilir. Uyarlama (remake) ve format satışı potansiyeli olan projelerde bu yapı, eserin gelecekteki değerini doğrudan etkiler."
  },
  {
    q: "Meridyen Film Yapım yalnızca prodüksiyon hizmeti mi sunar?",
    a: "Hayır. Konsept geliştirme, senaryo süreçleri, yapım planlama, oyuncu koordinasyonu, prodüksiyon, post-prodüksiyon, hak yönetimi, teslim ve uluslararası satış süreçlerini kapsayan uçtan uca yapım hizmeti sunarız."
  },
  {
    q: "Oyuncu seçimi süreçlerini yönetiyor musunuz?",
    a: "Evet. Projenin ihtiyaçlarına göre cast direktörlüğü, oyuncu görüşmeleri, ajans koordinasyonu ve figürasyon planlaması süreçleri yönetilebilir."
  },
  {
    q: "Marka entegrasyonu ve sponsorluk süreçlerini yönetiyor musunuz?",
    a: "Evet. Hikâyenin bütünlüğünü bozmadan, yayıncı ve reklam mevzuatına uygun şekilde ürün yerleştirme, marka iş birliği ve sponsorluk modelleri kurgulanabilir. Bu gelir kalemleri yapım bütçesinin sürdürülebilirliğine katkı sağlar."
  },
  {
    q: "Bir dizi projesinin geliştirme süreci ne kadar sürer?",
    a: "Projenin kapsamına bağlı olarak değişmekle birlikte; konsept geliştirme, senaryo çalışmaları ve yapım planlama süreçleri birkaç ay ile bir yıl arasında değişebilir."
  }
];

const services = [
  {
    id: "01",
    title: "Konsept Geliştirme ve Dizi Tasarımı",
    desc: "Başarılı bir dizi; güçlü bir fikir, sağlam karakterler ve sürdürülebilir bir hikâye yapısıyla başlar. Yalnızca ilk bölümü değil, sezon boyunca izleyicinin ilgisini koruyabilecek projeler geliştirmeyi hedefleriz.",
    items: [
      "Dizi konsepti geliştirme",
      "Karakter evreni oluşturma",
      "Pilot bölüm geliştirme",
      "Sezon ve bölüm akışı planlaması",
      "Dramaturji çalışmaları",
      "Hikâye İncili (story bible) hazırlanması",
      "Dizi sunum (pitch) dosyalarının hazırlanması"
    ],
    summary: "Amacımız, hem yayıncıya güçlü bir vaat sunan hem de uzun soluklu üretime elverişli bir anlatı temeli kurmaktır."
  },
  {
    id: "02",
    title: "Senaryo Ekibi ve Writers' Room Yönetimi",
    desc: "Çok bölümlü bir dizinin tutarlılığı, baş yazar (showrunner) önderliğinde çalışan bir yazar ekibinin disiplinine bağlıdır. Yazım sürecini, yayın temposuna yetişecek planlı bir akışla yönetiriz.",
    items: [
      "Baş yazar / showrunner yapısının kurulması",
      "Yazar ekibi (writers' room) koordinasyonu",
      "Sezon hikâye hattının kurgulanması",
      "Bölüm kırılımları ve outline çalışmaları",
      "Senaryo geliştirme ve revizyon döngüleri",
      "Süreklilik (continuity) ve karakter takip sistemi",
      "Yayıncı geri bildirim süreçlerinin yönetimi"
    ],
    summary: "Sürdürülebilir bir yazım modeli, sezon ortasında ritmin düşmesini önler ve teslim takvimini güvence altına alır."
  },
  {
    id: "03",
    title: "Yapım Öncesi Hazırlık ve Planlama",
    desc: "Bir dizinin başarısı, çekim öncesindeki doğru planlamaya bağlıdır. Hazırlık aşamalarını, çekim verimliliğini ve bütçe disiplinini güçlendirecek şekilde yürütürüz.",
    items: [
      "Yapım bütçesinin oluşturulması",
      "Bölüm bazlı maliyet planlaması",
      "Çekim takviminin hazırlanması",
      "Mekân araştırmaları (location scouting)",
      "Teknik ekip organizasyonu",
      "Oyuncu görüşmeleri ve planlamaları",
      "Yapım koordinasyonu ve operasyonel süreç yönetimi"
    ],
    summary: "İyi planlanan bir yapım öncesi süreç, çekim sırasında zaman kaybını azaltır ve bütçe–zaman yönetimini güçlendirir."
  },
  {
    id: "04",
    title: "Oyuncu ve Cast Yönetimi",
    desc: "Doğru oyuncu seçimi, bir dizinin başarısını doğrudan etkileyen temel unsurlardan biridir. Her proje için hikâyenin ihtiyaçlarına uygun bir oyuncu yapısı kurmayı hedefleriz.",
    items: [
      "Başrol ve yardımcı oyuncu seçimleri",
      "Cast direktörlüğü süreçleri",
      "Oyuncu görüşmeleri ve deneme çekimleri",
      "Ajans ve menajer koordinasyonu",
      "Figürasyon planlaması",
      "Oyuncu takvim yönetimi",
      "Sözleşme süreçlerinin koordinasyonu"
    ],
    summary: "Cast yapısı; yalnızca yetenek değil, takvim uyumu, bütçe ve karakter dengesi gözetilerek kurgulanır."
  },
  {
    id: "05",
    title: "Prodüksiyon ve Çekim Yönetimi",
    desc: "Dizi yapımlarında zaman ve kaynak yönetimi kritik öneme sahiptir. Yaratıcı vizyonu korurken çekim süreçlerini verimli, planlı ve sürdürülebilir şekilde yürütürüz.",
    items: [
      "Günlük çekim planlarının hazırlanması",
      "Set operasyonlarının yönetimi",
      "Kamera, ışık ve ses ekiplerinin koordinasyonu",
      "Mekân organizasyonu, ulaşım ve lojistik",
      "Oyuncu ve ekip planlaması",
      "Yapım raporlamaları ve çekim sürekliliği",
      "Set güvenliği, izin ve sigorta süreçleri"
    ],
    summary: "Çok bölümlü üretimde günlük disiplin; her bölümün aynı kalite ve tutarlılıkta tamamlanmasını sağlar."
  },
  {
    id: "06",
    title: "Post-Prodüksiyon Süreçleri",
    desc: "Çekimlerin tamamlanmasının ardından bölümler yayına hazır hale getirilir. Bu aşama, dizinin görsel ve işitsel kimliğinin son halini aldığı kritik bir süreçtir.",
    items: [
      "Offline ve online kurgu",
      "Renk düzenleme (color grading)",
      "Ses tasarımı, müzik ve miksaj",
      "Grafik ve jenerik uygulamaları",
      "Görsel efekt (VFX) süreçleri",
      "Altyazı ve versiyonlama",
      "Teknik kalite kontrol (QC) süreçleri"
    ],
    summary: "Bölüm bazlı bir post-prodüksiyon akışı, yayın takvimine uyumlu ve tutarlı teslimlerin temelini oluşturur."
  },
  {
    id: "07",
    title: "Yayın ve Platform Teslim Yönetimi",
    desc: "Her yayıncının ve platformun farklı teknik ve operasyonel gereksinimleri vardır. Projenin yayın hedeflerine uygun teslim standartlarını süreç boyunca gözetiriz.",
    items: [
      "Televizyon yayınlarına uygun teslim süreçleri",
      "Dijital platform uyumluluk planlaması",
      "IMF / mezzanine master hazırlığına yönelik koordinasyon",
      "Bölüm bazlı teslim organizasyonu",
      "Çoklu dil, dublaj ve altyazı süreçleri",
      "Teknik kalite kontrolleri ve yayın öncesi son kontroller"
    ],
    summary: "Dijital platformlar çoğunlukla IMF tabanlı master ve geniş dil yelpazesinde lokalizasyon talep eder; teslim süreci bu gereksinimlere göre planlanır."
  },
  {
    id: "08",
    title: "Hak Yönetimi, Sponsorluk ve Uluslararası Satış",
    desc: "Bir dizinin değeri yayınla sınırlı değildir. Fikrî mülkiyet, gelir modelleri ve uluslararası satış potansiyeli projenin uzun vadeli getirisini belirler. Türk dizileri, küresel içerik pazarında güçlü bir konuma sahiptir.",
    items: [
      "Senaryo, format ve müzik haklarının yapılandırılması",
      "Yayıncı lisans kapsamı, bölge ve süre koşulları",
      "Marka entegrasyonu ve sponsorluk modelleri",
      "Ürün yerleştirme (product placement) planlaması",
      "Uluslararası dağıtım ve içerik pazarı (MIPCOM vb.) temsili",
      "Format ve uyarlama (remake) hakları yönetimi"
    ],
    summary: "Hakların proje başında doğru yapılandırılması, eserin gelecekteki satış ve uyarlama değerini güvence altına alır."
  }
];

export default function SeriesProductionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden scroll-smooth">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0 pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm border border-border">
              <span className="h-2 w-2 rounded-full bg-primary" /> HİZMETLER — DİZİ YAPIMLARI
            </div>
            
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[6.5rem] leading-[1.05] max-w-5xl animate-in slide-in-from-bottom-8 fade-in duration-700">
              Televizyon ve Dijital Platformlar <br className="hidden md:block" />
              <span className="italic font-serif text-muted-foreground">İçin Profesyonel Dizi Yapımı</span>
            </h1>
            
            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              Meridyen Film Yapım; televizyon kanalları, dijital yayın platformları ve uluslararası yayıncılar için dizi projeleri geliştiren, planlayan ve yöneten İstanbul merkezli bir yapım şirketidir.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-16 md:py-24 px-6 border-y border-border/50 bg-muted/20">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium">
              Dizi yapımları; yaratıcı hikâye geliştirme süreçlerinden oyuncu koordinasyonuna, çekim organizasyonundan post-prodüksiyona kadar çok sayıda operasyonun eş zamanlı yürütülmesini gerektirir. Özellikle çok bölümlü projelerde sürdürülebilir bir üretim modeli kurmak, yayın takvimine uygun teslim süreçlerini yönetmek ve yüksek prodüksiyon kalitesini sezon boyunca korumak büyük önem taşır.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meridyen Film Yapım, proje geliştirme aşamasından sezon teslimine kadar tüm süreçleri profesyonel yapım standartlarıyla yöneterek televizyon ve dijital platform projelerine uçtan uca çözümler sunar.
            </p>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="py-24 md:py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 md:mb-24 text-center">
              <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em]">Dizi Yapım Sürecinde <br className="hidden md:block" /><span className="italic font-serif text-muted-foreground">Sunduğumuz Hizmetler.</span></h2>
            </div>

            <div className="space-y-12 md:space-y-24">
              {services.map((service, idx) => (
                <div key={service.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start group">
                  <div className="md:col-span-4 md:sticky md:top-32">
                    <div className="text-6xl md:text-8xl font-display text-muted/30 font-bold mb-4 group-hover:text-primary/20 transition-colors duration-500">{service.id}</div>
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </div>
                  
                  <div className="md:col-span-8 bg-card rounded-[2rem] p-8 md:p-12 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-foreground/80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-muted/50 rounded-xl p-6 border border-border/50 border-l-4 border-l-primary">
                      <p className="text-sm md:text-base font-medium text-foreground/90 italic">
                        "{service.summary}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-24 md:py-32 px-6 border-y border-border/50 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl tracking-[-0.035em] mb-6">Neden <span className="italic font-serif text-primary-foreground/70">Meridyen Film Yapım?</span></h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Dizi yapımları yalnızca yaratıcı bir süreç değil; aynı zamanda kapsamlı bir organizasyon ve operasyon yönetimidir. Projeleri fikir aşamasından yayın ve satış sürecine kadar bütüncül şekilde yönetiriz. Bizi farklı kılan temel yaklaşım:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Güçlü hikâye geliştirme ve writers' room yaklaşımı",
                "Profesyonel yapım planlaması",
                "Deneyimli kreatif ve teknik ekip yapısı",
                "Bölüm bazlı üretim organizasyonu",
                "Etkin bütçe ve zaman yönetimi",
                "Profesyonel post-prodüksiyon süreçleri",
                "Televizyon ve dijital platform standartlarına uygun teslim anlayışı",
                "Hak yönetimi ve uluslararası satış bakışı"
              ].map((feature, i) => (
                <div key={i} className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/20 transition-colors">
                  <div className="h-10 w-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-medium">{feature}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32 px-6 bg-muted/20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="font-display text-4xl md:text-5xl tracking-[-0.035em]">Sıkça Sorulan <span className="italic font-serif text-muted-foreground">Sorular.</span></h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <details key={i} className="group rounded-[2rem] border border-border bg-card p-6 md:p-8 open:bg-background transition-all duration-300">
                  <summary className="flex cursor-pointer items-center justify-between font-display text-xl md:text-2xl list-none [&::-webkit-details-marker]:hidden outline-none">
                    <span className="pr-8">{f.q}</span>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-xl transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-background group-open:border-primary">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                    </span>
                  </summary>
                  <div className="mt-8 text-muted-foreground leading-relaxed text-lg animate-in fade-in slide-in-from-top-4 duration-300 max-h-0 overflow-hidden group-open:max-h-[1000px] group-open:overflow-visible transition-[max-height]">
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="dark bg-background text-foreground py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem] px-6 border-t border-border mt-12">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-4xl md:text-6xl lg:text-[5rem] mb-6 tracking-[-0.035em] leading-[1.1]">
              Dizi Projenizi <br/>
              <span className="italic font-serif text-muted-foreground">Birlikte Geliştirelim</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Meridyen Film Yapım, televizyon kanalları ve dijital platformlar için geliştirilen dizi projelerinde yaratıcı vizyonu profesyonel yapım süreçleriyle buluşturur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-transform hover:scale-[1.02]">
                Projenizi Hayata Geçirmek İçin Bize Ulaşın
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
