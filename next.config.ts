import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/hizmetler/dijital-icerik',
        destination: '/hizmetler',
        permanent: true,
      },
      {
        source: '/yapim-yonetimi',
        destination: '/hizmetler',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
