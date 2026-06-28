"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#marketplace", label: "Marketplace" },
    { href: "#contractors", label: "Contractors" },
    { href: "#deployments", label: "Deployments" },
    { href: "#impact", label: "Impact" },
  ];

  return (
    <nav className="nav fixed top-0 left-0 right-0 z-50">
      <div className="unified-container px-5 sm:px-8">
        <div className="h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-x-3">
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-400">
              <span className="font-black text-[#05070F] text-[22px] sm:text-[26px] tracking-[-2px]">IH</span>
            </div>
            <div>
              <div className="font-semibold text-[24px] sm:text-[28px] tracking-[-1.5px] heading">infrahub</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-x-8 text-[15px]">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-[#94A3B8] hover:text-white">
                {link.label}
              </a>
            ))}
            <Link href="/pricing" className="nav-link text-[#94A3B8] hover:text-white">Premium</Link>
          </div>

          <div className="flex items-center gap-x-2 sm:gap-x-3">
            <Link 
              href="/submit" 
              className="hidden sm:flex items-center px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold bg-white text-[#05070F] hover:bg-[#E2E8F0] rounded-2xl transition"
            >
              List Product
            </Link>
            
            <Link 
              href="/pricing" 
              className="hidden sm:flex items-center px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold border border-[#1E2937] hover:bg-[#0F172A] rounded-2xl transition"
            >
              Agency Access
            </Link>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)} 
              className="lg:hidden w-10 h-10 flex items-center justify-center text-xl text-[#94A3B8] hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#1E2937] bg-[#05070F]/98 px-5 py-6">
          <div className="flex flex-col gap-y-1 text-lg">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setMobileOpen(false)}
                className="py-3 border-b border-[#1E2937] text-[#94A3B8]"
              >
                {link.label}
              </a>
            ))}
            <Link href="/pricing" onClick={() => setMobileOpen(false)} className="py-3 border-b border-[#1E2937] text-[#94A3B8]">Premium Tier</Link>
          </div>
          <div className="mt-6 space-y-3">
            <Link 
              href="/submit" 
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 bg-white text-[#05070F] font-semibold rounded-2xl"
            >
              List Your Product
            </Link>
            <Link 
              href="/pricing" 
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center py-3 border border-[#1E2937] font-semibold rounded-2xl"
            >
              Get Agency Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
