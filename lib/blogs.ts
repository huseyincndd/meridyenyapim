export interface Blog {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  faqs?: { q: string; a: string }[];
}

export const blogs: Blog[] = [
  {
    slug: "yapim-sirketi-nedir-yapimcinin-rolu",
    title: "Meridyen Film Yapım Şirketi Nedir? Film ve Dizi Üretim Süreçlerinde Yapımcının Rolü",
    metaDescription: "Yapım şirketi, prodüksiyon evi ve reklam ajansı arasındaki farklar nelerdir? Yapımcı sette ve masada ne iş yapar? Meridyen Film Yapım'dan sektörel rehber.",
    date: "10 Haziran 2026",
    readTime: "6 dk",
    image: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/Meridyen%20Film%20Yap%C4%B1m%20%C5%9Eirketi%20Nedir%20Film%20ve%20Dizi%20%C3%9Cretim%20S%C3%BCre%C3%A7lerinde%20Yap%C4%B1mc%C4%B1n%C4%B1n%20Rol%C3%BC.webp",
    content: `
      <p class="lead">Yapım şirketi; bir film, dizi, reklam filmi veya dijital içeriğin ilk fikir aşamasından seyirciyle buluşmasına kadar geçen tüm sürecin hukuki, ekonomik, sanatsal ve operasyonel sorumluluğunu üstlenen kurumdur.</p>
      
      <h2>Yapım Şirketi Nedir? (Sektörün İçinden Tanımı)</h2>
      <p>Sözlük tanımlarıyla yetinmeyelim. Sektörün içinden bakıldığında bir yapım şirketi, bir görsel-işitsel eserin tüm finansal ve hukuki riskini üstlenen kurumdur. Bu cümledeki en kritik kelime "risk"tir; çünkü yapım şirketini diğer tüm hizmet sağlayıcılardan ayıran temel unsur tam olarak budur.</p>
      <p>Bir yapım şirketinin omurgasını dört temel sorumluluk alanı oluşturur: <strong>Hukuki Sorumluluk</strong>, <strong>Finansal Sorumluluk</strong>, <strong>Sanatsal Sorumluluk</strong> ve <strong>Operasyonel Sorumluluk</strong>.</p>
      
      <h2>Yapım Şirketi, Prodüksiyon Evi ve Reklam Ajansı Arasındaki Fark Nedir?</h2>
      <p>Sektör dışından gelen markaların en sık karıştırdığı üç kavram bunlardır. Fark, projenin mülkiyetinin ve riskinin kimde olduğunda gizlidir:</p>
      <ul>
        <li><strong>Reklam Ajansı:</strong> Marka stratejisi, iletişim tonu ve yaratıcı fikir geliştirme (Mesajın Sahibi).</li>
        <li><strong>Prodüksiyon Şirketi:</strong> Sadece teknik düzeyde bir hizmetin çekim, kurgu vb. icrası (Hizmetin Sahibi).</li>
        <li><strong>Yapım Şirketi:</strong> Projenin uçtan uca hukuki, finansal, sanatsal ve operasyonel riski (Projenin Sahibi).</li>
      </ul>

      <h2>Yapımcı Kimdir? Sette ve Masada Gerçekte Ne Yapar?</h2>
      <p>"Yapımcı" kelimesi jenerikte tek bir isim gibi görünse de profesyonel endüstride alt rollere ayrılır. <strong>Yapımcı (Producer)</strong> projenin asıl sahibidir. <strong>Uygulayıcı Yapımcı (Line Producer)</strong> bütçenin ve çekim takviminin günlük yöneticisidir. <strong>Ortak Yapımcı (Co-Producer)</strong> ve <strong>Yürütücü Yapımcı (Executive Producer)</strong> ise finansal ve stratejik paydaşlardır.</p>

      <h2>Şirket İçi Post-Prodüksiyon Neden Fark Yaratır?</h2>
      <p>Meridyen Film Yapım olarak; kurgu montaj, ses tasarımı, görsel efekt (VFX) ve profesyonel renk derecelendirme (Color Grading) süreçlerinin tamamını şirket içi stüdyomuzda yürütüyoruz. Bu durum dışarıya bağımlılığı ortadan kaldırarak teslim sürelerini optimize eder ve yaratıcı kontrolü korur.</p>
    `,
    faqs: [
      {
        q: "Yapım şirketi ile prodüksiyon şirketi aynı mıdır?",
        a: "Günlük dilde sıklıkla eş anlamlı kullanılsalar da endüstriyel açıdan farkları vardır. Prodüksiyon şirketi sadece belirli bir teknik hizmetin yürütücüsüdür. Yapım şirketi ise işin tüm riskini üstlenen asıl kurumdur."
      },
      {
        q: "Yapımcı ile yönetmen arasındaki fark nedir?",
        a: "Yönetmen, eserin sanatsal vizyonundan sorumludur. Yapımcı ise projenin bütününden (bütçe, telif, lojistik, master teslim) sorumludur. Yönetmen filmin 'nasıl anlatılacağına', yapımcı ise 'nasıl hayata geçirileceğine' karar verir."
      }
    ]
  },
  {
    slug: "reklam-filmi-yapim-sureci",
    title: "Reklam Filmi Yapım Süreci: Geliştirme, Pre-Prodüksiyon ve Set Ortamı",
    metaDescription: "Reklam filmi çekimleri nasıl planlanır? PPM nedir ve neden bu kadar önemlidir? Meridyen Film Yapım'dan reklam prodüksiyonu rehberi.",
    date: "11 Haziran 2026",
    readTime: "5 dk",
    image: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/Reklam%20Filmi%20Yap%C4%B1m%20S%C3%BCreci%20Geli%C5%9Ftirme%2C%20Pre-Prod%C3%BCksiyon%20ve%20Set%20Ortam%C4%B1.webp",
    content: `
      <p class="lead">Sektörde bir söz vardır: "İyi hazırlanmış bir film, çekilmeden önce bitmiştir." Ön-prodüksiyon, kağıttaki senaryoyu fiziksel gerçekliğe çevirme hazırlık sürecidir.</p>
      
      <h2>1. Aşama — Geliştirme: İyi Özet, Sürecin Yarısıdır</h2>
      <p>Proje bir özet (briefing) ile başlıyor. Markanın "ne anlatmak istiyor, kime, hangi mecrada?" sorularına cevap aranır. Hedef kitle, ana mesaj, yayın mecraları ve bütçe aralığı net olmalıdır. Ardından senaryo ve storyboard aşamaları tamamlanır.</p>

      <h2>2. Aşama — Ön Prodüksiyon: Filmin Kaderi Burada Belirlenir</h2>
      <p>Cast organizasyonu, mekan seçimi, teknik ekipman kiralama bu aşamanın kalbidir. Aşamanın finali PPM'dir (Pre-Production Meeting). Müşteri, ajans ve yapım ekibi aynı masada cast, mekan, kostüm, sanat ve çekim planını kalem kalem onaylar.</p>
      
      <h2>3. Aşama — Prodüksiyon: Çekim Günü Gerçekte Nasıl Geçer?</h2>
      <p>Kurulumdan saatler önce set başlar. Işık ve kamera ekibi hazırlanırken oyuncuların saç, makyaj ve kostümü tamamlanır. Her sahne için prova ve kayıt alınır. Çekim günü en önemli imkan canlı izleme (playback) sistemidir, böylece müşteri anlık olarak onay verir.</p>
    `,
    faqs: [
      {
        q: "PPM (çekim öncesi toplantı) nedir?",
        a: "PPM (Prodüksiyon Öncesi Toplantı), çekimden önce müşteri, ajans ve yapım ekibinin cast, mekan, kostüm ve çekim planını onayladığı toplantıdır."
      },
      {
        q: "Reklam filmi çekimi kaç gün sürer?",
        a: "Tek mesajlı standart bir reklam filmi genellikle 1–2 günde tamamlanır. Kalabalık cast veya çok mekanlı işlerde bu süre 3–5 güne çıkabilir."
      }
    ]
  },
  {
    slug: "film-yapim-sureci",
    title: "Film ve Reklam Filmi Yapım Süreci: Fikirden Teslime Adım Adım Nasıl İşler?",
    metaDescription: "Film ve reklam filmi yapım süreci nasıl işler? Brifingden teslime 4 ana aşama: Geliştirme, ön-prodüksiyon, çekim ve post-prodüksiyon. 2026 rehberi.",
    date: "12 Haziran 2026",
    readTime: "8 dk",
    image: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/Film%20ve%20Reklam%20Filmi%20Yap%C4%B1m%20S%C3%BCreci%20Fikirden%20Teslime%20Ad%C4%B1m%20Ad%C4%B1m%20Nas%C4%B1l%20%C4%B0%C5%9Fler.webp",
    content: `
      <p class="lead">Bir film, televizyon dizisi veya kurumsal reklam filminin yapım süreci evrensel olarak dört ana bölümden oluşur: Geliştirme, Pre-Prodüksiyon, Prodüksiyon ve Post-Prodüksiyon.</p>
      
      <h2>1. Aşama — Geliştirme: İyi Bir Brifing, Sürecin Yarısıdır</h2>
      <p>Her başarılı projenin temel taşı, eksiksiz bir brifing dokümanıdır. Kreatif geliştirme süreci başlar: Fikir alternatifleri üretilir, senaryo yazılır, dramaturji çalışmaları ve storyboard hazırlanır. Bu aşamanın çıktısı; onaylı senaryo, kesinleştirilmiş yapım bütçesi ve teslim takvimidir.</p>
      
      <h2>2. Aşama — Ön Prodüksiyon (Pre-Prodüksiyon)</h2>
      <p>Sinema endüstrisinde köklü bir kural vardır: "İyi hazırlanmış bir film, daha sete çıkmadan önce bitmiştir." Cast seçimi, mekan keşifleri, resmi izinlerin alınması ve kamera-ışık parkurunun planlanması bu aşamada yürütülür. Aşamanın zirvesi olan PPM (Prodüksiyon Öncesi Toplantı) ile her detay kilitlenir.</p>
      
      <h2>3. Aşama — Prodüksiyon: Bir Çekim Günü Sette Neler Yaşanır?</h2>
      <p>Dışarıdan bakıldığında sadece motor dendiği an gibi görünse de, sette zaman en büyük maliyettir. Oyuncular, sanat ekibi, reji ve teknik kadro saat saat işleyen bir makine gibi çalışır. Reklam filmlerinde 1-5 gün süren çekimler, dizilerde her hafta bir bölüm döngüsüyle aylarca devam eder.</p>
      
      <h2>4. Aşama — Post-Prodüksiyon: Filmin Şekillendirildiği Mutfak</h2>
      <p>Çekimlerin bitmesiyle birlikte post-prodüksiyon başlar. Offline (Çevrimdışı) kurgu ile sahneler kilitlenir, ardından ses tasarımı, miksaj, görsel efektler (VFX) ve Color Grading uygulanarak yayın mecralarına uygun master formatında teslim edilir.</p>
    `,
    faqs: [
      {
        q: "Film yapım süreci kaç aşamadan oluşuyor?",
        a: "Profesyonel yapım süreci evrensel olarak dört ana aşamadan oluşur: Geliştirme (brifing analizi, senaryo, bütçe), pre-prodüksiyon (cast, mekan, çekim planı), prodüksiyon (çekim günleri) ve post-prodüksiyon (kurgu, ses, VFX, renk)."
      },
      {
        q: "Çevrimdışı (Offline) kurgunun kilitlenmesi ne demektir?",
        a: "Offline kurgu onayı, filmin ham görüntülerinin hikaye akışı açısından kesin olarak karara bağlanmasıdır. Bu aşamada renk ve ses yoktur. Kurgu kilidinden sonra sahne değiştirilemez."
      }
    ]
  },
  {
    slug: "sanal-produksiyon-ve-yapim-teknolojileri",
    title: "Sanal Prodüksiyon ve Yeni Nesil Film Yapım Teknolojileri",
    metaDescription: "Film ve reklamcılıkta sanal prodüksiyon (Virtual Production), LED Wall teknolojisi ve yapay zekâ destekli yapım modelleri. 2026 trendleri.",
    date: "14 Haziran 2026",
    readTime: "7 dk",
    image: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/Sanal%20Prod%C3%BCksiyon%20ve%20Yeni%20Nesil%20Film%20Yap%C4%B1m%20Teknolojileri.webp",
    content: `
      <p class="lead">Görsel-işitsel endüstri, sinema tarihinin en radikal teknolojik kırılmalarından birini yaşıyor. Geleneksel yapım modellerinin sınırları; oyun motorları, LED duvarlar ve yapay zekâ ile yeniden çiziliyor.</p>
      
      <h2>Sanal Prodüksiyon (Virtual Production) Nedir?</h2>
      <p>Fiziksel set unsurları ile bilgisayar üretimli (CGI) dijital dünyaların, gerçek zamanlı olarak birleştirilmesini sağlayan teknolojidir. Geleneksel yeşil perde (green screen) yerine devasa LED ekranlar (LED Wall) kullanılır. Kamera set içinde hareket ettikçe arka plandaki dijital dünya da gerçek zamanlı olarak kayar.</p>

      <h2>Sanal Prodüksiyonun Sağladığı Operasyonel Avantajlar</h2>
      <p>Birden fazla şehirde çekilmesi gereken bir reklam senaryosu için onlarca kişilik ekibi taşımak yerine, tüm bu operasyonu tek bir kapalı stüdyoya indirgeyerek devasa bir lojistik avantaj sağlanır. Ayrıca ışık kontrolü kusursuzdur; "Golden Hour" (altın saat) stüdyo ortamında saatlerce korunabilir.</p>

      <h2>Yapay Zekâ (AI) ve Sektörel Entegrasyon</h2>
      <p>2026 yılı itibarıyla AI, sinema sektöründe üretkenliği artıran güçlü bir asistan haline gelmiştir. AI teknolojileri yaratıcı süreçleri ikame etmek için değil; ses temizleme, rotoskop ve görselleştirme gibi süreçleri hızlandırıp operasyonel verimliliği maksimuma çıkarmak için kullanılmaktadır.</p>
    `,
    faqs: [
      {
        q: "LED Wall teknolojisinin yeşil ekrandan (green screen) farkı nedir?",
        a: "Yeşil ekranda arka plan post-prodüksiyonda eklenir. LED Wall’da ise dijital mekan set anında ekrandadır; ekrandaki ışık ve renkler oyuncuyu doğal olarak aydınlatır."
      },
      {
        q: "Yapay zekâ (AI) filmleri tek başına mı çekecek?",
        a: "Hayır. Yapay zekâ insani yaratıcılığın ve yönetmen vizyonunun yerini alamaz. Sadece operasyonel, hantal kurgu/ses süreçlerini hızlandırır."
      }
    ]
  }
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}
