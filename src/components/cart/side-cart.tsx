import '@/app/globals.css';
import SideCartButton from '@/components/ui/sidecart/sidecart-button';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface SideCartProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SideCart({ isOpen, onClose }: SideCartProps) {
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.changedTouches[0].screenX;
        setIsDragging(true);
    };

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.changedTouches[0].screenX;
        setIsDragging(false);

        // Detectar swipe de izquierda a derecha (diferencia > 50px)
        const swipeDistance = touchEndX.current - touchStartX.current;
        if (swipeDistance > 50) {
            onClose();
        }
    };
    return (
        <>
            <div
                className={`sidecart ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className='w-full inset-x-0 h-27 border-b justify-between items-center flex mb-5'>
                    <Image src="/icons/iconos-cart/cart.svg" alt="cart-icon" width={35} height={35} />
                    <h4 className='text-2xl'>Tu carrito</h4>
                    <div className='w-8.75 h-8.75 rounded-full flex items-center justify-center'>
                        <button className='font-heading text-xl' onClick={onClose}>X</button>
                    </div>
                </div>

                <div className='flex-1 text-center flex flex-col items-center justify-center overflow-y-auto pb-40'>
                    <Image src="/icons/iconos-cart/carro-vacio.svg" alt="empty-cart-icon" width={100} height={100} />
                    <p className='text-xs'>No hay productos en el carrito</p>
                </div>

                <div className='fixed bottom-0 left-0 right-0 px-4 py-10 border-t bg-background flex justify-between gap-5 w-full'>
                    <SideCartButton variant='purchase' onClick={() => alert('Comprar')} disabled={false} />
                    <SideCartButton variant='clear' onClick={onClose} disabled={false} />
                </div>
            </div>
            <div
                className={`backdrop ${isOpen ? 'opacity-100 md:block' : 'opacity-0 hidden'}`}
                onClick={onClose}
            ></div>
        </>
    );
}