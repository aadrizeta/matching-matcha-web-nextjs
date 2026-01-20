'use client';
import '@/app/globals.css';
import { link } from 'fs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const Links = [
    {
        name: "INICIO",
        href: "/",
    },
    {
        name: "NOSOTROS",
        href: "/about-us",
    },
    {
        name: "COMUNIDAD",
        href: "/community",
    },
];
interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Menu */}
            <nav
                className={`
                    fixed top-0 left-0 w-full h-full bg-white z-50 md:hidden
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-y-0' : '-translate-y-full'}
                `}
            >
                <ul className="flex flex-col gap-6 p-6 mt-30">
                    {Links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={`text-xl font-semibold transition-colors ${isActive ? 'text-main_green' : 'text-foreground hover:text-main_green'
                                        }`}
                                    onClick={onClose}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}