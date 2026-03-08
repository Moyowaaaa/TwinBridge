import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative w-full flex flex-col-reverse md:flex-col ">
      {/* Mobile Image */}
      <div className="w-full h-[300px] sm:h-[400px] relative md:hidden">
        <Image
          src="/images/hero-bg-image.png"
          alt="About Us"
          fill
          className="object-cover"
        />
      </div>

      {/* Desktop Image */}
      <div className="hidden md:block absolute left-0 top-0 w-1/2 h-full">
        <Image
          src="/images/hero-bg-image.png"
          alt="About Us"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-[85rem] mx-auto px-5 md:px-0 flex justify-end relative z-10">
        <div className="w-full md:w-1/2 py-12 md:py-[8rem] lg:py-[10rem] md:pl-[4rem] lg:pl-[5rem] flex flex-col justify-center">
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
