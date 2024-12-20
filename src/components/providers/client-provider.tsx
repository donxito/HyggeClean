"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { ReactNode } from "react";

export function ClientProvider({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
