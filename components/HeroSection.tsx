"use client";

import { motion } from "framer-motion";
import { IconMapper } from "./IconMapper";

interface HeroProps {
  data: {
    image: string;
    title: string;
    subtitle: string;
    bullets: string[];
  };
}

export const HeroSection = ({ data }: HeroProps) => (
  <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
    <motion.div 
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${data.image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
    
    <div className="relative z-10 text-center px-4 max-w-5xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
          {data.title}
        </h1>
        <p className="text-xl md:text-3xl text-gray-100 mb-10 font-medium tracking-wide">
          {data.subtitle}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {data.bullets.map((bullet, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-center text-white bg-white/10 px-6 py-3 rounded-full border border-white/20 backdrop-blur-md shadow-xl"
            >
              <IconMapper name="CheckCircle2" className="w-5 h-5 text-accent mr-3" />
              <span className="text-sm md:text-base font-bold uppercase tracking-wider">{bullet}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
