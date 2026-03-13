import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, Mail, ChevronRight, ChevronLeft, 
  CheckCircle2, Star, Quote, ChevronDown, ChevronUp,
  ThumbsUp, ShieldCheck, Wrench, Clock, MapPin, Check
} from 'lucide-react';

// --- 1. CONFIGURATION & DATA STRUCTURE ---
// This central data object acts as your "CMS". 
// To add a new page or change content, you only edit this object.
const SITE_CONFIG = {
  global: {
    companyName: "Avenue Driveways",
    phone: "01603 369457",
    email: "info@avenuedriveways.co.uk",
    colors: {
      primary: "#F4D718", // The bright yellow
      dark: "#2E3019",    // The olive/dark brown background
    }
  },
  navigation: [
    { label: "Home", id: "home" },
    { label: "Block Paving", id: "block-paving" },
    { label: "Resin Bound", id: "resin-bound" },
    { label: "Tar & Chip", id: "tar-chip" },
    { label: "Tarmac", id: "tarmac" },
    { label: "Gallery", id: "gallery" },
    { label: "FAQs", id: "faqs" },
    { label: "Contact", id: "contact" }
  ],
  pages: {
    "tarmac": {
      id: "tarmac",
      title: "Tarmac Driveways East Anglia",
      hero: {
        image: "https://images.unsplash.com/photo-1584888288596-f9e42be007d4?auto=format&fit=crop&q=80&w=2070",
        title: "Tarmac Driveways East Anglia",
        subtitle: "Expert Installation & Guaranteed Quality",
        bullets: ["Commercial & Domestic Surfacing", "Top Quality Materials", "Local Trusted & Reliable", "Competitive Prices"]
      },
      intro: {
        title: "Premium Quality Tarmac Driveways East Anglia",
        subtitle: "Local & Trusted Tarmac Surfacing Specialists in East Anglia",
        text: [
          "At Avenue Driveways, we specialize in laying high-quality tarmac driveways that combine durability with a sleek, professional finish. Whether you need a new driveway installation or resurfacing, our experienced team provides top-tier service tailored to your specific requirements.",
          "Tarmac is a highly popular choice for driveways across East Anglia due to its cost-effectiveness, quick installation time, and long-lasting properties. We ensure every project is completed to the highest standards."
        ],
        image: "https://images.unsplash.com/photo-1621251921200-c9a405a74d2b?auto=format&fit=crop&q=80&w=800",
        badges: true
      },
      cta1: "FREE TARMAC DRIVEWAY QUOTE, CALL:",
      features: {
        title: "Why Choose a Tarmac Driveway in East Anglia?",
        subtitle: "Tarmac remains one of the most popular and cost-effective solutions for driveways and pathways across East Anglia. Here's why:",
        items: [
          { icon: "Clock", title: "Durability", text: "A properly laid tarmac driveway can withstand heavy use and extreme weather conditions for years." },
          { icon: "CheckCircle2", title: "Cost-Effective", text: "Tarmac offers a highly economical solution compared to block paving or resin." },
          { icon: "Wrench", title: "Low Maintenance", text: "Requires minimal upkeep. Simple sweeping and occasional washing keep it looking great." },
          { icon: "ShieldCheck", title: "Quick Installation", text: "Our efficient team can often lay a new tarmac surface much faster than other materials." }
        ]
      },
      process: {
        title: "Expert Installation & Guaranteed Quality East Anglia",
        subtitle: "Avenue Driveways prides itself on delivering comprehensive tarmac solutions.",
        steps: [
          { icon: "MapPin", title: "Free Site Assessment", text: "We visit your property to assess the area and provide an accurate quote." },
          { icon: "Wrench", title: "Preparation", text: "Proper groundwork is essential. We ensure a solid foundation before laying." },
          { icon: "Check", title: "Professional Laying", text: "Our skilled team lays the tarmac to a flawless, smooth finish." }
        ]
      },
      reviews: {
        title: "Why choose Avenue Driveways for your Tarmac drive / Path in East Anglia?",
        text: "We are a trusted local company with years of experience. Our commitment to quality materials and meticulous workmanship ensures your new driveway will look fantastic and last for years to come. Don't just take our word for it, read what our satisfied customers have to say.",
        list: [
          { name: "John Smith", date: "2 weeks ago", text: "Excellent job on our new tarmac driveway. The team was professional, quick, and left everything tidy.", rating: 5 },
          { name: "Sarah Jenkins", date: "1 month ago", text: "Highly recommend Avenue Driveways. Great price and top quality finish on our large driveway.", rating: 5 },
          { name: "Mark Davies", date: "3 months ago", text: "Very pleased with the resurfacing work. Looks like a brand new drive.", rating: 5 }
        ]
      },
      faqs: [
        { q: "How much does a tarmac driveway cost?", a: "Costs vary depending on the size and current condition of the area. Contact us for a free, no-obligation quote tailored to your specific needs." },
        { q: "How long does it take to lay a tarmac driveway?", a: "Most standard-sized driveways can be completed within 1 to 2 days, assuming no major preparatory groundwork is required." },
        { q: "Can you lay tarmac over concrete?", a: "In some cases, yes, if the concrete is in good condition. However, a site assessment is needed to determine the best approach." },
        { q: "How long should I stay off a new tarmac driveway?", a: "We generally recommend keeping vehicles off the new surface for at least 48 to 72 hours to allow it to fully cure." }
      ]
    },
    // Adding placeholder data for another page to demonstrate routing
    "block-paving": {
       id: "block-paving",
       title: "Block Paved Driveways & Paths",
       hero: {
         image: "https://images.unsplash.com/photo-1584888288596-f9e42be007d4?auto=format&fit=crop&q=80&w=2070", // Reuse image for demo
         title: "Block Paved Driveways in East Anglia",
         subtitle: "Elegant, Durable & Bespoke Designs",
         bullets: ["Wide Range of Colors & Styles", "Expert Craftsmanship", "Enhances Property Value", "Fully Guaranteed"]
       },
       intro: {
         title: "Bespoke Block Paving Specialists",
         subtitle: "Transform your home's exterior with stunning block paving.",
         text: [
           "Block paving is a versatile and attractive option for driveways and patios. It allows for highly customized designs, patterns, and color combinations.",
           "Our expert installers ensure a perfect finish that is not only beautiful but structurally sound and built to last."
         ],
         image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800",
         badges: true
       },
       cta1: "FREE BLOCK PAVING QUOTE, CALL:",
       features: {
         title: "Why Choose Block Paving?",
         subtitle: "Discover the benefits of choosing block paving for your property.",
         items: [
           { icon: "CheckCircle2", title: "Aesthetic Appeal", text: "Creates a premium look that enhances kerb appeal." },
           { icon: "Wrench", title: "Easy Repairs", text: "Individual blocks can be replaced if damaged, unlike solid surfaces." },
           { icon: "ShieldCheck", title: "Durability", text: "Extremely hard-wearing and capable of handling heavy loads." }
         ]
       },
       reviews: { title: "Customer Reviews", text: "See what others say.", list: [] },
       faqs: []
    }
  }
};

