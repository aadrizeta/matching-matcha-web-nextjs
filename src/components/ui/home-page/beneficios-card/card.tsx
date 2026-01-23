import Image from "next/image";
import "@/app/globals.css";

const Beneficios = [
    {
        icon: "/icons/Iconos-beneficios/cara.png",
        title: "Mejora la salud de la piel",
        description:
            "El té matcha es rico en antioxidantes que ayudan a combatir el daño causado por los radicales libres, contribuyendo a una piel más sana, luminosa y con signos de envejecimiento reducidos.",
    },
    {
        icon: "/icons/Iconos-beneficios/corazon.png",
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
        icon: "/icons/Iconos-beneficios/ligero.png",
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
                    className="bg-background rounded-2xl lg:rounded-none p-6 flex flex-col items-start gap-4 shadow-sm"
                >
                    <Image
                        src={beneficio.icon}
                        alt={beneficio.title}
                        width={48}
                        height={48}
                    />

                    <h3 className="text-lg font-semibold">{beneficio.title}</h3>
                    <p className="text-sm text-muted-foreground">
                        {beneficio.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
