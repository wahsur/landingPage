import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "Perangkat apa saja yang disediakan oleh SAI ?",
    answer:
      "Hampir seluruh perangkat dapat disediakan oleh SAI,karena SAI memiliki partner dari berbagai brand dan jenis perangkat yang dibutuhkan, baik untuk industri hingga individu",
  },
  {
    id: "02",
    question: "Apakah SAI melayani pembuatan website ?",
    answer:
      "SAI mengutamakan project partnership untuk membangun sistem berupa website maupun aplikasi. produk aplikasi ini berbasis website dan juga mobile apps dengan teknologi termutakhir",
  },
  {
    id: "03",
    question: "Bagaimana sistem pembayaran di SAI ?",
    answer:
      "SAI melayani pembelian putus dengan pembayaran di depan maupun dibelakang dengan invoice. Pembayaran lunas maupun cicilan, sesuai kebutuhan pelanggan",
  },
  {
    id: "04",
    question: "Apakah menjadi partner NetforEnt dipungut biaya ?",
    answer:
      "Saat ini tidak ada pungutan biaya apapun termasuk instalasi di venue yang sering mengadakan event di hotel maupun event venue lainnya",
  },
];

export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full h-[130dvh] md:h-[85dvh] lg:h-screen text-white py-20 px-6 md:px-12 overflow-hidden">
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
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-shadow-lg"
        >
          FAQS
        </h2>

        <div className="flex flex-col text-center md:text-center md:flex-col lg:text-start lg:flex-row max-w-6xl mx-auto gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-5xl font-semibold text-secondary leading-tight">
              FREQUENTLY
              <br />
              ASKED
              <br />
              QUESTION
            </h1>
          </div>

          <div className="w-full lg:w-3/2 space-y-8">
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