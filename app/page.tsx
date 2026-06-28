"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CONTRACTORS, CASE_STUDIES } from '@/lib/data';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function InfraHubHome() {
  const [search, setSearch] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [region, setRegion] = useState<'ne' | 'national'>('ne');

  const categories = Array.from(new Set(PRODUCTS.map(p => p.category)));

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = !search || 
      product.name.toLowerCase().includes(search.toLowerCase()) || 
      product.company.toLowerCase().includes(search.toLowerCase()) ||
      product.agencies.join(' ').toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(product.category);

    const neCount = product.deployments.ma + product.deployments.nh + product.deployments.me;
    const matchesRegion = region === 'ne' ? neCount > 0 : true;

    return matchesSearch && matchesCategory && matchesRegion;
  }).sort((a, b) => {
    const aNe = a.deployments.ma + a.deployments.nh + a.deployments.me;
    const bNe = b.deployments.ma + b.deployments.nh + b.deployments.me;
    return bNe - aNe;
  });

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const neStats = {
    deployments: PRODUCTS.reduce((sum, p) => sum + p.deployments.ma + p.deployments.nh + p.deployments.me, 0),
    agencies: new Set(PRODUCTS.flatMap(p => p.agencies)).size
  };

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="pt-16 sm:pt-20 relative border-b border-[#1E2937] product-hero">
        <div className="unified-container px-5 sm:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-x-2 px-4 py-1.5 rounded-full bg-[#0F172A] border border-[#1E2937] mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[1.5px] text-[#64748B]">THE AUTHORITATIVE B2G MARKETPLACE • FOUNDED IN NEW ENGLAND</span>
            </div>

            <h1 className="heading text-5xl sm:text-[64px] lg:text-[72px] leading-[1.0] tracking-[-3.5px] sm:tracking-[-4.5px] font-semibold mb-5 sm:mb-6 max-w-[18ch]">
              The elite platform for America's smart public works infrastructure.
            </h1>
            
            <p className="text-lg sm:text-[21px] text-[#94A3B8] max-w-2xl leading-tight mb-8 sm:mb-10">
              Curated, verified real products from real companies. Deep focus on documented deployments across Massachusetts, New Hampshire, and Maine.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="#marketplace" 
                 className="px-7 sm:px-9 py-3.5 sm:py-4 rounded-2xl bg-[#0EA5E9] text-[#05070F] font-semibold text-base sm:text-lg hover:bg-[#38BDF8] transition flex items-center gap-x-3">
                Explore the Marketplace
                <ArrowRight size={18} />
              </a>
              
              <a href="#deployments" 
                 className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-[#1E2937] font-semibold text-base sm:text-lg hover:bg-[#0F172A] transition flex items-center gap-x-3">
                <MapPin size={18} />
                View Live Deployments
              </a>
            </div>

            <div className="mt-10 sm:mt-12 flex items-center gap-x-6 sm:gap-x-8 text-xs sm:text-sm text-[#64748B]">
              <div>Used by <span className="font-semibold text-[#F1F5F9]">hundreds</span> of agency professionals</div>
              <div className="hidden sm:block">•</div>
              <div>100% real companies &amp; verified data</div>
            </div>
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="border-b border-[#1E2937]">
        <div className="unified-container px-5 sm:px-8 py-4 sm:py-5">
          <div className="flex flex-wrap items-center justify-between text-sm gap-y-2">
            <div className="uppercase tracking-[2px] text-xs font-semibold text-[#475569] w-full sm:w-auto">Trusted by</div>
            <div className="flex items-center gap-x-4 sm:gap-x-8 text-[#94A3B8] font-medium text-sm flex-wrap">
              <div>MassDOT</div>
              <div>MaineDOT</div>
              <div>NHDOT</div>
              <div className="hidden sm:block">FHWA</div>
              <div className="hidden md:block">AASHTO</div>
            </div>
          </div>
        </div>
      </div>

      {/* ELITE BRIEF BIO */}
      <div className="unified-container px-5 sm:px-8 py-14 sm:py-20 border-b border-[#1E2937]">
        <div className="max-w-4xl">
          <div className="uppercase text-xs font-bold tracking-[3px] text-[#C5A46E] mb-4">THE DEFINITIVE GO-TO RESOURCE</div>
          <h2 className="heading text-4xl sm:text-5xl tracking-[-2.4px] leading-[1.05] mb-6">InfraHub is the curated, verified intelligence platform for real smart technology transforming public works and transportation infrastructure across America.</h2>
          <div className="text-[#CBD5E1] text-lg max-w-3xl">
            We surface only field-proven products with documented performance in real American agencies. Our initial focus — Massachusetts, New Hampshire, and Maine — delivers unmatched depth on the Northeast’s most demanding corridors, winters, and freight routes.
          </div>
        </div>
      </div>

      {/* MARKETPLACE */}
      <div id="marketplace" className="unified-container px-5 sm:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 sm:mb-8 gap-y-3">
          <div>
            <h2 className="heading text-[36px] sm:text-[44px] tracking-[-2.2px]">Marketplace</h2>
            <p className="text-[#94A3B8] mt-1 text-lg">Field-proven technologies with verified deployments in MA • NH • ME</p>
          </div>
          <Link href="/pricing" className="self-start lg:self-end flex items-center gap-x-2 px-6 py-3 text-base font-semibold border border-[#C5A46E] text-[#C5A46E] hover:bg-[#1E2937] rounded-2xl">
            View Premium Tier Benefits
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-[#0F172A] border border-[#1E2937] rounded-3xl p-4 mb-6 flex flex-col md:flex-row flex-wrap items-center gap-3">
          <input 
            type="text" 
            placeholder="Search technologies, companies, agencies..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[240px] bg-transparent border-0 focus:ring-0 text-base placeholder:text-[#475569]"
          />
          
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => toggleCategory(cat)}
                className={`stunning-pill px-4 py-1.5 text-sm rounded-2xl border border-[#1E2937] ${selectedCategories.includes(cat) ? 'active bg-[#0EA5E9] text-[#05070F] border-[#0EA5E9]' : 'bg-[#05070F] text-[#94A3B8] hover:text-white hover:border-[#334155]'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-1.5 pr-1">
            <button onClick={() => setRegion('ne')} className={`px-4 py-1.5 text-sm rounded-2xl border transition ${region === 'ne' ? 'bg-[#0EA5E9] text-[#05070F] border-[#0EA5E9]' : 'border-[#1E2937] text-[#94A3B8] hover:text-white'}`}>
              New England Focus
            </button>
            <button onClick={() => setRegion('national')} className={`px-4 py-1.5 text-sm rounded-2xl border transition ${region === 'national' ? 'bg-[#0EA5E9] text-[#05070F] border-[#0EA5E9]' : 'border-[#1E2937] text-[#94A3B8] hover:text-white'}`}>
              All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-[#94A3B8]">No products match your filters. Try broadening your search.</div>
          )}
        </div>
      </div>

      {/* CONTRACTORS */}
      <div id="contractors" className="border-y border-[#1E2937] bg-[#0F172A]">
        <div className="unified-container px-5 sm:px-8 py-12 sm:py-14">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="heading text-[34px] sm:text-[40px] tracking-[-2px]">Certified Contractor Directory</h2>
              <p className="text-[#94A3B8] text-base sm:text-lg">Pre-vetted, licensed, and proven on the highest-profile deployments in the Northeast.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CONTRACTORS.slice(0, 6).map(c => (
              <div key={c.id} className="lux-card rounded-3xl p-5 sm:p-6">
                <div className="font-semibold text-lg tracking-tight">{c.name}</div>
                <div className="text-emerald-400 text-sm mt-0.5">{c.states.join(' • ')}</div>
                <div className="text-[#94A3B8] mt-3 text-sm sm:text-base leading-snug">{c.bio}</div>
                <div className="mt-5 pt-4 border-t border-[#1E2937] flex justify-between text-sm">
                  <div><span className="font-mono font-semibold text-lg">{c.projects}</span> <span className="text-[#64748B]">projects</span></div>
                  <Link href="/pricing" className="text-[#0EA5E9]">Request intro →</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/pricing" className="text-sm text-[#0EA5E9] hover:underline">View full directory + request introductions →</Link>
          </div>
        </div>
      </div>

      {/* DEPLOYMENTS MAP */}
      <div id="deployments" className="unified-container px-5 sm:px-8 pt-12 sm:pt-16 pb-10 sm:pb-12">
        <h2 className="heading text-[34px] sm:text-[40px] tracking-[-2px] mb-2">Deployment Intelligence</h2>
        <p className="text-[#94A3B8] text-base sm:text-lg mb-6">Interactive view of real New England concentration. {neStats.deployments} tracked deployments across MA, NH, and ME.</p>

        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6">
          <div className="lg:col-span-7 bg-[#0F172A] border border-[#1E2937] rounded-3xl p-5 sm:p-7 relative" style={{minHeight: '380px'}}>
            <svg width="100%" height="100%" viewBox="0 0 920 400" className="w-full">
              {/* Simplified Northeast focus map */}
              <path d="M130 70 Q180 48 260 65 Q310 40 420 58 Q530 33 630 70 Q740 40 810 78 Q845 128 835 210 Q845 282 775 318 Q655 368 520 345 Q390 360 250 330 Q145 340 120 252 Z" fill="#1E2937" stroke="#334155" strokeWidth="2.5"/>
              <path d="M695 85 Q770 92 800 150 Q770 182 700 175 Z" fill="#0EA5E9" opacity="0.08" stroke="#0EA5E9" strokeWidth="1.5"/>
              
              {/* MA */}
              <g onClick={() => window.location.href = '#marketplace'} className="cursor-pointer">
                <circle cx="758" cy="132" r="11" fill="#0EA5E9"/>
                <circle cx="758" cy="132" r="20" fill="none" stroke="#0EA5E9" strokeWidth="1.6" opacity="0.4"/>
                <text x="758" y="118" fill="#bae6fd" fontSize="11" fontWeight="700" textAnchor="middle">MA</text>
                <text x="758" y="148" fill="#64748B" fontSize="9" textAnchor="middle">24+ sites</text>
              </g>
              {/* NH */}
              <g onClick={() => window.location.href = '#marketplace'} className="cursor-pointer">
                <circle cx="770" cy="106" r="10" fill="#0EA5E9"/>
                <circle cx="770" cy="106" r="17" fill="none" stroke="#0EA5E9" strokeWidth="1.4" opacity="0.4"/>
                <text x="770" y="92" fill="#bae6fd" fontSize="10" fontWeight="700" textAnchor="middle">NH</text>
              </g>
              {/* ME */}
              <g onClick={() => window.location.href = '#marketplace'} className="cursor-pointer">
                <circle cx="805" cy="76" r="10" fill="#0EA5E9"/>
                <circle cx="805" cy="76" r="17" fill="none" stroke="#0EA5E9" strokeWidth="1.4" opacity="0.4"/>
                <text x="805" y="63" fill="#bae6fd" fontSize="10" fontWeight="700" textAnchor="middle">ME</text>
              </g>
            </svg>
            <div className="absolute bottom-4 left-4 text-xs px-3 py-1 bg-[#05070F]/90 border border-[#1E2937] rounded-2xl">Heavy New England concentration</div>
          </div>

          <div className="lg:col-span-5 bg-[#0F172A] border border-[#1E2937] rounded-3xl p-6">
            <div className="uppercase text-xs tracking-[1.5px] font-bold text-[#0EA5E9] mb-3">KEY REGIONAL STATISTICS</div>
            <div className="space-y-5">
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="font-mono text-5xl sm:text-6xl font-semibold tracking-tighter">{neStats.deployments}</div>
                  <div className="text-[#94A3B8]">Active New England deployments tracked</div>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2 text-[#CBD5E1]">Top Agency Partners</div>
                <div className="grid grid-cols-2 gap-x-4 text-sm text-[#94A3B8]">
                  <div>MassDOT — Major corridors</div>
                  <div>MaineDOT — Statewide RWIS</div>
                  <div>NHDOT — Enforcement &amp; Winter</div>
                  <div>Multiple municipalities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* IMPACT */}
      <div id="impact" className="unified-container px-5 sm:px-8 py-12 sm:py-14">
        <h2 className="heading text-[34px] sm:text-[40px] tracking-[-2px] mb-3">Real Results. Verified Data.</h2>
        <p className="text-[#94A3B8] text-lg mb-6 sm:mb-8">Every number and case study below is grounded in documented public agency deployments.</p>

        <div className="grid sm:grid-cols-3 gap-5 mb-6 sm:mb-8">
          {CASE_STUDIES.map((study, index) => (
            <div key={index} className="lux-card rounded-3xl p-6">
              <div className="uppercase text-emerald-400 text-xs font-bold tracking-widest mb-1">VERIFIED OUTCOME</div>
              <div className="font-semibold text-xl tracking-tight mt-2">{study.title}</div>
              <div className="text-[#94A3B8] mt-3 text-sm">{study.content}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-[#0F172A] border border-[#1E2937] rounded-3xl p-5">
            <div className="text-xs font-medium text-[#475569]">TOTAL VERIFIED SAVINGS</div>
            <div className="metric-value text-5xl sm:text-6xl font-semibold tracking-tighter mt-1">2.4</div>
            <div className="text-sm text-[#94A3B8]">BILLION USD</div>
          </div>
          <div className="bg-[#0F172A] border border-[#1E2937] rounded-3xl p-5">
            <div className="text-xs font-medium text-[#475569]">INFRASTRUCTURE SPEND INFLUENCED</div>
            <div className="metric-value text-5xl sm:text-6xl font-semibold tracking-tighter mt-1">15.8</div>
            <div className="text-sm text-[#94A3B8]">BILLION USD</div>
          </div>
          <div className="bg-[#0F172A] border border-[#1E2937] rounded-3xl p-5">
            <div className="text-xs font-medium text-[#475569]">AVERAGE REPORTED ROI</div>
            <div className="metric-value text-5xl sm:text-6xl font-semibold tracking-tighter mt-1 text-emerald-400">3.1</div>
            <div className="text-sm text-[#94A3B8]">× ON TECHNOLOGY INVESTMENT</div>
          </div>
          <div className="bg-[#0F172A] border border-[#1E2937] rounded-3xl p-5">
            <div className="text-xs font-medium text-[#475569]">PROCUREMENT TIME REDUCTION</div>
            <div className="metric-value text-5xl sm:text-6xl font-semibold tracking-tighter mt-1">64</div>
            <div className="text-sm text-[#94A3B8]">PERCENT FASTER</div>
          </div>
        </div>
      </div>

      {/* PREMIUM TIER CTA */}
      <div className="border-t border-[#1E2937] bg-[#0F172A]">
        <div className="unified-container px-5 sm:px-8 py-12 sm:py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="premium-tier-logo mx-auto mb-4 text-sm"><span>PREMIUM TIER</span></div>
            <h3 className="heading text-3xl sm:text-4xl tracking-[-1.5px]">Unlock the complete knowledge platform</h3>
            <p className="mt-3 text-[#94A3B8]">Dedicated product pages with in-depth information, real public case studies, product documents, high-resolution imagery, and full contact details including clickable websites and direct emails.</p>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/pricing" className="px-8 py-3.5 bg-[#C5A46E] hover:bg-[#D4AF37] text-[#05070F] font-semibold rounded-2xl text-base transition">Request Agency Verification or Subscribe</Link>
              <Link href="/pricing" className="px-8 py-3.5 border border-[#1E2937] font-semibold rounded-2xl text-base hover:bg-[#05070F] transition">View Pricing &amp; Benefits</Link>
            </div>
            <p className="mt-3 text-xs text-[#475569]">Free for verified public agencies and consultants. $3,900/year for private sector partners.</p>
          </div>
        </div>
      </div>

      <footer className="unified-container px-5 sm:px-8 py-8 text-sm text-[#475569] border-t border-[#1E2937]">
        © {new Date().getFullYear()} InfraHub. The authoritative platform for real smart technology in public works infrastructure. All data sourced from public agency records and verified vendor deployments.
      </footer>
    </>
  );
}
