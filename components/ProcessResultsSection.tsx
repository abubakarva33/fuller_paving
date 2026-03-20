"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ProcessResultsProps {
  data?: {
    title: string;
    subtitle: string;
    items?: { title: string; text: string }[];
  };
}

export const ProcessResultsSection = ({ data }: ProcessResultsProps) => {
  if (!data) return null;

  return (
    <div>
    <section className="bg-primary pt-24 pb-10 px-4">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-black text-accent mb-6 uppercase tracking-tight"
        >
          {data.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white text-lg md:text-xl max-w-4xl mx-auto mb-16 leading-relaxed"
        >
          {data.subtitle}
        </motion.p>

        {data.items && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
            {data.items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 group"
              >
                <ChevronRight className="w-6 h-6 text-accent flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* V-Shape Bottom Divider */}
      
    </section>
    <div className="w-full h-20 overflow-hidden leading-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-full fill-primary"
        >
          <path d="M600 120L1200 0H0L600 120Z"></path>
        </svg>
      </div>
    </div>
  );
};
