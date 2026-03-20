"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useState } from "react";

interface QuickQuoteFormProps {
  serviceName?: string;
}

export const QuickQuoteForm = ({ serviceName = "driveway / surfacing" }: QuickQuoteFormProps) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="pb-24 pt-12 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-800 mb-6 uppercase tracking-tight"
          >
            Quick Quote
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Need a quick {serviceName} quote? Please complete the form below and we'll get back to you very soon.
          </motion.p>
        </div>

        <form className="max-w-4xl mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#F4E02C] text-gray-900 transition-all placeholder:text-gray-400" 
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#F4E02C] text-gray-900 transition-all placeholder:text-gray-400" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#F4E02C] text-gray-900 transition-all placeholder:text-gray-400" 
            />
            <input 
              type="text" 
              placeholder="Postcode" 
              className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#F4E02C] text-gray-900 transition-all placeholder:text-gray-400" 
            />
          </div>
          <textarea 
            placeholder="How can we help?" 
            rows={5} 
            className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-[#F4E02C] text-gray-900 transition-all placeholder:text-gray-400 resize-none h-40"
          ></textarea>
          
          <div className="flex flex-col items-center gap-8 pt-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="w-5 h-5 rounded border-gray-300 text-[#F4E02C] focus:ring-[#F4E02C] transition-all cursor-pointer"
              />
              <span className="text-gray-600 text-sm font-medium">
                By ticking this box you accept our <span className="text-gray-500 underline cursor-pointer hover:text-gray-900 transition-colors">Privacy Policy</span> *
              </span>
            </label>
            
            <button 
              className="bg-[#F4E02C] text-gray-900 font-black py-4 px-16 rounded-lg hover:bg-[#e6d320] transition-all shadow-md uppercase tracking-widest text-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
