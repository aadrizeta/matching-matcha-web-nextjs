'use client';

import { useState } from "react";
import BurgerMenu from "@/components/ui/header/burger-menu";
import NavbarDesktop from "./navbar";
import '@/app/globals.css';
import MobileMenu from "./mobilemenu";
import LogoImage from "@/components/ui/header/logo-image";
import CartButton from "@/components/ui/header/sidecartButton";
import TopStrip from "@/components/ui/header/header-top-strip";
import SideCart from "@/components/ui/sidecart/side-cart";

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
            <SideCart
                isOpen={sideCartOpen}
                onClose={() => setSideCartOpen(false)}
            />
        </>
    );
}