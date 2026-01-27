import '@/app/globals.css';

const values = [
    {
        title: 'Sencillez',
        description: 'Simplicidad en cada taza, sin artificios ni complicaciones.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
        ),
    },
    {
        title: 'Naturalidad y bienestar',
        description: 'Ingredientes puros importados directamente de Japón.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
    },
    {
        title: 'Cuidado integral',
        description: 'Bienestar tanto corporal como mental en cada momento.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
    },
];

export default function ProductDescription() {
    return (
        <section className="bg-light-yellow py-16 md:py-24">
            <div className="padding-responsive">

                {/* Texto narrativo */}
                <div className="max-w-3xl mx-auto space-y-6 mb-16 md:mb-20">
                    <p className="text-lg md:text-xl leading-relaxed">
                        La popularidad del Té Matcha ha aumentado considerablemente en los últimos años, posicionándose actualmente como una de las bebidas más vendidas.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Nuestro producto viene importado de Japón. Donde gracias a la diversidad de sus estaciones podemos ofrecer una gran variedad de tés.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Se pretende con ello crear una comunidad no sólo de consumidores sino de apasionados del té. Conectando así personas que compartan intereses y puedan verse reflejadas en los valores de Matching Matcha:
                    </p>
                </div>

                {/* Cards de valores */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-background p-8 text-center flex flex-col items-center gap-4 
                                transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="text-main_green">
                                {value.icon}
                            </div>
                            <h3 className="font-heading text-xl md:text-2xl text-dark-green">
                                {value.title}
                            </h3>
                            <p className="text-dark_gray leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}