"use client";
import { useState, useEffect } from "react";
import { ChevronRight, Menu, X, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavItem from "./NavHelper";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("BERANDA");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowBackToTop(window.scrollY > 300); // tampil tombol back to top jika scroll > 300px

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const middle = window.innerHeight / 2;
        const id = section.getAttribute("id");

        if (rect.top <= middle && rect.bottom >= middle && id) {
          current = id.toUpperCase();
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handle klik di luar menu mobile
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e) => {
      const menu = document.getElementById("mobile-menu");
      if (menu && !menu.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-sm top-0 bg-primaryFooter/60 shadow-md"
            : "bg-transparent"
        } font-poppins`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/image/logo.png" width={80} height={35} alt="Logo" />
          </div>

          {/* Navigasi Tengah (Desktop) */}
          <ul className="hidden lg:flex space-x-8 text-white gap-10 font-medium">
            <li>
              <NavItem id="BERANDA" active={activeSection === "BERANDA"}>
                BERANDA
              </NavItem>
            </li>
            <li>
              <NavItem id="TENTANG" active={activeSection === "TENTANG"}>
                TENTANG
              </NavItem>
            </li>
            <li>
              <NavItem id="LAYANAN" active={activeSection === "LAYANAN"}>
                LAYANAN
              </NavItem>
            </li>
            <li>
              <NavItem id="MITRA" active={activeSection === "MITRA"}>
                MITRA
              </NavItem>
            </li>
            <li>
              <NavItem id="PERTANYAAN" active={activeSection === "PERTANYAAN"}>
                PERTANYAAN
              </NavItem>
            </li>
          </ul>

          {/* Contact Us (Desktop) */}
          <div className="hidden lg:flex bg-secondary text-white px-4 py-2 rounded-lg shadow-md drop-shadow-[0_0_10px_#98C449] hover:bg-hover_bg transition items-center cursor-pointer">
            <button
              onClick={() =>
                document
                  .getElementById("KONTAK")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`nav-link ${
                activeSection === "KONTAK"
                  ? "text-white"
                  : "text-white hover:text-secondary"
              }`}
            >
              HUBUNGI KAMI
            </button>
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
          <div
            id="mobile-menu"
            className="lg:hidden bg-primaryFooter/90 text-white px-6 py-4 space-y-4 absolute w-full left-0"
          >
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("BERANDA")?.scrollIntoView();
                setMenuOpen(false);
              }}
              className={`block ${
                activeSection === "BERANDA"
                  ? "text-secondary font-bold"
                  : "hover:text-secondary"
              }`}
            >
              BERANDA
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("TENTANG")?.scrollIntoView();
                setMenuOpen(false);
              }}
              className={`block ${
                activeSection === "TENTANG"
                  ? "text-secondary font-bold"
                  : "hover:text-secondary"
              }`}
            >
              TENTANG
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("LAYANAN")?.scrollIntoView();
                setMenuOpen(false);
              }}
              className={`block ${
                activeSection === "LAYANAN"
                  ? "text-secondary font-bold"
                  : "hover:text-secondary"
              }`}
            >
              LAYANAN
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("MITRA")?.scrollIntoView();
                setMenuOpen(false);
              }}
              className={`block ${
                activeSection === "MITRA"
                  ? "text-secondary font-bold"
                  : "hover:text-secondary"
              }`}
            >
              MITRA
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("PERTANYAAN")?.scrollIntoView();
                setMenuOpen(false);
              }}
              className={`block ${
                activeSection === "PERTANYAAN"
                  ? "text-secondary font-bold"
                  : "hover:text-secondary"
              }`}
            >
              PERTANYAAN
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("KONTAK")?.scrollIntoView();
                setMenuOpen(false);
              }}
              className={`block ${
                activeSection === "KONTAK"
                  ? "text-secondary font-bold"
                  : "hover:text-secondary"
              }`}
            >
              KONTAK
            </Link>
          </div>
        )}
      </nav>

      {/* Back to top button */}
      {showBackToTop && (
        <button
          onClick={() =>
            document
              .getElementById("BERANDA")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="md:hidden fixed bottom-6 right-6 bg-secondary drop-shadow-[0_0_10px_#98C449] text-white p-3 rounded-full shadow-lg hover:bg-hover_bg transition z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}
