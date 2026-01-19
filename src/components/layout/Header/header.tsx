'use client';

import { useState } from "react";
import BurgerMenu from "@/components/ui/burger-menu";
import NavbarDesktop from "./navbar";
import Image from "next/image";
import '@/app/globals.css';

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="top-strip">
                <div className="scroll-text">
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                </div>
                <div className="scroll-text">
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                    <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                </div>
            </div>
            <div className="main-header">
                <BurgerMenu
                    isOpen={mobileMenuOpen}
                    onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                />
                <NavbarDesktop />
                <Image src="/icons/compras.png" alt="cart_icon" width={50} height={50} />
            </div>
        </header>
    );
}