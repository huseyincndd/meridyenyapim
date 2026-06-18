import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="hakkimizda" className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <FadeIn>
            <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" /> Biz Kimiz?
            </div>
            <h2 className="font-display text-5xl leading-[1.05] tracking-[-0.035em] md:text-5xl lg:text-6xl">
              Hikâyeleri Görüntüye Dönüştüren{" "}
              <span className="italic font-serif text-muted-foreground">
                Yapım Şirketi.
              </span>
            </h2>
            <div className="mt-8 flex flex-col gap-4 text-base text-muted-foreground md:text-lg">
              <p>
                Meridyen Film Yapım; 2009 yılından bu yana sinema filmleri, televizyon dizileri, reklam filmleri, dijital platform içerikleri ve uluslararası ortak yapımlar geliştiren İstanbul merkezli bağımsız bir yapım şirketidir.
              </p>
              <p>
                Yaratıcı geliştirme, prodüksiyon ve post-prodüksiyon süreçlerini tek çatı altında yürüten ekibimiz; fikir aşamasından nihai teslim sürecine kadar tüm yapım aşamalarını profesyonel bir yaklaşımla yönetmektedir.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={200}>
            <figure className="mt-10 rounded-3xl border border-border bg-card p-6 md:p-8 transition-all hover:border-primary/30 hover:shadow-lg">
              <blockquote className="font-serif text-2xl italic leading-snug md:text-3xl">
                "Hikâye, sahnenin önünde kurulmaz — bir ekibin ortak nefesinde
                kurulur."
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                — Meridyen Film Yapım
              </figcaption>
            </figure>
          </FadeIn>
        </div>
        <FadeIn delay={150} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <img
              src="https://villaqrmenu.b-cdn.net/meridyenfilmyapim/MER%C4%B0DYEN%20F%C4%B0LM%20YAPIM%20Hik%C3%A2yeleri%20G%C3%B6r%C3%BCnt%C3%BCye%20D%C3%B6n%C3%BC%C5%9Ft%C3%BCren%20Yap%C4%B1m%20%C5%9Eirketi.webp"
              alt="Meridyen Film Yapım prodüksiyon seti — anamorfik kamera"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-primary px-5 py-4 text-foreground shadow-xl md:block">
            <div className="font-display text-3xl">17+</div>
            <div className="text-xs uppercase tracking-wider opacity-80">
              yıllık deneyim
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
