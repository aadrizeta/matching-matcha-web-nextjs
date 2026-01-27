import '@/app/globals.css';
import Image from 'next/image';

export default function BrandDescription() {
    return (
        <section className="flex flex-col gap-15 lg:flex-row lg:justify-between padding-responsive py-15">
            <div className="text-center flex items-center justify-center lg:text-start max-w-2xl mx-auto lg:mx-0">
                <p className="md:text-2xl lg:text-3xl">
                    <b>“Matching Matcha”</b> representa el <b>“match”</b> que hay entre los amantes del producto y el <b>matcha</b>, haciendo un juego de palabras divertido y desenfadado.
                </p>
            </div>
            <div className="relative w-full max-w-130 aspect-square mx-auto lg:mx-0 lg:shrink-0">
                <Image
                    src="/images/taza-matcha-latte.png"
                    alt="taza matcha latte"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 90vw, 400px"
                />
            </div>
        </section>
    );
}