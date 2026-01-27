import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css'
import Header from "@/components/layout/Header/header";
import Footer from "@/components/layout/Footer/footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matching Matcha | Tienda de Té Matcha Online",
  description: "Tienda online especializada en té matcha de alta calidad. Descubre nuestra selección premium y disfruta de los beneficios del matcha en casa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="h-22 md:h-27 bg-main-banner"></div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}