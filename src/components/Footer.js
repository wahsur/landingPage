import Image from "next/image";

export default function Footer() {
  return (
    <footer className="h-full bg-primaryFooter text-white pt-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image src="/image/logo.png" alt="Logo" width={200} height={100} />
          <p className="text-lg text-center">Innovate, Integrate, Elevate</p>
        </div>

        {/* Socials */}
        <div className="md:mt-3">
          <h4 className="font-semibold text-lg text-secondary mb-4">Media Sosial</h4>
          <ul className="space-y-2 text-sm">
            <li>
             {/* PT Semua Aplikasi Indonesia */}
              <a href="#">LinkedIn</a> 
            </li>
            <li>
              {/* saitech.id */}
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="md:mt-3">
          <h4 className="font-semibold text-lg  text-secondary mb-4">Tautan</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home">Beranda</a>
            </li>
            <li>
              <a href="#about">Tentang</a>
            </li>
            <li>
              <a href="#services">Layanan</a>
            </li>
            <li>
              <a href="#partner">Mitra</a>
            </li>
            <li>
              <a href="#faqs">Pertanyaan</a>
            </li>
            <li>
              <a href="#contact">Kontak</a>
            </li>
          </ul>
        </div>

        <div className="md:mt-3">
          <h4 className="font-semibold text-lg text-secondary mb-4">Alamat</h4>
          <p className="text-sm">
            Jl. Patih Jelantik
            <br />
            Istana Kuta Galeria
            <br />
            Blok Broadway 2 No. 11
            <br />
            Kuta, Bali 80361
          </p>
        </div>
      </div>
      <div className="flex justify-between py-5 px-24">
        <div className="text-sm text-secondary">
          &copy; {new Date().getFullYear()} PT Semua Aplikasi Indonesia.
        </div>
        <div className="text-sm text-secondary ">All rights reserved.</div>
      </div>
    </footer>
  );
}
