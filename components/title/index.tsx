import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const TitleSection = () => {
  return (
    <>
      <div
        className="md:min-h-[800px] 
      min-h-[402px]
      relative "
      >
        <div className="absolute w-full h-full inset-0 z-1">
          <Image
            src="/images/titleBackground.png"
            alt="Logo"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 w-full h-full z-2  flex items-center justify-center">
          <div className="flex flex-col gap-[1rem] items-center justify-center">
            <h1
              className="text-white 
            text-[1.875rem]
            md:text-[3.75rem] text-white
            text-center md:text-left
            leading-[140%] font-extrabold max-w-[40rem]"
            >
              Your Bridge to a New Beginning in Canada
            </h1>
            <p className="text-white font-medium text-xs md:text-base max-w-[20rem] md:max-w-[40rem] text-center leading-[150%]">
              Professional guidance for Canada Permanent Residency and Visitor
              Visas. We simplify the complex, so you can focus on the journey.
            </p>

            <div className="flex items-center gap-[0.5rem] justify-center">
              <Button variant="white">Get a Free Assessment</Button>
              <Button variant="default">Book a Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TitleSection;
