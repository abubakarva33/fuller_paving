"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ZoomIn, X } from "lucide-react";

interface FeaturesProps {
  data: {
    title: string;
    subtitle?: string;
    description: string;
    stats: { label: string; value: string }[];
    features: string[];
    phone: string;
    gallery: string[];
  };
}

export const FeaturesSection = ({ data }: FeaturesProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black mb-12 text-gray-900 tracking-tight"
        >
          {data.title}
        </motion.h2>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {data.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="text-5xl md:text-7xl font-light text-gray-400 mb-2">{stat.value}</span>
              <span className="text-lg font-medium text-gray-600 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Description & Features */}
        <div className="max-w-5xl mx-auto text-left mb-12">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {data.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-3">
            {data.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-accent mt-1 font-bold">›</span>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-20">
          <a
            href={`tel:${data.phone.replace(/\s+/g, '')}`}
            className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-xl shadow-accent/20 transition-all hover:scale-105"
          >
            <div className="bg-white/20 p-2 rounded-full">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <span>Call for a new driveway quote</span>
          </a>
        </div>

        {/* Project Gallery Grid (2x5) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-12 overflow-hidden rounded-xl">
          {data.gallery.slice(0, 10).map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <Image
                src={img}
                alt={`Project gallery image ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="flex justify-center">
          <Link 
            href="/gallery"
            className="bg-primary hover:bg-primary/95 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg"
          >
            <span>See more of our work</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
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
                  alt="Feature enlarged view"
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
