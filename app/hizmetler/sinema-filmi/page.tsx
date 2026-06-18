import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Sinema Filmleri | Meridyen Film Yapım",
  description: "Uzun Metraj Sinema Filmi Yapımı. Fikir geliştirme, yapım, post-prodüksiyon ve festival süreçleri.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/hizmetler/sinema-filmi",
  },
};

const faqs = [
  {
    q: "Bir sinema filminin yapım süreci ne kadar sürer?",
    a: "Bir uzun metraj sinema filminin yapım süresi; senaryonun durumuna, finansman modeline, çekim ölçeğine ve post-prodüksiyon ihtiyaçlarına göre değişir. Geliştirme, hazırlık, çekim, post-prodüksiyon ve dağıtım süreçleri birlikte değerlendirildiğinde bu süreç birkaç aydan birkaç yıla kadar uzayabilir."
  },
  {
    q: "Meridyen Film Yapım sadece çekim hizmeti mi verir?",
    a: "Hayır. Fikir geliştirme, senaryo çalışmaları, yapım öncesi hazırlık, prodüksiyon, post-prodüksiyon, festival ve dağıtım stratejisi dahil olmak üzere uçtan uca yapım hizmeti sunarız."
  },
  {
    q: "Senaryo doktorluğu hizmeti nedir?",
    a: "Senaryo doktorluğu; tamamlanmış veya geliştirme aşamasındaki bir senaryonun dramatik yapı, karakter motivasyonu, olay örgüsü, ritim, diyalog ve tür uyumu açısından analiz edilerek güçlendirilmesi sürecidir. Bu çalışma, senaryonun özgün fikrini bozmadan daha etkili ve çekilebilir bir yapıya kavuşmasını hedefler."
  },
  {
    q: "Sinema filmi projeleri için fon ve ortak yapım desteği veriyor musunuz?",
    a: "Evet. Projenin niteliğine göre ulusal ve uluslararası fonlara, film marketlerine, ortak yapım modellerine ve yatırımcı sunumlarına yönelik dosya hazırlığı ve stratejik planlama desteği sağlanabilir."
  },
  {
    q: "Filmin festival süreci nasıl planlanır?",
    a: "Festival stratejisi; filmin türüne, sanatsal diline, hedef kitlesine ve prömiyer potansiyeline göre belirlenir. Uygun festivaller seçilir, başvuru takvimi hazırlanır, gerekli teknik ve tanıtım materyalleri organize edilir."
  },
  {
    q: "Dijital platformlara uygun teslim formatları hazırlanıyor mu?",
    a: "Evet. Filmin yayın hedeflerine göre dijital platformlar, televizyon kanalları, festivaller veya sinema salonları için gerekli teknik teslim formatları planlanabilir ve post-prodüksiyon süreci buna uygun şekilde yönetilebilir."
  }
];