// --- 2. UTILITY COMPONENTS & HOOKS ---

// Hook for scroll animations
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Icon Mapper
const DynamicIcon = ({ name, className }) => {
  const icons = { Phone, Mail, CheckCircle2, Star, Quote, ChevronDown, ChevronUp, ThumbsUp, ShieldCheck, Wrench, Clock, MapPin, Check };
  const IconComponent = icons[name] || CheckCircle2;
  return <IconComponent className={className} />;
};

// Wavy Divider SVG
const WavyDivider = () => (
  <div className="w-full overflow-hidden leading-none -mt-1 bg-white">
    <svg viewBox="0 0 1440 120" className="w-full h-[60px] md:h-[120px] text-[#2E3019] fill-current" preserveAspectRatio="none">
      <path d="M0 0C480 120 960 120 1440 0V120H0V0Z"></path>
    </svg>
  </div>
);

// --- 3. LAYOUT COMPONENTS ---

const TopBar = () => (
  <div className="bg-black text-white py-2 px-4 text-xs md:text-sm">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4 mb-2 md:mb-0">
        <span className="text-gray-300">Driveway & Paving Contractor</span>
        <span className="flex items-center text-[#F4D718] font-bold">
          <Phone className="w-4 h-4 mr-2" /> {SITE_CONFIG.global.phone}
        </span>
      </div>
      <div className="flex space-x-4">
        <span className="cursor-pointer hover:text-[#F4D718] transition-colors">Free Site Survey</span>
      </div>
    </div>
  </div>
);

