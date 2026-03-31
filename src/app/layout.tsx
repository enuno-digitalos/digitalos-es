import type { Metadata } from "next";
import { Work_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digital OS Personal — Del caos al clic | Raquel Vázquez",
  description:
    "Productividad digital para emprendedores y creadores de contenido. Suelta el 'no me da la vida' y empieza a controlar tu vida digital.",
  openGraph: {
    title: "Digital OS Personal — Del caos al clic",
    description:
      "4 niveles para transformar tu manera de trabajar. Sin teoría, pura acción.",
    url: "https://digitalos.es",
    siteName: "Digital OS",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${workSans.variable} ${libreBaskerville.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
