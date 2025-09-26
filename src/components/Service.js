import Image from "next/image";
import { Wifi, Cpu, LayoutGrid } from "lucide-react";
import service from "@/data/service.json"

export default function Services() {
  const iconMap ={
    Wifi: <Wifi className="w-20 h-20 text-primary" />,
    Cpu: <Cpu className="w-20 h-20 text-primary" />,
    LayoutGrid: <LayoutGrid className="w-20 h-20 text-primary" />
  };

  return (
    <section className="relative w-full h-min-screen overflow-hidden font-poppins">
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/bg-service.jpg"
          alt="Service"
          fill
          quality={100}
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary opacity-80"></div>
      </div>

      <div className="relative z-10 flex-col items-center justify-center h-full text-white py-16 px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 text-center text-shadow-lg">
          LAYANAN
        </h2>

        <div className="flex flex-col lg:flex-row w-full justify-between text-center lg:text-start lg:justify-between">
          <div className="w-full lg:w-full mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
              Kami <br className="hidden lg:block" />
              menyediakan <br className="hidden lg:block" />
              apa <br className="hidden md:block lg:hidden" />
              yang <br className="hidden lg:block" /> anda{" "}
              <br className="hidden lg:block" />
              butuhkan!
            </h1>
          </div>

          <div className="w-full lg:w-full flex flex-col items-center lg:items-end space-y-6">
            {service.map((services, index) => (
              <div
                key={index}
                className="lg:w-full md:w-xl w-64 bg-white rounded-xl p-4 lg:p-6 shadow-lg shadow-gray-800 flex flex-col md:flex-row lg:flex-row text-center md:text-start lg:text-start items-center gap-4"
              >
                <div>{iconMap[services.icon]}</div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl text-secondary font-bold">
                    {services.title}
                  </h3>
                  <p className="text-sm lg:text-base text-primary">
                    {services.desc}
                  </p>
                </div>
                <button
                  onClick={() => {
                    document
                      .getElementById("KONTAK")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center bg-secondary hover:bg-hover_bg text-white rounded-lg py-1 px-3 font-bold text-sm lg:text-base whitespace-nowp"
                >
                  Selengkapnya
                  <span className="ml-1 text-lg">›</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
