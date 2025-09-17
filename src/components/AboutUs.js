import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="bg-background1 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-12">
          ABOUT US
        </h2>

        {/* Top Content */}
        <div className="grid gap-8 items-center mb-16">
          {/* Left: Image + Company name */}
          <div className="relative w-full h-80 mb-4">
            <Image
              src="/image/aboutus.jpg"
              alt="Company building"
              fill
              className="rounded-md object-cover"
              priority
            />
          </div>

          {/* Right: Company description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <h3 className="text-6xl text-[#2C1C4B]">
              PT Semua Aplikasi Indonesia
            </h3>
            <p className="text-black leading-relaxed">
              Founded on 2022, our vision is to revolutionize lives through
              innovative technology. We believe in building mutually beneficial
              partnerships to create a better future together.
            </p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <h3 className="text-3xl md:text-6xl font-bold text-[#2C1C4B] leading-snug">
            We’re here to
            <br /> help you <br /> reach your dreams.
          </h3>

          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-md shadow p-4">
                <h4 className="text-xl font-semibold text-[#91B949] mb-1">
                  Innovation and Impact
                </h4>
                <p className="text-gray-600 text-sm">
                  To empower individuals and businesses with innovative
                  technology solutions that drive positive change and improve
                  lives.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>      
    </section>
  );
}
