import IgButton from "./ig-button"

export default function SocialSection() {
    return (
        <div className="lg:flex-1 text-background flex flex-col gap-3 items-center py-10 lg:items-center bg-dark-green">
            <p className="text-center lg:text-center text-xl">
                Síguenos en redes y no te pierdas ninguna novedad
            </p>
            <IgButton />
        </div>
    );
}