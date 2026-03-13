"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";

export const QuickQuoteForm = () => (
  <section className="py-24 bg-white px-4">
    <div className="max-w-4xl mx-auto bg-primary rounded-[40px] p-8 md:p-16 shadow-[0_30px_60px_rgba(31,63,119,0.4)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="text-center mb-12">
          <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Request info</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Get Your Free Quote</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Send us a message and we'll get back to you to arrange a free site visit and no-obligation quote.</p>
        </div>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest ml-4">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent text-white transition-all placeholder:text-gray-600" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest ml-4">Phone Number</label>
              <input type="tel" placeholder="01603 000000" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent text-white transition-all placeholder:text-gray-600" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest ml-4">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent text-white transition-all placeholder:text-gray-600" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black text-gray-400 tracking-widest ml-4">Message / Requirements</label>
            <textarea placeholder="Tell us about your project..." rows={4} className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-accent text-white transition-all placeholder:text-gray-600 resize-none"></textarea>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
            <p className="text-xs text-gray-500 font-medium">
              By submitting this form, you agree to our <span className="text-accent underline cursor-pointer">Privacy Policy</span>. We'll never share your details.
            </p>
            <button className="bg-accent text-white font-black py-5 px-12 rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-accent/30 uppercase tracking-widest whitespace-nowrap group">
              Send Request <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  </section>
);
