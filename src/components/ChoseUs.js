import { Zap, Globe, MapPin, Users } from "lucide-react";

export default function ChoseUs() {
  return (
    <section className="bg-[#ECECEC] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[rgb(44,28,75)] mb-8">
          Why choose us?
        </h2>

        {/* Outer Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[130px_auto] gap-3">
          {/* Speed Delivery (kiri atas) */}
          <div className="md:col-span-2 h-[130px] rounded-l-md shadow shadow-black overflow-hidden flex">
            <div className="w-[35%] bg-[#ECECEC] p-6 flex flex-col justify-center border rounded-l-md border-black">
              <h3 className="text-3xl md:text-6xl text-[#91B949] font-bold">
                Speed
              </h3>
              <p className="text-[#91B949] text-xl sm:text-3xl font-semibold">
                Delivery
              </p>
            </div>
            <div className="w-[65%] bg-[#2C1C4B] text-white p-6 flex items-center justify-start gap-4">
              <Zap className="w-10 h-10 md:w-24 md:h-24 shrink-0" />
              <div className="flex flex-col text-lg md:text-3xl font-semibold">
                <span>PENGIRIMAN</span>
                <span>CEPAT DAN AMAN</span>
              </div>
            </div>
          </div>

          {/* Brands International (kanan full tinggi) */}
          <div className="md:row-span-2 rounded-t-md shadow shadow-black overflow-hidden flex flex-col">
            <div className="bg-[#ECECEC] p-6 flex-1 flex flex-col text-right border rounded-t-md border-black">
              <h3 className="text-3xl md:text-6xl text-[#91B949] font-bold">
                Brands
              </h3>
              <p className="text-[#91B949] text-xl sm:text-3xl font-semibold">
                International
              </p>
            </div>
            <div className="bg-[#2C1C4B] text-white p-6 flex-1 flex justify-center items-center gap-3">
              <Globe className="w-10 h-10 md:w-24 md:h-24 shrink-0" />
              <div className="flex flex-col text-lg md:text-3xl font-semibold text-start leading-tight">
                <span>MITRA GLOBAL</span>
                <span>TERPERCAYA</span>
              </div>
            </div>
          </div>

          {/* Bali Tech Company (kiri bawah) */}
          <div className="rounded-t-md shadow shadow-black overflow-hidden flex flex-col">
            <div className="h-[50%] bg-[#ECECEC] p-4 flex-1 flex flex-col justify-center border rounded-t-md border-black">
              <h3 className="text-3xl md:text-6xl text-[#91B949] font-bold">
                Bali
              </h3>
              <p className="text-[#91B949] text-xl md:text-3xl font-semibold">
                Tech Company
              </p>
            </div>
            <div className="h-[50%] bg-[#2C1C4B] text-white p-4 flex justify-center items-center gap-3">
              <MapPin className="w-10 h-10 md:w-24 md:h-24 shrink-0" />
              <p className="text-lg md:text-3xl font-semibold">BERBASIS DI BALI</p>
            </div>
          </div>

          {/* 100+ Partners (tengah bawah) */}
          <div className="rounded-b-md shadow shadow-black overflow-hidden flex flex-col">
            <div className="h-[50%] bg-[#2C1C4B] text-white p-6 flex justify-center items-center gap-4">
              <Users className="w-10 h-10 md:w-24 md:h-24 shrink-0" />
              <p className="flex-col text-lg md:text-3xl font-semibold">
                LEBIH DARI 100 MITRA
              </p>
            </div>
            <div className="h-[50%] bg-[#ECECEC] p-4 flex-1 flex flex-col justify-center border rounded-b-md border-black">
              <h3 className="text-3xl md:text-6xl text-[#91B949] font-bold">
                100+
              </h3>
              <p className="text-[#91B949] text-xl md:text-3xl font-semibold">
                Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
