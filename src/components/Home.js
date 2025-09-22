import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section
      id="BERANDA"
      className="relative flex flex-col justify-center min-h-screen w-full"
    >
      {/* hero section */}
      <Image
        src="/image/bg-section1.jpg"
        alt="background"
        fill
        priority
        className="object-cover w-full h-full"
      />

      <div className="absolute inset-0 bg-primaryOpacity/80" />

      <div className="relative mt-4 z-10 text-start text-white flex flex-col items-start px-6 md:px-16 lg:px-32">
        {/* Logo */}
        <Image
          src="/image/logo.png"
          alt="Company Logo"
          width={120}
          height={120}
          className="mb-2"
        />

        {/* Heading */}
        <h1 className="text-4xl font-bold w-full">
          PT SEMUA APLIKASI
          <br />
          INDONESIA (SAI)
        </h1>

        {/* Subheading */}
        <p
          className="mt-2 text-lg font-monospace
         font-extralight tracking-[0.3em] font-montserrat"
        >
          INNOVATE, INTEGRATE, ELEVATE
        </p>

        {/* button CTA */}
        <button
          onClick={() => {
            document
              .getElementById("LAYANAN")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="mt-3 flex items-center justify-center text-xl bg-secondary text-white px-4 py-4 rounded-lg shadow-md hover:bg-hover_bg transition"
        >
          Layanan Kami
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
