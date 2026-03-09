import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/nosotros",
        destination: "/nosotros/rol",
        permanent: false,
      },
      {
        source: "/noticias-eventos",
        destination: "/noticias",
        permanent: true,
      },
      {
        source: "/noticias-eventos/:slug",
        destination: "/noticias",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
