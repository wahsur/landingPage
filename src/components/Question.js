import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "Perangkat apa saja yang disediakan oleh SAI?",
    answer:
      "Hampir seluruh perangkat dapat disediakan oleh SAI, karena SAI memiliki partner dari berbagai merek dan jenis perangkat yang dibutuhkan, baik untuk industri hingga individu.",
  },
  {
    id: "02",
    question: "Apakah SAI melayani pembuatan website?",
    answer:
      "SAI mengutamakan project partnership untuk membangun sistem berupa website maupun aplikasi. Produk aplikasi ini berbasis website dan juga aplikasi mobile dengan teknologi termutakhir.",
  },
  {
    id: "03",
    question: "Bagaimana sistem pembayaran di SAI?",
    answer:
      "SAI melayani pembelian dengan pembayaran di depan maupun dibelakang dengan invoice. Pembayaran lunas maupun cicilan, sesuai kebutuhan pelanggan.",
  },
  {
    id: "04",
    question: "Apakah menjadi partner NetforEnt dipungut biaya?",
    answer:
      "Saat ini tidak ada pungutan biaya apapun termasuk instalasi di venue yang sering mengadakan event di hotel maupun event venue lainnya.",
  },
];

export default function Question() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    // h-[130vh] sm:h-[75vh]  md:h-[85vh] lg:h-[110vh]
    <section className="relative w-full h-min text-white py-20 px-6 md:px-12 font-poppins">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/bg-faqs.jpg"
          alt="FAQs background"
          fill
          quality={100}
          className="object-cover fixed"
        />
        <div className="absolute inset-0 bg-primary opacity-80"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-shadow-lg">
          PERTANYAAN
        </h2>

        <div className="flex flex-col md:flex-col lg:text-start lg:flex-row max-w-full mx-auto gap-12">
          <div className="w-full lg:w-1/2 text-center md:text-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-secondary leading-tight">
              PERTANYAAN <br className="hidden lg:block" />
              UMUM <br className="hidden lg:block" />
              YANG <br className="md:block lg:hidden" />
              SERING <br className="hidden lg:block" />
              DIAJUKAN
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
                    <span className="text-white text-2xl md:text-3xl">
                      {faq.id}
                    </span>
                    <p className="text-lg md:text-xl font-medium">
                      {faq.question}
                    </p>
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
