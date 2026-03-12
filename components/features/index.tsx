"use client";

import React, { useEffect, useRef } from "react";
import { MapPin, User, Handshake } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          },
        },
      );

      if (cardsContainerRef.current) {
        const cards = Array.from(cardsContainerRef.current.children);
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 80%",
            },
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center bg-[#fafafa] py-[3rem] md:py-[6.25rem]"
    >
      <div className="w-full max-w-[85rem] px-[1.25rem] md:px-0 flex flex-col lg:flex-row gap-[1.5rem] lg:gap-[6.25rem]">
        <div
          ref={textRef}
          className="w-full lg:w-1/3 flex flex-col items-start lg:pt-[1rem]"
        >
          <span className="text-[#5c7285] text-[0.75rem] font-semibold tracking-wider uppercase mb-[0.5rem] md:mb-[1rem]">
            WHY CHOOSE US
          </span>
          <h2 className="text-[1.5rem] md:text-[3.5rem] font-bold text-[#111111] leading-[1.2]">
            Why Choose <br className="hidden lg:block" /> TwinBridge
          </h2>
        </div>

        <div
          ref={cardsContainerRef}
          className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-[1rem] md:gap-[1.5rem]"
        >
          <div className="bg-white rounded-[1rem] md:rounded-[1.5rem] p-[1.5rem] md:p-[2.5rem] flex flex-col justify-between min-h-[260px] md:min-h-[340px] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] bg-[#eef2f6] rounded-[0.5rem] flex items-center justify-center">
              <MapPin
                className="text-[#2a3e6f] w-[1.25rem] h-[1.25rem] md:w-[1.5rem] md:h-[1.5rem]"
                strokeWidth={2}
              />
            </div>
            <div className="flex flex-col gap-[0.25rem] md:gap-[0.5rem] mt-[3rem] md:mt-[4rem]">
              <h3 className="text-[#111111] font-semibold text-[1rem] md:text-[1.25rem]">
                Expert Navigation
              </h3>
              <p className="text-[#7c7c7c] text-[0.875rem] md:text-[1rem] leading-[1.6]">
                We stay ahead of the ever-changing IRCCC regulations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[1rem] md:rounded-[1.5rem] p-[1.5rem] md:p-[2.5rem] flex flex-col justify-between min-h-[260px] md:min-h-[340px] shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] bg-[#eef2f6] rounded-[0.5rem] flex items-center justify-center">
              <User
                className="text-[#2a3e6f] w-[1.25rem] h-[1.25rem] md:w-[1.5rem] md:h-[1.5rem]"
                strokeWidth={2}
              />
            </div>
            <div className="flex flex-col gap-[0.25rem] md:gap-[0.5rem] mt-[3rem] md:mt-[4rem]">
              <h3 className="text-[#111111] font-semibold text-[1rem] md:text-[1.25rem]">
                Personalized Strategy
              </h3>
              <p className="text-[#7c7c7c] text-[0.875rem] md:text-[1rem] leading-[1.6]">
                No two journeys are the same. We build a roadmap tailored to
                your profile.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[1rem] md:rounded-[1.5rem] p-[1.5rem] md:p-[2.5rem] flex flex-col justify-between min-h-[260px] md:min-h-[340px] sm:col-span-2 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-[2.5rem] h-[2.5rem] md:w-[3rem] md:h-[3rem] bg-[#eef2f6] rounded-[0.5rem] flex items-center justify-center">
              <Handshake
                className="text-[#2a3e6f] w-[1.25rem] h-[1.25rem] md:w-[1.5rem] md:h-[1.5rem]"
                strokeWidth={2}
              />
            </div>
            <div className="flex flex-col gap-[0.25rem] md:gap-[0.5rem] mt-[3rem] md:mt-[4rem]">
              <h3 className="text-[#111111] font-semibold text-[1rem] md:text-[1.25rem]">
                End-to-End Support
              </h3>
              <p className="text-[#7c7c7c] text-[0.875rem] md:text-[1rem] leading-[1.6]">
                From document checklist to final submission, we are with you at
                every bridge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
