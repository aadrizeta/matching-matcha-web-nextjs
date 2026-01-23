import Card from "@/components/ui/home-page/beneficios-card/card";

export default function BeneficiosMatcha() {
    return (
        <section className="bg-light-yellow py-10 flex flex-col gap-8 items-center">
            <h3 className="text-4xl">¿Qué beneficios tiene el té matcha?</h3>
            <div className="padding-responsive flex flex-wrap gap-5 justify-center max-w-300">
                <Card />
            </div>
        </section>
    );
}