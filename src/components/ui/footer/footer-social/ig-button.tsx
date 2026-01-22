import Link from "next/link";
import '@/app/globals.css';

export default function IgButton() {
    return (
        <Link href="https://www.instagram.com/matching.matcha">
            <button className="ig-button">
                <p>Síguenos en Instagram</p>
                <p><b>@matching.matcha</b></p>
            </button>
        </Link>
    );
}