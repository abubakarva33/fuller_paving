"use client";

import { motion } from "framer-motion";
import { IconMapper } from "./IconMapper";
import { Star } from "lucide-react";

interface ReviewsProps {
  data: {
    title: string;
    text: string;
    list: { name: string; date: string; text: string; rating: number }[];
  };
}

export const ReviewsSection = ({ data }: ReviewsProps) => {
  if (!data || !data.list || data.list.length === 0) return null;
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl font-black text-primary mb-6 uppercase tracking-tight">{data.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-lg">{data.text}</p>
          <div className="flex items-center space-x-4 bg-bg p-6 rounded-2xl border border-gray-100">
             <div className="text-primary font-black text-3xl">4.9</div>
             <div className="w-px h-10 bg-gray-200" />
             <div>
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                </div>
                <span className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Based on 100+ Reviews</span>
             </div>
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.list.slice(0, 4).map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-bg p-8 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-xl transition-shadow"
            >
              <IconMapper name="Quote" className="absolute top-6 right-6 text-primary/5 w-16 h-16 group-hover:text-primary/10 transition-colors" />
              <div className="flex text-yellow-500 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current"/>)}
              </div>
              <p className="text-gray-700 italic mb-8 relative z-10 text-lg leading-relaxed">"{review.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-accent font-black mr-4 shadow-lg shadow-primary/20">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-primary uppercase text-sm tracking-tight">{review.name}</p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
