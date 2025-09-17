"use client";
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const middle = window.innerHeight / 2; // posisi tengah layar
        const id = section.getAttribute("id");

        if (rect.top <= middle && rect.bottom >= middle && id) {
          current = id;
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // jalankan sekali pas load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm bg-black/60 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/image/logo.png" width={80} height={35} alt="Logo" />
        </div>

        {/* Navigasi Tengah */}
        <ul className="hidden md:flex space-x-8 text-white gap-10 font-medium">
          <li>
            <Link
              href="#home"
              className={`nav-link ${
                activeSection === "home"
                  ? "text-secondary font-bold"
                  : "text-white hover:text-secondary"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className={`nav-link ${
                activeSection === "about"
                  ? "text-secondary font-bold"
                  : "text-white hover:text-secondary"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className={`nav-link ${
                activeSection === "services"
                  ? "text-secondary font-bold"
                  : "text-white hover:text-secondary"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#partner"
              className={`nav-link ${
                activeSection === "partner"
                  ? "text-secondary font-bold"
                  : "text-white hover:text-secondary"
              }`}
            >
              Partner
            </Link>
          </li>
          <li>
            <Link
              href="#faqs"
              className={`nav-link ${
                activeSection === "faqs"
                  ? "text-secondary font-bold"
                  : "text-white hover:text-secondary"
              }`}
            >
              FAQs
            </Link>
          </li>
        </ul>

        {/* Contact Us */}
        <div className="bg-secondary text-white px-4 py-2 rounded-lg shadow-md drop-shadow-[0_0_10px_#98C449] hover:bg-hover_bg transition flex items-center cursor-pointer">
          <a href="#contact">Contact Us</a>
          <ChevronRight />
        </div>
      </div>
    </nav>
  );
}
