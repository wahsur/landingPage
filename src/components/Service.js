import Image from "next/image";
import { Wifi, Cpu, LayoutGrid } from "lucide-react";

export default function Services() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/image/bg-service.jpg" alt="Service" fill quality={100} className="object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary opacity-80"></div>
      </div>

      <div className="relative z-10 flex-col items-center justify-center h-full text-white py-16 px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ textShadow: "-3px 3px 4px rgba(0, 0, 0, 0.5)" }}>
          SERVICES
        </h2>

        <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between items-start md:items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              We&apos;re
              <br />
              provide
              <br />
              what you
              <br />
              need!
            </h1>
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-end space-y-6">
            <div className="w-full bg-white rounded-xl p-4 md:p-6 shadow-md shadow-gray-800 flex items-center gap-4">
              <div>
                <LayoutGrid className="w-20 h-20 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl text-secondary font-bold">Apps Developer</h3>
                <p className="text-sm md:text-base text-primary">inovasi melalui kode, menyentuh hidup melalui aplikasi.</p>
              </div>
              <button className="flex items-center bg-secondary hover:bg-hover_bg text-white rounded-lg py-1 px-3 font-bold text-sm md:text-base whitespace-nowp">
                Learn More
                <span className="ml-1 text-lg">›</span>
              </button>
            </div>

            <div className="w-full bg-white rounded-xl p-4 md:p-6 shadow-md shadow-gray-800 flex items-center gap-4">
              <div>
                <Cpu className="w-20 h-20 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl text-secondary font-bold">Hardware Supplier</h3>
                <p className="text-sm md:text-base text-primary">menggerakkan teknologi, memenuhi setiap kebutuhan hardware anda.</p>
              </div>
              <button className="flex items-center bg-secondary hover:bg-hover_bg text-white rounded-lg py-1 px-3 font-bold text-sm md:text-base whitespace-nowp">
                Learn More
                <span className="ml-1 text-lg">›</span>
              </button>
            </div>

            <div className="w-full bg-white rounded-xl p-4 md:p-6 shadow-md shadow-gray-800 flex items-center gap-4">
              <div>
                <Wifi className="w-20 h-20 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl text-secondary font-bold">Internet For Events</h3>
                <p className="text-sm md:text-base text-primary">penyedia internet khusus event yang fleksibel dan powerful.</p>
              </div>
              <button className="flex items-center bg-secondary hover:bg-hover_bg text-white rounded-lg py-1 px-3 font-bold text-sm md:text-base whitespace-nowp">
                Learn More
                <span className="ml-1 text-lg">›</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
