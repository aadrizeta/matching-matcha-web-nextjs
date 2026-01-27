'use client'

import SocialSection from '@/components/ui/footer/footer-social/socialSection';
import ContactSection from '@/components/ui/footer/footer-contact/contactSection';
import ContactCard from '@/components/ui/footer/footer-contact/contact-card';
import { useState, useEffect } from "react";

export default function Footer() {

    const [contactCardVisible, setIsCardVisible] = useState(false);

    return (
        <>
            <footer className='relative w-full'>
                {/* Backgrounds absolutos que se extienden al 100% */}
                <div className="absolute inset-0 lg:flex lg:flex-row-reverse">
                    <div className="bg-dark-green flex-1" />
                    <div className="bg-foreground flex-2" />
                </div>

                {/* Contenido con padding-responsive */}
                <div className="relative footer-padding lg:flex lg:flex-row-reverse">
                    <SocialSection />
                    <ContactSection />
                </div>
            </footer>
            <ContactCard
                isOpen={contactCardVisible}
                onClose={() => setIsCardVisible(false)}
            />
        </>
    );
}