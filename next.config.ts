import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "ui-avatars.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/content/:path*",
        destination: "https://www.bpcc.org.pe/content/:path*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/nosotros/rol",
        destination: "/nosotros",
        permanent: true,
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
