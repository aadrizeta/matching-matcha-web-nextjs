'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import '@/app/globals.css';

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

export default function NavbarDesktop() {
    const pathname = usePathname();
    return (
        <nav className="w-md">
            <ul className="desktop-navbar">
                {Links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <li key={link.name}>
                            <Link href={link.href} className={clsx(
                                'nav-link',
                                {
                                    "nav-link-active": isActive,
                                }
                            )}>
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}