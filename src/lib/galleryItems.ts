// data/gallery.ts
export interface GalleryItem {
  id: number;
  titleKey: string;
  descriptionKey: string;
  beforeImage: string;
  afterImage: string;
  categoryKey: string;
}

export const galleryItems: readonly GalleryItem[] = [
  {
    id: 1,
    titleKey: "gallery.item.oven.title",
    descriptionKey: "gallery.item.oven.description",
    beforeImage: "/images/oven-before.jpg",
    afterImage: "/images/oven-after.jpg",
    categoryKey: "gallery.category.Kitchen",
  },
  {
    id: 2,
    titleKey: "gallery.item.shower.title",
    descriptionKey: "gallery.item.shower.description",
    beforeImage: "/images/shower-before.jpg",
    afterImage: "/images/shower-after.jpg",
    categoryKey: "gallery.category.Bathroom",
  },
  {
    id: 3,
    titleKey: "gallery.item.tap.title",
    descriptionKey: "gallery.item.tap.description",
    beforeImage: "/images/tap-before.jpg",
    afterImage: "/images/tap-after.jpg",
    categoryKey: "gallery.category.Kitchen",
  },
  {
    id: 4,
    titleKey: "gallery.item.wc.title",
    descriptionKey: "gallery.item.wc.description",
    beforeImage: "/images/wc-before.jpg",
    afterImage: "/images/wc-after.jpg",
    categoryKey: "gallery.category.Bathroom",
  },
] as const;
