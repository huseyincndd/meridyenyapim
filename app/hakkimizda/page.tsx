import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Hakkımızda | Meridyen Film Yapım | İstanbul Film Yapım Şirketi",
  description:
    "2009 yılından bu yana İstanbul merkezli olarak sinema filmi, dizi, reklam prodüksiyonu ve dikey dizi formatları üreten Meridyen Film Yapım'ın kurumsal hikayesi ve faaliyet alanları.",
  alternates: {
    canonical: "https://www.meridyenfilm.com/hakkimizda",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    q: "Meridyen Film Yapım resmi olarak ne zaman kurulmuştur?",
    a: "Meridyen Film Yapım, 2009 yılında İstanbul merkezli olarak kurulmuş resmi ve bağımsız bir film yapım şirketidir."
  },
  {
    q: "Meridyen Film Yapım güvenilir mi?",
    a: "Meridyen Film Yapım, faaliyetlerini resmi ticari kayıtları kapsamında yasal ve şeffaf bir şekilde yürütmektedir. Şirket, etik yapımcılık ilkeleri gereği hiçbir başvuru sürecinden kayıt, dosya veya albüm ücreti talep etmez."
  },
  {
    q: "Şirketin faaliyet alanları nelerdir?",
    a: "Şirket; sinema, dizi, reklam campaigns (kampanyaları) ve 9:16 dikey formatlı içerik projelerinin prodüksiyon ve post-prodüksiyon süreçlerinde faaliyet göstermektedir."
  },
  {
    q: "Yapım şirketi ne iş yapar?",
    a: "Bir yapım şirketi; sinema, dizi, reklam ve dijital içerik projelerinin fikir aşamasından senaryolaştırılmasına, bütçelendirmeden saha çekimine (prodüksiyon) ve stüdyoda kurgu ile ses süreçlerinin tamamlanmasına kadar tüm kreatif, finansal ve operasyonel süreçleri uçtan uca yönetir."
  },
  {
    q: "Reklam filmi yapım süreci nasıl ilerler?",
    a: "Reklam filmi yapım süreci; markadan alınan brifing doğrultusunda senaryo ve storyboard hazırlanması, cast (oyuncu) seçimi ve mekan keşfi, profesyonel set ortamında ana çekimlerin gerçekleştirilmesi ve ardından post-prodüksiyonda marka mesajının optimize edilmesi aşamalarıyla tamamlanır."
  },
  {
    q: "Dijital içerik projeleri geliştiriyor musunuz?",
    a: "Evet. Meridyen Film Yapım, geleneksel yapımların yanı sıra sosyal medya platformları ve dijital yayın kanalları için kısa ve orta form dijital içerik projeleri ile 9:16 formatında dikey dizi yapımları da gerçekleştirmektedir."
  },
  {
    q: "Başvuru yapmak ücretli midir?",
    a: "Hayır. Meridyen Film Yapım, etik yapımcılık ilkeleri gereği başvurulardan hiçbir ad altında kayıt, dosya veya albüm ücreti talep etmez. Tüm başvurular ücretsiz ve KVKK güvencesi altında değerlendirilir."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a,
        },
      })),
    },
    {
      "@type": "AboutPage",
      "mainEntity": {
        "@type": ["Organization", "MovieProductionCompany"],
        "name": "Meridyen Film Yapım",
        "legalName":
          "MERİDYEN FİLM YAPIM REKLAM HİZMETLERİ SANAYİ VE TİCARET LİMİTED ŞİRKETİ",
        "foundingDate": "2009",
        "foundingLocation": {
          "@type": "Place",
          "name": "İstanbul, Türkiye",
        },
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "20",
        },
        "knowsAbout": [
          "Sinema Filmi Yapımı",
          "Reklam Filmi Prodüksiyonu",
          "Dizi Yapımı",
          "Post-Prodüksiyon",
          "Dikey Dizi",
          "Yapım Yönetimi",
        ],
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* HERO - CLEAN LIGHT THEME */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6">
          <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="h-2 w-2 rounded-full bg-primary" /> Kurumsal Hikaye
            </div>
            <h1 className="font-display text-5xl tracking-[-0.035em] md:text-7xl lg:text-[6.5rem] leading-[1.1] max-w-5xl animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
              İstanbul'dan Dünyaya:{" "}
              <span className="italic font-serif text-muted-foreground">
                17 Yıllık Bağımsız Yapım Deneyimi
              </span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg md:text-2xl text-muted-foreground leading-relaxed animate-in slide-in-from-bottom-8 fade-in duration-700 delay-300">
              Meridyen Film Yapım, 2009 yılında İstanbul'da kurulan bağımsız bir yapım şirketidir. Sinema filmleri, televizyon dizileri, kurumsal reklam filmleri ve yeni nesil dikey dizi formatları alanlarında faaliyet göstermektedir. Şirket; yaratıcı geliştirme ve senaryo süreçlerinden saha çekimlerine, stüdyo içi kurgu, renk derecelendirme ve ses tasarımı aşamalarından dijital platform ve vizyon dağıtımına kadar tüm yapım süreçlerini tek çatı altında yönetmektedir.
            </p>
          </div>
        </section>

        {/* HERO IMAGE */}
        <section className="px-4 md:px-6 mb-24 md:mb-40">
          <div className="mx-auto max-w-7xl">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-border bg-card">
              <img
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop"
                alt="Meridyen Film Yapım sinema ve reklam filmi yapım yönetimi, İstanbul set arkası operasyonu."
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* KURUMSAL HİKAYE & VİZYON */}
        <section className="mx-auto max-w-7xl px-6 mb-24 md:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-6">
              <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" /> Felsefemiz
              </div>
              <h2 className="font-display text-4xl md:text-5xl mb-8 tracking-[-0.035em]">17 Yıllık Sektörel Deneyim ve Sinematik Disiplin</h2>
              <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Film yapımı; yalnızca çekim gününden ibaret değildir. Bir projenin fikir aşamasından senaryolaştırılmasına, bütçe planlamasından ekip organizasyonuna, çekim süreçlerinden kurgu ve teslim aşamasına kadar birçok farklı uzmanlık alanını bir araya getirir.
                </p>
                <p>
                  Meridyen Film Yapım, bu süreçlerin tamamını planlı, sürdürülebilir ve profesyonel bir yapım yaklaşımıyla yönetmektedir. Kurulduğumuz günden bu yana; reklam filmi yapımından uzun metraj sinema filmlerine, dizi projelerinden yeni nesil dikey dizi formatlarına kadar 100'ün üzerinde yapıma imza attık.
                </p>
                <p>
                  Sinema ve televizyon endüstrisinin kurallarını yakından takip ederken, değişen izleyici alışkanlıklarını ve yeni nesil içerik formatlarını da prodüksiyon süreçlerimize entegre ediyoruz. Gelişmiş 4K/8K sinematik kamera sistemlerimiz, deneyimli kadromuz ve güçlü lojistik altyapımızla, her bütçe ve ölçekteki projeyi yaratıcı vizyondan ödün vermeden hayata geçiriyoruz.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-center">
              <div className="rounded-[3rem] bg-muted/30 p-10 md:p-14 border border-border relative">
                <h2 className="font-display text-3xl md:text-4xl mb-6 tracking-[-0.035em]">Neden Varız?</h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-6 mb-10">
                  <p>
                    Bir hikâye yalnızca yazıldığında var olmaz. Ekranın önündeki izleyiciyle o hikâye arasında — görüntünün, sesin, ışığın ve ritmin tam olarak örtüştüğü an — işte o an gerçek olur. Meridyen Film Yapım, o anı mümkün kılmak için kuruldu.
                  </p>
                  <p>
                    Bağımsız yapımcılık bize tek bir şeyi garanti eder: hiçbir proje bir diğerinin kalıbına sığmaz. Her film kendi sorusunu sorar; bizim işimiz, doğru soruyu sormak için doğru ekibi, doğru kadroyu ve doğru teknik altyapıyı bir araya getirmektir.
                  </p>
                  <p>
                    Bugün yapım sektöründe yalnızca içerik üreten bir şirket olmanın ötesinde; film yapımı, reklam filmi prodüksiyonu, yapım yönetimi ve görsel hikâye anlatımı alanlarında bilgi üretmeye, deneyim paylaşmaya ve sektörel gelişime katkı sunmaya devam etmekteyiz.
                  </p>
                </div>
                <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground border-l-4 border-primary pl-6">
                  "Hikâye, sahnenin önünde kurulmaz — bir ekibin ortak nefesinde kurulur."
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* BENTO GRID: SAYISAL GÜVEN, MİSYON, VİZYON */}
        <section className="py-24 md:py-32 px-6 mb-24 md:mb-40">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em]">Sayısal <span className="italic font-serif text-muted-foreground">Güven.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="rounded-[2rem] border border-border bg-card p-8 flex flex-col justify-center items-center text-center hover:border-primary/50 transition-colors">
                <span className="font-display text-6xl md:text-7xl mb-3">17 Yıl</span>
                <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Sektörel Deneyim (2009 — 2026)</span>
              </div>
              <div className="rounded-[2rem] border border-border bg-card p-8 flex flex-col justify-center items-center text-center hover:border-primary/50 transition-colors">
                <span className="font-display text-6xl md:text-7xl mb-3">100+</span>
                <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Tamamlanan Yapım ve Proje</span>
              </div>
              <div className="rounded-[2rem] border border-border bg-card p-8 flex flex-col justify-center items-center text-center hover:border-primary/50 transition-colors">
                <span className="font-display text-6xl md:text-7xl mb-3">10K+</span>
                <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Saat Set Operasyonu</span>
              </div>
              <div className="rounded-[2rem] border border-border bg-card p-8 flex flex-col justify-center items-center text-center hover:border-primary/50 transition-colors">
                <span className="font-display text-6xl md:text-7xl mb-3">1K+</span>
                <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">Oyuncu & Ekip Koordinasyonu</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-[2.5rem] border border-border bg-card p-10 md:p-12 hover:border-primary/50 transition-colors">
                <h3 className="font-display text-3xl md:text-4xl mb-6">Misyonumuz</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Güçlü hikâyeleri profesyonel yapım süreçleriyle buluşturarak; sinema, dizi, reklam ve dijital içerik alanlarında <span className="text-foreground font-medium">sürdürülebilir ve nitelikli</span> yapımlar üretmek.
                </p>
              </div>
              <div className="rounded-[2.5rem] border border-border bg-card p-10 md:p-12 hover:border-primary/50 transition-colors">
                <h3 className="font-display text-3xl md:text-4xl mb-6">Vizyonumuz</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Film yapımı, reklam prodüksiyonu ve dijital içerik üretiminde ulusal ve uluslararası standartlarda referans şirketlerden biri olmak; <span className="text-foreground font-medium">yeni nesil formatları</span> entegre etmeye devam etmek.
                </p>
              </div>
              <div className="rounded-[2.5rem] border border-border bg-card p-10 md:p-12 hover:border-primary/50 transition-colors">
                <h3 className="font-display text-3xl md:text-4xl mb-6">Etik Kast Modeli</h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Sektöre yeni yüzler kazandırırken adaylardan; kayıt ücreti, dosya masrafı, albüm veya üyelik bedeli gibi <span className="text-foreground font-medium">hiçbir ücret talep etmeyiz.</span> Tüm süreçlerimiz şeffaf ve ücretsizdir.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SÜREÇ FELSEFESİ & NASIL ÇALIŞIYORUZ */}
        <section className="mx-auto max-w-7xl px-6 mb-24 md:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5 sticky top-32 self-start">
              <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" /> Süreç Felsefesi
              </div>
              <h2 className="font-display text-4xl md:text-6xl mb-8 tracking-[-0.035em]">Nasıl <span className="italic font-serif text-muted-foreground">Çalışıyoruz?</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Meridyen Film Yapım'ı diğer yapım şirketlerinden ayıran temel fark, sürecin tamamını tek çatı altında yönetmesidir. Projeler dış kaynak kullanılmadan, şirket içi ekiplerle uçtan uca yürütülür.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Bütünleşik Çözüm</h4>
                    <p className="text-muted-foreground">Tüm operasyon tek bir profesyonel muhatap üzerinden yönetilir.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Teknolojik & Hukuki Uyum</h4>
                    <p className="text-muted-foreground">Telif hakları ve uluslararası teknik teslim şartnamelerine tam uyum.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Şeffaf Yönetim</h4>
                    <p className="text-muted-foreground">Taahhüt edilen bütçe, takvim ve teknik standartlar değişmez.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {[
                { t: "Geliştirme", d: "Fikir, senaryo, dramaturji ve finansal planlama. Projeye bağlı olarak ortak yapım ve fon başvurusu desteği." },
                { t: "Prodüksiyon", d: "Set kurulumu, cast yönetimi, mekan keşfi, çekim takvimi ve ekip organizasyonu. 4K/8K sinematik kamera sistemleri." },
                { t: "Post-Prodüksiyon", d: "Kendi stüdyomuzda kurgu, ses tasarımı, VFX ve sinematik renk derecelendirme (Color Grading). Teslim süresi baştan taahhüt edilir." },
                { t: "Dağıtım", d: "Ulusal vizyon organizasyonu, uluslararası festival başvuruları ve dijital platform teknik teslimatı." }
              ].map((step, i) => (
                <div key={i} className="group rounded-[2.5rem] border border-border bg-card p-8 md:p-12 hover:border-primary/50 transition-colors flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
                  <div className="font-display text-5xl md:text-7xl text-muted/30 group-hover:text-primary transition-colors">
                    0{i + 1}
                  </div>
                  <div>
                    <h4 className="font-display text-2xl md:text-3xl mb-3 tracking-[-0.035em]">{step.t}</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAALİYET ALANLARI LIST */}
        <section className="mx-auto max-w-7xl px-6 mb-24 md:mb-40">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em]">Faaliyet <span className="italic font-serif text-muted-foreground">Alanlarımız.</span></h2>
          </div>
          <div className="border-t border-border">
            {[
              { a: "Sinema Filmleri", d: "Uzun metraj yapım, dramatürji, festival ve vizyon dağıtımı", l: "/hizmetler/sinema-filmi" },
              { a: "Dizi Yapımları", d: "TV kanalları ve dijital platformlar için çok bölümlü yapımlar", l: "/hizmetler/dizi-yapimi" },
              { a: "Reklam Filmleri", d: "Kurumsal marka iletişimi için uçtan uca prodüksiyon", l: "/hizmetler/reklam-filmi" },
              { a: "Dijital İçerik", d: "Platform odaklı kısa ve orta form içerik üretimi", l: "/hizmetler/dijital-icerik" },
              { a: "Dikey Dizi", d: "9:17 formatında mobil tüketim için optimize yapım", l: "/hizmetler/dikey-dizi" },
              { a: "Yapım Yönetimi", d: "Bütçe, takvim, ekip ve saha lojistiği koordinasyonu", l: "/hizmetler/yapim-yonetimi" },
            ].map((row, i) => (
              <Link href={row.l} key={i} className="group block border-b border-border py-8 md:py-12 hover:bg-muted/30 transition-colors px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-primary transition-colors tracking-[-0.035em]">{row.a}</h3>
                    <p className="text-lg text-muted-foreground">{row.d}</p>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-border text-foreground transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-background shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SIKÇA SORULAN SORULAR */}
        <section className="mx-auto max-w-4xl px-6 mb-32 md:mb-48">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" /> SSS
            </div>
            <h2 className="font-display text-4xl md:text-6xl tracking-[-0.035em]">Sıkça Sorulan <span className="italic font-serif text-muted-foreground">Sorular.</span></h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-[2rem] border border-border bg-card p-6 md:p-8 open:bg-muted/30 transition-all duration-300">
                <summary className="flex cursor-pointer items-center justify-between font-display text-xl md:text-2xl list-none [&::-webkit-details-marker]:hidden outline-none">
                  <span className="pr-8">{f.q}</span>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border text-xl transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-background group-open:border-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                  </span>
                </summary>
                <div className="mt-8 text-muted-foreground leading-relaxed text-lg animate-in fade-in slide-in-from-top-4 duration-300">
                  <p>{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA BÖLÜMÜ */}
        <section className="dark bg-background text-foreground py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem] px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-4xl md:text-6xl lg:text-[5rem] mb-6 tracking-[-0.035em] leading-[1.1]">
              Bir Sonraki Hikâyeyi <br/>
              <span className="italic font-serif text-muted-foreground">Birlikte Başlatalım</span>
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Projenizin kreatif geliştirme, bütçelendirme veya prodüksiyon süreçlerini başlatmak ya da profesyonel havuzumuza dahil olmak için bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#iletisim" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold transition-transform hover:scale-[1.02]">
                Proje Başlat
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-45"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link href="/oyuncu-basvurusu" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full border border-border hover:bg-card px-8 py-4 text-lg font-semibold transition-all group">
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
