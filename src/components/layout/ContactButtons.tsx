"use client";

import { MessageCircle, MessageSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactButtons() {
  const { translate } = useLanguage();
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const smsUrl = `sms:${phoneNumber}`;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:shadow-xl group"
        aria-label={translate("whatsapp.button")}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:block origin-left transition-all duration-300 max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap">
          {translate("whatsapp.text")}
        </span>
      </a>

      {/* SMS/iMessage Button */}
      <a
        href={smsUrl}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:shadow-xl group"
        aria-label={translate("sms.button")}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="hidden md:block origin-left transition-all duration-300 max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap">
          {translate("sms.text")}
        </span>
      </a>
    </div>
  );
}
