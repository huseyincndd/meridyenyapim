import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Projects } from "@/components/site/Projects";

export const metadata: Metadata = {
  title: "Projelerimiz | Meridyen Film Yapım | Filmografi ve Yapımlar",
  description:
    "Meridyen Film Yapım imzalı sinema filmleri, diziler, reklam filmleri ve dikey dizi projeleri. 2009'dan bu yana 100'ün üzerinde yapım.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/projeler",
  },
};

const faqs = [
  {
    q: "Meridyen Film Yapım ne iş yapar?",
    a: "Meridyen Film Yapım; sinema filmleri, televizyon dizileri, dijital platform içerikleri, reklam filmleri ve kurumsal video projelerinin geliştirilmesi, yapımı ve prodüksiyon süreçlerini yöneten İstanbul merkezli bağımsız bir yapım şirketidir."
  },
  {
    q: "Meridyen Film Yapım hangi tür projeler geliştiriyor?",
    a: "Şirketimiz; sinema filmleri, televizyon dizileri, dijital platform yapımları, reklam filmleri, marka içerikleri, kurumsal videolar ve uluslararası ortak yapım projeleri geliştirmekte ve üretmektedir."
  },
  {
    q: "Projeler sayfasında yer alan yapımlar güncel midir?",
    a: "Evet. Projeler sayfamızda hem tamamlanmış yapımlarımız hem de geliştirme, ön hazırlık, yapım ve post-prodüksiyon aşamasındaki güncel projelerimiz yer almaktadır. Her projenin güncel durumu ilgili proje detay sayfasında belirtilmektedir."
  },
  {
    q: "Meridyen Film Yapım hangi prodüksiyon hizmetlerini sunmaktadır?",
    a: "Meridyen Film Yapım; proje geliştirme, yapım planlaması, prodüksiyon yönetimi, çekim organizasyonu, post-prodüksiyon, kurgu, renk düzenleme ve içerik geliştirme hizmetleri sunmaktadır."
  },
  {
    q: "Reklam filmi ve marka içerikleri üretiyor musunuz?",
    a: "Evet. Markalar için reklam filmleri, dijital kampanya içerikleri, kurumsal tanıtım filmleri, sosyal medya içerikleri ve özel prodüksiyon projeleri geliştirmekte ve üretmekteyiz."
  },
  {
    q: "Dijital platformlar için içerik geliştiriyor musunuz?",
    a: "Evet. Dijital platformlara yönelik film, dizi, kısa format içerikler ve yeni nesil dikey video projeleri geliştirmekteyiz."
  },
  {
    q: "Uluslararası ortak yapım projelerine açık mısınız?",
    a: "Evet. Meridyen Film Yapım, uluslararası yapım şirketleri, yayıncılar ve yatırımcılarla ortak yapım modelleri geliştirebilmekte ve uluslararası prodüksiyon süreçleri yürütebilmektedir."
  },
  {
    q: "Senaryo veya proje dosyası gönderebilir miyim?",
    a: "Evet. Film, dizi, reklam filmi veya dijital içerik projelerinizi değerlendirilmek üzere iletişim kanallarımız aracılığıyla iletebilirsiniz. Tüm başvurular profesyonel ön değerlendirme sürecinden geçirilmektedir."
  },
  {
    q: "Meridyen Film Yapım ile nasıl çalışabilirim?",
    a: "Yapım hizmetleri, ortak yapım fırsatları, reklam filmi prodüksiyonları veya proje geliştirme süreçleri hakkında bilgi almak için iletişim sayfamız üzerinden ekibimizle iletişime geçebilirsiniz."
  }
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0 pointer-events-none" />
          <div className="mx-auto max-w-7xl flex flex-col items-center text-center relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground bg-muted/50 px-4 py-2 rounded-full backdrop-blur-sm border border-border animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="h-2 w-2 rounded-full bg-primary" /> YAPIMLARIMIZ
            </div>
            
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[6.5rem] leading-[1.05] max-w-5xl animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              17 Yılın <br className="hidden md:block" />
              <span className="italic font-serif text-muted-foreground">Filmografisi</span>
            </h1>
            
            <p className="mt-6 text-xl md:text-3xl text-foreground font-medium animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
              2009'dan bugüne, perdeden ekrana uzanan bir üretim hikâyesi
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-12 md:py-20 px-6 border-y border-border/50 bg-muted/10">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-4 fade-in duration-700 delay-500">
              Meridyen Film Yapım, 2009 yılından bu yana sinema filmi, televizyon dizisi, reklam filmi ve dikey dizi alanlarında 100'ün üzerinde yapıma imza atmış İstanbul merkezli bir yapım şirketidir. On yedi yılı aşan bu yolculuk boyunca, bağımsız sinemanın özgün anlatım dilini farklı türler ve ölçeklerle buluşturarak hem sanatsal hem de endüstriyel açıdan sürdürülebilir bir üretim kültürü inşa ettik.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-4 fade-in duration-700 delay-700">
              Bir yapım şirketinin filmografisi, yalnızca tamamlanmış işlerin bir envanteri değildir; aynı zamanda o şirketin zaman içinde nasıl büyüdüğünü, hangi anlatım biçimlerini denediğini ve değişen izleyici alışkanlıklarına nasıl uyum sağladığını anlatan bir hikâyedir. Bizim filmografimiz de böyle okunmayı hak ediyor. İlk kısa denemelerden uzun metraj sinema filmlerine, çok bölümlü televizyon dizilerinden son yılların yeni formatı olan dikey dizilere kadar geniş bir yelpazede ürettiğimiz her iş, kendi döneminin teknik imkânlarını ve anlatım eğilimlerini yansıtırken, bir sonraki projenin de zeminini hazırladı.
            </p>
          </div>
        </section>

        {/* CAROUSEL / PROJECTS COMPONENT */}
        <div className="my-12 md:my-24 overflow-hidden">
          <Projects />
        </div>

        {/* ÜRETİM ALANLARIMIZ */}
        <section className="py-24 md:py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 md:mb-24 text-center">
              <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em]">Üretim <span className="italic font-serif text-muted-foreground">Alanlarımız.</span></h2>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                On yedi yıllık üretimimiz, birbirini besleyen dört temel alanda şekillendi:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                { title: "Sinema Filmleri", desc: "Bağımsız sinema diliyle geliştirilen, festival ve vizyon hedefli uzun metraj projeler." },
                { title: "Televizyon Dizileri", desc: "Ulusal kanallar ve dijital platformlar için geliştirilen çok bölümlü yapımlar." },
                { title: "Reklam Filmleri", desc: "Markalar ve ajanslar için üretilen TVC, dijital ve sosyal medya kampanyaları." },
                { title: "Dikey Diziler", desc: "Dijital platformların yeni nesil, mobil öncelikli kısa form anlatıları." }
              ].map((item, idx) => (
                <div key={idx} className="bg-card border border-border/50 rounded-3xl p-8 md:p-10 hover:shadow-md transition-shadow">
                  <h3 className="font-display text-2xl md:text-3xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY SECTIONS */}
        <section className="py-24 md:py-32 px-6 border-y border-border/50 bg-background relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-5xl space-y-24">
            
            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> YAKLAŞIM
              </div>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8">Çalışma Anlayışımız</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                Her projeye, türü ve ölçeği ne olursa olsun aynı yapım disipliniyle yaklaşırız: güçlü bir fikir, gerçekçi bir planlama, profesyonel bir set ve titiz bir yapım sonrası süreç. Bu yaklaşım, on yedi yıl boyunca farklı türlerde sürdürülebilir bir üretim temposunu korumamızı sağladı.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Filmografimizdeki çeşitlilik, bizim için bir dağınıklık değil; bir yapım şirketinin farklı anlatı biçimlerini aynı kalite anlayışıyla yönetebilme kapasitesinin göstergesidir. Sinemanın derinliğini, dizinin sürekliliğini, reklamın keskinliğini ve dikey dizinin hızını aynı çatı altında buluşturuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-left">
              <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                <h3 className="font-display text-2xl md:text-3xl mb-6">Sinemayla Başlayan Bir Yolculuk</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Meridyen Film Yapım'ın temelinde, sinemaya duyulan bağlılık yatar. Kuruluşumuzdan bu yana, bağımsız sinemanın özgürlüğünü ve evrensel hikâye anlatıcılığının gücünü bir arada gözeten projeler geliştirdik. Uzun metraj filmlerimizde, yalnızca ticari beklentileri değil; bir hikâyenin gerçekten anlatılmaya değer olup olmadığını da ölçüt aldık. Bu yaklaşım, yapımlarımızın hem yurt içinde hem de uluslararası mecralarda kendine bir yer bulmasını sağladı.
                </p>
              </div>
              <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                <h3 className="font-display text-2xl md:text-3xl mb-6">Diziyle Süreklilik, Reklamla Keskinlik</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Yıllar içinde üretim alanımız genişledi. Televizyon dizileri, bize çok bölümlü ve sürdürülebilir bir anlatının nasıl kurulacağını; bir karakterin sezonlar boyunca nasıl yaşatılacağını öğretti. Reklam filmleri ise tam tersi bir disiplin getirdi: bazen yalnızca otuz saniyede bir markanın hikâyesini eksiksiz, etkili ve akılda kalıcı biçimde anlatmak. Bu iki alanın bir arada yürütülmesi, ekibimizi hem uzun soluklu yapımların sabrına hem de kısa formatların keskinliğine aynı anda hâkim kıldı.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-left">
              <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                <h3 className="font-display text-2xl md:text-3xl mb-6">Yeni Nesil: Dikey Diziler</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Son dönemde, dijital platformların ve mobil izleyici alışkanlıklarının doğurduğu yeni bir anlatı biçimine, dikey dizilere yöneldik. Telefon ekranına göre tasarlanmış, hızlı tempolu ve bölüm bölüm tüketilen bu format, klasik yapım anlayışını yeni bir ritimle yeniden düşünmeyi gerektirdi. Bu alandaki üretimlerimiz, on yedi yıllık deneyimimizi günümüzün dijital diline taşıma çabamızın bir göstergesidir.
                </p>
              </div>
              <div className="bg-card p-8 md:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                <h3 className="font-display text-2xl md:text-3xl mb-6">Aynı Disiplin, Farklı Anlatılar</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Filmografimizdeki bu çeşitlilik, bizim için bir dağınıklık değil; bir yapım şirketinin farklı anlatı biçimlerini aynı kalite anlayışıyla yönetebilme kapasitesinin kanıtıdır. Sinemanın derinliğini, dizinin sürekliliğini, reklamın keskinliğini ve dikey dizinin hızını aynı çatı altında, aynı yapım disipliniyle buluşturuyoruz. Türü ve ölçeği ne olursa olsun her projeye; güçlü bir fikir, gerçekçi bir planlama, profesyonel bir set ve titiz bir yapım sonrası süreçle yaklaşıyoruz.
                </p>
              </div>
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

        {/* CTA BÖLÜMÜ */}
        <section className="dark bg-background text-foreground py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem] px-6 mt-12 md:mt-24">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-4xl md:text-6xl lg:text-[5rem] mb-6 tracking-[-0.035em] leading-[1.1]">
              Bir Sonraki Hikâyeyi <br/>
              <span className="italic font-serif text-muted-foreground">Birlikte Başlatalım</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Projenizin kreatif geliştirme, bütçelendirme veya prodüksiyon süreçlerini başlatmak ya da profesyonel havuzumuza dahil olmak için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-transform hover:scale-[1.02]">
                Proje Başlat
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link href="/iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-border hover:bg-card px-8 py-4 text-lg font-semibold transition-all group">
                Başvuru Formu
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
