import type { Metadata } from "next";
import { Work_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital OS — Tu sistema operativo digital | Raquel Vázquez",
  description:
    "Diseño ecosistemas digitales para profesionales que necesitan recuperar foco, tiempo y control. Sin humo, sin hype. Gente real en un mundo de IA.",
  openGraph: {
    title: "Digital OS — Tu sistema operativo digital",
    description: "Si hay caos, la IA amplifica tu caos. Pon orden primero.",
    url: "https://digitalos.es",
    siteName: "Digital OS",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${workSans.variable} ${libreBaskerville.variable}`}>
        {children}
      </body>
    </html>
  );
}
