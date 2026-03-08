"use client";

import FAQSection from "@/components/faq";
import FeaturesSection from "@/components/features";
import HeroSection from "@/components/hero";
import ServicesSection from "@/components/services";
import TitleSection from "@/components/title";

export default function Home() {
  return (
    <>
      <TitleSection />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <FAQSection />
    </>
  );
}
