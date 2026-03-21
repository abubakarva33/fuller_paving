"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface GalleryCategory {
  title: string;
  images: string[];
}

interface GalleryContentProps {
  categories: GalleryCategory[];
}

export const GalleryContent = ({ categories }: GalleryContentProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-[1400px] mx-auto space-y-20">
        {categories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-8">
            <h2 className="text-4xl font-extrabold text-[#333] tracking-tight">
              {category.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
              {category.images.map((src, imgIdx) => (
                <motion.div 
                  key={imgIdx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: imgIdx * 0.05 }}
                  onClick={() => setSelectedImage(src)}
                  className="group relative rounded shadow-sm aspect-square overflow-hidden border border-gray-200 cursor-pointer"
                >
                  <Image 
                    src={src} 
                    alt={`${category.title} ${imgIdx + 1}`} 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white w-10 h-10 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt="Gallery enlarged view"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-0 right-0 md:-top-12 md:-right-12 text-white/70 hover:text-white transition-colors p-2"
                aria-label="Close lightbox"
              >
                <X size={40} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
