import SocialSection from '@/components/ui/footer/footer-social/socialSection';
import ContactSection from '@/components/ui/footer/footer-contact/contactSection';

export default function Footer() {
    return (
        <footer className='relative w-full'>
            {/* Backgrounds absolutos que se extienden al 100% */}
            <div className="absolute inset-0 lg:flex lg:flex-row-reverse">
                <div className="bg-dark-green flex-1" />
                <div className="bg-foreground flex-2" />
            </div>

            {/* Contenido con padding-responsive */}
            <div className="relative footer-padding lg:flex lg:flex-row-reverse">
                <SocialSection />
                <ContactSection />
            </div>
        </footer>
    );
}