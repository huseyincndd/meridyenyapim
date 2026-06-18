import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Reklam Filmi Yapımı | Meridyen Film Yapım",
  description: "Markalar İçin Profesyonel Reklam Filmi Yapım Hizmetleri. Televizyon reklamları, dijital kampanyalar ve marka filmlerinde uçtan uca prodüksiyon.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/hizmetler/reklam-filmi",
  },
};

const faqs = [
  {
    q: "Bir reklam filminin yapım süreci ne kadar sürer?",
    a: "Projenin kapsamına göre değişmekle birlikte reklam filmleri genellikle birkaç haftalık planlama, çekim ve post-prodüksiyon süreçleri sonunda tamamlanır. Basit dijital içeriklerde süre kısalırken, çok mekânlı veya yüksek prodüksiyonlu TVC projeleri daha uzun bir hazırlık gerektirebilir."
  },
  {
    q: "Sadece çekim veya sadece post-prodüksiyon hizmeti alabilir miyiz?",
    a: "Evet. Projenin ihtiyaçlarına göre yalnızca prodüksiyon veya yalnızca post-prodüksiyon desteği sağlanabilir. Reklam ajansınızın kreatifini de uygulayabilir ya da fikirden teslime kadar tüm süreci üstlenebiliriz."
  },
  {
    q: "Storyboard ve moodboard süreçlerini siz mi hazırlıyorsunuz?",
    a: "Evet. Seçilen senaryo doğrultusunda filmin görsel atmosferini tanımlayan moodboard ve sahne sahne planı gösteren storyboard hazırlanır. Bu çalışmalar, çekim öncesinde marka onayını netleştirir ve set gününde verimliliği artırır."
  },
  {
    q: "Sosyal medya için özel reklam içerikleri üretiyor musunuz?",
    a: "Evet. Instagram, TikTok, YouTube ve diğer dijital platformlar için dikey/yatay formatlarda ve farklı sürelerde içerikler üretilebilir. Tek bir çekimden mecra bazlı çoklu versiyonlar çıkarılabilir."
  },
  {
    q: "Oyuncu ve model seçimlerini siz mi yönetiyorsunuz?",
    a: "Evet. Reklam filmlerinde gerekli görüldüğü durumlarda oyuncu, model ve figürasyon süreçleri, ajans koordinasyonu ve kullanım hakkı (oynama hakkı) sözleşmeleri tarafımızdan koordine edilir."
  },
  {
    q: "Müzik, jingle ve seslendirme süreçlerini sağlıyor musunuz?",
    a: "Evet. Özgün müzik bestesi, jingle, lisanslı müzik temini, seslendirme (voice-over) ve ses tasarımı süreçleri yönetilebilir. Telif ve kullanım hakları, yayın mecrasına ve süreye uygun şekilde düzenlenir."
  },
  {
    q: "Kurumsal tanıtım filmi hizmeti veriyor musunuz?",
    a: "Evet. Marka tanıtımları, şirket filmleri, ürün videoları, lansman filmleri ve kurumsal iletişim projeleri için profesyonel yapım hizmeti sunulur."
  }
];

