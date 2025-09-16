import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/image/logo.png" width={80} height={35} alt="Logo" />
        </div>

        {/* Navigasi Tengah */}
        <ul className="hidden md:flex space-x-8 text-white gap-10 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-secondary text-secondary font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/#why" className="hover:text-secondary text-white">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/partner" className="hover:text-secondary text-white">
              Services
            </Link>
          </li>
          <li>
            <Link href="/partner" className="hover:text-secondary text-white">
              Partner
            </Link>
          </li>
          <li>
            <Link href="/partner" className="hover:text-secondary text-white">
              FAQs
            </Link>
          </li>
        </ul>

        {/* Contact Us Kanan */}
        <div className="bg-secondary text-white px-4 py-2 rounded-lg shadow-md drop-shadow-[0_0_10px_#98C449] hover:bg-hover_bg transition flex items-center cursor-pointer">
          <a href="/contact">Contact Us</a>
          <ChevronRight />
        </div>
      </div>
    </nav>
  );
}
