import HeroSection from "@/components/sections/hero/HeroSection";
import Services from "@/components/sections/services/Services";
import TopDocs from "@/components/sections/top-doctors/TopDocs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <TopDocs></TopDocs>
      <Services></Services>
    </>
  );
}