const services = [
  {
    id: "01",
    title: "Fikir Geliştirme ve Senaryo Çalışmaları",
    desc: "Bir sinema filminin başarısı, güçlü bir fikir ve sağlam bir dramatik yapı ile başlar. Bu nedenle projeleri yalnızca çekim aşamasında değil, henüz fikir ve senaryo geliştirme sürecinden itibaren değerlendiriyoruz.",
    items: [
      "Hikâye fikrinin geliştirilmesi",
      "Logline ve sinopsis hazırlanması",
      "Tretman çalışması",
      "Karakter yapılarının güçlendirilmesi",
      "Dramatik çatışma ve hikâye akışının analizi",
      "Senaryo doktorluğu ve dramaturji desteği",
      "Yönetmen ve yapımcı görüşü metinlerinin hazırlanması"
    ],
    summary: "Amacımız, her projenin hem sanatsal kimliğini korumasını hem de yapım, fon, festival ve dağıtım süreçlerine uygun güçlü bir anlatı yapısına kavuşmasını sağlamaktır."
  },
  {
    id: "02",
    title: "Yapım Öncesi Hazırlık",
    desc: "Yapım öncesi süreç, filmin çekim kalitesini ve bütçe verimliliğini doğrudan belirleyen en önemli aşamalardan biridir. Çekim öncesi tüm hazırlıkları planlı ve kontrollü şekilde yönetiriz.",
    items: [
      "Yapım takviminin oluşturulması",
      "Bütçe planlaması",
      "Çekim senaryosu ve sahne planının hazırlanması",
      "Yönetmen, görüntü yönetmeni ve ana ekip yapısının belirlenmesi",
      "Oyuncu, mekân, sanat, kostüm ve teknik ekip organizasyonu",
      "İzinler, sözleşmeler ve lojistik süreçlerin planlanması"
    ],
    summary: "Doğru hazırlanmış bir pre-prodüksiyon süreci, çekim sırasında zaman kaybını azaltır, bütçe kontrolünü güçlendirir ve filmin yaratıcı vizyonunun daha sağlıklı şekilde hayata geçmesini sağlar."
  },
  {
    id: "03",
    title: "Finansman, Fon ve Ortak Yapım Planlaması",
    desc: "Uzun metraj sinema filmleri, yaratıcı olduğu kadar finansal açıdan da doğru yönetilmesi gereken projelerdir. Projelerin ölçeğine ve hedeflerine göre finansman stratejisi geliştirilmesine destek oluruz.",
    items: [
      "Proje bütçesinin hazırlanması",
      "Finansman planının oluşturulması",
      "Ulusal fon ve destek başvurularına hazırlık",
      "Uluslararası fon ve film marketlerine uygun dosya geliştirme",
      "Ortak yapım modellerinin değerlendirilmesi",
      "Yatırımcı, yapımcı ve dağıtımcı görüşmeleri için sunum dosyalarının hazırlanması"
    ],
    summary: "Doğru finansman modeli, projenin yaratıcı özgürlüğünü korurken yapım sürecinin sürdürülebilir şekilde ilerlemesini sağlar."
  },
  {
    id: "04",
    title: "Ana Çekim ve Prodüksiyon Yönetimi",
    desc: "Ana çekim süreci, senaryoda kurulan dünyanın görüntüye dönüştüğü en kritik aşamadır. Çekim sürecini teknik kalite, ekip koordinasyonu, zaman yönetimi ve set güvenliği odağında yürütürüz.",
    items: [
      "Çekim planı ve günlük iş akışının yönetimi",
      "Kamera, ışık, ses ve grip ekiplerinin koordinasyonu",
      "Sanat, kostüm, makyaj ve prodüksiyon tasarımı süreçlerinin takibi",
      "Oyuncu ve ekip planlaması",
      "Mekân, ulaşım, konaklama ve set lojistiğinin yönetimi",
      "Yasal izinler ve sözleşme süreçlerinin kontrolü"
    ],
    summary: "Her filmin görsel dili, türü ve bütçesi farklıdır. Kamera, lens, ışık ve teknik ekipman tercihleri; projenin estetik hedeflerine, dağıtım planına ve yapım bütçesine göre özel olarak belirlenir."
  },
  {
    id: "05",
    title: "Post-Prodüksiyon",
    desc: "Çekimleri tamamlanan bir sinema filmi, post-prodüksiyon süreciyle nihai anlatım gücüne kavuşur. Filmin kurgu, renk, ses ve teknik teslim aşamalarını profesyonel standartlarda yönetiriz.",
    items: [
      "Offline ve online kurgu",
      "Renk düzenleme",
      "Ses tasarımı",
      "Müzik kullanımı ve miksaj",
      "Görsel efekt süreçleri",
      "Altyazı ve versiyonlama",
      "Festival, sinema salonu ve dijital platform teslim formatlarına hazırlık"
    ],
    summary: "Post-prodüksiyon yalnızca teknik bir tamamlama aşaması değil; filmin ritmini, atmosferini ve izleyici üzerindeki duygusal etkisini belirleyen yaratıcı bir süreçtir."
  },
  {
    id: "06",
    title: "Festival, Dağıtım ve Yayın Stratejisi",
    desc: "Bir sinema filminin üretim süreci, çekim ve kurgu ile tamamlanmaz. Filmin doğru festival, dağıtım ve yayın stratejisiyle izleyiciye ulaşması da yapım sürecinin önemli bir parçasıdır.",
    items: [
      "Ulusal ve uluslararası festival başvuru stratejisi",
      "Prömiyer planlaması",
      "Film marketleri için sunum dosyası hazırlığı",
      "Sinema salonu dağıtım süreci",
      "Dijital platform ve televizyon yayın alternatifleri",
      "Basın, tanıtım ve iletişim planlaması"
    ],
    summary: "Her film için hedeflenen izleyici, tür, bütçe, festival potansiyeli ve dağıtım modeli ayrı ayrı değerlendirilir."
  }
];

