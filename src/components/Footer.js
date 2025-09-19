import Image from "next/image";
import NavItem from "./NavHelper";

export default function Footer() {
  return (
    <footer className="h-full bg-primaryFooter text-white pt-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Image src="/image/logo.png" alt="Logo" width={200} height={100} />
          <p className="text-lg text-center">Innovate, Integrate, Elevate</p>
        </div>

        {/* Socials */}
        <div className="md:mt-3">
          <h4 className="font-semibold text-lg text-secondary mb-4">
            Media Sosial
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              {/* PT Semua Aplikasi Indonesia */}
              <a href="https://www.linkedin.com/company/semuaaplikasiindonesia/">
                LinkedIn
              </a>
            </li>
            <li>
              {/* saitech.id */}
              <a href="https://www.instagram.com/saitech.id?igsh=MXJjbzRzYTl0c3c2Yg==">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="md:mt-3">
          <h4 className="font-semibold text-lg  text-secondary mb-4">Tautan</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavItem id="BERANDA">Beranda</NavItem>
            </li>
            <li>
              <NavItem id="TENTANG">Tentang</NavItem>
            </li>
            <li>
              <NavItem id="LAYANAN">Layanan</NavItem>
            </li>
            <li>
              <NavItem id="MITRA">Mitra</NavItem>
            </li>
            <li>
              <NavItem id="PERTANYAAN">Pertanyaan</NavItem>
            </li>
            <li>
              <NavItem id="KONTAK">Kontak</NavItem>
            </li>
          </ul>
        </div>

        <div className="md:mt-3">
          <h4 className="font-semibold text-lg text-secondary mb-4">Alamat</h4>
          <p className="text-sm">
            <a href="https://maps.app.goo.gl/8yFvLyvvVZfunAhe7?g_st=aw">
              Jl. Patih Jelantik
              <br />
              Istana Kuta Galeria
              <br />
              Blok Broadway 2 No. 11
              <br />
              Kuta, Bali 80361
            </a>
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
