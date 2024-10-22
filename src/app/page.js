import HeroSection from "@/app/_components/Home/HeroSection";
import TrendingProduct from "./_components/Home/TrendingProduct";
import TopDiscount from "./_components/Home/TopDiscount";
import TopSelling from "./_components/Home/TopSelling";
import TestimonialSec from "./_components/Home/TestimonialSec";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <TrendingProduct/>
      <TopDiscount/>
      <TopSelling/>
      <TestimonialSec/>
    </>
  );
}
