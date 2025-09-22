import Image from "next/image";
import partner from "@/data/partner.json";

export default function Partner() {
  
  return (
    <section id="MITRA" className="h-full bg-background1 py-20 px-6 md:px-12 font-poppins">
      <div className="w-full mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-shadow-lg font-extrabold text-primary text-center mb-12">
          MITRA
        </h2>
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-8">
          <h3 className="text-3xl md:text-5xl font-bold text-primary leading-snug">
            Jadilah Mitra Kami!
          </h3>
          <p className="text-primary leading-relaxed">
            “Bergabunglah bersama kami dan jadilah bagian dari jaringan mitra
            terpercaya. Kami percaya bahwa kolaborasi dapat membuka peluang
            baru, memperluas jangkauan, dan menciptakan nilai yang lebih besar
            untuk semua pihak.”
          </p>
        </div>

        <div className="w-full space-y-16 p-6 md:py-20 md:px-32 bg-white rounded-md shadow">
          {partner.map((partners, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              {/* Text */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-2 text-start" : ""
                } space-y-4`}
              >
                <h3 className="text-3xl md:text-6xl font-bold text-secondary">
                  {partners.title}
                </h3>
                <p className="text-primary md:text-xl leading-relaxed">{partners.desc}</p>
              </div>

              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1 justify-start" : "justify-end"
                } flex`}
              >
                <div className="relative w-full max-w-sm h-64">
                  <Image
                    src={partners.img}
                    alt={partners.title}
                    fill
                    className="object-contain rounded-md md:shadow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
