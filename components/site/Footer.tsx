const recentPosts = [
  "Uluslararası Standartlarda Film, Dizi ve Dijital İçerik Üretimi",
  "Güçlü Hikâyeler, Kalıcı Yapımlar",
  "Profesyonel Yapım Çözümleri",
];

const social = [
  "Instagram",
  "YouTube",
  "Vimeo",
  "LinkedIn",
  "IMDb",
  "Box Office Türkiye",
  "SinemaTürk",
  "Beyazperde",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
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
              <span className="font-display text-lg">MERİDYEN FİLM</span>
            </div>
            <p className="mt-5 text-sm opacity-80">
              Meridyen Film Yapım, İstanbul merkezli, 16 yıllık deneyimle sinema,
              dizi, reklam ve yeni nesil medya üreten bağımsız bir yapım kuruluşudur.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <div className="mb-4 text-xs uppercase tracking-wider opacity-60">
              Gezinti
            </div>
            <ul className="space-y-2 text-sm">
              {[
                ["Ana Sayfa", "#top"],
                ["Hakkımızda", "#hakkimizda"],
                ["Neler Yapıyoruz", "#hizmetler"],
                ["Projelerimiz", "#projeler"],
                ["Blog", "#blog"],
                ["İletişim", "#iletisim"],
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
              Bilgi Merkezi
            </div>
            <ul className="space-y-3 text-sm">
              {recentPosts.map((p) => (
                <li key={p}>
                  <a href="#blog" className="opacity-90 hover:text-primary">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <div className="mb-4 text-xs uppercase tracking-wider opacity-60">
              Yasal & Sosyal
            </div>
            <ul className="mb-4 space-y-2 text-sm">
              {[
                "KVKK Aydınlatma Metni",
                "Gizlilik Politikası",
                "Çerez Politikası",
                "Kullanım Şartları",
                "Site Haritası",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="opacity-90 hover:text-primary">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs opacity-70">
              {social.map((s, i) => (
                <span key={s} className="inline-flex items-center gap-3">
                  <a href="#" className="hover:text-primary">
                    {s}
                  </a>
                  {i < social.length - 1 && <span>·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-background/15 pt-6 text-xs opacity-70">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Ticaret Sicil No: XXXXXX</span>
            <span>MERSİS No: XXXXXXXXXXXXXXXX</span>
            <span>Vergi Dairesi: Kadıköy</span>
            <span>V.N: XXXXXXXXXX</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div>© 2010 Meridyen Film Yapım. Tüm hakları saklıdır. İstanbul.</div>
            <a href="#top" className="hover:text-primary">
              Yukarı Dön ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
