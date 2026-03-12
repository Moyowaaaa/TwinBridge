import React from "react";
import Image from "next/image";

const STEPS = [
  {
    number: "01",
    text: "Eligibility Assessment & CRS Score Calculation.",
  },
  {
    number: "02",
    text: "Document Procurement & Educational Credential Assessment (ECA) guidance.",
  },
  {
    number: "03",
    text: "Profile Creation and Management.",
  },
  {
    number: "04",
    text: "Post-ITA (Invitation to Apply) documentation and submission.",
  },
];

const PATHWAYS = [
  {
    number: "01",
    title: "Express Entry",
    description:
      "Assistance with Federal Skilled Worker (FSW), Federal Skilled Trades (FST), and Canadian Experience Class (CEC).",
  },
  {
    number: "02",
    title: "Provincial Nominee Program",
    description: "Targeting specific provinces that need your unique skills.",
  },
  {
    number: "03",
    title: "Family Sponsorship",
    description: "Reuniting you with your loved ones.",
  },
];

const PermanentResidencyPage = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-white py-[4rem] md:py-[5rem]">
        <div className="w-full max-w-[85rem] flex flex-col items-center px-[1.25rem] md:px-0 gap-[6.25rem]">
          <div className="flex flex-col w-full relative items-center">
            <div className="bg-[#f4f7f9] w-max rounded-[2rem] px-[1rem] py-[0.5rem] mb-[1.5rem] flex items-center justify-center transition-colors duration-300 hover:bg-[#e2e8f0] cursor-default">
              <span className="text-[0.75rem] font-medium text-[#4a4a4a]">
                Canada Permanent Residency (PR)
              </span>
            </div>

            <h1 className="text-[2.25rem] md:text-[3.5rem] text-center font-semibold text-[#111111] leading-[1.2] mb-[1rem] max-w-[45rem]">
              Make Canada Your Forever <br className="hidden md:block" /> Home
            </h1>

            <p className="text-[1rem] text-[#7c7c7c] text-center max-w-[43rem] leading-[1.6] mb-[3.75rem]">
              Obtaining Permanent Residency is a marathon, not a sprint. At
              TwinBridge Travels, we specialize in identifying the most
              efficient pathway for you to live, work, and thrive in Canada.
            </p>

            <div className="w-full mx-auto relative h-[300px] sm:h-[400px] md:h-[714px] rounded-[1.5rem] overflow-hidden group">
              <Image
                src="/images/permanent_residency_hero.png"
                alt="Canadian Passport and Boarding Pass in an Airport"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center bg-white py-[4rem] md:py-[6.25rem]">
        <div className="w-full max-w-[85rem] px-[1.25rem] md:px-0 flex flex-col items-center">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#222222] mb-[3rem] md:mb-[5rem] text-center">
            Our PR Pathways
          </h2>

          <div className="flex flex-col-reverse md:flex-row gap-[3rem] md:gap-[5rem] w-full items-center md:items-stretch">
            <div className="w-full md:w-1/2 flex flex-col gap-[2.5rem] justify-center">
              {PATHWAYS.map((pathway, index) => (
                <div key={index} className="flex flex-col gap-[0.5rem] p-4 -ml-4 rounded-xl transition-all duration-300 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-sm border border-transparent hover:border-slate-100 group cursor-default">
                  <span className="text-[0.875rem] text-[#8c8c8c] font-medium transition-colors group-hover:text-blue-600">
                    {pathway.number}
                  </span>
                  <h3 className="text-[1.25rem] font-semibold text-[#111111]">
                    {pathway.title}
                  </h3>
                  <p className="text-[1rem] text-[#7c7c7c] leading-[1.6]">
                    {pathway.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px] rounded-[1.5rem] overflow-hidden">
              <Image
                src="/images/pr_pathways.png"
                alt="Father and child in the snow"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center bg-[#fafafa] py-[4rem] md:py-[6.25rem]">
        <div className="w-full max-w-[85rem] px-[1.25rem] md:px-0 flex flex-col items-center">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#222222] mb-[3rem] text-center">
            What We Do
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.5rem] w-full">
            {STEPS.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-[1rem] p-[2rem] flex flex-col justify-between min-h-[260px] md:min-h-[280px] transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-transparent hover:border-slate-100 group cursor-default"
              >
                <span className="text-[0.875rem] text-[#7c7c7c] font-medium transition-colors duration-300 group-hover:text-blue-600">
                  {step.number}
                </span>
                <p className="text-[1rem] text-[#222222] font-medium leading-[1.6]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PermanentResidencyPage;