const services = [
  {
    id: "01",
    title: "Brief Alımı ve İletişim Stratejisi",
    desc: "Her şey markayı dinlemekle başlar. Hedefleri, hedef kitleyi, kampanya mesajını ve bütçeyi netleştiren bir brief toplantısıyla projenin yol haritasını kurarız.",
    items: [
      "Brief alımı ve ihtiyaç analizi",
      "Marka ve hedef kitle analizi",
      "Rakip ve pazar incelemesi",
      "Kampanya amacının netleştirilmesi (satış, bilinirlik, imaj)",
      "Bütçe ve kapsam çerçevesinin belirlenmesi",
      "İletişim stratejisinin oluşturulması"
    ],
    summary: "Doğru tanımlanmış bir brief, tüm sürecin temelini oluşturur ve sonraki aşamalarda yön kaybını önler."
  },
  {
    id: "02",
    title: "Kreatif Konsept Geliştirme",
    desc: "Başarılı bir reklam filminin temelinde güçlü bir fikir yer alır. Markanın mesajını hedef kitlesine etkili ve akılda kalıcı şekilde ulaştıracak konsepti geliştiririz.",
    items: [
      "Kampanya fikri geliştirme",
      "Kreatif konsept oluşturma",
      "Reklam senaryosu yazımı",
      "Metin (copy) geliştirme çalışmaları",
      "Hikâye ve mesaj kurgusu",
      "Senaryo alternatiflerinin sunumu"
    ],
    summary: "Amaç; markanın vermek istediği mesajı doğru tonla, akılda kalıcı bir fikir üzerinden taşımaktır."
  },
  {
    id: "03",
    title: "Yapım Öncesi Hazırlık: Storyboard ve PPM",
    desc: "Reklam filmlerinde doğru planlama, bütçe ve zaman yönetiminin temelini oluşturur. Onaylanan senaryo görsel bir plana dönüştürülür ve set günü en ince ayrıntısına kadar hazırlanır.",
    items: [
      "Moodboard ve görsel dil çalışması",
      "Storyboard hazırlanması",
      "Pre-Production Meeting (PPM) sunumu",
      "Çekim planlaması ve takvim",
      "Bütçenin oluşturulması",
      "Mekân araştırmaları ve sanat yönetimi hazırlıkları",
      "Teknik ekip organizasyonu"
    ],
    summary: "Storyboard ve PPM, markayla yapımcı arasındaki ortak görüşü netleştirir ve çekim gününde maksimum verim sağlar."
  },
  {
    id: "04",
    title: "Cast ve Mekân Yönetimi",
    desc: "Reklam filmlerinde doğru yüzlerin ve doğru atmosferin bir araya gelmesi büyük önem taşır. Her proje için marka kimliğine ve kampanya hedeflerine uygun seçimler yaparız.",
    items: [
      "Oyuncu ve model seçimi",
      "Cast görüşmeleri ve deneme çekimleri",
      "Ajans ve menajer koordinasyonu",
      "Kullanım hakkı (oynama hakkı) sözleşmeleri",
      "Mekân keşfi ve çekim izinleri",
      "Set kurulum ve organizasyon süreçleri"
    ],
    summary: "Oyuncu kullanım hakları; yayın mecrası, bölge ve süreye göre planlanarak marka açısından şeffaf bir maliyet yapısı kurulur."
  },
  {
    id: "05",
    title: "Prodüksiyon ve Çekim Süreçleri",
    desc: "Çekim aşamasını profesyonel prodüksiyon standartlarında yönetiriz. Hedefimiz, yaratıcı fikri teknik kaliteyle buluşturarak markanın beklentilerini karşılayan güçlü bir sonuç üretmektir.",
    items: [
      "Yönetmen ve teknik ekip koordinasyonu",
      "Kamera, ışık ve ses organizasyonu",
      "Sanat departmanı ve set yönetimi",
      "Çekim operasyonlarının yürütülmesi",
      "Oyuncu ve ekip koordinasyonu",
      "Günlük prodüksiyon planlaması ve set güvenliği"
    ],
    summary: "Reklam çekimlerinde her saniyenin maliyeti yüksektir; bu nedenle planlı ve disiplinli bir set yönetimi esastır."
  },
  {
    id: "06",
    title: "Post-Prodüksiyon, Müzik ve Ses",
    desc: "Çekimlerin ardından reklam filmi yayına hazır hale getirilir. Görüntünün yanında müzik ve ses tasarımı, filmin duygusal etkisini belirleyen kritik bir katmandır.",
    items: [
      "Kurgu ve online edit",
      "Renk düzenleme (color grading)",
      "Görsel efekt (VFX) ve grafik / motion design",
      "Özgün müzik, jingle veya lisanslı müzik temini",
      "Seslendirme (voice-over) ve ses tasarımı",
      "Müzik ve ses miksajı",
      "Altyazı, versiyonlama ve teknik kalite kontrol"
    ],
    summary: "Müzik ve seslendirmenin telif ile kullanım hakları; yayın mecrasına ve süreye uygun şekilde düzenlenir."
  },
  {
    id: "07",
    title: "Çoklu Platform Versiyonları ve Teslim",
    desc: "Reklam içerikleri farklı platformlarda farklı formatlarda kullanılır. Tek bir çekimden mecra bazlı versiyonlar üreterek kampanyanın her kanalda doğru görünmesini sağlarız.",
    items: [
      "Televizyon (TVC) yayın formatları",
      "YouTube ve dijital reklam ağı versiyonları",
      "Instagram ve TikTok (dikey/kare) içerikleri",
      "Farklı süre kesitleri (6 sn, 15 sn, 30 sn, vb.)",
      "Kurumsal ve etkinlik kullanım versiyonları",
      "Mecra teknik şartnamesine uygun teslim"
    ],
    summary: "İhtiyaca göre farklı süre, en-boy oranı ve formatlarda versiyonlar; her mecranın teknik gereksinimine uygun teslim edilir."
  }
];

