'use client';

import { useState, useEffect } from "react";
import BurgerMenu from "@/components/ui/header/burger-menu";
import NavbarDesktop from "./navbar";
import '@/app/globals.css';
import MobileMenu from "./mobilemenu";
import LogoImage from "@/components/ui/header/logo-image";
import CartButton from "@/components/ui/header/sidecartButton";
import TopStrip from "@/components/ui/header/header-top-strip";
import SideCart from "@/components/cart/side-cart";

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [sideCartOpen, setSideCartOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 20) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            <header className={`header ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <TopStrip />
                <div className="main-header padding-responsive">
                    {/* Mobile/Tablet layout: burger-menu, app-logo, cart-icon */}
                    <div className="header-mobile-tablet">
                        <BurgerMenu
                            isOpen={mobileMenuOpen}
                            onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                        />
                        <LogoImage
                            onToggle={() => {
                                setMobileMenuOpen(false);
                                setSideCartOpen(false);
                            }}
                        />
                        <CartButton onToggle={() => setSideCartOpen(!sideCartOpen)} />
                    </div>

                    {/* Desktop layout: app-logo, NavbarDesktop, cart-icon */}
                    <div className="header-desktop">
                        <LogoImage />
                        <NavbarDesktop />
                        <CartButton onToggle={() => setSideCartOpen(!sideCartOpen)} />
                    </div>
                </div>
            </header>
            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            />
            <SideCart
                isOpen={sideCartOpen}
                onClose={() => setSideCartOpen(false)}
            />
        </>
    );
}