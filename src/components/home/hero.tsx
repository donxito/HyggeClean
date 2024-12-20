"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Clock, ThumbsUp, Shield } from "lucide-react";

export function Hero() {
  const { translate } = useLanguage();

  const features = [
    { icon: Sparkles, text: translate("features.professional") },
    { icon: Clock, text: translate("features.flexible") },
    { icon: ThumbsUp, text: translate("features.satisfaction") },
    { icon: Shield, text: translate("features.eco") },
  ];

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-indigo-50 rounded-full opacity-50 blur-3xl" />
      </div>

      {/* Background Pattern */}
      <div className="absolute top-0 right-0 -bottom-32 hidden lg:block w-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
          <svg
            className="h-full w-full text-white/90"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <polygon points="0,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
                {translate("hero.title")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                {translate("hero.subtitle")}
              </p>
            </div>

            <div className="prose prose-lg text-gray-500">
              {translate("about.description")}
            </div>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <feature.icon className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {translate("hero.cta")}
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-6 text-lg hover:bg-gray-50 transition-all duration-300"
                >
                  {translate("nav.gallery")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply opacity-70 blur-2xl animate-blob" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply opacity-70 blur-2xl animate-blob animation-delay-2000" />

              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-transform duration-300">
                <Image
                  src="/images/maya-hero.jpg"
                  alt="Maya from HyggeClean"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
