'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactCard from "./contact-card";

export default function ContactSection() {
    const [contactCardVisible, setContactCardVisible] = useState(false);

    return (
        <div className="lg:flex-2 flex flex-col py-10 gap-10 lg:flex-row lg:justify-between lg:items-center bg-foreground">
            <div className="flex items-center justify-center lg:justify-start">
                <Image
                    src="/icons/matching-matcha-logo-white.svg"
                    alt="matching-matcha-logo"
                    width={250}
                    height={250}
                />
            </div>
            <div className="text-background pl-4 lg:text-end flex flex-col gap-2.5 lg:pr-10">
                <p
                    className="cursor-pointer hover:underline"
                    onClick={() => setContactCardVisible(true)}
                >
                    Contacto
                </p>
                <Link href="/politica-privacidad" className="hover:underline">
                    Política de privacidad
                </Link>
                <p>© 2025 MatchingMatcha | Powered by Nextjs</p>
            </div>
            <ContactCard
                isOpen={contactCardVisible}
                onClose={() => setContactCardVisible(false)}
            />
        </div>
    );
}