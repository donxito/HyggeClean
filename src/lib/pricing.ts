import { Clock, Sparkles, Timer } from "lucide-react";

export const standardPackages = [
  {
    icon: Clock,
    title: "Lille Bolig Pakke",
    titleEn: "Small Home Package",
    hours: "3",
    price: "750",
    description: "op til 3 timer",
    descriptionEn: "up to 3 hours",
    featured: false,
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
    featured: false,
  },
] as const;

export const hourlyServices = [
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
] as const;

export const addOns = [
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
] as const;
