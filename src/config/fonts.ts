import { Playfair_Display, Public_Sans, IBM_Plex_Sans, Source_Sans_3, Libre_Baskerville, Source_Serif_4 } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
  display: "swap",
});

export const ibmPlex = IBM_Plex_Sans({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
});

export const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
  style: ["normal", "italic"]
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const fontClasses = [
  playfair.variable,
  publicSans.variable,
  ibmPlex.variable,
  sourceSans.variable,
  libreBaskerville.variable,
  sourceSerif.variable,
].join(" ");
