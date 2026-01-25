import Image from "next/image";
import "@/app/globals.css";

const Beneficios = [
    {
        icon: "/icons/Iconos-beneficios/cara.png",
        title: "Mejora la salud de la piel",
        description:
            "Los antioxidantes del té matcha ayudan a combatir el daño causado por los radicales libres, contribuyendo a una piel más sana, luminosa y con signos de envejecimiento reducidos.",
    },
    {
        icon: "/icons/Iconos-beneficios/salud.png",
        title: "Promueve la salud del corazón",
        description:
            "Consumir matcha puede ayudar a reducir los niveles de colesterol LDL y mejorar la circulación, lo que favorece una mejor salud cardiovascular.",
    },
    {
        icon: "/icons/Iconos-beneficios/cintura.png",
        title: "Puede ayudar a la pérdida de peso",
        description:
            "El matcha puede acelerar el metabolismo y aumentar la quema de grasa, especialmente cuando se combina con una alimentación equilibrada y ejercicio regular.",
    },
    {
        icon: "/icons/Iconos-beneficios/cerebro.png",
        title: "Ayuda a mantener la concentración",
        description:
            "Gracias a la L-teanina, el matcha promueve un estado de alerta relajada, mejorando la concentración y la claridad mental sin causar nerviosismo.",
    },
    {
        icon: "/icons/Iconos-beneficios/energia.svg",
        title: "Aumenta los niveles de energía",
        description:
            "Contiene cafeína de liberación gradual, lo que proporciona energía sostenida y estable a lo largo del día, evitando picos bruscos.",
    },
    {
        icon: "/icons/Iconos-beneficios/antioxidantes.png",
        title: "Alta concentración de antioxidantes",
        description:
            "El matcha es especialmente alto en catequinas, potentes antioxidantes que ayudan a proteger las células y fortalecer el sistema inmunológico.",
    },
];

export default function BeneficiosCards() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Beneficios.map((beneficio) => (
                <div
                    key={beneficio.title}
                    className="bg-background rounded-2xl lg:rounded-none p-5 md:p-8 flex flex-col items-start gap-2 shadow-sm"
                >
                    <div className="rounded-full p-3 md:p-4 bg-light-yellow">
                        <Image
                            src={beneficio.icon}
                            alt={beneficio.title}
                            width={40}
                            height={40}
                        />
                    </div>

                    <h3 className="text-xl font-semibold">{beneficio.title}</h3>
                    <p className="text-base text-muted-foreground">
                        {beneficio.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
