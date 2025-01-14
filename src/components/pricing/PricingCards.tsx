"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { standardPackages, addOns, hourlyServices } from "@/lib/pricing";
import { Sparkles, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function PricingCards() {
  const { translate } = useLanguage();

  const headerRef = useScrollAnimation<HTMLDivElement>();
  const packagesRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    animation: "animate-fade-in-up",
  });
  const ratesRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    animation: "animate-fade-in-left",
  });
  const discountsRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    animation: "animate-fade-in-right",
  });

  return (
    <div className="space-y-16 py-12">
      {/* Standard Packages */}
      <section>
        <div className="text-center mb-12" ref={headerRef}>
          <h2 className="font-serif text-3xl font-bold text-hygge-900 mb-4">
            {translate("pricing.packages.title")}
          </h2>
          <p className="text-lg text-hygge-600 max-w-2xl mx-auto">
            {translate("pricing.packages.subtitle")}
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6"
          ref={packagesRef}
        >
          {standardPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                pkg.featured
                  ? "border-primary-400 shadow-lg ring-1 ring-primary-400"
                  : "hover:border-primary-200"
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 right-0 -mt-1 -mr-1 px-4 py-1 bg-primary-500 text-white text-sm font-medium transform rotate-6">
                  Popular
                </div>
              )}
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg ${
                      pkg.featured ? "bg-primary-50" : "bg-gray-50"
                    }`}
                  >
                    <pkg.icon
                      className={`h-5 w-5 ${
                        pkg.featured ? "text-primary-500" : "text-gray-500"
                      }`}
                    />
                  </div>
                  <h3 className="font-serif text-lg font-semibold">
                    {translate(pkg.titleEn)}
                  </h3>
                </div>

                <div className="mt-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-hygge-900">
                      {pkg.price}
                    </span>
                    <span className="ml-2 text-gray-500">DKK</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {translate(pkg.descriptionEn)}
                  </p>
                </div>

                <Link href="/contact" className="block mt-6">
                  <Button
                    className={`w-full ${
                      pkg.featured
                        ? "bg-primary-500 hover:bg-primary-600 text-white"
                        : "bg-white hover:bg-gray-50 text-hygge-900 border border-gray-200"
                    }`}
                  >
                    {translate("pricing.bookNow")}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Hourly Rates & Add-ons */}
      <section className="bg-gray-50/50 py-12" ref={ratesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hourly Services */}
            <Card className="transition-all duration-300 hover:shadow-md">
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  {translate("pricing.hourly.title")}
                </h3>
                <div className="space-y-4">
                  {hourlyServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-hygge-700">
                        {translate(service.titleEn)}
                      </span>
                      <span className="font-semibold text-hygge-900">
                        {service.price} DKK/h
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Add-ons */}
            <Card className="transition-all duration-300 hover:shadow-md">
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-4">
                  {translate("pricing.addons.title")}
                </h3>
                <div className="space-y-4">
                  {addOns.map((addon, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-hygge-700">
                        {translate(addon.titleEn)}
                      </span>
                      <span className="font-semibold text-hygge-900">
                        +{addon.price} DKK
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Discounts Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6" ref={discountsRef}>
        <Card className="bg-primary-50/50 p-6">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-center text-hygge-900">
              {translate("pricing.discounts.title")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <p className="text-hygge-700 ">
                  {translate("pricing.discounts.firstTime")}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="h-5 w-5 text-primary-500 flex-shrink-0" />
                <p className="text-hygge-700">
                  {translate("pricing.discounts.referral")}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                {translate("pricing.discounts.note")}
              </p>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
