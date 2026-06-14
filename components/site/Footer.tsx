export function Footer() {
  const social = [
    { name: "Instagram", url: "https://www.instagram.com/meridyenfilm/" },
    { name: "YouTube", url: "https://www.youtube.com/@meridyenfilmyapim/" },
    { name: "Vimeo", url: "https://vimeo.com/" },
    { name: "LinkedIn", url: "https://tr.linkedin.com/" },
    { name: "IMDb", url: "https://www.imdb.com/" },
    { name: "Box Office Türkiye", url: "https://boxofficeturkiye.com/" },
    { name: "Beyazperde", url: "https://www.beyazperde.com/" },
    { name: "SinemaTürk", url: "https://www.sinematurk.com/" },
  ];

  const legalLinks = [
    { name: "Aydınlatma Metni", path: "/yasal/aydinlatma-metni" },
    { name: "Açık Rıza Onayı", path: "/yasal/acik-riza-onayi" },
    { name: "Kvkk Politikası", path: "/yasal/kvkk-politikasi" },
    { name: "Bgys Politikası", path: "/yasal/bgys-politikasi" },
    { name: "Kvkk Başvuru Formu", path: "/yasal/kvkk-basvuru-formu" },
    { name: "Gizlilik Politikası", path: "/yasal/gizlilik-politikasi" },
    { name: "Çerez Politikası", path: "/yasal/cerez-politikasi" },
    { name: "Site Haritası", path: "/yasal/site-haritasi" }
  ];

  return (
    <footer className="border-t border-border bg-black text-white [.dark_&]:bg-white [.dark_&]:text-black relative z-50">
      <div className="border-b border-white/10 [.dark_&]:border-transparent bg-white/5 [.dark_&]:bg-black [.dark_&]:text-white py-5 px-6 text-center text-xs md:text-sm">
        <p className="mx-auto max-w-5xl opacity-90">
          <strong className="font-semibold text-primary">Önemli Bilgi:</strong> Meridyen Film Yapım, etik yapımcılık ilkeleri gereği başvurulardan hiçbir ad altında kayıt, dosya veya albüm ücreti talep etmez. Tüm başvurular ücretsiz ve KVKK güvencesi altında değerlendirilir.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2.5">
              <svg width="32" height="32" viewBox="0 0 40 40" aria-hidden>
                <path
                  d="M4 32 V8 L20 24 L36 8 V32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-display text-lg">MERİDYEN FİLM YAPIM</span>
            </div>
            <p className="mt-5 text-sm opacity-80">
              Hikâyeleri Görüntüye Dönüştüren Yapım Şirketi.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <div className="mb-4 text-xs uppercase tracking-wider opacity-60">
              Gezinti
            </div>
            <ul className="space-y-2 text-sm">
              {[
                ["Ana Sayfa", "/"],
                ["Hakkımızda", "/hakkimizda"],
                ["Hizmetler", "/hizmetler"],
                ["Projeler", "/projeler"],
                ["Blog", "/blog"],
                ["İletişim", "/iletisim"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="opacity-90 hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <div className="mb-4 text-xs uppercase tracking-wider opacity-60">
              Sosyal Medya
            </div>
            <ul className="space-y-2 text-sm">
              {social.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="opacity-90 hover:text-primary">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <div className="mb-4 text-xs uppercase tracking-wider opacity-60">
              Yasal Belgeler
            </div>
            <ul className="mb-4 space-y-2 text-sm">
              {legalLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.path} className="opacity-90 hover:text-primary transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-background/15 pt-6 text-xs opacity-70">
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div className="text-center md:text-left">© 2009 Meridyen Film Yapım Prodüksiyon Reklam Hizmetleri San. ve Tic. Ltd. Şti. Tüm hakları saklıdır. İstanbul.</div>
            <a href="#top" className="hover:text-primary transition-colors">
              Yukarı Dön ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
