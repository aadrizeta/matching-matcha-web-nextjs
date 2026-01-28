import type { Metadata } from "next";
import '@/app/globals.css'
import Header from "@/components/layout/Header/header";
import Footer from "@/components/layout/Footer/footer";

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
      <body>
        <Header />
        <div className="h-22 md:h-27 bg-main-banner"></div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}