export type ProjectStatus = "Yayınlandı" | "Post-Prodüksiyon" | "Geliştirme" | "Vizyonda";
export type SchemaType = "Movie" | "TVSeries" | "VideoObject";

export interface Project {
  slug: string;
  title: string;
  genre: string;
  year: string;
  status: ProjectStatus;
  logline: string;
  about: string[];
  director: string;
  schemaType: SchemaType;
  image: string;
  gallery: string[];
  youtubeId?: string;
}

export const projects: Project[] = [
  {
    slug: "hayalet-dedektif-sinema-filmi",
    title: "Hayalet Dedektif",
    genre: "Psikolojik Gerilim",
    year: "2024",
    status: "Vizyonda",
    logline: "Geçmişindeki karanlık sırlarla yüzleşmek zorunda kalan bir dedektifin, çözülmesi imkansız görünen bir cinayet ağını ortaya çıkarması.",
    about: [
      "Hayalet Dedektif, Türk sinemasında psikolojik gerilim atmosferine yeni bir soluk getiren yüksek prodüksiyonlu bir sinema filmidir. Hikaye, kendi travmalarıyla boğuşan deneyimli bir dedektifin etrafında şekilleniyor.",
      "Kurgu montaj hızı, özel ses tasarımı ve Hollywood standartlarındaki renk derecelendirmesi (Color Grading) ile izleyiciyi ilk saniyeden itibaren koltuğuna çivilemeyi başarıyor. Meridyen Film Yapım stüdyolarında tamamlanan post-prodüksiyon aşaması, filme uluslararası bir kalite standardı kazandırmıştır."
    ],
    director: "Kerem Yılmaz",
    schemaType: "Movie",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604928141064-207cea6f5722?q=80&w=2070&auto=format&fit=crop"
    ],
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    slug: "kesis-ve-kelebek-sinema-filmi",
    title: "Keşiş ve Kelebek",
    genre: "Bağımsız Sinema / Drama",
    year: "2023",
    status: "Yayınlandı",
    logline: "Uluslararası bir arayışın ortasında, hayatın anlamını sorgulayan bir yazarın ve ona rehberlik eden sessiz bir keşişin varoluşsal yolculuğu.",
    about: [
      "Uluslararası ortak yapım (co-production) statüsündeki 'Keşiş ve Kelebek' bağımsız sinema filmi, Cannes Marché du Film seçkilerinde ve birçok uluslararası festivalde büyük beğeni topladı.",
      "Yabancı prodüktörlerin ve yerli ekibin ortak çalıştığı bu set, Meridyen Film Yapım'ın bütçe planlamasından set yönetimine kadar kurduğu yapım ekosisteminin dünya standartlarında olduğunu kanıtladı. Uzman senaryo doktorluğu ve dramaturji dokunuşlarıyla zenginleşen eser, modern sinemanın güçlü örneklerinden biri oldu."
    ],
    director: "Ece Demir",
    schemaType: "Movie",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2028&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    slug: "dinle-sevgili-dizi",
    title: "Dinle Sevgili",
    genre: "Günlük Dizi / Drama",
    year: "2025",
    status: "Post-Prodüksiyon",
    logline: "İmkansız bir aşkın gölgesinde, aile sırlarının ve geçmişin karanlık oyunlarının arasında hayatta kalmaya çalışan iki gencin hikayesi.",
    about: [
      "Ulusal televizyon kanalları ekranlarında yayınlanmak üzere hazırlanan 'Dinle Sevgili', her gün izleyiciyle buluşacak olan yüksek prodüksiyonlu bir günlük dizi projesidir.",
      "Her gün yayınlanan bir yapımda yüksek sinematik anlatı dili yakalamak, sahnelerin görsel kalitesini ve senaryo derinliğini düşürmeden her hafta kanala master teslimatı yapabilmek için Meridyen Film Yapım'ın ileri düzey set lojistiği ve hızlı post-prodüksiyon stüdyoları devreye sokulmuştur."
    ],
    director: "Ahmet Yılmaz",
    schemaType: "TVSeries",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604928141064-207cea6f5722?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    slug: "akbank-axess-reklam-filmi",
    title: "Akbank Axess",
    genre: "Reklam Filmi",
    year: "2024",
    status: "Yayınlandı",
    logline: "Finans dünyasının klişelerini yıkan, renkli ve dinamik görsel anlatımıyla yeni nesil dijital bankacılık deneyimini yansıtan bir kampanya serisi.",
    about: [
      "Dijital bankacılığın o klişe finans dilini yıkan, aşırı yaratıcı ve eğlenceli lansman reklam filmi serisidir. Markanın enerjisini ve yenilikçi yüzünü hedef kitleye doğrudan aktarmayı başarmıştır.",
      "Klasik kurumsal reklam filmi çekimi mantığının dışına çıkılıp, derinlikli bir hikaye anlatımı ve harika bir oyuncu kadrosu yönetimiyle marka hafızalara kazınmıştır. Çekimler İstanbul genelinde farklı lokasyonlarda, yüksek tempolu bir izin takvimiyle organize edilmiştir."
    ],
    director: "Caner Özyurtlu",
    schemaType: "VideoObject",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop"
    ],
    youtubeId: "dQw4w9WgXcQ"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
