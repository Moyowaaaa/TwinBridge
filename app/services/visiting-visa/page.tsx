import Image from "next/image";
import { Check } from "lucide-react";

const VISAS = [
  {
    title: "Tourist Visa",
    description: "For leisure and sight seeing.",
    image: "/images/visitingPR1.png",
  },
  {
    title: "Family/Super Visa",
    description: "For parents and grandparents of Canadian citizens or PRs.",
    image: "/images/visitingPR2.png",
  },
  {
    title: "Business Visa",
    description: "For attending conferences, meetings or trade fairs.",
    image: "/images/visitingPR3.png",
  },
];

const VisitingVisaPage = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-white py-[4rem] md:py-[5rem]">
        <div className="w-full max-w-[85rem] flex flex-col items-center px-[1.25rem] md:px-0 gap-[6.25rem]">
          <div className="flex flex-col w-full relative items-center">
            <div className="bg-[#f4f7f9] w-max rounded-[2rem] px-[1rem] py-[0.5rem] mb-[1.5rem] flex items-center justify-center transition-colors duration-300 hover:bg-[#e2e8f0] cursor-default">
              <span className="text-[0.75rem] font-medium text-[#4a4a4a]">
                Canada Visiting Visa
              </span>
            </div>

            <h1 className="text-[2.25rem] md:text-[3.5rem] text-center font-semibold text-[#111111] leading-[1.2] mb-[1rem] max-w-[45rem]">
              Explore Canada with <br className="hidden md:block" /> Confidence
            </h1>

            <p className="text-[1rem] text-[#7c7c7c] text-center max-w-[40rem] leading-[1.6] mb-[3.75rem]">
              Whether you want to witness the Niagara Falls, visit family, or
              explore business opportunities, our team ensures your
              &quot;Temporary Resident Visa&quot; application is airtight.
            </p>

            <div className="w-full mx-auto relative h-[300px] sm:h-[400px] md:h-[714px] rounded-[1.5rem] overflow-hidden group">
              <Image
                src="/images/visiting_visa_hero.png"
                alt="Happy woman exploring Canada in winter"
                fill
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer"
                priority
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <h2 className="text-[2rem] md:text-[2.25rem] font-bold text-[#222222] mb-[3rem] text-center">
              Type of Visas we Handle
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem] w-full">
              {VISAS.map((visa, index) => (
                <div
                  key={index}
                  className="relative w-full h-[400px] md:h-[500px] rounded-[16px] overflow-hidden flex items-end group cursor-pointer"
                >
                  <Image
                    src={visa.image}
                    alt={visa.title}
                    fill
                    className="object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[336px] bg-gradient-to-t from-[#000000] to-transparent z-10 transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="relative z-20 w-full p-[1.5rem] md:p-[2rem] flex flex-col gap-[0.25rem] transition-transform duration-500 transform group-hover:-translate-y-2">
                    <h3 className="text-white font-semibold text-[1.25rem] md:text-[1.5rem] tracking-tight">
                      {visa.title}
                    </h3>
                    <p className="text-[#e6e6e6] text-[0.875rem] font-medium leading-[1.5]">
                      {visa.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f4f8fb] flex flex-col md:flex-row min-h-[37.5rem]">
        <div className="w-full md:w-1/2 flex justify-end">
          <div className="w-full max-w-[42.5rem] px-[1.25rem] py-[4rem] md:py-[6rem] md:pr-[4rem] xl:pr-[6rem] flex flex-col justify-center">
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#111111] mb-[1.5rem]">
              Our Success Strategy
            </h2>
            <p className="text-[#7c7c7c] text-[1rem] leading-[1.6] max-w-[32rem]">
              We don&apos;t just fill forms. We focus on the two most common
              reasons for refusal:
            </p>

            <div className="flex flex-col sm:flex-row gap-[2rem] mt-[3rem] max-w-[38rem]">
              <div className="flex gap-[1rem] items-start w-full sm:w-1/2 group cursor-default transition-transform duration-300 hover:-translate-y-1">
                <div className="min-w-[1.5rem] h-[1.5rem] mt-[0.125rem] bg-[#2a3e6f] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                  <Check
                    className="w-[1rem] h-[1rem] text-white"
                    strokeWidth={3}
                  />
                </div>
                <p className="text-[#111111] text-[0.875rem] font-medium leading-[1.6] transition-colors duration-300 group-hover:text-blue-900">
                  Proof of Funds and Ties To Home Country
                </p>
              </div>

              <div className="flex gap-[1rem] items-start w-full sm:w-1/2 group cursor-default transition-transform duration-300 hover:-translate-y-1">
                <div className="min-w-[1.5rem] h-[1.5rem] mt-[0.125rem] bg-[#2a3e6f] rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                  <Check
                    className="w-[1rem] h-[1rem] text-white"
                    strokeWidth={3}
                  />
                </div>
                <p className="text-[#111111] text-[0.875rem] font-medium leading-[1.6] transition-colors duration-300 group-hover:text-blue-900">
                  We help you build a compelling narrative that proves your
                  intent to return home after your visit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-auto">
          <Image
            src="/images/success_strategy_couple.png"
            alt="Happy couple taking a selfie in winter"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default VisitingVisaPage;
