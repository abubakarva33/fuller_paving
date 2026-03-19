import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { faqs as faqsData } from "@/data/faqs";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTABanner } from "@/components/CTABanner";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { QuickQuoteForm } from "@/components/QuickQuoteForm";
import { WavyDivider } from "@/components/WavyDivider";

export default function Home() {
  const homeSlides = [
    {
      image: "/images/tarmac1.webp",
      title: "Highly Rated Driveway Company in Haywards Heath",
      subtitle: "Professional Paving & Groundworks Specialists",
      bullets: ["Free Site Surveys & Quotes", "Top Quality Materials", "Experienced & Qualified Workforce", "All Work Insured & Guaranteed"]
    },
    {
      image: "/images/block-paving1.webp",
      title: "Block Paved & Natural Stone Driveways",
      subtitle: "Bespoke Designs to Suit Your Property",
      bullets: ["Many Patterns, Styles & Colours", "Top Quality Materials", "Free Site Surveys & Quotes", "All Work Insured & Guaranteed"]
    },
    {
      image: "/images/resin-bound1.webp",
      title: "Gravel / Tar & Chip/ Resin Bound Driveways",
      subtitle: "Durable & Stylish Surfacing Options",
      bullets: ["Top Quality Materials", "Free Site Surveys & Quotes", "Choice of Aggregates & Colours", "All Work Insured & Guaranteed"]
    },
    {
      image: "/images/tarmac2.webp",
      title: "Tarmac & Block Paving Driveways",
      subtitle: "Trusted Local Installers",
      bullets: ["Free Site Surveys & Quotes", "Choice Colours & Designs", "Experienced & Qualified Workforce", "All Work Insured & Guaranteed"]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <HeroSection data={homeSlides} />
      
      <IntroSection 
        data={{
          title: "Driveway, Paving & Surfacing Contractors in Haywards Heath",
          subtitle: "Local Driveway Installation, Repairs & Maintenance Specialists",
          text: [
            `At N Fullers paving and improvements, we specialise in transforming outdoor spaces with expert paving solutions. With years of experience enhancing properties across Haywards Heath and beyond, we offer a seamless service from initial design to professional installation.`,
            "Not sure which driveway option is best for you? Our specialists will assess your space, offer expert advice and provide a no-obligation quote. Whether you want a classic, modern or bespoke driveway design, we are here to help.",
            "Contact N Fullers paving and improvements today and let’s start designing your perfect driveway."
          ],
          image: "/images/driveway-for-home.webp",
          badges: true
        }} 
      />

      <CTABanner text="Get a Free No-Obligation Quote Today" phone={siteConfig.phone} />

      <div className="bg-primary">
         <WavyDivider />
         <FeaturesSection 
           data={{
             title: "Why Choose Fullers Paving?",
             subtitle: "We deliver excellence in every project, ensuring your driveway not only looks stunning but stands the test of time.",
             items: [
               { icon: "ShieldCheck", title: "Fully Guaranteed", text: "All our work comes with a comprehensive guarantee for your peace of mind." },
               { icon: "Clock", title: "Timely Delivery", text: "We respect your time and ensure projects are completed within the agreed timeframe." },
               { icon: "ThumbsUp", title: "Expert Team", text: "Our skilled tradesmen are specialists in a wide variety of surfacing techniques." },
               { icon: "Star", title: "High Rating", text: "We are proudly rated as 'Excellent' by our customers across the region." }
             ]
           }} 
         />
      </div>

      <ProcessSection 
        data={{
          title: "Our Simple 3-Step Process",
          subtitle: "We make getting your new driveway as smooth and stress-free as possible.",
          steps: [
            { icon: "MapPin", title: "Initial Consultation", text: "We visit your property to discuss your vision and provide expert advice and a detailed quote." },
            { icon: "Wrench", title: "Professional Prep", text: "Groundwork is the most important part. We ensure a solid, stable foundation for your new surface." },
            { icon: "Check", title: "Expert Finish", text: "Our team applies the final surface with precision, leaving your property clean and transformed." }
          ]
        }} 
      />

      <CTABanner text="Quality Driveways Guaranteed" phone={siteConfig.phone} />

      <QuickQuoteForm />

      <FAQSection data={faqsData} />
    </main>
  );
}
