import Image from 'next/image';
import Link from 'next/link';
import '@/app/globals.css'

export default function LogoImage() {
    return (
        <Link href="/" className='logo-container'>
            <Image
                src="/icons/matching-matcha-logo.svg"
                alt="app_logo"
                width={120}
                height={120}
            />
        </Link>
    );
}