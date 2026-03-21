import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { QuickQuoteForm } from "@/components/QuickQuoteForm";
import { IconMapper } from "@/components/IconMapper";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Fullers Paving & Improvements for a free site assessment and quote.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="bg-primary py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">Contact Us</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">We're here to help transformation your property. Reach out for a free consultation.</p>
      </div>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-[32px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                <IconMapper name="Phone" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-primary uppercase mb-2">Call Us</h3>
              <p className="text-gray-500 mb-4 font-medium uppercase tracking-widest text-xs">Direct Support</p>
              <a href={`tel:${siteConfig.phone}`} className="text-3xl font-black text-primary hover:text-accent transition-colors">{siteConfig.phone}</a>
            </div>

            <div className="bg-white p-10 rounded-[32px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                <IconMapper name="Mail" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-primary uppercase mb-2">Email Us</h3>
              <p className="text-gray-500 mb-4 font-medium uppercase tracking-widest text-xs">Project Enquiries</p>
              <a href={`mailto:${siteConfig.email}`} className="text-xl font-black text-primary hover:text-accent transition-colors break-all">{siteConfig.email}</a>
            </div>

            <div className="bg-white p-10 rounded-[32px] shadow-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                <IconMapper name="MapPin" className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-primary uppercase mb-2">Location</h3>
              <p className="text-gray-500 mb-4 font-medium uppercase tracking-widest text-xs">Our Office</p>
              <p className="text-lg font-bold text-gray-700">{siteConfig.address}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <QuickQuoteForm />
          </div>
        </div>
      </section>
    </main>
  );
}
