"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const mobileImageRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Add subtle parallax/reveal to desktop image
      if (imageContainerRef.current) {
        gsap.fromTo(
          imageContainerRef.current,
          { x: "-5%", opacity: 0 },
          {
            x: "0%",
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Add reveal to mobile image
      if (mobileImageRef.current) {
        gsap.fromTo(
          mobileImageRef.current,
          { scale: 1.05, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // Stagger text contents
      if (textContentRef.current) {
        gsap.fromTo(
          textContentRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: textContentRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full flex flex-col-reverse md:flex-col overflow-hidden"
    >
      {/* Mobile Image */}
      <div ref={mobileImageRef} className="w-full h-[300px] sm:h-[400px] relative md:hidden origin-center">
        <Image
          src="/images/hero-bg-image.png"
          alt="About Us"
          fill
          className="object-cover"
        />
      </div>

      {/* Desktop Image */}
      <div ref={imageContainerRef} className="hidden md:block absolute left-0 top-0 w-1/2 h-full">
        <Image
          src="/images/hero-bg-image.png"
          alt="About Us"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-[85rem] mx-auto px-5 md:px-0 flex justify-end relative z-10">
        <div ref={textContentRef} className="w-full md:w-1/2 py-12 md:py-[8rem] lg:py-[10rem] md:pl-[4rem] lg:pl-[5rem] flex flex-col justify-center">
          <p className="text-[0.875rem] text-[#345381] font-medium tracking-wider uppercase mb-4">
            About Us
          </p>
          <h2 className="text-[#1a1a1a] font-bold text-[2rem] md:text-[2.75rem] lg:text-[3rem] leading-[1.2] mb-6">
            Readability Built on Experience
          </h2>
          <p className="text-[#666666] text-[1rem] leading-[1.6] md:leading-[1.7] max-w-[34rem]">
            TwinBridge Travels was founded on the principle that distance should
            never be a barrier to opportunity. We understand that behind every
            application is a dream, a family, or a career milestone. Our mission
            is to provide transparent, honest, and high-quality immigration
            services that turn one day into day one.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
