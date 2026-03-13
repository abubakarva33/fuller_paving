import Link from "next/link";
import { siteConfig } from "@/data/site";
import { navigation } from "@/data/navigation";
import { IconMapper } from "./IconMapper";

export const Footer = () => (
  <footer className="bg-dark text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-white text-lg font-bold mb-6 uppercase text-accent">Get in Touch</h3>
        <p className="flex items-center text-white font-bold text-xl mb-4 group">
          <IconMapper name="Phone" className="mr-3 text-accent group-hover:scale-110 transition-transform" /> 
          <a href={`tel:${siteConfig.phone}`} className="hover:text-accent transition-colors">{siteConfig.phone}</a>
        </p>
        <p className="mb-2 flex items-center">
          <IconMapper name="Mail" className="mr-3 text-accent w-4 h-4" />
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
        </p>
        <p className="flex items-start mt-4">
          <IconMapper name="MapPin" className="mr-3 text-accent w-4 h-4 mt-1" />
          <span>{siteConfig.address}</span>
        </p>
      </div>
      <div>
        <h3 className="text-white text-lg font-bold mb-6 uppercase text-accent">Quick Links</h3>
        <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
          {navigation.map(nav => (
            <li key={nav.href}>
              <Link href={nav.href} className="hover:text-white transition-colors flex items-center group">
                <IconMapper name="ChevronRight" className="w-3 h-3 mr-2 text-accent group-hover:translate-x-1 transition-transform" />
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-white text-lg font-bold mb-6 uppercase text-accent">Accreditations</h3>
        <p className="mb-6 text-sm leading-relaxed">We are a trusted local contractor with a reputation for excellence across the region.</p>
         <div className="flex space-x-4 bg-white p-3 rounded-lg inline-flex items-center shadow-inner">
             <div className="flex items-center space-x-2">
                <IconMapper name="CheckCircle2" className="w-6 h-6 text-blue-600"/>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Member of</span>
                  <span className="text-xs text-gray-900 font-black">Checkatrade</span>
                </div>
             </div>
          </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-xs text-center">
      &copy; {new Date().getFullYear()} {siteConfig.companyName}. All Rights Reserved.
    </div>
  </footer>
);
