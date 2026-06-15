import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meridyenfilm.com"),
  alternates: {
    languages: {
      "tr": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    images: [
      {
        url: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/meridyen-film-yapim-logo.webp",
        width: 1200,
        height: 630,
        alt: "Meridyen Film Yapım",
      },
    ],
  },
  other: {
    "geo.region": "TR-34",
    "geo.placename": "Istanbul, Turkey",
    "geo.position": "41.0082;28.9784",
    ICBM: "41.0082, 28.9784",
  },
};

const globalJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Meridyen Film Yapım",
  url: "https://meridyenfilm.com",
  foundingDate: "2009",
  logo: "https://villaqrmenu.b-cdn.net/meridyenfilmyapim/meridyen-film-yapim-logo.webp",
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressCountry: "TR"
  },
  sameAs: [
    "https://www.instagram.com/meridyenfilm/",
    "https://www.youtube.com/@meridyenfilmyapim/",
    "https://tr.linkedin.com/",
    "https://www.imdb.com/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
