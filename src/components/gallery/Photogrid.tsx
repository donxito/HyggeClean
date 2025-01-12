"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { galleryItems } from "@/lib/galleryItems";

// * Before/After slider component
const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const { translate } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div
      className="relative w-full h-[500px] overflow-hidden cursor-ew-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.min(Math.max(0, touch.clientX - rect.left), rect.width);
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
      }}
    >
      {/* After image (background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage}
          alt={translate("gallery.after")}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Before image (foreground with clip) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={translate("gallery.before")}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute inset-y-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="text-xs font-semibold text-gray-500">↔</div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
        {translate("gallery.before")}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
        {translate("gallery.after")}
      </div>
    </div>
  );
};

export default function PhotoGrid() {
  const { translate } = useLanguage();
  //const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Gallery Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          {translate("gallery.title")}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {translate("gallery.description")}
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <Card
                className={cn(
                  "overflow-hidden cursor-pointer group transition-all duration-300",
                  "hover:shadow-lg hover:-translate-y-1"
                )}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.afterImage}
                    alt={translate(item.titleKey)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="font-semibold text-lg">
                      {translate(item.titleKey)}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {translate(item.categoryKey)}
                    </p>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{translate(item.titleKey)}</DialogTitle>
              </DialogHeader>
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
              />
              <p className="mt-4 text-gray-600">
                {translate(item.descriptionKey)}
              </p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
