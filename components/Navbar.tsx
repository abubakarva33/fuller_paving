"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { IconMapper } from "./IconMapper";
import { Star } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <div className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white flex flex-col leading-none">
              <span className="text-accent">Fullers</span>
              <span className="text-sm tracking-widest uppercase font-light">Paving & Improv.</span>
            </div>
          </Link>

          {/* Trust Badges (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 bg-white rounded p-1">
             <div className="flex items-center space-x-1 px-2 border-r border-gray-200">
                <IconMapper name="CheckCircle2" className="w-4 h-4 text-blue-600"/>
                <span className="text-[10px] text-gray-800 font-bold uppercase">Checkatrade</span>
             </div>
             <div className="flex items-center space-x-1 px-2">
                <span className="text-[10px] text-gray-800 font-bold uppercase">Google</span>
                <div className="flex text-yellow-500">
                  <Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/>
                </div>
             </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IconMapper name="X" className="w-7 h-7" /> : <IconMapper name="Menu" className="w-7 h-7" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center space-x-1 mt-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all hover:text-accent border-b-2 ${
                pathname === item.href ? 'border-accent text-accent' : 'border-transparent text-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav className="lg:hidden bg-dark absolute w-full left-0 border-t border-gray-800 shadow-2xl">
          <ul className="flex flex-col py-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`w-full block text-left px-6 py-4 border-b border-gray-800 uppercase text-sm font-bold ${
                    pathname === item.href ? 'text-accent bg-black/20' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
