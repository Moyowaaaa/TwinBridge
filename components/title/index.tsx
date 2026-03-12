"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import gsap from "gsap";

const TitleSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1) Subtle scale down and fade in the background image
      tl.fromTo(
        imageRef.current,
        { scale: 1.05, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: "power2.out" }
      )
      // 2) Fade and slide up the title gently
      .fromTo(
        titleRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.9"
      )
      // 3) Reveal the paragraph text
      .fromTo(
        textRef.current,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      // 4) Stagger the buttons
      .fromTo(
        buttonsRef.current?.children ? Array.from(buttonsRef.current.children) : [],
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="md:min-h-[800px] 
      min-h-[402px]
      relative overflow-hidden"
    >
      <div ref={imageRef} className="absolute w-full h-full inset-0 z-1 origin-center">
        <Image
          src="/images/titleBackground.png"
          alt="Logo"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 w-full h-full z-2 flex items-center justify-center">
        <div className="flex flex-col gap-[1rem] items-center justify-center px-4">
          <h1
            ref={titleRef}
            className="text-white 
            text-[1.875rem]
            md:text-[3.75rem]
            text-center md:text-left
            leading-[140%] font-extrabold max-w-[40rem]"
          >
            Your Bridge to a New Beginning in Canada
          </h1>
          <p
            ref={textRef}
            className="text-white font-medium text-xs md:text-base max-w-[20rem] md:max-w-[40rem] text-center leading-[150%]"
          >
            Professional guidance for Canada Permanent Residency and Visitor
            Visas. We simplify the complex, so you can focus on the journey.
          </p>

          <div ref={buttonsRef} className="flex items-center gap-[0.5rem] justify-center mt-2">
            <Button variant="white">Get a Free Assessment</Button>
            <Button variant="default">Book a Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
