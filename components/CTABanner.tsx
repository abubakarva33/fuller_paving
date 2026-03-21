"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { IconMapper } from "./IconMapper";
import Image from "next/image";

interface CTABannerProps {
  text: string;
  phone: string;
}

export const CTABanner = ({ text, phone }: CTABannerProps) => (
  <section className="bg-accent flex items-center h-[100px] md:h-[140px] px-4 text-center relative group">
    
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-start md:flex-row w-full items-center  md:space-y-0 md:space-x-12 relative z-10 max-w-7xl mx-auto"
    >
     <div className="hidden md:block rounded-full bg-primary p-2">
       <Image className="rounded-full hover:transition-transform hover:duration-500 hover:rotate-5" src="/images/logo.webp" alt="Logo" width={150} height={150} />
     </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <h2 className="text-xl md:text-3xl font-black text-white capitalize tracking-tight mb-2">
          {text}
        </h2>
        <a 
          href={`tel:${phone}`} 
          className="flex w-full items-center justify-center text-primary text-3xl md:text-4xl font-black hover:scale-105 transition-transform origin-left"
        >
          <IconMapper name="Phone" className="w-8 h-8 md:w-10 md:h-10 mr-2" /> {phone}
        </a>
      </div>
    </motion.div>
  </section>
);
