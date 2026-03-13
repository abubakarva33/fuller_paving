"use client";

import { siteConfig } from "@/data/site";
import { IconMapper } from "./IconMapper";

export const FloatingContact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-1 bg-primary p-2 rounded-l-xl shadow-2xl hidden md:flex border-l border-t border-b border-white/20">
      <a 
        href={`mailto:${siteConfig.email}`} 
        className="p-3 text-white hover:text-accent hover:bg-white/10 rounded-lg transition-all"
        title="Email Us"
      >
        <IconMapper name="Mail" className="w-5 h-5" />
      </a>
      <a 
        href={`tel:${siteConfig.phone}`} 
        className="p-3 text-white hover:text-accent hover:bg-white/10 rounded-lg transition-all"
        title="Call Us"
      >
        <IconMapper name="Phone" className="w-5 h-5" />
      </a>
      <button 
        onClick={scrollToTop} 
        className="p-3 text-white hover:text-accent hover:bg-white/10 rounded-lg transition-all mt-4 border-t border-white/10 pt-4"
        title="Scroll to Top"
      >
        <IconMapper name="ChevronUp" className="w-5 h-5" />
      </button>
    </div>
  );
};
