"use client";

import { useState, useEffect } from "react";
import { BRAND_DATA } from "@/data/content";

const NAV_LINKS = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Produk", href: "#products" },
  { label: "Keunggulan", href: "#why-sweetfy" },
  { label: "Galeri", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-surface/90 backdrop-blur-md shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
        : "bg-surface/70 backdrop-blur-sm"
        }`}
    >
      <div className="h-24 sm:h-28 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-gutter">
        {/* Logo & Brand */}
        <a href="#home" className="flex items-center group py-2">
          <img
            alt="Sweetify Primary Logo"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105"
            src={BRAND_DATA.logoUrl}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isActive
                  ? "text-primary font-semibold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-on-surface hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-24 sm:top-28 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/30 shadow-2xl py-6 px-margin-mobile flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-on-surface hover:text-primary py-2 px-4 rounded-lg hover:bg-surface-container transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
