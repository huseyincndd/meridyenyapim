import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FallbackImage } from "@/components/site/FallbackImage";

export const metadata: Metadata = {
  title: "Post-Prodüksiyon Hizmetleri | Meridyen Film Yapım",
  description: "Sinema, Dizi ve Reklam Projeleri İçin Profesyonel Yapım Sonrası Hizmetleri. Kurgu, renk düzenleme, ses tasarımı ve görsel efekt hizmetleri.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/hizmetler/post-produksiyon",
  },
};

const faqs = [
  {
    q: "Post-prodüksiyon nedir?",
    a: "Post-prodüksiyon; çekimleri tamamlanan görüntü ve seslerin kurgu, conform, renk düzenleme, ses tasarımı, grafik, görsel efekt, altyazı ve teknik teslim süreçleriyle yayına hazır hale getirildiği yapım sonrası aşamadır."
  },
  {
    q: "Sadece post-prodüksiyon hizmeti alabilir miyiz?",
    a: "Evet. Kendi projelerimizin yanı sıra harici yapım şirketleri, ajanslar, markalar ve bağımsız yönetmenler tarafından çekilmiş projelere de yalnızca post-prodüksiyon hizmeti sunabiliyoruz. Görüntü kurgu kilidi (picture lock) sonrası finishing süreçlerini devralabiliriz."
  },
  {
    q: "HDR ve Dolby Vision iş akışı sağlıyor musunuz?",
    a: "Evet. Tek bir HDR master üzerinden hem HDR hem SDR versiyonlarının üretildiği bir iş akışı kurulabilir. Bu, içeriğin farklı cihaz ve ekranlarda tutarlı görünmesini sağlar ve büyük platformların tercih ettiği teslim standardına uyumludur."
  },
  {
    q: "Sosyal medya için dikey video ve kısa versiyon hazırlıyor musunuz?",
    a: "Evet. Instagram, TikTok, YouTube Shorts ve diğer dijital mecralar için 9:16 dikey format, 1:1 kare, kısa versiyonlar ve altyazılı içerikler hazırlanabilir. Tek bir projeden çoklu mecra versiyonu üretilebilir."
  },
  {
    q: "Renk düzenleme ve ses miksajı hizmeti veriyor musunuz?",
    a: "Evet. Projenin ihtiyacına göre renk düzeltme, sinematik renk düzenleme, ses temizleme, ses tasarımı, müzik yerleşimi, 5.1 / Dolby Atmos miksajı ve mastering süreçleri yürütülebilir."
  },
  {
    q: "Müzik ve telif süreçlerini yönetiyor musunuz?",
    a: "Evet. Özgün müzik bestesi, lisanslı müzik (production music) temini, sync lisansı ve telif takibi yönetilebilir. Müziğin kullanım hakları yayın mecrası, bölge ve süreye uygun şekilde düzenlenir."
  },
  {
    q: "Sinema ve platform için teknik teslim (DCP / IMF) hazırlıyor musunuz?",
    a: "Evet. Sinema gösterimleri için DCP (Digital Cinema Package) ve dijital platformlar için IMF tabanlı master hazırlığı, master dosya teslimi ve kalite kontrol (QC) süreçleri yönetilebilir."
  }
];

