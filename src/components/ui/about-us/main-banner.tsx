//Main Banner de About-Us Page
'use client';
import '@/app/globals.css';
import Image from 'next/image';
import { useState, useEffect, useCallback } from "react";

const carouselImages = [
    {
        src: '/images/carousel/carrusel1.webp',
        alt: 'Matching Matcha - Imagen 1'
    },
    {
        src: '/images/carousel/carrusel2.jpeg',
        alt: 'Matching Matcha - Imagen 2',
    },
    {
        src: '/images/carousel/carrusel1.jpeg',
        alt: 'Matching Matcha - Imagen 3',
    },
]

export default function MainBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    return (
        <section
            className="main-banner-about relative w-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Contenedor con aspect ratio para mantener proporciones */}
            <div className="relative w-full aspect-video max-h-[70vh]">
                {/* Imágenes del carrusel */}
                {carouselImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out
                            ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority={index === 0}
                            className="object-cover object-center"
                            sizes="100vw"
                            quality={85}
                        />
                    </div>
                ))}

                {/* Botón anterior */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                        w-10 h-10 md:w-12 md:h-12
                        flex items-center justify-center
                        rounded-full transition-all duration-300
                        opacity-0 group-hover:opacity-100 hover:opacity-100
                        focus:opacity-100 focus:outline-none
                        backdrop-blur-sm"
                    aria-label="Imagen anterior"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                {/* Botón siguiente */}
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                        w-10 h-10 md:w-12 md:h-12
                        flex items-center justify-center
                        bg-background/70 hover:bg-background/90
                        rounded-full transition-all duration-300
                        opacity-0 group-hover:opacity-100 hover:opacity-100
                        focus:opacity-100 focus:outline-none
                        backdrop-blur-sm"
                    aria-label="Imagen siguiente"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Indicadores (dots) */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300
                                ${index === currentIndex
                                    ? 'bg-main_green scale-125'
                                    : 'bg-background/70 hover:bg-background/90'}`}
                            aria-label={`Ir a imagen ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}