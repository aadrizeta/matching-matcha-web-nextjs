'use client';
import '@/app/globals.css'
import MainBanner from '@/components/layout/HomePage/main-banner/main-banner';

export default function Home() {
  return (
    <>
      <div className='h-[2000px]'>
        <MainBanner />
      </div>
    </>
  );
}