const services = [
  {
    id: "01",
    title: "Veri Yönetimi ve İş Akışı Kurulumu",
    desc: "Sağlıklı bir post-prodüksiyon, doğru kurulan bir iş akışıyla başlar. Çekim verisinin güvenli yedeklenmesi ve kurguya uygun hazırlanması, sonraki tüm aşamaların temelini oluşturur.",
    items: [
      "Çekim verisinin yedeklenmesi ve arşivlenmesi",
      "Proxy / düşük çözünürlüklü kurgu dosyası üretimi",
      "Renk ve format yönetimi (color management)",
      "HDR / SDR günlük (dailies) hazırlığı",
      "Proje ve klasör yapısının kurulması",
      "Conform için kaynak takibi"
    ],
    summary: "İyi kurulmuş bir iş akışı, büyük projelerde zaman ve veri kaybını önler, ekipler arası geçişi sorunsuz kılar."
  },
  {
    id: "02",
    title: "Kurgu ve Montaj",
    desc: "Kurgu; çekilen görüntülerin hikâye akışına, ritme ve dramatik yapıya uygun şekilde bir araya getirildiği en kritik yapım sonrası aşamalardan biridir. Amaç, projenin hikâyesini en etkili ve anlaşılır şekilde izleyiciye ulaştırmaktır.",
    items: [
      "Offline kurgu",
      "Sahne akışı düzenleme",
      "Ritim ve anlatı kurgusu",
      "Reklam filmleri için kısa versiyonlar",
      "Sosyal medya formatları için alternatif kurgular",
      "Görüntü kurgu kilidi (picture lock)",
      "Yayın ve platform ihtiyaçlarına göre versiyonlama"
    ],
    summary: "Kurgu kilidiyle birlikte hikâye yapısı sabitlenir ve proje, finishing aşamalarına hazır hale gelir."
  },
  {
    id: "03",
    title: "Conform ve Renk Düzenleme",
    desc: "Kurgu kilidi sonrası, kurgu kararları orijinal kamera verisine taşınır (conform) ve renk, projenin görsel kimliğini ve atmosferini belirleyecek şekilde düzenlenir.",
    items: [
      "Online edit / conform",
      "Renk düzeltme (color correction)",
      "Sinematik renk düzenleme (grading)",
      "Sahneler arası görsel bütünlük",
      "Ten rengi ve ışık dengesi çalışmaları",
      "HDR master ve SDR trim iş akışı (Dolby Vision uyumlu)",
      "Mecraya uygun görsel ton oluşturma"
    ],
    summary: "Tek bir HDR master üzerinden HDR ve SDR versiyonları üretmek, içeriğin farklı ekran ve cihazlarda tutarlı görünmesini sağlar."
  },
  {
    id: "04",
    title: "Ses Tasarımı, Müzik ve Miksaj",
    desc: "Güçlü bir görsel anlatımın tamamlayıcısı doğru ses tasarımıdır. Ses, izleyicinin hikâyeye dahil olmasını sağlayan en önemli unsurlardan biridir.",
    items: [
      "Diyalog düzenleme ve ses temizleme",
      "Ambiyans ve efekt sesleri (foley / SFX)",
      "Özgün müzik, jingle veya lisanslı müzik temini",
      "Müzik telifi ve sync lisansı yönetimi",
      "Seslendirme (voice-over)",
      "Ses miksajı (stereo, 5.1, Dolby Atmos)",
      "Yayın mecrasına uygun ses mastering ve teslimi"
    ],
    summary: "Müziğin ve seslerin kullanım hakları; yayın mecrası, bölge ve süreye uygun şekilde düzenlenir."
  },
  {
    id: "05",
    title: "Görsel Efekt ve Grafik Uygulamaları",
    desc: "Projelerin ihtiyaçlarına göre görsel efekt, grafik ve dijital düzenleme çalışmaları yapılır. Bu çalışmalar, projenin görsel kalitesini ve profesyonel sunum gücünü artırır.",
    items: [
      "VFX uygulamaları ve görsel temizlik (clean-up)",
      "Kadraj düzenleme ve sabitleme (stabilizasyon)",
      "Logo ve grafik animasyonları (motion graphics)",
      "Jenerik ve başlık tasarımı",
      "Alt yazı ve ekran yazıları",
      "Sosyal medya ve dijital platform grafik uygulamaları"
    ],
    summary: "Grafik ve efekt katmanı, hikâyeyi desteklerken markanın veya yapımın görsel kimliğini güçlendirir."
  },
  {
    id: "06",
    title: "Altyazı, Versiyonlama ve Formatlama",
    desc: "Farklı yayın mecraları, farklı teknik ve içerik formatları gerektirir. Özellikle reklam, dijital içerik ve sosyal medya projelerinde çoklu format üretimi büyük önem taşır.",
    items: [
      "Türkçe ve İngilizce altyazı",
      "Çok dilli altyazı ve dublaj koordinasyonu",
      "Sosyal medya altyazı uygulamaları",
      "16:9 yatay, 9:16 dikey ve 1:1 kare format",
      "Farklı süre kesitleri ve kısa versiyonlar",
      "Platforma özel çıktı hazırlıkları"
    ],
    summary: "Tek bir projeden, her mecranın gereksinimine uygun çoklu versiyon üretilebilir."
  },
  {
    id: "07",
    title: "Teknik Teslim ve Kalite Kontrol",
    desc: "Sürecin son aşaması, projenin yayınlanacağı mecra için doğru teknik formatta hazırlanması ve eksiksiz bir kalite kontrolden geçirilmesidir.",
    items: [
      "Televizyon yayınlarına uygun çıktı hazırlığı",
      "Dijital platform teslim formatları (IMF / mezzanine)",
      "Sinema gösterimi için DCP hazırlığı",
      "Sosyal medya yayın formatları",
      "Ses ve görüntü kalite kontrolü (QC)",
      "Dosya kontrolü ve master dosya teslimi"
    ],
    summary: "Her proje, yayınlanacağı mecra ve kullanım alanına göre özel olarak hazırlanır ve teslim öncesi son kontrolden geçirilir."
  }
];

