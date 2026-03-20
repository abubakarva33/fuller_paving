"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";

interface WhyChooseProps {
  data: {
    title: string;
    text: string[];
    items: { title: string; text: string }[];
  };
}

export const WhyChooseSection = ({ data }: WhyChooseProps) => {
  return (
    <section className="py-20 px-4 bg-[#2D311F] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none select-none">
        <span className="text-[30vw] font-black text-white transform -rotate-12 italic uppercase tracking-tighter">
          Fullers
        </span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-[#D4AF37] mb-8 uppercase tracking-tight"
          >
            {data.title}
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {data.text.map((paragraph, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 text-left">
          {data.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gray-100/95 p-5 rounded-lg flex gap-4 items-start shadow-md hover:shadow-xl transition-all group"
            >
              <div className="bg-[#D4AF37]/10 p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-black text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
