"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { IconMapper } from "./IconMapper";

interface CTABannerProps {
  text: string;
  phone: string;
}

export const CTABanner = ({ text, phone }: CTABannerProps) => (
  <section className="bg-accent py-12 px-4 text-center relative overflow-hidden group">
    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 relative z-10"
    >
      <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0 rotate-3 group-hover:rotate-0 transition-transform shadow-2xl">
        <div className="font-black text-[10px] leading-tight text-center uppercase tracking-tighter">
          <span className="text-accent underline decoration-2">Fullers</span><br/>Paving
        </div>
      </div>
      <div className="text-left">
        <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight mb-2">
          {text}
        </h2>
        <a 
          href={`tel:${phone}`} 
          className="flex items-center text-primary text-4xl md:text-6xl font-black hover:scale-105 transition-transform origin-left"
        >
          <IconMapper name="Phone" className="w-8 h-8 md:w-12 md:h-12 mr-4" /> {phone}
        </a>
      </div>
    </motion.div>
  </section>
);
