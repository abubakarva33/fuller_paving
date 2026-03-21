"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { IconMapper } from "./IconMapper";
import { Star } from "lucide-react";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-xl">
      <div className="max-w-7xl mx-auto py-2 md:py-4">
        <div className="flex justify-between items-center px-2">

          {/* Mobile Menu Toggle */}
          <Link href="/" className="flex items-center group cursor-pointer">
            <Image src="/images/logo.webp" alt="Logo" width={40} height={40} />
          </Link>
          <button 
            className="lg:hidden text-accent"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <IconMapper name="X" className="w-7 h-7" /> : <IconMapper name="Menu" className="w-7 h-7" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-1">
           <Link href="/" className="flex items-center group cursor-pointer me-8">
            <Image src="/images/logo.webp" alt="Logo" width={80} height={80} />
          </Link>
        <div className="flex items-center justify-between flex-1">
            {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={` py-2 text-xs font-bold uppercase tracking-wider transition-all hover:text-accent border-b-2 ${
                pathname === item.href ? 'border-accent text-accent' : 'border-transparent text-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
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
