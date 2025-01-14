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
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-primary-100/50 rounded-full opacity-50 blur-3xl animate-blob" />
        <div className="absolute top-40 -left-32 w-96 h-96 bg-cozy-100/50 rounded-full opacity-50 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/2 w-96 h-96 bg-hygge-100/50 rounded-full opacity-50 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-hygge-900 tracking-tight text-shadow-lg leading-tight">
                {translate("hero.title")}
              </h1>
              <p className="font-sans text-lg md:text-xl text-hygge-600 font-light tracking-wide">
                {translate("hero.subtitle")}
              </p>
            </div>

            <div className="prose prose-lg text-hygge-600 max-w-none font-sans leading-relaxed">
              {translate("about.description")}
            </div>

            {/* Features Card */}
            <Card className="bg-white/80 backdrop-blur-lg border-primary-100 shadow-xl hover:shadow-xl transition-shadow duration-300">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 group hover:transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="p-2 rounded-lg bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <span className="text-hygge-700 font-medium">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-4 text-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                >
                  <span className="relative z-10">{translate("hero.cta")}</span>
                  <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_100%] animate-shine" />
                </Button>
              </Link>
              <Link href="/gallery" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full px-6 py-4 text-md border-2 border-primary-200 hover:border-primary-300 text-primary-700 hover:bg-primary-50 rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {translate("nav.gallery")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full max-w-sm mx-auto lg:max-w-md">
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-100/70 rounded-full mix-blend-multiply opacity-70 blur-2xl animate-blob" />
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-cozy-100/70 rounded-full mix-blend-multiply opacity-70 blur-2xl animate-blob animation-delay-2000" />

              {/* Main image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] group-hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Image
                  src="/images/maya-hero.webp"
                  alt="Maya from HyggeClean"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Subtle overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -right-6 top-6 w-24 h-24 bg-primary-100 rounded-full opacity-90 animate-float" />
              <div className="absolute -left-6 bottom-6 w-20 h-20 bg-cozy-100 rounded-full opacity-90 animate-float animation-delay-2000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
