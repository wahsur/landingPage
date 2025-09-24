export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value; 
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:info@semuaaplikasi.id?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Nama: ${firstName} ${lastName}\nEmail: ${email}\n\nPesan:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="KONTAK"
      className="bg-background1 py-12 px-6 md:px-12 font-poppins"
    >
      <div className="w-full mx-auto">
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
            <div className="space-y-3 my-3">
              <h4 className="text-xl md:text-3xl text-secondary leading-snug">
                Email
              </h4>
              <p className="text-primary text-md md:text-lg leading-relaxed">
                info@semuaaplikasi.id
              </p>
            </div>
            <div className="space-y-3 my-3">
              <h4 className="text-xl md:text-3xl text-secondary leading-snug">
                Telepon
              </h4>
              <p className="text-primary text-md md:text-lg leading-relaxed">
                +62 815-5541-5758
              </p>
            </div>
            <div className="space-y-3 my-3">
              <h4 className="text-xl md:text-3xl text-secondary leading-snug">
                Alamat
              </h4>
              <p className="text-primary text-md md:text-lg leading-relaxed w-3/4">
                Jl. Patih Jelantik Istana Kuta Galeria Blok Broadway 2 No. 11
                Kuta, Badung, Bali 80361
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-6xl text-primary leading-snug">
              Hubungi kami
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 ">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nama Depan"
                  className="w-full px-4 py-2 border  text-primary border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nama Belakang"
                  className="w-full px-4 py-2 border text-primary border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full text-primary px-4 py-2 border border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subjek"
                className="w-full text-primary px-4 py-2 border border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />

              {/* Address / Message */}
              <textarea
                name="message"
                placeholder="Pesan Anda"
                rows="4"
                className="w-full text-primary px-4 py-2 border border-gray-300 shadow-md shadow-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className=" bg-secondary text-white text-center font-semibold py-2 px-4 rounded-md hover:bg-hover_bg shadow-md transition"
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
