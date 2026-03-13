"use client";

import { motion } from "framer-motion";
import { IconMapper } from "./IconMapper";

interface FeaturesProps {
  data: {
    title: string;
    subtitle: string;
    items: { icon: string; title: string; text: string }[];
  };
}

export const FeaturesSection = ({ data }: FeaturesProps) => (
  <section className="bg-primary text-white pt-24 pb-36 px-4 relative">
    {/* Watermark effect */}
    <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none flex items-center justify-center select-none">
      <span className="text-[20vw] font-black tracking-tighter whitespace-nowrap uppercase">Fullers</span>
    </div>

    <div className="max-w-7xl mx-auto relative z-10 text-center mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Our Excellence</span>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">{data.title}</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">{data.subtitle}</p>
      </motion.div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
      {data.items.map((item, idx) => (
        <motion.div 
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 group h-full flex flex-col"
        >
          <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform shadow-lg shadow-accent/20">
            <IconMapper name={item.icon} className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
          <p className="text-gray-400 text-base leading-relaxed font-medium">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
