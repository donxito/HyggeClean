"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryItems } from "@/lib/galleryItems";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GalleryGridSkeleton } from "@/lib/loadingStates";
import BeforeAfterSlider from "./BeforeAfterSlider";

export default function PhotoGrid() {
  const { translate } = useLanguage();

  const [category, setCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const headerRef = useScrollAnimation<HTMLDivElement>();
  const categoriesRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    animation: "animate-fade-in-up",
  });
  const gridRef = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    animation: "animate-fade-in-up",
  });

  const categories = [
    { id: "all", label: "All" },
    { id: "kitchen", label: translate("gallery.category.Kitchen") },
    { id: "bathroom", label: translate("gallery.category.Bathroom") },
  ];

  const filteredItems =
    category === "all"
      ? galleryItems
      : galleryItems.filter((item) => {
          const itemCategory = item.categoryKey
            .toLowerCase()
            .includes("kitchen")
            ? "kitchen"
            : "bathroom";
          return itemCategory === category;
        });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <GalleryGridSkeleton />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12">
      {/* Gallery Header */}
      <div className="text-center mb-12" ref={headerRef}>
        <h1 className="font-serif text-3xl font-bold text-primary-800 mb-4">
          {translate("gallery.title")}
        </h1>
        <p className="text-lg text-hygge-600 max-w-2xl mx-auto">
          {translate("gallery.description")}
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center gap-2 mb-8" ref={categoriesRef}>
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={category === cat.id ? "default" : "outline"}
            onClick={() => setCategory(cat.id)}
            className="font-medium"
          >
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={gridRef}
      >
        {filteredItems.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <Card
                className={cn(
                  "overflow-hidden cursor-pointer group transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1"
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.afterImage}
                    alt={translate(item.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-serif font-semibold text-lg">
                      {translate(item.titleKey)}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {translate(item.categoryKey)}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 p-2 rounded-full backdrop-blur-sm">
                      <Camera className="w-5 h-5 text-primary-600" />
                    </div>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle className="font-serif text-xl">
                  {translate(item.titleKey)}
                </DialogTitle>
              </DialogHeader>
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
              />
              <p className="mt-4 text-hygge-600">
                {translate(item.descriptionKey)}
              </p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
