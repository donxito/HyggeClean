"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { language, setLanguage, translate } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: translate("nav.home"), href: "/" },
    { name: translate("nav.pricing"), href: "/pricing" },
    { name: translate("nav.gallery"), href: "/gallery" },
    { name: translate("nav.contact"), href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                HyggeClean
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "inline-flex items-center px-1 pt-1 font-sans font-medium text-sm transition-all duration-200",
                      "border-b-2 hover:-translate-y-[1px]",
                      isActive
                        ? "border-primary-600 text-primary-700"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Language switcher */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "da" ? "en" : "da")}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                "hover:bg-primary-50 hover:text-primary-600",
                language === "da" ? "text-primary-600" : "text-gray-500"
              )}
            >
              {language === "da" ? "EN" : "DA"}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "sm:hidden transition-all duration-300 ease-in-out",
          isOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        )}
      >
        <div className="pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-xl">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block pl-3 pr-4 py-2 font-medium text-base transition-colors duration-200",
                  isActive
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                )}
              >
                {item.name}
              </Link>
            );
          })}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setLanguage(language === "da" ? "en" : "da");
              setIsOpen(false);
            }}
            className="w-full text-left pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          >
            {language === "da" ? "English" : "Dansk"}
          </Button>
        </div>
      </div>
    </nav>
  );
}
