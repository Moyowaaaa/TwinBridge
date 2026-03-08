import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className="w-full flex justify-center bg-white py-[4rem] md:py-[6.25rem]">
      <div className="w-full max-w-[65rem] px-[1.25rem] lg:px-0 flex flex-col items-center">
        <span className="text-[#5c7285] text-[0.75rem] font-semibold tracking-wider uppercase mb-[1rem]">
          Our Services
        </span>
        <h2 className="text-[2.25rem] md:text-[3rem] font-bold text-[#111111] leading-[1.2] mb-[1rem] text-center">
          Services Tailored For You
        </h2>
        <p className="text-[#7c7c7c] text-[1rem] md:text-[1.125rem] max-w-[36rem] text-center mb-[4rem] leading-[1.6]">
          From permanent residency to visitors visas, we cover every aspect of
          your Canadian journey.
        </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[3rem]">
          {/* Card 1 */}
          <div className="flex flex-col group cursor-pointer w-full">
            <div className="w-full relative rounded-[1rem] overflow-hidden aspect-[4/3] mb-[1.5rem]">
              <Image
                src="/images/permanent_residency_hero.png"
                alt="Canada Permanent Residency (PR)"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-[0.75rem]">
              <h3 className="text-[1.25rem] md:text-[1.375rem] font-semibold text-[#111111]">
                Canada Permanent Residency (PR)
              </h3>
              <p className="text-[#7c7c7c] text-[1rem] leading-[1.6] mb-[0.25rem]">
                Obtaining Permanent Residency is a marathon, not a sprint. At
                TwinBridge Travels, we specialize in identifying the most
                efficient pathway for you to live.
              </p>
              <Link href="/services/permanent-residency">
                <div className="text-[#2a3e6f] font-semibold flex items-center text-[0.875rem] md:text-[1rem] transition-colors group-hover:text-blue-800">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-[0.125rem] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col group cursor-pointer w-full">
            <div className="w-full relative rounded-[1rem] overflow-hidden aspect-[4/3] mb-[1.5rem]">
              <Image
                src="/images/visiting_visa_hero.png"
                alt="Canada Visiting Visa"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-[0.75rem]">
              <h3 className="text-[1.25rem] md:text-[1.375rem] font-semibold text-[#111111]">
                Canada Visiting Visa
              </h3>
              <p className="text-[#7c7c7c] text-[1rem] leading-[1.6] mb-[0.25rem]">
                Whether you want to witness the Niagara Falls, visit family, or
                explore business opportunity, our team ensures your
                &quot;Temporary Resident Visa&quot; application.
              </p>
              <Link href="/services/visiting-visa">
                <div className="text-[#2a3e6f] font-semibold flex items-center text-[0.875rem] md:text-[1rem] transition-colors group-hover:text-blue-800">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-[0.125rem] transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
