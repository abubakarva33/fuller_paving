"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesList = [
  {
    title: "Block Paving",
    image: "/images/block-paving3.webp",
    href: "/services/block-paving",
  },
  {
    title: "Resin Bound",
    image: "/images/resin-driveway3.webp",
    href: "/services/resin-bound",
  },
  {
    title: "Tar & Chip",
    image: "/images/local-tar3.webp",
    href: "/services/tar-chip",
  },
  {
    title: "Tarmac",
    image: "/images/tarmac3.webp",
    href: "/services/tarmac",
  },
  {
    title: "Gravel",
    image: "/images/gravel3.webp",
    href: "/services/gravel",
  },
  {
    title: "Natural Stone",
    image: "/images/natural-stone3.webp",
    href: "/services/natural-stone",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight">
            Our Comprehensive Driveway & Paving Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As experts with many years of experience, we cover all driveway and paving options including:
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              href={service.href}
              className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
