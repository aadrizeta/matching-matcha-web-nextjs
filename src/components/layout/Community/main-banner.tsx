import '@/app/globals.css'

export default function MainBanner() {
    return (
        <section className="padding-responsive">
            <div className='py-15'>
                <h1 className='text-center text-3xl md:text-5xl font-medium'>Comunidad de <br />Matching Matcha</h1>
            </div>
            <div className='text-center flex flex-col gap-3'>
                <h2 className='text-2xl md:text-3xl'>¡ÚNETE!</h2>
                <div className='text-lg'>
                    <p>Queremos que formes parte de #MatchingMatchaCommunity</p>
                    <p>Regístrate en nuestra web y no te pierdas ninguna novedad</p>
                </div>
            </div>
        </section>
    );
}