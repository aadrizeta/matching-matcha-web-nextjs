'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Links = [
    {
        name: "Inicio",
        href: "/",
    },
    {
        name: "Nosotros",
        href: "/about",
    },
    {
        name: "Comunidad",
        href: "/community",
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {Links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'text-sm',
                            {
                                'font-bold text-black dark:text-white': pathname === link.href,
                            }
                        )}
                    >
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}