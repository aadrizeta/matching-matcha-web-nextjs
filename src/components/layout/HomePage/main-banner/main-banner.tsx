import '@/app/globals.css';
import Image from 'next/image';
import ProductsButton from '@/components/ui/home-page/main-banner/products-button';

export default function MainBanner() {
    return (
        <section className='bg-main-banner w-full'>
            <div className="padding-responsive flex flex-col gap-10 lg:flex-row lg:justify-between py-10 md:py-30 lg:py-20">
                <div className='flex flex-col items-center justify-center lg:items-start gap-10'>
                    <h1 className='text-3xl md:text-5xl max-w-150 font-medium'>Deploy test</h1>
                    <h2 className='hidden md:block text-2xl max-w-150'>Disfruta del auténtico té matcha importado de japón</h2>
                    <ProductsButton />
                </div>
                <div>
                    <Image src="/images/mockups-matcha.png" alt="te natural y de vainilla" width={450} height={700} />
                </div>
            </div>
        </section>
    );
}
