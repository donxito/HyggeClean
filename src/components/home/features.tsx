"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Card } from "@/components/ui/card";
import {
  ShieldCheck,
  Clock,
  Sparkles,
  Leaf,
  Award,
  Settings,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <Card className="group relative overflow-hidden p-6 hover:shadow-lg transition-all duration-300">
    {/* Background decoration */}
    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-primary-50 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500" />

    <div className="relative">
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 text-primary-600 mb-4 group-hover:-translate-y-1 transition-transform duration-300">
        <Icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <h3 className="font-serif text-lg font-semibold text-hygge-900 mb-2">
        {title}
      </h3>
      <p className="text-hygge-600 text-sm">{description}</p>
    </div>
  </Card>
);

export function Features() {
  const { translate } = useLanguage();
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const featuresRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    animation: "animate-fade-in-up",
  });

  const features = [
    {
      icon: Sparkles,
      titleKey: "features.quality.title",
      descriptionKey: "features.quality.description",
    },
    {
      icon: Clock,
      titleKey: "features.time.title",
      descriptionKey: "features.time.description",
    },
    {
      icon: ShieldCheck,
      titleKey: "features.trust.title",
      descriptionKey: "features.trust.description",
    },
    {
      icon: Leaf,
      titleKey: "features.eco.title",
      descriptionKey: "features.eco.description",
    },
    {
      icon: Award,
      titleKey: "features.experience.title",
      descriptionKey: "features.experience.description",
    },
    {
      icon: Settings,
      titleKey: "features.flexible.title",
      descriptionKey: "features.flexible.description",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-primary-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" ref={headerRef}>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-hygge-900 mb-4">
            {translate("features.title")}
          </h2>
          <p className="text-md text-hygge-600 max-w-2xl mx-auto">
            {translate("features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          ref={featuresRef}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={translate(feature.titleKey)}
              description={translate(feature.descriptionKey)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