export default function PostProductionPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden scroll-smooth">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0 pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-7xl flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm border border-border">
              <span className="h-2 w-2 rounded-full bg-primary" /> HİZMETLER — POST-PRODÜKSİYON
            </div>
            
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[6.5rem] leading-[1.05] max-w-5xl animate-in slide-in-from-bottom-8 fade-in duration-700">
              Sinema, Dizi ve Reklam Projeleri İçin <br className="hidden md:block" />
              <span className="italic font-serif text-muted-foreground">Profesyonel Yapım Sonrası</span>
            </h1>
            
            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              Meridyen Film Yapım; sinema filmleri, televizyon dizileri, dijital platform içerikleri, reklam filmleri ve kurumsal video projeleri için post-prodüksiyon hizmetleri sunan İstanbul merkezli bir yapım şirketidir.
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-16 md:py-24 px-6 border-y border-border/50 bg-muted/20">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium">
              Post-prodüksiyon, çekimleri tamamlanan görüntü ve seslerin yayına hazır hale getirildiği yaratıcı ve teknik bir yapım sonrası sürecidir. Kurgu, conform, renk düzenleme, ses tasarımı, grafik uygulamaları, görsel efekt, altyazı, versiyonlama ve teknik teslim bu sürecin temel parçalarını oluşturur.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kendi projelerimizin yanı sıra harici yapım şirketleri, ajanslar, markalar ve bağımsız yönetmenler tarafından çekilmiş projeler için de profesyonel post-prodüksiyon desteği sunarız.
            </p>
          </div>
        </section>

        {/* SERVICES LIST */}
        <section className="py-24 md:py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 md:mb-24 text-center">
              <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em]">Post-Prodüksiyon Sürecinde <br className="hidden md:block" /><span className="italic font-serif text-muted-foreground">Sunduğumuz Hizmetler.</span></h2>
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
                Hangi Projeler İçin <br/>
                <span className="italic font-serif text-primary-foreground/70">Hizmet Sunuyoruz?</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Meridyen Film Yapım, sinemadan sosyal medyaya geniş bir yapım yelpazesinde post-prodüksiyon hizmeti sunar:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Sinema filmleri", "Televizyon dizileri", "Dijital platform içerikleri",
                "Reklam filmleri", "Marka filmleri", "Kurumsal tanıtım filmleri",
                "Sosyal medya videoları", "Belgesel projeleri", "YouTube ve dijital yayın içerikleri"
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
                Post-prodüksiyon yalnızca teknik bir tamamlama süreci değil; projenin anlatım gücünü, görsel kalitesini ve yayın başarısını doğrudan etkileyen yaratıcı bir aşamadır. Bizi farklı kılan temel yaklaşım:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                "Deneyimli kurgu ve post-prodüksiyon yaklaşımı",
                "Sinema, dizi ve reklam projelerine uygun iş akışı",
                "Görsel ve işitsel kaliteye önem veren üretim anlayışı",
                "Çoklu platforma uygun teslim planlaması",
                "Harici projelere de açık post-prodüksiyon desteği",
                "Profesyonel kalite kontrol (QC) süreçleri"
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
              Projenizi Yayına <br/>
              <span className="italic font-serif text-muted-foreground">Hazır Hale Getirelim</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Meridyen Film Yapım, sinema, dizi, reklam ve dijital içerik projelerinde post-prodüksiyon süreçlerini profesyonel şekilde yöneterek projelerin yayına hazır hale gelmesini sağlar.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-transform hover:scale-[1.02]">
                Bizimle İletişime Geçin
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
