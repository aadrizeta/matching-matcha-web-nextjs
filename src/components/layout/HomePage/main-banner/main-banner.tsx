import '@/app/globals.css';
import Image from 'next/image';
import ProductsButton from '@/components/ui/main-banner/products-button';

export default function MainBanner() {
    return (
        <section className='bg-main-banner w-full'>
            <div className="padding-responsive flex flex-col gap-10 lg:flex-row lg:justify-around py-20">
                <div className='flex flex-col gap-10'>
                    <h1 className='text-3xl text-center lg:text-5xl lg:text-start'>Una marca que nace del amor al té</h1>
                    <h2 className='hidden lg:block text-2xl'>Disfruta del auténtico té matcha importado de japón</h2>
                    <ProductsButton />
                </div>
                <div className='flex items-center justify-center'>
                    <Image src="/images/mockups2.png" alt="te natural y de vainilla" width={350} height={350} />
                </div>
            </div>
        </section>
    );
}