export default function CinemaFilmsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden scroll-smooth">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0 pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm border border-border">
              <span className="h-2 w-2 rounded-full bg-primary" /> HİZMETLER — SİNEMA FİLMLERİ
            </div>
            
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[6.5rem] leading-[1.05] max-w-5xl animate-in slide-in-from-bottom-8 fade-in duration-700">
              Uzun Metraj Sinema <br className="hidden md:block" />
              <span className="italic font-serif text-muted-foreground">Filmi Yapımı</span>
            </h1>
            
            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              Meridyen Film Yapım; uzun metraj sinema filmleri için fikir geliştirme, senaryo çalışmaları, yapım öncesi hazırlık, ana çekim, post-prodüksiyon, festival stratejisi ve dağıtım süreçlerini profesyonel yapım disipliniyle yöneten İstanbul merkezli bir film yapım şirketidir.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-16 md:py-24 px-6 border-y border-border/50 bg-muted/20">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium">
              Sinema filmi üretimi; yaratıcı fikrin doğru geliştirilmesi, senaryonun güçlü bir yapıya kavuşturulması, bütçenin gerçekçi planlanması, çekim sürecinin titizlikle yönetilmesi ve filmin doğru izleyiciyle buluşturulması gereken çok aşamalı bir yapım sürecidir.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bağımsız sinema diliyle güçlü hikâyeleri buluşturan projelerde; yaratıcı, teknik, operasyonel ve stratejik tüm süreçleri uluslararası standartlara uygun şekilde ele alıyoruz.
            </p>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="py-24 md:py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 md:mb-24 text-center">
              <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em]">Sinema Filmi Yapım Sürecinde <br className="hidden md:block" /><span className="italic font-serif text-muted-foreground">Sunduğumuz Hizmetler.</span></h2>
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
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
                Sinema filmi projelerini yalnızca teknik bir prodüksiyon işi olarak değil, fikirden izleyiciye uzanan bütünlüklü bir yaratıcı süreç olarak ele alıyoruz. Bizi farklı kılan temel yaklaşım:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Güçlü hikâye geliştirme anlayışı",
                "Profesyonel yapım planlaması",
                "Deneyimli kreatif ve teknik ekip yapısı",
                "Bütçe ve zaman yönetiminde disiplinli çalışma",
                "Ulusal ve uluslararası standartlara uygun üretim anlayışı",
                "Festival, dağıtım ve yayın süreçlerine hâkim yapım bakışı"
              ].map((feature, i) => (
                <div key={i} className="bg-primary-foreground/10 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/20 transition-colors">
                  <div className="h-10 w-10 bg-primary-foreground text-primary rounded-full flex items-center justify-center font-bold mb-4">
                    {i + 1}
                  </div>
                  <h4 className="font-medium">{feature}</h4>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center max-w-3xl mx-auto">
              <p className="text-lg text-primary-foreground/80 italic">
                Meridyen Film Yapım, sinema filmlerinde hikâyenin ruhunu koruyarak, projeyi yaratıcı ve endüstriyel açıdan doğru bir yapım sürecine taşır.
              </p>
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
              Sinema Filmi Projeniz İçin <br/>
              <span className="italic font-serif text-muted-foreground">Bizimle İletişime Geçin</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Uzun metraj sinema filmi projenizi geliştirmek, profesyonel bir yapım sürecine taşımak veya mevcut projeniz için yapım, post-prodüksiyon, fon, festival ve dağıtım stratejisi oluşturmak istiyorsanız Meridyen Film Yapım ile iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-transform hover:scale-[1.02]">
                Projenizi Görüşmek İçin Bize Ulaşın
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
