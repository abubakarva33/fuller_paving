"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IconMapper } from "./IconMapper";
import { HeroSlide } from "@/data/services";

interface HeroProps {
  data: HeroSlide[];
}

export const HeroSection = ({ data }: HeroProps) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  }, [data.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  }, [data.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!data || data.length === 0) return null;

  return (
    <section className="relative h-[75vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary/20">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={data[current].image}
            alt={data[current].title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/80" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 text-center px-4 max-w-5xl w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
              {data[current].title}
            </h1>
            <p className="text-xl md:text-3xl text-gray-100 mb-10 font-medium tracking-wide">
              {data[current].subtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {data[current].bullets.map((bullet, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex items-center text-white bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md shadow-xl"
                >
                  <IconMapper name="CheckCircle2" className="w-5 h-5 text-accent mr-3" />
                  <span className="text-sm md:text-base font-bold uppercase tracking-wider">
                    {bullet}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      {data.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition-all hidden md:block"
            aria-label="Previous slide"
          >
            <IconMapper name="ChevronLeft" className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 p-3 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition-all hidden md:block"
            aria-label="Next slide"
          >
            <IconMapper name="ChevronRight" className="w-6 h-6" />
          </button>
          
          {/* Indicators */}
          <div className="absolute bottom-8 flex gap-2 z-20">
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === idx ? "bg-accent scale-125" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
