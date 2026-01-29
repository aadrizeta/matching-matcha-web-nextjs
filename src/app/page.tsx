'use client';
import '@/app/globals.css'
import MainBanner from '@/components/layout/HomePage/main-banner/main-banner';
import BeneficiosMatcha from '@/components/layout/HomePage/beneficios/beneficios-section';

export default function Home() {
  return (
    <>
      <MainBanner />
      <div className="h-100 flex justify-center items-center">
        <p>Aquí irá la descripción del producto y la selección de productos</p>
        <p>nuevo cambio</p>
      </div>
      <BeneficiosMatcha />
    </>
  );
}