export default function AdvertisingFilmsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden scroll-smooth">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0 pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm border border-border">
              <span className="h-2 w-2 rounded-full bg-primary" /> HİZMETLER — REKLAM FİLMLERİ
            </div>
            
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[6.5rem] leading-[1.05] max-w-5xl animate-in slide-in-from-bottom-8 fade-in duration-700">
              Markalar İçin Profesyonel <br className="hidden md:block" />
              <span className="italic font-serif text-muted-foreground">Reklam Filmi Yapımı</span>
            </h1>
            
            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              Meridyen Film Yapım, markaların hikâyelerini etkili görsel anlatılarla buluşturan reklam filmi projeleri geliştiren ve yöneten İstanbul merkezli bir yapım şirketidir.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-16 md:py-24 px-6 border-y border-border/50 bg-muted/20">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium">
              Günümüzde reklam filmleri yalnızca ürün veya hizmet tanıtımı değil; markanın değerlerini, kimliğini ve hedef kitlesiyle kurduğu bağı aktaran güçlü iletişim araçlarıdır. Başarılı bir reklam filmi; yaratıcı fikrin doğru stratejiyle birleşmesini, profesyonel prodüksiyon süreçleriyle hayata geçirilmesini ve yayın mecralarına uygun şekilde teslim edilmesini gerektirir.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meridyen Film Yapım; televizyon reklamları, dijital kampanyalar, sosyal medya reklamları, marka filmleri ve kurumsal iletişim projelerinde fikir aşamasından teslim sürecine kadar uçtan uca yapım hizmeti sunar. İster doğrudan markayla, ister reklam ajansının kreatif ekibiyle çalışılsın; fikir teknik kaliteyle buluşturularak hedeflere uygun bir sonuç üretilir.
            </p>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="py-24 md:py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 md:mb-24 text-center">
              <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em]">Reklam Filmi Yapım Sürecinde <br className="hidden md:block" /><span className="italic font-serif text-muted-foreground">Sunduğumuz Hizmetler.</span></h2>
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

        {/* WHICH PROJECTS */}
        <section className="py-24 md:py-32 px-6 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Hangi Tür Reklam Filmleri <br/>
                <span className="italic font-serif text-primary-foreground/70">Üretiyoruz?</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Meridyen Film Yapım, farklı amaç ve mecralara hizmet eden geniş bir prodüksiyon yelpazesinde hizmet sunar:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Televizyon reklam filmleri (TVC)",
                "Dijital reklam kampanyaları",
                "Sosyal medya reklamları",
                "Marka filmleri (brand film)",
                "Kurumsal tanıtım filmleri",
                "Ürün tanıtım videoları",
                "Lansman filmleri",
                "İşveren markası içerikleri",
                "Etkinlik ve organizasyon filmleri"
              ].map((item, i) => (
                <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 border border-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground/70"><path d="M20 6 9 17l-5-5"/></svg>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-24 md:py-32 px-6 border-b border-border/50">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-5xl tracking-[-0.035em] mb-6">Neden <span className="italic font-serif text-muted-foreground">Meridyen Film Yapım?</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reklam filmi üretimi yalnızca teknik bir çekim süreci değil; strateji, yaratıcılık ve operasyon yönetiminin bir araya geldiği kapsamlı bir yapım disiplinidir. Bizi farklı kılan temel yaklaşım:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                "Stratejiye dayalı kreatif yaklaşım",
                "Profesyonel prodüksiyon yönetimi",
                "Deneyimli kreatif ve teknik ekip yapısı",
                "Planlı bütçe ve zaman yönetimi",
                "Yüksek görsel kalite anlayışı",
                "Çoklu platform üretim deneyimi"
              ].map((feature, i) => (
                <div key={i} className="bg-muted/30 border border-border rounded-3xl p-8 text-center hover:border-primary/30 transition-colors group">
                  <div className="h-12 w-12 mx-auto bg-background rounded-full flex items-center justify-center border border-border mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-primary font-bold">{i + 1}</span>
                  </div>
                  <h4 className="font-medium text-foreground/90">{feature}</h4>
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
              Markanızı Güçlü Hikâyelerle <br/>
              <span className="italic font-serif text-muted-foreground">Buluşturalım</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Meridyen Film Yapım, markaların hedef kitleleriyle güçlü bağlar kurmasına yardımcı olan yaratıcı ve profesyonel reklam filmi çözümleri üretir.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-transform hover:scale-[1.02]">
                Projeleriniz İçin Bize Ulaşın
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
