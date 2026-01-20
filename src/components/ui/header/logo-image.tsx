import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css'

interface LogoImageProps {
    onToggle?: () => void;
}

export default function LogoImage({ onToggle }: LogoImageProps) {
    return (
        <Link href="/" className='logo-container'>
            <button onClick={onToggle}>
                <Image
                    src="/icons/matching-matcha-logo.svg"
                    alt="app_logo"
                    width={100}
                    height={100}
                    className='cursor-pointer'
                />
            </button>
        </Link>
    );
}