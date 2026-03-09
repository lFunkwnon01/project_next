import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BritCham Peru | BPCC Portal",
  description:
    "Cámara de Comercio Peruano Británica — Red empresarial líder que une al Reino Unido y el Perú a través del comercio, la inversión y el networking estratégico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased text-gray-900 bg-white">
        {children}
      </body>
    </html>
  );
}
