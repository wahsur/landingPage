import Image from "next/image";

export default function Partner() {
  const partners = [
    {
      title: "Hotel & Resort",
      desc: "Jika MICE adalah kebutuhan yang sangat penting, maka BOD adalah solusi untuk bisnis hospitality. BLiP siap memberikan koneksi terbaik dimanapun lokasi event penting anda. Fleksibel dan bisa diandalkan.",
      img: "/image/hotel&resort.png",
    },
    {
      title: "Cafe & Resto",
      desc: "Event di ruang usaha anda seperti kompetisi, Nobar, hingga Mabar E-sport pasti akan membutuhkan koneksi juara. Pastikan BOD mampu memenuhi kebutuhan anda.",
      img: "/image/cafe&resto.png",
    },
    {
      title: "Event & Wedding Organizer",
      desc: "Acara adalah nafas dari bisnis anda, Koneksi internet bisa jadi syarat utama bagi pemilik event. Kami pastikan koneksi internet yang besar siap kami deliver di manapun venue anda berada",
      img: "/image/event&wedding.png",
    },
    {
      title: "Co-Working Space",
      desc: "Walaupun koneksi anda cukup mumpuni di ruang-ruang bekerja, kebutuhan akan workshop dan exhibition pasti akan membutuhkan koneksi extra, BOD adalah solusinya",
      img: "/image/workingSpace.png",
    },
  ];
  return (
    <section id="MITRA" className="h-full bg-background1 py-20 px-6 md:px-12 font-poppins">
      <div className="max-w-6xl mx-auto">
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
          {partners.map((partner, index) => (
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
                <h3 className="text-3xl md:text-7xl font-bold text-secondary">
                  {partner.title}
                </h3>
                <p className="text-primary md:text-xl leading-relaxed">{partner.desc}</p>
              </div>

              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1 justify-start" : "justify-end"
                } flex`}
              >
                <div className="relative w-full max-w-sm h-64">
                  <Image
                    src={partner.img}
                    alt={partner.title}
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
