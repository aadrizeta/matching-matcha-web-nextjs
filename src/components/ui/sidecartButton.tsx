import Image from 'next/image';
import '@/app/globals.css'

interface CartButtonProps {
    onToggle: () => void;
}

export default function CartButton({ onToggle }: CartButtonProps) {
    return (
        <button onClick={onToggle}>
            <Image src="/icons/compras.png" alt="cart_icon" width={50} height={50} />
        </button>
    );
}