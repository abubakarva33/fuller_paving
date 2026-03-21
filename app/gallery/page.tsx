import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { GalleryContent } from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | N Fullers Paving & Improvements",
  description: "View our recent paving and driveway projects across West Sussex. Block Paving, Resin, Tarmac and more.",
  alternates: {
    canonical: "/gallery",
  },
};

const galleryCategories = [
  {
    title: "Block Paving Driveways",
    images: [
      "/images/block-paving1.webp",
      "/images/block-paving2.webp",
      "/images/block-paving3.webp",
      "/images/block-paving4.webp",
      "/images/block-paving5.webp",
      "/images/block-paving6.webp",
      "/images/block-paving7.webp",
      "/images/driveway-for-home.webp",
    ],
  },
  {
    title: "Natural Stone",
    images: [
      "/images/natural-stone1.webp",
      "/images/natural-stone2.webp",
      "/images/natural-stone3.webp",
      "/images/natural-stone4.webp",
      "/images/natural-stone5.webp",
    ],
  },
  {
    title: "Resin Bound Driveways",
    images: [
      "/images/resin-bound1.webp",
      "/images/resin-bound2.webp",
      "/images/resin-bound3.webp",
      "/images/resin-bound4.webp",
      "/images/resin-driveway3.webp",
    ],
  },
  {
    title: "Tarmac Driveways",
    images: [
      "/images/tarmac1.webp",
      "/images/tarmac2.webp",
      "/images/tarmac3.webp",
      "/images/tarmac4.webp",
      "/images/tarmac5.webp",
      "/images/tarmac6.webp",
    ],
  },
  {
    title: "Gravel & Shingle",
    images: [
      "/images/gravel.webp",
      "/images/gravel3.webp",
    ],
  },
  {
    title: "Tar & Chip",
    images: [
      "/images/local-tar1.webp",
      "/images/local-tar2.webp",
      "/images/local-tar3.webp",
      "/images/local-tar4.webp",
      "/images/local-tar5.webp",
    ],
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection 
        data={[
          {
            image: "/images/block-paving3.webp",
            title: "Expert Craftsmanship",
            subtitle: "View Our Recent Transformations",
            bullets: ["Driveways", "Patios", "Paths", "Landscaping"]
          }
        ]} 
      />
      
      <GalleryContent categories={galleryCategories} />

    </main>
  );
}
