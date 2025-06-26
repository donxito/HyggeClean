import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// * Before/After slider component
export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
}: {
  beforeImage: string;
  afterImage: string;
}) {
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
      className="relative w-full h-[500px] overflow-hidden cursor-ew-resize rounded-xl shadow-lg"
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
        className="absolute inset-y-0 w-0.5 bg-white shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center ring-2 ring-primary-500/20">
          <div className="flex gap-1 text-primary-600">
            <ChevronLeft className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm">
        {translate("gallery.before")}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm backdrop-blur-sm">
        {translate("gallery.after")}
      </div>
    </div>
  );
}
