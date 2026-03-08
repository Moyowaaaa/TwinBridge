import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a Canada PR process take",
    answer:
      "While it varies by program, Express Entry typically targets a 6-month processing time after a complete application is submitted.",
    value: "item-1",
  },
  {
    question: "Can i apply for a visitor visa while my PR is in progress?",
    answer:
      "Yes, you can apply for a visitor visa while your PR application is in progress. This is known as dual intent.",
    value: "item-2",
  },
  {
    question: "What is the minimum CRS score for PR?",
    answer:
      "The minimum CRS score changes with each Express Entry draw. Generally, a score above 470 is considered competitive, but it depends on the programs targeted in specific draws.",
    value: "item-3",
  },
];

const FAQSection = () => {
  return (
    <div
      id="faq"
      className="bg-[#F1F7FD] py-16 md:py-[6.25rem] px-4 md:px-8 w-full flex justify-center"
    >
      <div className="max-w-[770px] w-full flex flex-col items-center">
        <p className="text-[#1e3a8a] text-xs md:text-sm font-bold uppercase tracking-widest mb-3 md:mb-4">
          FAQ
        </p>
        <h2 className="text-[28px] md:text-4xl font-bold text-[#1a1a1a] mb-8 md:mb-12 text-center">
          Everything You Need to Know
        </h2>

        <Accordion
          type="single"
          collapsible
          className="w-full space-y-4 md:space-y-6"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="bg-white rounded-[20px] md:rounded-[24px] px-5 md:px-8 py-2 md:py-4 border-none shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            >
              <AccordionTrigger className="hover:no-underline text-left text-[16px] md:text-[18px] font-semibold text-[#1a1a1a] py-4 md:py-4 [&>svg]:size-5 [&>svg]:text-[#1a1a1a]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#64748b] text-[15px] md:text-[16px] leading-[1.6] md:leading-relaxed pb-6 md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQSection;
