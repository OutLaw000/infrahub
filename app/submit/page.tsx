"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';
import Link from 'next/link';

export default function SubmitProductPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      toast.success("Application received", {
        description: "Our curation team will review within two business days.",
      });
    }, 400);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <div className="pt-24 unified-container px-5 sm:px-8 max-w-md mx-auto text-center py-16">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="heading text-3xl">Application Received</h1>
          <p className="mt-4 text-[#94A3B8]">Thank you. Our curation team will review your submission within two business days and contact you with next steps for Premium Tier onboarding.</p>
          <Link href="/" className="inline-block mt-8 px-8 py-3 border border-[#1E2937] rounded-2xl">Return to Homepage</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-20 unified-container px-5 sm:px-8 max-w-2xl mx-auto pb-16">
        <div className="max-w-xl">
          <div className="premium-tier-logo mb-3"><span>PREMIUM TIER LISTING</span></div>
          <h1 className="heading text-4xl tracking-[-1.5px]">Submit Your Technology</h1>
          <p className="mt-3 text-[#94A3B8]">Approved Premium Tier listings receive the elegant badge, complete dedicated knowledge base page, featured placement in the marketplace, and direct lead delivery from agency professionals.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="company" required placeholder="Company Name" />
            <input name="website" required placeholder="Company Website" type="url" />
          </div>
          <input name="product" required placeholder="Product Name" className="w-full" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select name="category" required className="w-full">
              <option value="">Select Primary Category</option>
              <option>Weigh-In-Motion</option>
              <option>Traffic Signals &amp; V2X</option>
              <option>Digital Twins</option>
              <option>AI Analytics</option>
              <option>Road Weather &amp; Sensors</option>
              <option>Smart Work Zones</option>
              <option>Other Smart Infrastructure</option>
            </select>
            <input name="states" required placeholder="States with live deployments (e.g. MA, NH, ME)" />
          </div>

          <textarea name="description" required rows={5} placeholder="Concise description, notable deployments in New England, and key performance results..." className="w-full" />

          <div className="pt-2">
            <button type="submit" className="w-full sm:w-auto px-10 py-3.5 bg-[#0EA5E9] text-[#05070F] font-semibold rounded-2xl text-base hover:bg-[#38BDF8]">
              Submit for Premium Review
            </button>
          </div>
          <p className="text-xs text-[#475569]">Premium Tier listings from $3,900/year. Our team will reach out to discuss fit and onboarding.</p>
        </form>
      </div>
    </>
  );
}
