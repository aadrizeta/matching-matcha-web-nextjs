'use client';

import { useState } from "react";
import BurgerMenu from "@/components/ui/burger-menu";
import NavbarDesktop from "./navbar";
import '@/app/globals.css';
import MobileMenu from "./mobilemenu";
import LogoImage from "@/components/ui/logo-image";
import CartButton from "@/components/ui/sidecartButton";
import TopStrip from "@/components/ui/header-top-script";

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [sideCartOpen, setSideCartOpen] = useState(false);

    return (
        <>
            <header className="header">
                <TopStrip />
                <div className="main-header">
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
        </>
    );
}