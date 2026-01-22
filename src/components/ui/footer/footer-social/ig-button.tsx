import Link from "next/link";
import '@/app/globals.css';

export default function IgButton() {
    return (
        <Link href="https://www.instagram.com/matching.matcha">
            <button className="ig-button">
                <b>@matching.matcha</b>
            </button>
        </Link>
    );
}