import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
  },
  {
    id: "02",
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
  },
  {
    id: "03",
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
  },
  {
    id: "04",
    question: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.",
  },
];

export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full min-h-screen text-white py-16 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/bg-faqs.jpg"
          alt="FAQs background"
          fill
          quality={100}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary opacity-80"></div>
      </div>

      <div className="relative z-10 ">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          style={{ textShadow: "-3px 3px 4px rgba(0, 0, 0, 0.5)" }}
        >
          FAQS
        </h2>

        <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-semibold text-secondary leading-tight">
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTION
            </h1>
          </div>

          <div className="w-full md:w-3/2 space-y-8">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-white/30 pb-6 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-whitw text-2xl md:text-3xl">
                      {faq.id}
                    </span>
                    <p className="text-lg md:text-xl font-medium">{faq.question}</p>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                  ) : (
                    <ChevronDown className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                  )}
                </div>

                {openIndex === index && (
                  <p className="text-sm md:text-base mt-4 pl-14 text-gray-300">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}