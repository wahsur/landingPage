"use client";
import { useState, useEffect } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const middle = window.innerHeight / 2;
        const id = section.getAttribute("id");

        if (rect.top <= middle && rect.bottom >= middle && id) {
          current = id;
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-sm bg-primaryFooter/60 shadow-md" : "bg-transparent"
      }font-poppins`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/image/logo.png" width={80} height={35} alt="Logo" />
        </div>

        {/* Navigasi Tengah (Desktop) */}
        <ul className="hidden lg:flex space-x-8 text-white gap-10 font-medium">
          {["home", "about", "services", "partner", "faqs"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className={`nav-link ${
                  activeSection === item
                    ? "text-secondary font-bold"
                    : "text-white hover:text-secondary"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Us (Desktop) */}
        <div className="hidden lg:flex bg-secondary text-white px-4 py-2 rounded-lg shadow-md drop-shadow-[0_0_10px_#98C449] hover:bg-hover_bg transition items-center cursor-pointer">
          <a href="#contact">Contact Us</a>
          <ChevronRight />
        </div>

        {/* Hamburger (Mobile & Tablet) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="text-white" size={28} />
            ) : (
              <Menu className="text-white" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-primaryFooter/90 text-white px-6 py-4 space-y-4">
          {["home", "about", "services", "partner", "faqs", "contact"].map(
            (item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className={`block ${
                  activeSection === item
                    ? "text-secondary font-bold"
                    : "hover:text-secondary"
                }`}
              >
                {item === "contact"
                  ? "Contact Us"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
