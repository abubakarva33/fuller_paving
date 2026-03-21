"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

interface IntroProps {
  data: {
    title: string;
    subtitle: string;
    text: string[];
    image: string;
    badges: boolean;
  };
}

export const IntroSection = ({ data }: IntroProps) => (
  <section className="py-24 px-4 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-20 h-1.5 bg-accent mb-8" />
        <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight uppercase tracking-tighter">
          {data.title}
        </h2>
        <h3 className="text-xl text-accent font-bold mb-8 uppercase tracking-widest">
          {data.subtitle}
        </h3>
        <div className="space-y-6">
          {data.text.map((p, idx) => (
            <p key={idx} className="text-gray-600 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(31,63,119,0.3)] border-[12px] border-bg">
          <Image 
            src={data.image} 
            alt={data.title} 
            width={800} 
            height={600} 
            className="w-full h-auto object-cover hover:scale-110 transition-transform duration-1000"
          />
        </div>
        
        {data.badges && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="!scale-[80%] md:!scale-100 absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl flex items-center space-x-6 border border-gray-100"
          >
             <div className="text-center">
                <p className="text-[10px] uppercase font-black text-gray-400 mb-2 tracking-widest">Approved By</p>
                <div className="flex items-center space-x-2">
                    <span className="font-black text-primary text-sm uppercase">Checkatrade</span>
                </div>
             </div>
             <div className="w-px h-10 bg-gray-200"></div>
             <div className="text-center">
                <div className="flex text-yellow-500 mb-2 justify-center">
                  <Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/>
                </div>
                <span className="font-black text-gray-800 text-[10px] uppercase tracking-widest">Google Rating</span>
             </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  </section>
);
