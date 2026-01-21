'use client';
import '@/app/globals.css'
import IgButton from '@/components/ui/footer/ig-button';
import SideCartButton from '@/components/ui/sidecart/sidecart-button';

export default function Home() {
  return (
    <div>
      <p>Hola Mundo, esta es la página principal</p>
      <IgButton />
      <SideCartButton variant='purchase' onClick={() => alert('Comprar')} disabled={false} />
      <SideCartButton variant='clear' onClick={() => alert('Vaciar carrito')} disabled={false} />
    </div>
  );
}
