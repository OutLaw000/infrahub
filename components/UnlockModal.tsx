"use client";

import React, { useState } from 'react';
import { usePremium } from '@/lib/premium-context';
import { toast } from 'sonner';
import { X } from 'lucide-react';

interface UnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UnlockModal({ isOpen, onClose }: UnlockModalProps) {
  const { unlock } = usePremium();
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate verification
    setTimeout(() => {
      unlock();
      setLoading(false);
      onClose();
      toast.success("Premium access unlocked", {
        description: "Full documents, imagery, and direct contacts are now available across the site.",
      });
    }, 650);
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-[130] flex items-center justify-center p-5" onClick={onClose}>
      <div 
        className="bg-[#0F172A] border border-[#1E2937] rounded-3xl p-7 sm:p-9 w-full max-w-md" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="uppercase text-xs tracking-[2px] text-[#C5A46E] mb-1">PREMIUM TIER ACCESS</div>
            <div className="font-semibold text-2xl tracking-tight">Unlock Full Data Room</div>
          </div>
          <button onClick={onClose} className="text-[#64748B] hover:text-white">
            <X size={20} />
          </button>
        </div>

        <div className="text-[#94A3B8] text-sm mb-6">
          For verified public works, DOT, municipal, and consulting professionals. Includes complete documents, high-res imagery, direct contacts, and case study libraries.
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" required placeholder="Full Name" className="w-full" />
          <input name="title" required placeholder="Title / Role (e.g. Traffic Engineer)" className="w-full" />
          <input name="agency" required placeholder="Agency or Organization (e.g. MassDOT)" className="w-full" />
          <input name="email" type="email" required placeholder="Work Email (verified domain)" className="w-full" />
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3.5 bg-[#C5A46E] hover:bg-[#D4AF37] disabled:opacity-70 text-[#05070F] font-semibold rounded-2xl mt-2"
          >
            {loading ? "Verifying..." : "Verify & Unlock Premium Content"}
          </button>
        </form>

        <div className="mt-4 text-[10px] text-center text-[#475569]">
          Agency verification is free. Private sector subscriptions available on the Pricing page.
        </div>
      </div>
    </div>
  );
}
