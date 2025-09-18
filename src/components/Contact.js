export default function Contact() {
  return (
    <section id="contact" className="bg-background1 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl text-shadow-lg font-extrabold text-primary text-center mb-12">
          KONTAK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left big text */}
          <div>
            <h3 className="text-3xl md:text-6xl text-primary leading-snug">
              Kontak
            </h3>
            <div className="space-y-4 my-4">
              <h4 className="text-xl md:text-3xl text-secondary leading-snug">
                Email
              </h4>
              <p className="text-primary leading-relaxed">
                info@semuaaplikasi.id
              </p>
            </div>
            <div className="space-y-4 my-4">
              <h4 className="text-3xl md:text-3xl text-secondary leading-snug">
                Telepon
              </h4>
              <p className="text-primary leading-relaxed">+62 815-5541-5758</p>
            </div>
            <div className="space-y-4 my-4">
              <h4 className="text-3xl md:text-3xl text-secondary leading-snug">
                Alamat
              </h4>
              <p className="text-primary leading-relaxed w-3/4">
                Jl. Patih Jelantik Istana Kuta Galeria Blok Broadway 2 No. 11
                Kuta, Badung, Bali 80361
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-6xl text-primary leading-snug">
              Hubungi kami
            </h3>
            <form className="space-y-4 ">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama Depan"
                  className="w-full px-4 py-2 border  text-primary border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Nama Belakang"
                  className="w-full px-4 py-2 border text-primary border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full text-primary px-4 py-2 border border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Subject */}
              <input
                type="text"
                placeholder="Subjek"
                className="w-full text-primary px-4 py-2 border border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Address / Message */}
              <textarea
                placeholder="Pesan Anda"
                rows="4"
                className="w-full text-primary px-4 py-2 border border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className=" bg-secondary text-white font-semibold py-2 px-4 rounded-md hover:bg-hover_bg shadow-md drop-shadow-[0_0_10px_#98C449] transition"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
