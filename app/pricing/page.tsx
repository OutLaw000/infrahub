"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import UnlockModal from '@/components/UnlockModal';
import { usePremium } from '@/lib/premium-context';
import { toast } from 'sonner';
import Link from 'next/link';

export default function PricingPage() {
  const [showUnlock, setShowUnlock] = useState(false);
  const { isUnlocked, unlock } = usePremium();

  const handleAgencySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    unlock();
    toast.success("Agency verification complete", {
      description: "Premium access is now unlocked for this session across the entire platform.",
    });
    setShowUnlock(false);
  };

  return (
    <>
      <Navbar />

      <div className="pt-20 pb-16 unified-container px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="premium-tier-logo mx-auto mb-4"><span>PREMIUM TIER</span></div>
          <h1 className="heading text-5xl tracking-[-2.5px]">Unlock the complete knowledge platform</h1>
          <p className="mt-4 text-xl text-[#94A3B8]">Dedicated product pages with in-depth specifications, real public case studies, downloadable documents, product images, and full direct contact information with clickable links.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Agency / Free Verified */}
          <div className="lux-card rounded-3xl p-8 border border-[#C5A46E]">
            <div className="text-sm uppercase tracking-widest text-[#C5A46E] font-semibold">FOR PUBLIC AGENCIES &amp; CONSULTANTS</div>
            <div className="mt-2 text-4xl font-semibold tracking-tight">Free</div>
            <div className="text-[#94A3B8]">Verified access for government and engineering professionals</div>

            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex gap-2">✓ Full dedicated product pages</li>
              <li className="flex gap-2">✓ Complete case studies &amp; ROI data</li>
              <li className="flex gap-2">✓ Product documents &amp; installation guides</li>
              <li className="flex gap-2">✓ High-resolution deployment imagery</li>
              <li className="flex gap-2">✓ Full contact details + direct emails</li>
              <li className="flex gap-2">✓ Warm contractor introductions</li>
            </ul>

            <button 
              onClick={() => setShowUnlock(true)}
              className="mt-8 w-full py-3.5 bg-[#C5A46E] hover:bg-[#D4AF37] text-[#05070F] font-semibold rounded-2xl"
            >
              Request Agency Verification
            </button>
            <p className="text-xs text-center mt-3 text-[#475569]">Verification typically completed same day for .gov and recognized consulting firms.</p>
          </div>

          {/* Paid Premium */}
          <div className="lux-card rounded-3xl p-8">
            <div className="text-sm uppercase tracking-widest text-[#C5A46E] font-semibold">FOR TECHNOLOGY PROVIDERS &amp; PRIVATE PARTNERS</div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">$3,900</span>
              <span className="text-[#94A3B8]">/ year</span>
            </div>
            <div className="text-[#94A3B8]">Annual premium listing with lead delivery</div>

            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex gap-2">✓ Elegant Premium badge + featured placement</li>
              <li className="flex gap-2">✓ Complete knowledge base on your dedicated page</li>
              <li className="flex gap-2">✓ Direct high-intent quote requests routed to you</li>
              <li className="flex gap-2">✓ Performance analytics (views, downloads, leads)</li>
              <li className="flex gap-2">✓ Contractor matching for your installs</li>
              <li className="flex gap-2">✓ Priority support from the InfraHub team</li>
            </ul>

            <button 
              onClick={() => {
                toast("Thank you", { description: "Our team will contact you within one business day to complete onboarding." });
              }}
              className="mt-8 w-full py-3.5 border border-[#C5A46E] text-[#C5A46E] font-semibold rounded-2xl hover:bg-[#1E2937]"
            >
              Apply for Premium Listing
            </button>
            <p className="text-xs text-center mt-3 text-[#475569]">Includes one full year of active premium placement and lead delivery.</p>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-[#64748B]">
          Already have access? <Link href="/#marketplace" className="text-[#0EA5E9] hover:underline">Return to the marketplace</Link> and click any premium card to open its dedicated page.
        </div>
      </div>

      <UnlockModal isOpen={showUnlock} onClose={() => setShowUnlock(false)} />
    </>
  );
}
