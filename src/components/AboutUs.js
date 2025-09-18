 import Image from "next/image";

export default function AboutUs() {
  const dreams = [
    {
      title: "Solusi yang Disesuaikan",
      desc: "Kami percaya setiap orang punya kebutuhan unik. Karena itu, kami menawarkan solusi yang dirancang khusus untuk mendukung perjalanan dan tujuan pribadi Anda.",
    },
    {
      title: "Keahlian Tepercaya",
      desc: "Dengan pengalaman dan tim profesional, kami menghadirkan layanan yang bisa diandalkan untuk membantu Anda mewujudkan impian dengan percaya diri.",
    },
    {
      title: "Dukungan Berkelanjutan",
      desc: "Kami tidak hanya hadir sekali, tapi menemani Anda di setiap langkah perjalanan dengan dukungan yang berkelanjutan dan responsif.",
    },
  ];
  return (
    <section className="bg-background2 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center mb-12 text-shadow-lg">
          TENTANG KAMI
        </h2>

        {/* Top Content */}
        <div className="grid gap-8 items-center mb-16">
          {/* Left: Image + Company name */}
          <div className="relative w-full h-90 mb-4">
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
            <h3 className="text-5xl font-semibold text-primary">
              PT Semua Aplikasi 
              <br /> Indonesia
            </h3>
            <p className="text-black leading-relaxed text-right text-lg">
              Didirikan sejak tahun 2022, kami memiliki visi untuk mengubah kehidupan menjadi 
              lebih baik lewat teknologi inovatif. Kami percaya bahwa dengan bekerja sama dan saling mendukung, 
              kita bisa membangun masa depan yang lebih baik bersama.
            </p>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left big text */}
          <h3 className="text-3xl md:text-6xl font-semibold text-primary leading-snug">
            Kami di sini 
            <br /> untuk membantu <br />
            anda meraih <br /> 
            <span className="text-secondary font-extrabold">impian.</span>
          </h3>

          <div className="space-y-4">
            {dreams.map((dream, i) => (
              <div key={i} className="bg-white rounded-md shadow-md shadow-gray-400 p-5">
                <h4 className="text-xl font-semibold text-secondary mb-1">
                  {dream.title}
                </h4>
                <p className="text-primary text-sm">
                  &quot;{dream.desc}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>      
    </section>
  );
}
