"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Clock, Sparkles, Timer } from "lucide-react";
import Link from "next/link";

export function PricingCards() {
  const { translate } = useLanguage();

  const standardPackages = [
    {
      icon: Clock,
      title: "Lille Bolig Pakke",
      titleEn: "Small Home Package",
      hours: "3",
      price: "750",
      description: "op til 3 timer",
      descriptionEn: "up to 3 hours",
    },
    {
      icon: Sparkles,
      title: "Mellem Bolig Pakke",
      titleEn: "Medium Home Package",
      hours: "4-5",
      price: "1.250",
      description: "4-5 timer",
      descriptionEn: "4-5 hours",
      featured: true,
    },
    {
      icon: Timer,
      title: "Grundig Rengøring",
      titleEn: "Deep Clean Package",
      hours: "7",
      price: "2.100",
      description: "op til 7 timer",
      descriptionEn: "up to 7 hours",
    },
  ];

  const hourlyServices = [
    {
      title: "Rengøring Standard",
      titleEn: "Standard Cleaning",
      price: "280",
    },
    {
      title: "Grundig Rengøring",
      titleEn: "Deep Cleaning",
      price: "350",
    },
  ];

  const addOns = [
    {
      title: "Vinduespudsning",
      titleEn: "Window Cleaning",
      price: "130",
    },
    {
      title: "Ovnrensning",
      titleEn: "Oven Cleaning",
      price: "180",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Standard Packages */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {translate("pricing.packages.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {translate("pricing.packages.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {standardPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative ${
                pkg.featured ? "border-blue-500 border-2" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <pkg.icon className="h-5 w-5 text-blue-500" />
                  <CardTitle>{translate(pkg.titleEn)}</CardTitle>
                </div>
                <CardDescription>
                  {translate(pkg.descriptionEn)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500">DKK</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {translate("pricing.bookNow")}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Hourly Rates & Add-ons */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {translate("pricing.hourly.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{translate("pricing.hourly.standard")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hourlyServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span>{translate(service.titleEn)}</span>
                    <span className="font-semibold">{service.price} DKK/h</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{translate("pricing.addons.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {addOns.map((addon, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span>{translate(addon.titleEn)}</span>
                    <span className="font-semibold">+{addon.price} DKK</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Discounts Section */}
      <section>
        <Card className="bg-blue-50">
          <CardHeader>
            <CardTitle className="text-center">
              {translate("pricing.discounts.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              <p>{translate("pricing.discounts.firstTime")}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Timer className="h-5 w-5 text-blue-500" />
              <p>{translate("pricing.discounts.referral")}</p>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              {translate("pricing.discounts.note")}
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
