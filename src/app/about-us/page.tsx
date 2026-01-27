import MainBanner from "@/components/ui/about-us/main-banner";
import BrandDescription from "@/components/ui/about-us/brand-description";
import ProductDescription from "@/components/ui/about-us/product-description";
import '@/app/globals.css'

export default function AboutUsPage() {
    return (
        <>
            <MainBanner />
            <BrandDescription />
            <ProductDescription />
        </>

    );
}