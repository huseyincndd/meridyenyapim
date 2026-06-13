import { notFound } from "next/navigation";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const legalPages = {
  "aydinlatma-metni": {
    title: "KVKK Aydınlatma Metni",
    content: (
      <>
        <p className="lead text-xl">Meridyen Film Yapım ("Şirket") olarak, kişisel verilerinizin güvenliği ve gizliliği bizim için en önemli önceliklerden biridir.</p>
        <h3>1. Veri Sorumlusunun Kimliği</h3>
        <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") ve ilgili mevzuat uyarınca, şirketimiz veri sorumlusu sıfatıyla hareket etmektedir.</p>
        <h3>2. Kişisel Verilerin İşlenme Amaçları</h3>
        <p>Toplanan kişisel verileriniz, şirketimiz tarafından sunulan yapım, prodüksiyon ve post-prodüksiyon hizmetlerinden faydalanabilmeniz, sözleşmesel yükümlülüklerin yerine getirilmesi ve hukuki süreçlerin takibi amaçlarıyla sınırlı olarak işlenmektedir.</p>
        <h3>3. Verilerin Aktarımı</h3>
        <p>Kişisel verileriniz, yasal mevzuat kapsamında faaliyetlerimizin yürütülmesi için yetkili kamu kurum ve kuruluşları, bağımsız denetçiler ve yasal danışmanlar ile paylaşılabilmektedir.</p>
        <h3>4. İlgili Kişinin Hakları</h3>
        <p>KVKK'nın 11. maddesi uyarınca, veri sorumlusuna başvurarak kendinizle ilgili kişisel verilerin işlenip işlenmediğini öğrenme ve eksik/yanlış işlenmişse düzeltilmesini isteme haklarına sahipsiniz.</p>
      </>
    )
  },
  "acik-riza-onayi": {
    title: "Açık Rıza Onayı",
    content: (
      <>
        <p className="lead text-xl">Meridyen Film Yapım tarafından tarafıma sunulan KVKK Aydınlatma Metni'ni okudum ve anladım.</p>
        <h3>1. Onay Beyanı</h3>
        <p>Aydınlatma metninde belirtilen kapsamda kişisel verilerimin, şirket faaliyetlerinin yürütülmesi, değerlendirme süreçleri ve arşivleme amaçlarıyla işlenmesine özgür irademle, hiçbir etki altında kalmadan onay veriyorum.</p>
        <h3>2. İletişim İzni</h3>
        <p>Tarafıma sunulacak olan hizmetler, projelendirme süreçleri, casting duyuruları ve kurumsal iletişim faaliyetleri kapsamında tarafımla e-posta ve telefon aracılığıyla iletişime geçilmesini kabul ediyorum.</p>
      </>
    )
  },
  "kvkk-politikasi": {
    title: "KVKK Politikası",
    content: (
      <>
        <p className="lead text-xl">Bu politika, Meridyen Film Yapım'ın kişisel verileri işleme ve koruma süreçlerinin standartlarını tanımlar.</p>
        <h3>1. Politikanın Amacı ve Kapsamı</h3>
        <p>Şirketimizin yürütmekte olduğu kişisel veri işleme faaliyetlerinin Anayasa'ya, KVKK'ya ve ilgili yasal mevzuata uygun biçimde yürütülmesi, veri sahiplerinin şeffaf bir şekilde aydınlatılması amaçlanmaktadır.</p>
        <h3>2. İşleme İlkeleri</h3>
        <p>Veriler; hukuka ve dürüstlük kurallarına uygun, doğru, güncel, belirli, açık ve meşru amaçlar için işlenmektedir. Veriler sadece işlendikleri amaçla bağlantılı ve sınırlı olarak muhafaza edilmektedir.</p>
        <h3>3. İdari ve Teknik Tedbirler</h3>
        <p>Şirketimiz, kişisel verilerin hukuka aykırı olarak işlenmesini ve erişilmesini önlemek amacıyla gerekli tüm siber güvenlik ve idari erişim tedbirlerini almaktadır.</p>
      </>
    )
  },
  "bgys-politikasi": {
    title: "BGYS Politikası",
    content: (
      <>
        <p className="lead text-xl">Bilgi Güvenliği Yönetim Sistemi (BGYS) politikamız, şirketimizin tüm dijital ve basılı bilgi varlıklarını koruma taahhüdüdür.</p>
        <h3>1. Temel Prensipler</h3>
        <p>Kurumsal bilginin ve iş ortaklarımıza ait projelerin (senaryo, kurgu, ham görüntüler) gizliliği, bütünlüğü ve erişilebilirliği her koşulda güvence altına alınmaktadır. Tüm set ve ofis çalışanları bilgi güvenliği farkındalığına sahiptir.</p>
        <h3>2. Risk Yönetimi ve Sürekli İyileştirme</h3>
        <p>Bilgi varlıklarına yönelik siber ve fiziksel tehditler düzenli olarak analiz edilmekte, riskleri minimize edecek şifreleme ve erişim kontrolleri uygulanmaktadır.</p>
      </>
    )
  },
  "kvkk-basvuru-formu": {
    title: "KVKK Başvuru Formu",
    content: (
      <>
        <p className="lead text-xl">KVKK Kapsamında İlgili Kişi (Veri Sahibi) Başvuru Prosedürü ve Formu.</p>
        <h3>1. Başvuru Yöntemi</h3>
        <p>Kişisel verilerinize ilişkin taleplerinizi, resmi web sitemizden indireceğiniz <b>Başvuru Formunu</b> doldurarak, kimliğinizi teyit edici belgelerle birlikte şirket merkezimize ıslak imzalı olarak veya Kayıtlı Elektronik Posta (KEP) adresimize güvenli elektronik imzalı olarak iletebilirsiniz.</p>
        <h3>2. Talep Konuları</h3>
        <p>Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenme amacına uygun kullanılıp kullanılmadığını sorgulama, silinmesini veya düzeltilmesini talep etme hakkınızı bu form aracılığıyla yasal 30 günlük süre içinde sonuçlandırılmak üzere kullanabilirsiniz.</p>
      </>
    )
  },
  "gizlilik-politikasi": {
    title: "Gizlilik Politikası",
    content: (
      <>
        <p className="lead text-xl">Sitemizi ziyaret ettiğinizde elde edilen kullanıcı bilgilerinin nasıl yönetildiğini ve korunduğunu açıklamaktadır.</p>
        <h3>1. Bilgilerin Korunması ve Kullanımı</h3>
        <p>Ziyaretçilerimize ait kişisel olmayan veriler (IP, tarayıcı tipi, sayfada kalma süresi), yalnızca site performansını artırmak ve anonim istatistikler oluşturmak amacıyla güvenli sunucularda saklanmaktadır.</p>
        <h3>2. Üçüncü Taraf Bağlantıları</h3>
        <p>Sitemiz üzerinden harici platformlara (sosyal medya ağları, bilet satış siteleri vb.) verilen bağlantılarda, söz konusu dış platformların gizlilik ve veri toplama politikalarından Meridyen Film Yapım sorumlu tutulamaz.</p>
      </>
    )
  },
  "cerez-politikasi": {
    title: "Çerez Politikası",
    content: (
      <>
        <p className="lead text-xl">Meridyen Film Yapım, web sitesi deneyiminizi iyileştirmek ve güvenliği sağlamak için çerezler (cookies) kullanmaktadır.</p>
        <h3>1. Çerez (Cookie) Nedir?</h3>
        <p>Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza (bilgisayar, telefon) kaydedilen küçük boyutlu metin dosyalarıdır. Sitenin düzgün çalışmasını ve tercihlerinizi hatırlamasını sağlar.</p>
        <h3>2. Kullanılan Çerez Türleri</h3>
        <p>Sitemizde sadece <b>Zorunlu Çerezler</b> (sitenin temel işlevlerini yerine getirmesi için) ve <b>Analitik Çerezler</b> (anonim trafik ölçümü için) kullanılmaktadır. Reklam veya izleme çerezi kullanılmamaktadır.</p>
      </>
    )
  },
  "site-haritasi": {
    title: "Site Haritası",
    content: (
      <>
        <p className="lead text-xl">Sitemizin genel mimarisi ve tüm sayfalara hızlı erişim bağlantıları.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3>Ana Bölümler</h3>
            <ul>
              <li><strong><a href="/#top" className="text-primary hover:underline">Ana Sayfa</a></strong> - Meridyen Film Yapım'a giriş.</li>
              <li><strong><a href="/#hakkimizda" className="text-primary hover:underline">Hakkımızda</a></strong> - Şirketimizin vizyonu ve hikayesi.</li>
              <li><strong><a href="/#hizmetler" className="text-primary hover:underline">Neler Yapıyoruz</a></strong> - Hizmet ağımız ve faaliyet alanlarımız.</li>
              <li><strong><a href="/#projeler" className="text-primary hover:underline">Projelerimiz</a></strong> - Devam eden ve tamamlanan yapımlar.</li>
              <li><strong><a href="/#sss" className="text-primary hover:underline">SSS</a></strong> - Sıkça Sorulan Sorular ve cevapları.</li>
              <li><strong><a href="/#iletisim" className="text-primary hover:underline">İletişim</a></strong> - Şirket iletişim bilgileri ve başvuru.</li>
            </ul>
          </div>
          <div>
            <h3>Yasal Belgeler</h3>
            <ul>
              <li><a href="/yasal/aydinlatma-metni" className="text-primary hover:underline">Aydınlatma Metni</a></li>
              <li><a href="/yasal/acik-riza-onayi" className="text-primary hover:underline">Açık Rıza Onayı</a></li>
              <li><a href="/yasal/kvkk-politikasi" className="text-primary hover:underline">KVKK Politikası</a></li>
              <li><a href="/yasal/bgys-politikasi" className="text-primary hover:underline">BGYS Politikası</a></li>
              <li><a href="/yasal/kvkk-basvuru-formu" className="text-primary hover:underline">KVKK Başvuru Formu</a></li>
              <li><a href="/yasal/gizlilik-politikasi" className="text-primary hover:underline">Gizlilik Politikası</a></li>
              <li><a href="/yasal/cerez-politikasi" className="text-primary hover:underline">Çerez Politikası</a></li>
            </ul>
          </div>
        </div>
      </>
    )
  },
};

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap params correctly for Next.js 15+
  const resolvedParams = await params;
  const pageData = legalPages[resolvedParams.slug as keyof typeof legalPages];
  
  if (!pageData) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <Navbar />
      
      <main className="flex-1 px-6 py-32 md:py-48 mx-auto max-w-4xl w-full mt-20">
        <div className="mb-12 border-b border-border pb-8">
          <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary" /> Yasal Belgeler
          </div>
          <h1 className="font-display text-4xl tracking-[-0.035em] md:text-5xl lg:text-6xl text-foreground">
            {pageData.title}
          </h1>
        </div>

        <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-headings:font-display prose-headings:text-foreground prose-a:text-primary prose-strong:text-foreground">
          {pageData.content}
        </div>
      </main>

      <Footer />
    </div>
  );
}
