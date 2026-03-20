"use client";

import { motion } from "framer-motion";
import { IconMapper } from "./IconMapper";

interface ProcessProps {
  data?: {
    title: string;
    subtitle: string;
    steps: { icon: string; title: string; text: string }[];
  };
}

export const ProcessSection = ({ data }: ProcessProps) => {
  if (!data) return null;
  return (
    <section className="bg-bg py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4 block">Work Flow</span>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 uppercase tracking-tight">{data.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">{data.subtitle}</p>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Decorative path for desktop */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px border-t-2 border-dashed border-primary/20 z-0" />
          
          {data.steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 text-center group"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-2xl text-accent group-hover:scale-110 transition-transform">
                <IconMapper name={step.icon} className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
