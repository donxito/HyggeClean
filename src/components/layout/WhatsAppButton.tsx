"use client";

import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function WhatsAppButton() {
  const { translate } = useLanguage();
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:shadow-xl group"
      aria-label={translate("whatsapp.button")}
    >
      {/* WhatsApp Icon */}
      <MessageCircle className="w-6 h-6" />

      {/* Text that shows on hover on desktop */}
      <span className="hidden md:block origin-left transition-all duration-300 max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap">
        {translate("whatsapp.text")}
      </span>
    </a>
  );
}
