'use client';

import { useState } from "react";
import BurgerMenu from "@/components/ui/burger-menu";

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
            <BurgerMenu
                classname="mt-6"
                isOpen={mobileMenuOpen}
                onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
        </header>
    );
}