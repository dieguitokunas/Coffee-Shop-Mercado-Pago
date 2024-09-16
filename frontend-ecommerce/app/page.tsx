import { Banner } from "@/components/banner";
import { BannerDiscount } from "@/components/banner-discount";
import { CarouselTextBanner } from "@/components/carousel-text-banner";
import { ChoseCategory } from "@/components/chose-category";
import { FeaturedProducts } from "@/components/featured-products";
export default function Home() {
  return (
    <main>
    <CarouselTextBanner/>
    <FeaturedProducts/>
    <BannerDiscount/>
    <ChoseCategory/>
    <Banner/>
    </main>
  );
}
