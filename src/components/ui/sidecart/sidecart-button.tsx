import '@/app/globals.css';

interface SideCartButtonProps {
    variant: 'clear' | 'purchase';
    onClick: () => void;
    disabled?: boolean;
}

export default function SideCartButton({ variant, onClick, disabled }: SideCartButtonProps) {

    const buttonconfig = {
        purchase: {
            text: 'Comprar',
            enabledBgColor: 'bg-main_green',
            enabledTextColor: 'text-white'
        },
        clear: {
            text: 'Vaciar carrito',
            enabledBgColor: 'bg-buttons-gray-bg',
            enabledTextColor: 'text-black'
        }
    }

    const config = buttonconfig[variant];

    // Colores por defecto cuando está disabled
    const disabledClasses = 'bg-buttons-gray-bg text-buttons-gray-text';

    // Colores cuando está enabled
    const enabledClasses = `${config.enabledBgColor} ${config.enabledTextColor}`;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`sidecart-button ${disabled ? disabledClasses : enabledClasses}`}
        >
            {config.text}
        </button>
    );
}