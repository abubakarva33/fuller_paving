import { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { CTABanner } from "@/components/CTABanner";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our recent paving and driveway projects across Parish.",
};

const images = [
  "https://images.unsplash.com/photo-1584888288596-f9e42be007d4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1621251921200-c9a405a74d2b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590486803833-2c709d21e3ca?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517646287270-a5a069e83693?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=800",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* <HeroSection 
        data={[
          {
            image: "/images/block-paving3.webp",
            title: "Our Project Gallery",
            subtitle: "Seeing is Believing - Our Recent Transformations",
            bullets: ["Block Paving", "Resin Bound", "Tarmac", "Tar & Chip"]
          }
        ]} 
      /> */}
      
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, idx) => (
              <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border-4 border-white">
                <Image 
                  src={src} 
                  alt={`Project ${idx + 1}`} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <CTABanner text="Want a Driveway Like These?" phone={siteConfig.phone} /> */}
    </main>
  );
}
