import '@/app/globals.css'

interface TopStripProps {
    isPaused?: boolean;
}

export default function TopStrip({ isPaused = false }: TopStripProps) {
    const animationClass = isPaused ? 'scroll-text paused' : 'scroll-text';

    return (
        <div className="top-strip">
            <div className={animationClass}>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
            </div>
            <div className={animationClass}>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
                <p>ENVÍO INTERNACIONAL GRATUITO A PARTIR DE 100€</p>
            </div>
        </div>
    );
}