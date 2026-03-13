"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMapper } from "./IconMapper";

interface FAQProps {
  data: { q: string; a: string }[];
}

export const FAQSection = ({ data }: FAQProps) => {
  if (!data || data.length === 0) return null;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Knowledge Base</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {data.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <button 
                className={`w-full text-left p-8 focus:outline-none flex justify-between items-center transition-colors ${openIdx === idx ? 'bg-primary text-white' : 'text-primary'}`}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-black text-lg uppercase tracking-tight pr-8">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${openIdx === idx ? 'bg-accent text-white rotate-180' : 'bg-bg text-primary'}`}>
                  <IconMapper name="ChevronDown" className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-8 text-gray-600 text-lg leading-relaxed border-t border-gray-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
