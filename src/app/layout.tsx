// v2 - deploy with env vars
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mini Projetor HD | Transforme Qualquer Lugar em Cinema",
  description:
    "TV Smart Portátil com Netflix, YouTube e Games na tela grande. Frete grátis, entrega rápida. Compre agora!",
  openGraph: {
    title: "Mini Projetor HD Portátil",
    description: "Transforme qualquer lugar em cinema por menos de R$ 150",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
