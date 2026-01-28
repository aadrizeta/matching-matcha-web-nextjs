import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css'

interface LogoImageProps {
    onToggle?: () => void;
}

export default function LogoImage({ onToggle }: LogoImageProps) {
    return (
        <Link
            href="/"
            className='logo-container block p-2 -m-2'
            onClick={onToggle}
            aria-label="Ir a página de inicio - Matching Matcha"
        >
            <Image
                src="/icons/matching-matcha-logo.svg"
                alt="Logo de Matching Matcha"
                width={100}
                height={100}
            />
        </Link>
    );
}