import { Metadata } from "next";
import { FAQSection } from "@/components/FAQSection";
import { QuickQuoteForm } from "@/components/QuickQuoteForm";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about our paving and driveway services.",
  alternates: {
    canonical: "/faqs",
  },
};

export default function FAQsPage() {
  return (
    <main className="min-h-screen">
      <div className="bg-primary py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">Find answers to common questions about our materials, process, and pricing.</p>
      </div>
      
      <FAQSection data={faqs} />
      
      <QuickQuoteForm />
      
    </main>
  );
}
