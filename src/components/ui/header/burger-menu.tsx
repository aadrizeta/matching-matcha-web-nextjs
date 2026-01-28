'use client';

interface BurgerMenuProps {
    isOpen: boolean;
    onToggle: () => void;
}

export default function BurgerMenu({ isOpen, onToggle }: BurgerMenuProps) {
    return (
        <button
            id="menu_button"
            onClick={onToggle}
            aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            title={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            className={`relative w-7.5 h-7.5 cursor-pointer`}
        >
            {/* Bar 1 */}
            <span
                className={`
                    absolute top-0 left-0 w-10 h-0.75 rounded bg-dark_gray transition-all duration-200 ease-in-out origin-[5%]
                    ${isOpen ? 'rotate-45 w-10.5 h-0.75' : ''}
                `}
            />
            {/* Bar 2 */}
            <span
                className={`
                    absolute top-3.25 left-0 w-10 h-0.75 rounded bg-dark_gray transition-all duration-200 ease-in-out
                    ${isOpen ? '-rotate-45 bg-transparent h-0.75' : ''}
                `}
            />
            {/* Bar 3 */}
            <span
                className={`
                    absolute bottom-0 left-0 w-10 h-0.75 rounded bg-dark_gray transition-all duration-200 ease-in-out origin-[5%]
                    ${isOpen ? 'rotate-45 bg-transparent h-0.75' : ''}
                `}
            />
            {/* Bar 4 */}
            <span
                className={`
                    absolute bottom-0 left-0 w-10 h-0.75 rounded bg-dark_gray transition-all duration-200 ease-in-out origin-[5%]
                    ${isOpen ? '-rotate-45 w-10.5 h-0.75' : ''}
                `}
            />

        </button>
    );
}