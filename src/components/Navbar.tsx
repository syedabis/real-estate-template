"use client";

import React, { useState, useEffect } from "react";
import { BrixLogo } from "./Icons";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenInquiry: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Properties", href: "#properties" },
    { label: "Agents", href: "#why-choose-us" },
    { label: "Resources", href: "#commercial" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-100 shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      {/* Editorial Hairline Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-neutral-950 transition-all duration-75 pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <BrixLogo className="w-5 h-5 text-neutral-950 transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-950 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenInquiry}
            className="bg-neutral-950 hover:bg-neutral-800 text-white text-[13px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-sm active:scale-95"
          >
            Start your inquiry
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-neutral-900 hover:text-neutral-600 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.2]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200 px-6 py-6 animate-fade-in shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-800">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-neutral-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-6 mt-4 border-t border-neutral-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full bg-neutral-950 hover:bg-neutral-800 text-white text-sm font-medium py-3 rounded-full transition-all text-center block"
            >
              Start your inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