const Header = ({ currentRoute, setRoute }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2E3019] text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setRoute('home')}
          >
            <div className="text-4xl font-extrabold tracking-tighter text-[#F4D718] flex items-baseline">
              a<span className="text-white text-3xl">venue</span>
            </div>
            <div className="ml-2 hidden sm:flex flex-col text-[10px] text-gray-400 uppercase tracking-widest leading-tight">
              <span>Driveways</span>
              <span>Done Right</span>
            </div>
          </div>

          {/* Badges (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2 bg-white rounded p-1">
             <div className="flex items-center space-x-1 px-2 border-r border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600"/>
                <span className="text-xs text-gray-800 font-bold">Checkatrade</span>
             </div>
             <div className="flex items-center space-x-1 px-2">
                <span className="text-xs text-gray-800 font-bold">Google</span>
                <div className="flex text-yellow-500"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
             </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-[#F4D718]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center space-x-8 mt-6 pb-2">
          {SITE_CONFIG.navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setRoute(item.id)}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#F4D718] pb-1 border-b-2 ${
                currentRoute === item.id ? 'border-[#F4D718] text-[#F4D718]' : 'border-transparent text-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-[#1a1b0e] absolute w-full left-0 border-t border-gray-800 shadow-2xl">
          <ul className="flex flex-col py-2">
            {SITE_CONFIG.navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setRoute(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-6 py-4 border-b border-gray-800 uppercase text-sm font-bold ${
                    currentRoute === item.id ? 'text-[#F4D718] bg-black/20' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

const FloatingContact = () => (
  <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col space-y-1 bg-[#2E3019] p-2 rounded-l-lg shadow-lg hidden md:flex">
    <a href="#" className="p-2 text-white hover:text-[#F4D718] transition-colors"><Mail size={20} /></a>
    <a href={`tel:${SITE_CONFIG.global.phone}`} className="p-2 text-white hover:text-[#F4D718] transition-colors"><Phone size={20} /></a>
    <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="p-2 text-white hover:text-[#F4D718] transition-colors mt-4 border-t border-gray-600 pt-4">
      <ChevronUp size={20} />
    </button>
  </div>
);

const Footer = () => (
  <footer className="bg-black text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-white text-lg font-bold mb-4 uppercase text-[#F4D718]">Get in Touch</h3>
        <p className="flex items-center text-white font-bold text-xl mb-2">
          <Phone className="mr-2 text-[#F4D718]" /> {SITE_CONFIG.global.phone}
        </p>
        <p className="mb-2">{SITE_CONFIG.global.email}</p>
        <p>Avenue Driveways Ltd<br/>Serving all of East Anglia</p>
      </div>
      <div>
        <h3 className="text-white text-lg font-bold mb-4 uppercase text-[#F4D718]">Navigation</h3>
        <ul className="space-y-2">
          {SITE_CONFIG.navigation.slice(0, 5).map(nav => (
            <li key={nav.id}><a href="#" className="hover:text-white transition-colors">{nav.label}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-white text-lg font-bold mb-4 uppercase text-[#F4D718]">Highly Rated</h3>
        <p className="mb-4">We are proud of our reputation across East Anglia.</p>
         <div className="flex space-x-4 bg-white p-2 rounded inline-flex">
             <div className="flex items-center space-x-1 px-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600"/>
                <span className="text-sm text-gray-800 font-bold">Checkatrade</span>
             </div>
          </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-center">
      &copy; {new Date().getFullYear()} {SITE_CONFIG.global.companyName}. All Rights Reserved.
    </div>
  </footer>
);

// --- 4. PAGE SECTION COMPONENTS ---

const HeroSection = ({ data }) => (
  <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${data.image})` }}
    />
    <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
    
    <div className="relative z-10 text-center px-4 max-w-4xl w-full">
      <FadeIn>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          {data.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
          {data.subtitle}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {data.bullets.map((bullet, idx) => (
            <div key={idx} className="flex items-center text-white bg-black/40 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
              <CheckCircle2 className="w-4 h-4 text-[#F4D718] mr-2" />
              <span className="text-sm font-medium">{bullet}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </div>
);

const CTABanner = ({ text, phone }) => (
  <div className="bg-[#F4D718] py-8 px-4 text-center relative overflow-hidden group">
    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <FadeIn>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 relative z-10">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white shrink-0">
          <div className="font-bold text-xs leading-tight text-center">
            <span className="text-[#F4D718]">avenue</span><br/>driveways
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase tracking-wide">
          {text} <br className="md:hidden"/>
          <a href={`tel:${phone}`} className="flex items-center justify-center text-4xl md:text-5xl mt-2 hover:underline">
            <Phone className="w-8 h-8 md:w-10 md:h-10 mr-2" /> {phone}
          </a>
        </h2>
      </div>
    </FadeIn>
  </div>
);

const IntroSection = ({ data }) => (
  <section className="py-20 px-4 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2E3019] mb-4 leading-tight">
          {data.title}
        </h2>
        <h3 className="text-xl text-gray-600 mb-6 font-semibold">
          {data.subtitle}
        </h3>
        {data.text.map((p, idx) => (
          <p key={idx} className="text-gray-600 mb-4 leading-relaxed">
            {p}
          </p>
        ))}
      </FadeIn>
      <FadeIn delay={200} className="relative">
        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
          <img src={data.image} alt="Driveway Installation" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        {data.badges && (
          <div className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-xl flex items-center space-x-4 border border-gray-100">
             <div className="text-center">
                <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Approved By</p>
                <div className="flex space-x-2">
                    <span className="font-bold text-blue-800 text-sm">Checkatrade</span>
                </div>
             </div>
             <div className="w-px h-8 bg-gray-200"></div>
             <div className="text-center">
                <div className="flex text-yellow-500 mb-1 justify-center"><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/><Star className="w-3 h-3 fill-current"/></div>
                <span className="font-bold text-gray-800 text-sm">Google Rating</span>
             </div>
          </div>
        )}
      </FadeIn>
    </div>
  </section>
);

const FeaturesSection = ({ data }) => (
  <section className="bg-[#2E3019] text-white pt-20 pb-32 px-4 relative">
    {/* Watermark effect */}
    <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none flex items-center justify-center">
      <span className="text-[15vw] font-black tracking-tighter whitespace-nowrap">avenue</span>
    </div>

    <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#F4D718] mb-4">{data.title}</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">{data.subtitle}</p>
      </FadeIn>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
      {data.items.map((item, idx) => (
        <FadeIn key={idx} delay={idx * 100}>
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors h-full flex flex-col items-center text-center group">
            <div className="w-16 h-16 bg-[#F4D718]/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <DynamicIcon name={item.icon} className="w-8 h-8 text-[#F4D718]" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);

const ProcessSection = ({ data }) => {
  if (!data) return null;
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2E3019] mb-4">{data.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{data.subtitle}</p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gray-200 z-0"></div>
          
          {data.steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 200} className="relative z-10 text-center">
              <div className="w-16 h-16 bg-[#2E3019] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg text-[#F4D718]">
                <DynamicIcon name={step.icon} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#2E3019] mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuickQuoteForm = () => (
  <section className="py-20 bg-gray-50 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-3xl font-extrabold text-[#2E3019] mb-2">Quick Quote</h2>
        <p className="text-gray-600 mb-8 text-sm">Send us a message and we'll get back to you to arrange a free site visit and no obligation quote.</p>
        
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full p-4 rounded bg-white border border-gray-200 focus:outline-none focus:border-[#F4D718] transition-colors" />
            <input type="tel" placeholder="Phone" className="w-full p-4 rounded bg-white border border-gray-200 focus:outline-none focus:border-[#F4D718] transition-colors" />
          </div>
          <input type="email" placeholder="Email" className="w-full p-4 rounded bg-white border border-gray-200 focus:outline-none focus:border-[#F4D718] transition-colors" />
          <textarea placeholder="How can we help?" rows="4" className="w-full p-4 rounded bg-white border border-gray-200 focus:outline-none focus:border-[#F4D718] transition-colors"></textarea>
          
          <div className="text-xs text-gray-500 text-left mb-4">
            By submitting this form, you agree to our Privacy Policy.
          </div>
          <button className="bg-[#F4D718] text-black font-bold py-4 px-12 rounded hover:bg-yellow-400 transition-colors w-full md:w-auto">
            Send Message
          </button>
        </form>
      </FadeIn>
    </div>
  </section>
);

const ReviewsSection = ({ data }) => {
  if (!data || !data.list || data.list.length === 0) return null;
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <FadeIn>
            <h2 className="text-3xl font-extrabold text-[#2E3019] mb-4">{data.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{data.text}</p>
            <div className="flex items-center space-x-2">
               <span className="font-bold">Excellent</span>
               <div className="flex text-yellow-500"><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/><Star className="w-5 h-5 fill-current"/></div>
               <span className="text-gray-500 text-sm">Based on 100+ reviews</span>
            </div>
          </FadeIn>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.list.slice(0,2).map((review, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm relative">
                <Quote className="absolute top-4 right-4 text-gray-200 w-12 h-12" />
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                </div>
                <p className="text-gray-700 italic mb-4 relative z-10">"{review.text}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#2E3019] rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#2E3019] text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = ({ data }) => {
  if (!data || data.length === 0) return null;
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl font-extrabold text-center text-[#2E3019] mb-12">FAQs</h2>
          <div className="space-y-4">
            {data.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                <button 
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center bg-[#2E3019] text-white"
                  onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                >
                  <span className="font-semibold pr-8">{faq.q}</span>
                  {openIdx === idx ? <ChevronUp className="w-5 h-5 shrink-0 text-[#F4D718]" /> : <ChevronDown className="w-5 h-5 shrink-0 text-[#F4D718]" />}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIdx === idx ? 'max-h-96 py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// --- 5. MAIN PAGE TEMPLATE ---

const PageTemplate = ({ pageData }) => {
  if (!pageData) return <div className="py-40 text-center text-2xl">Page Content Coming Soon</div>;

  return (
    <main className="min-h-screen bg-white">
      <HeroSection data={pageData.hero} />
      <IntroSection data={pageData.intro} />
      <CTABanner text={pageData.cta1} phone={SITE_CONFIG.global.phone} />
      
      {/* The wavy transition */}
      <div className="bg-[#2E3019]">
         <WavyDivider />
         <FeaturesSection data={pageData.features} />
      </div>

      <ProcessSection data={pageData.process} />
      <CTABanner text="FREE DRIVEWAY QUOTE, CALL:" phone={SITE_CONFIG.global.phone} />
      
      <ReviewsSection data={pageData.reviews} />
      <QuickQuoteForm />
      <FAQSection data={pageData.faqs} />
    </main>
  );
};

// --- 6. APP ROOT ---

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('tarmac'); // Default to Tarmac to match screenshot

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  // Fallback data if a route isn't fully defined yet
  const activePageData = SITE_CONFIG.pages[currentRoute] || SITE_CONFIG.pages['tarmac'];

  return (
    <div className="font-sans text-gray-800 antialiased selection:bg-[#F4D718] selection:text-black">
      <TopBar />
      <Header currentRoute={currentRoute} setRoute={setCurrentRoute} />
      <PageTemplate pageData={activePageData} />
      <Footer />
      <FloatingContact />
    </div>
  );
}