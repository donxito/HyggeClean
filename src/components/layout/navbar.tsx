"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.pricing"), href: "/pricing" },
    { name: t("nav.gallery"), href: "/gallery" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                HyggeClean
              </Link>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language switcher */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "da" ? "en" : "da")}
              className="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {language === "da" ? "EN" : "DA"}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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
      <div className={cn("sm:hidden", isOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
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
