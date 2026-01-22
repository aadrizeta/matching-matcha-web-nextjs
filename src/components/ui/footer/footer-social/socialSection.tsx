import IgButton from "./ig-button"

export default function SocialSection() {
    return (
        <div className="bg-dark-green text-background flex flex-col gap-3 items-center w-100 padding-responsive py-15">
            <p className="text-center text-xl">Síguenos en redes y no te pierdas ninguna novedad</p>
            <IgButton />
        </div>
    );
}
