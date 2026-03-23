"use client";

import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/site";
import { useState } from "react";

interface QuickQuoteFormProps {
  serviceName?: string;
}

export const QuickQuoteForm = ({ serviceName = "driveway / surfacing" }: QuickQuoteFormProps) => {
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (res.ok) {
        setIsSuccess(true);
        form.reset();
        setAgreed(false);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-24 pt-12 bg-white px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-800 mb-6 uppercase tracking-tight"
          >
            Quick Quote
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Need a quick {serviceName} quote? Please complete the form below and we'll get back to you very soon.
          </motion.p>
        </div>

        <form 
          className="max-w-4xl mx-auto space-y-4" 
          name="contact" 
          method="POST" 
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              name="name"
              placeholder="Name" 
              required
              className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent text-gray-900 transition-all placeholder:text-gray-400" 
            />
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone" 
              required
              className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent text-gray-900 transition-all placeholder:text-gray-400" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              required
              className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent text-gray-900 transition-all placeholder:text-gray-400" 
            />
            <input 
              type="text" 
              name="postcode"
              placeholder="Postcode" 
              className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent text-gray-900 transition-all placeholder:text-gray-400" 
            />
          </div>
          <textarea 
            name="message"
            placeholder="How can we help?" 
            rows={5} 
            required
            className="w-full p-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-accent text-gray-900 transition-all placeholder:text-gray-400 resize-none h-40"
          ></textarea>
          
          <div className="flex flex-col items-center gap-8 pt-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="checkbox" 
                name="agreed"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                required
                className="w-5 h-5 rounded border-gray-300 text-accent focus:ring-accent transition-all cursor-pointer"
              />
              <span className="text-gray-600 text-sm font-medium">
                By ticking this box you accept our <span className="text-gray-500 underline cursor-pointer hover:text-gray-900 transition-colors">Privacy Policy</span> *
              </span>
            </label>
            
            {errorMsg && (
              <p className="text-red-500 font-medium text-center">{errorMsg}</p>
            )}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-accent text-white font-black py-4 px-16 rounded-lg hover:bg-orange-600 transition-all shadow-md uppercase tracking-widest text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>

        <AnimatePresence>
          {isSuccess && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-8 md:p-12 rounded-[32px] shadow-2xl max-w-lg w-full text-center relative"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">Thank You!</h3>
                <p className="text-gray-600 text-lg mb-8">
                  Your quote request has been received. We'll be in touch with you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-accent text-white font-bold py-4 px-8 rounded-xl hover:bg-orange-600 transition-all w-full uppercase tracking-widest text-lg"
                >
                  Close
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
