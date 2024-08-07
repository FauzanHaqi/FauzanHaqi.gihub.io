"use client";

import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full flex items-center transition-all duration-300 z-50 ${
        isScrolled ? "bg-[#352d2d9d]" : "bg-transparent"
      } p-4`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">MediaKita</div>
        <ul className="hidden md:flex space-x-8 text-lg text-white">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="relative group"
            >
              Home
              <span className="block absolute transform bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("rules")}
              className="relative group"
            >
              Peraturan
              <span className="block absolute transform bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("purchase")}
              className="relative group"
            >
              Cara Pembelian
              <span className="block absolute transform bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("pricing")}
              className="relative group"
            >
              Daftar Harga
              <span className="block absolute transform bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative group"
            >
              Hubungi Kami
              <span className="block absolute transform bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
          {isMenuOpen && (
            <ul className="absolute top-full left-0 w-full bg-[#90EE90] text-black text-lg flex flex-col items-center space-y-4 py-4">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="relative group"
                >
                  Home
                  <span className="block absolute transform bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("purchase")}
                  className="relative group"
                >
                  Cara Pembelian
                  <span className="block absolute transform bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("rules")}
                  className="relative group"
                >
                  Peraturan
                  <span className="block absolute transform bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="relative group"
                >
                  Daftar Harga
                  <span className="block absolute transform bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="relative group"
                >
                  Hubungi Kami
                  <span className="block absolute transform bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
