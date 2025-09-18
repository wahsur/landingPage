import Image from "next/image";
import { Wifi, Cpu, LayoutGrid } from "lucide-react";

export default function Services() {
  const service = [
    {
      title: "Apps Developer",
      desc: "inovasi melalui kode, menyentuh hidup melalui aplikasi.",
      icon: <LayoutGrid className="w-20 h-20 text-primary" />,
    },
    {
      title: "Hardware Supplier",
      desc: "menggerakkan teknologi, memenuhi setiap kebutuhan hardware anda.",
      icon: <Cpu className="w-20 h-20 text-primary" />,
    },
    {
      title: "Internet For Events",
      desc: "penyedia internet khusus event yang fleksibel dan powerful.",
      icon: <Wifi className="w-20 h-20 text-primary" />,
    },
  ];
  return (
    <section className="relative w-full h-min-screen overflow-hidden">
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

      <div className="relative z-10 flex-col items-center justify-center h-full text-white py-20 px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 text-center text-shadow-lg">
          SERVICES
        </h2>

        <div className="flex flex-col lg:flex-row w-full max-w-6xl justify-between text-center lg:text-start lg:items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
              We&apos;re <br className="hidden lg:block" />
              provide <br className="hidden lg:block" />
              what <br className="md:block lg:hidden" />
               you <br className="hidden lg:block" />
              need!
            </h1>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end space-y-6">
            {service.map((services, index) => (
              <div
                key={index}
                className="lg:w-full md:w-96 w-64 bg-white rounded-xl p-4 lg:p-6 shadow-lg shadow-gray-800 flex flex-col md:flex-row lg:flex-row text-center md:text-start lg:text-start items-center gap-4"
              >
                <div>{services.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl text-secondary font-bold">
                    {services.title}
                  </h3>
                  <p className="text-sm lg:text-base text-primary">
                    {services.desc}
                  </p>
                </div>
                <button className="flex items-center bg-secondary hover:bg-hover_bg text-white rounded-lg py-1 px-3 font-bold text-sm lg:text-base whitespace-nowp">
                  Learn More
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
