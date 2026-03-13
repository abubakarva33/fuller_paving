import { siteConfig } from "@/data/site";
import { IconMapper } from "./IconMapper";

export const TopBar = () => (
  <div className="bg-dark text-white py-2 px-4 text-xs md:text-sm">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        <span className="text-gray-300">Professional Paving Contractor</span>
        <span className="flex items-center text-accent font-bold">
          <IconMapper name="Phone" className="w-4 h-4 mr-2" /> {siteConfig.phone}
        </span>
      </div>
      <div className="flex space-x-4">
        <span className="cursor-pointer hover:text-accent transition-colors">Free Site Survey & Quote</span>
      </div>
    </div>
  </div>
);
