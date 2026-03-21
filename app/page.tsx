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
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessResultsSection } from "@/components/ProcessResultsSection";
import { homeResults } from "@/data/services";

export default function Home() {
  const homeSlides = [
    {
      image: "/images/tarmac1.webp",
      title: "Highly Rated Driveway Company in Parish",
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
          title: "Driveway, Paving & Surfacing Contractors in Parish",
          subtitle: "Local Driveway Installation, Repairs & Maintenance Specialists",
          text: [
            `At N Fullers paving and improvements, we specialise in transforming outdoor spaces with expert paving solutions. With years of experience enhancing properties across Parish and beyond, we offer a seamless service from initial design to professional installation.`,
            "Not sure which driveway option is best for you? Our specialists will assess your space, offer expert advice and provide a no-obligation quote. Whether you want a classic, modern or bespoke driveway design, we are here to help.",
            "Contact N Fullers paving and improvements today and let’s start designing your perfect driveway."
          ],
          image: "/images/driveway-for-home.webp",
          badges: true
        }} 
      />

      <CTABanner text="Get a Free No-Obligation Quote Today" phone={siteConfig.phone} />

      <ServicesSection />


      <CTABanner text="Get a Free No-Obligation Quote Today" phone={siteConfig.phone} />

          <FeaturesSection 
            data={{
              title: "Why Choose Fullers Paving?",
              description: "As one of the leading driveway and paving companies in Parish, our expert paving services add character and real value to your home. Our skilled craftsmen and tradesmen offer free advice, planning and design services which helps to ensure your home improvements live up to everything you hoped for. Our work conforms to British Standards and is fully guaranteed for your peace of mind.",
              stats: [
                { value: "200+", label: "Patios" },
                { value: "300+", label: "Driveways" },
                { value: "500+", label: "Happy Customers" }
              ],
              features: [
                "Local Parish company",
                "Trusted reviews",
                "100% Satisfaction Guarantee",
                "Free No-Obligation Quotes",
                "No up-front fees",
                "Minimum 60 months guarantee"
              ],
              phone: siteConfig.phone,
              gallery: [
                "/images/tarmac1.webp",
                "/images/block-paving1.webp",
                "/images/resin-bound1.webp",
                "/images/local-tar1.webp",
                "/images/gravel.webp",
                "/images/natural-stone1.webp",
                "/images/tarmac2.webp",
                "/images/block-paving2.webp",
                "/images/resin-bound2.webp",
                "/images/local-tar2.webp"
              ]
            }} 
          />
 

      

      <CTABanner text="Quality Driveways Guaranteed" phone={siteConfig.phone} />

      <ProcessResultsSection data={homeResults} />
      <QuickQuoteForm />

      <FAQSection data={faqsData} />
    </main>
  );
}
