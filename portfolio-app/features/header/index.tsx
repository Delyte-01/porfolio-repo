"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/toggle";
import Image from "next/image";
import Link from "next/link";

interface NavProps {
  id: string;
  label: string;
}

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navItems: NavProps[] = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false); // close mobile menu

    
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1750532895/ChatGPT_Image_Jun_21_2025_07_07_33_PM_qjr3ck.png"
                alt="portfolio-logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <p>delyteCode</p>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <Link href={item.id}>
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />
                    )}
                  </Link>
                </button>
              ))}
              <ModeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <ModeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden  dark:bg-gray-900/80  dark:border-gray-800 py-4 bg-white/80  backdrop-blur-md  w-full ">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <Link href={item.id}> {item.label}</Link>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
