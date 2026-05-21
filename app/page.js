import About from "@/components/sections/about/About";
import HeroSection from "@/components/sections/hero/HeroSection";
import Review from "@/components/sections/review/Review";
import Services from "@/components/sections/services/Services";
import TopDocs from "@/components/sections/top-doctors/TopDocs";

// export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <TopDocs></TopDocs>
      <Services></Services>
      <About></About>
      <Review></Review>
    </>
  );
}
