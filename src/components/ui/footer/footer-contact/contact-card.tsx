import '@/app/globals.css';
import Image from 'next/image';

interface ContactCardProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactCard({ isOpen, onClose }: ContactCardProps) {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="backdrop block! opacity-100"
                onClick={onClose}
            />
            <div className='contact-card'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <p className='font-heading font-medium text-2xl'>CONTACTO</p>
                    <p className='font-heading text-lg'>© 2025 MatchingMatcha</p>
                </div>
                <div className='flex justify-between items-center'>
                    <Image src="/icons/whatsapp.svg" alt="WhatsApp Icon" width={50} height={50} />
                    <p className='text-lg'>+34 604 853 984</p>
                </div>
                <div className='flex justify-between items-center'>
                    <Image src="/icons/correo-electronico.svg" alt="Email Icon" width={50} height={50} />
                    <p className='text-lg'>info@mathingmatcha.es</p>
                </div>
            </div>
        </>
    );
}