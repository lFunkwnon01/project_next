import type { Metadata } from "next";
import { fontClasses } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cámara de Comercio Peruano Británica | BritCham Peru",
  description:
    "Cámara de Comercio Peruano Británica (BritCham Peru) — Red empresarial líder que une al Reino Unido y el Perú a través del comercio, la inversión y el networking estratégico.",
  keywords: ["Cámara de Comercio Peruano Británica", "BritCham Peru", "comercio Perú Reino Unido", "Networking empresarial Lima", "Inversión británica Perú"],
  authors: [{ name: "BritCham Peru" }],
  creator: "BritCham Peru",
  publisher: "Cámara de Comercio Peruano Británica",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/assets/isotopo.png",
    apple: "/assets/isotopo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://www.bpcc.org.pe/",
    title: "Cámara de Comercio Peruano Británica | BritCham Peru",
    description: "Impulsamos el comercio binacional y el crecimiento de nuestros socios. Conoce nuestros servicios y la red empresarial más influyente.",
    siteName: "BritCham Peru",
    images: [{
      url: "/assets/og-image.png",
      width: 1200,
      height: 630,
      alt: "BritCham Peru - Cámara de Comercio Peruano Británica",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cámara de Comercio Peruano Británica | BritCham Peru",
    description: "Red empresarial líder entre el Reino Unido y el Perú.",
    images: ["/assets/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cámara de Comercio Peruano Británica",
  "alternateName": "BritCham Peru",
  "url": "https://www.bpcc.org.pe",
  "logo": "https://www.bpcc.org.pe/assets/isotopo.png",
  "description": "Organización binacional líder en el fomento de comercio e inversión entre Perú y el Reino Unido.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. José Larco 1301",
    "addressLocality": "Miraflores",
    "addressRegion": "Lima",
    "postalCode": "15074",
    "addressCountry": "PE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+51-1-999-9999",
    "contactType": "informes",
    "email": "bpcc@bpcc.org.pe"
  },
  "sameAs": [
    "https://www.facebook.com/CamaraPeruanoBritanica",
    "https://www.linkedin.com/company/camaraperuanobritanica/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${fontClasses} font-sans antialiased text-gray-900 bg-white`}>
        {children}
      </body>
    </html>
  );
}
