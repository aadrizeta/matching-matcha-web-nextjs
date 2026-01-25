import '@/app/globals.css';
import Image from 'next/image';
import ProductsButton from '@/components/ui/home-page/main-banner/products-button';

export default function MainBanner() {
    return (
        <section className='bg-main-banner w-full'>
            <div className="padding-responsive flex flex-col gap-10 lg:flex-row lg:justify-between py-10 md:py-30 lg:py-40">
                <div className='flex flex-col items-center lg:items-start gap-10'>
                    <h1 className='text-3xl md:text-4xl'>Una marca que nace del amor al té</h1>
                    <h2 className='hidden md:block text-xl'>Disfruta del auténtico té matcha importado de japón</h2>
                    <ProductsButton />
                </div>
                <div className='flex items-center justify-center'>
                    <Image src="/images/mockups2.png" alt="te natural y de vainilla" width={450} height={450} />
                </div>
            </div>
        </section>
    );
}
