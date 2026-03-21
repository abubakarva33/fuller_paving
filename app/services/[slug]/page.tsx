import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { generateServiceSchema } from "@/lib/seo";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTABanner } from "@/components/CTABanner";
import { ProcessSection } from "@/components/ProcessSection";
import { FAQSection } from "@/components/FAQSection";
import { QuickQuoteForm } from "@/components/QuickQuoteForm";
import { WavyDivider } from "@/components/WavyDivider";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { ProcessResultsSection } from "@/components/ProcessResultsSection";
import { faqs } from "@/data/faqs";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.title,
    description: `Professional ${service.title} services by ${siteConfig.companyName}. Expert installation and guaranteed quality.`,
    alternates: {
      canonical: `/services/${params.slug}`,
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const jsonLd = generateServiceSchema(service);

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection data={service.hero} />
      <IntroSection data={service.intro} />
      <CTABanner text={`Free ${service.title} Quote`} phone={siteConfig.phone} />
      
         <FeaturesSection data={{ ...service.features, phone: siteConfig.phone }} />

      <WhyChooseSection data={service.benefits} />

      <CTABanner text="Professional Quality Guaranteed" phone={siteConfig.phone} />
      
      <ProcessResultsSection data={service.results} />
      <QuickQuoteForm serviceName={service.title} />
      <FAQSection data={faqs} />
    </main>
  );
}
