import Image from 'next/image';
import '@/app/globals.css'

interface CartButtonProps {
    onToggle: () => void;
}

export default function CartButton({ onToggle }: CartButtonProps) {
    return (
        <button className='cursor-pointer' onClick={onToggle}>
            <Image src="/icons/iconos-cart/compras.svg" alt="cart_icon" width={42} height={42} className='transition-all duration-300 ease-out hover:scale-120' />
        </button>
    );
}