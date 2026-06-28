"use client";

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import UnlockModal from '@/components/UnlockModal';
import { PRODUCTS, CONTRACTORS } from '@/lib/data';
import { usePremium } from '@/lib/premium-context';
import { ArrowLeft, Download, ExternalLink, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const [showUnlock, setShowUnlock] = useState(false);
  const { isUnlocked } = usePremium();
  const [slug, setSlug] = React.useState<string | null>(null);

  React.useEffect(() => {
    params.then(p => setSlug(p.slug));
  }, [params]);

  if (!slug) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  const neTotal = product.deployments.ma + product.deployments.nh + product.deployments.me;
  const isPremium = product.tier === 'premium';
  const matchedContractors = CONTRACTORS.filter(c => product.matchedContractors.includes(c.id));

  const handleDownload = (resource: string) => {
    if (isPremium && !isUnlocked) {
      setShowUnlock(true);
      return;
    }
    toast.success(`Downloading ${resource}`);
    // In real app: trigger actual file download or link to S3
  };

  const galleryImages = [
    "https://picsum.photos/id/1015/800/520",
    "https://picsum.photos/id/160/800/520",
    "https://picsum.photos/id/201/800/520",
    "https://picsum.photos/id/251/800/520"
  ];

  return (
    <>
      <Navbar />

      <div className="pt-16 sm:pt-20">
        {/* Sticky elegant header */}
        <div className="sticky top-16 z-40 bg-[#05070F]/95 backdrop-blur border-b border-[#1E2937] px-5 sm:px-8 py-4">
          <div className="unified-container flex items-center justify-between">
            <Link href="/#marketplace" className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-white">
              <ArrowLeft size={16} /> Back to Marketplace
            </Link>
            <div className="flex items-center gap-3">
              {isPremium && (
                <div className="premium-tier-logo text-xs">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#C5A46E"/>
                  </svg>
                  <span>PREMIUM TIER</span>
                </div>
              )}
              <a href={product.website} target="_blank" className="text-sm flex items-center gap-1.5 text-[#0EA5E9] hover:underline">
                Official Site <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="unified-container px-5 sm:px-8 pt-10 pb-8 border-b border-[#1E2937] product-hero">
          <div className="max-w-4xl">
            <div className="uppercase tracking-[2.5px] text-xs font-bold text-[#C5A46E] mb-2">{product.company} • {product.category.toUpperCase()}</div>
            <h1 className="heading text-4xl sm:text-5xl tracking-[-2.5px] leading-none mb-4">{product.name}</h1>
            <p className="text-xl text-[#CBD5E1] max-w-3xl">{product.purpose}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div>
              <div className="text-[#475569] text-xs">NEW ENGLAND DEPLOYMENTS</div>
              <div className="font-mono text-4xl font-semibold tracking-tighter">{neTotal}</div>
            </div>
            <div>
              <div className="text-[#475569] text-xs">REPORTED ROI</div>
              <div className="font-mono text-4xl font-semibold tracking-tighter text-emerald-400">{product.roi}%</div>
            </div>
            <div>
              <div className="text-[#475569] text-xs">AGENCIES USING</div>
              <div className="font-mono text-4xl font-semibold tracking-tighter">{product.agencies.length}</div>
            </div>
          </div>
        </div>

        {/* Agencies & Projects */}
        <div className="unified-container px-5 sm:px-8 py-8 grid md:grid-cols-5 gap-6 border-b border-[#1E2937]">
          <div className="md:col-span-2">
            <div className="section-header mb-3">AGENCIES CURRENTLY USING THIS TECHNOLOGY</div>
            <div className="flex flex-wrap gap-2">
              {product.agencies.map(a => (
                <div key={a} className="px-4 py-1.5 bg-[#0F172A] border border-[#1E2937] rounded-2xl text-sm font-medium">{a}</div>
              ))}
            </div>
            <div className="mt-5 text-sm text-[#94A3B8]">Active in Massachusetts, New Hampshire, and Maine public works &amp; DOT programs.</div>
          </div>
          <div className="md:col-span-3">
            <div className="section-header mb-3">FIELD-PROVEN PROJECTS IN NEW ENGLAND</div>
            <div className="space-y-3">
              {product.projects.length > 0 ? product.projects.map((p, i) => (
                <div key={i} className="knowledge-block rounded-2xl p-4">
                  <div className="flex justify-between">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-emerald-400 text-sm">{p.year}</div>
                  </div>
                  <div className="text-[#CBD5E1] mt-1 text-sm">{p.desc}</div>
                </div>
              )) : <div className="text-[#64748B]">Detailed project list available in the premium data room.</div>}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="unified-container px-5 sm:px-8 py-8 border-b border-[#1E2937]">
          <div className="section-header mb-4 flex items-center justify-between">
            <span>PRODUCT &amp; DEPLOYMENT IMAGERY</span>
            {isPremium && !isUnlocked && (
              <button onClick={() => setShowUnlock(true)} className="text-xs px-4 py-1.5 border border-[#C5A46E] text-[#C5A46E] rounded-full">UNLOCK FULL GALLERY</button>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => {
              const locked = isPremium && !isUnlocked && i > 0;
              return (
                <div 
                  key={i} 
                  className="aspect-[16/10] rounded-2xl overflow-hidden border border-[#1E2937] bg-[#0F172A] relative cursor-pointer"
                  onClick={() => locked && setShowUnlock(true)}
                >
                  <img src={src} alt={`${product.name} deployment`} className="w-full h-full object-cover" />
                  {locked && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="text-xs uppercase tracking-widest text-[#C5A46E]">PREMIUM</div>
                        <div className="font-semibold mt-1 text-sm">Unlock to view full imagery</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="text-[11px] text-[#475569] mt-3">Representative imagery. Full high-resolution installation photography and project photos available in the premium data room.</div>
        </div>

        {/* Specs + Value */}
        <div className="unified-container px-5 sm:px-8 py-9 grid lg:grid-cols-12 gap-x-8 gap-y-9">
          <div className="lg:col-span-7">
            <div className="section-header mb-3">TECHNICAL SPECIFICATIONS &amp; PERFORMANCE</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.keys(product.specs).length > 0 ? Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="knowledge-block rounded-2xl px-5 py-4">
                  <div className="text-xs uppercase tracking-widest text-[#64748B]">{k}</div>
                  <div className="font-semibold text-lg mt-0.5">{v}</div>
                </div>
              )) : <div className="text-[#94A3B8]">Full specification sheets and integration guides unlocked with premium access.</div>}
            </div>

            <div className="mt-8">
              <div className="section-header mb-3">STRATEGIC VALUE FOR PUBLIC WORKS</div>
              <div className="text-[#CBD5E1] text-lg">{product.purpose}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {product.benefits.map((b, i) => <li key={i} className="flex gap-2"><span className="text-emerald-400">→</span> {b}</li>)}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="section-header mb-3">VERIFIED CASE STUDIES &amp; ROI</div>
            <div className="space-y-4">
              {product.caseStudies.length > 0 ? product.caseStudies.map((cs, i) => (
                <div key={i} className="knowledge-block rounded-3xl p-5">
                  <div className="font-semibold text-lg">{cs.title}</div>
                  <div className="text-emerald-400 text-2xl font-semibold tracking-tighter mt-1">{cs.metric}</div>
                  <div className="mt-2 text-[#CBD5E1]">{cs.summary}</div>
                </div>
              )) : <div className="text-[#64748B]">Multiple public case studies and independent evaluations available to premium subscribers.</div>}
            </div>
          </div>
        </div>

        {/* Documents + Contact (Premium Gated) */}
        <div className="unified-container px-5 sm:px-8 py-8 bg-[#0F172A] border-y border-[#1E2937]">
          <div className="max-w-4xl">
            <div className="section-header mb-4">PRODUCT DOCUMENTS &amp; KNOWLEDGE BASE</div>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {(product.resources.length > 0 ? product.resources : ["Technical Data Sheet", "Installation Manual", "Integration Guide"]).map((r, i) => (
                <div 
                  key={i}
                  onClick={() => handleDownload(r)}
                  className="cursor-pointer group flex items-center justify-between px-5 py-3.5 bg-[#05070F] border border-[#1E2937] hover:border-[#334155] rounded-2xl text-sm"
                >
                  <div className="flex items-center gap-2"><Download size={16} className="text-[#C5A46E]" /> {r}</div>
                  <div className="text-[#64748B] group-hover:text-white transition">Download →</div>
                </div>
              ))}
            </div>

            <div className="section-header mb-3">DIRECT CONTACT &amp; OFFICIAL RESOURCES</div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div>
                <div className="text-[#475569] text-xs">OFFICIAL WEBSITE</div>
                <a href={product.website} target="_blank" className="text-[#0EA5E9] hover:underline font-medium flex items-center gap-1">
                  {product.website} <ExternalLink size={14} />
                </a>
              </div>
              {product.contact.phone && (
                <div>
                  <div className="text-[#475569] text-xs">PHONE</div>
                  <a href={`tel:${product.contact.phone}`} className="font-medium flex items-center gap-1.5"><Phone size={14} /> {product.contact.phone}</a>
                </div>
              )}
              {product.contact.email && (
                <div>
                  <div className="text-[#475569] text-xs">EMAIL</div>
                  <a href={`mailto:${product.contact.email}`} className="font-medium flex items-center gap-1.5"><Mail size={14} /> {product.contact.email}</a>
                </div>
              )}
              {product.contact.address && (
                <div className="sm:col-span-2">
                  <div className="text-[#475569] text-xs">HEADQUARTERS / US OFFICE</div>
                  <div>{product.contact.address}</div>
                </div>
              )}
            </div>
            {isPremium && !isUnlocked && (
              <div className="mt-3 text-xs text-[#C5A46E]">Full direct Northeast sales contacts and certified local support teams available after unlocking.</div>
            )}
          </div>
        </div>

        {/* Certified Contractors */}
        <div className="unified-container px-5 sm:px-8 py-9">
          <div className="section-header mb-4">CERTIFIED CONTRACTORS WITH PROVEN INSTALLATIONS</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchedContractors.length > 0 ? matchedContractors.map(c => (
              <div key={c.id} className="knowledge-block rounded-2xl p-5">
                <div className="font-semibold">{c.name}</div>
                <div className="text-emerald-400 text-xs mt-0.5">{c.states.join(' • ')} • {c.projects} projects</div>
                <div className="text-sm mt-2 text-[#94A3B8]">{c.bio}</div>
                <div className="text-xs mt-3 text-[#0EA5E9]">Contact via Premium introduction</div>
              </div>
            )) : <div className="text-[#64748B]">Contractor matching details unlocked in premium tier.</div>}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-[#1E2937] bg-[#0F172A] px-5 sm:px-8 py-6">
          <div className="unified-container flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <div className="font-semibold">Ready to move forward with this technology?</div>
              <div className="text-sm text-[#94A3B8]">Get direct introductions to the manufacturer and proven local contractors.</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing" className="px-7 py-3 bg-[#0EA5E9] text-[#05070F] font-semibold rounded-2xl">Request Custom Quote &amp; Intro</Link>
              {isPremium && (
                <button onClick={() => setShowUnlock(true)} className="px-6 py-3 border border-[#C5A46E] text-[#C5A46E] rounded-2xl font-medium">Unlock Full Premium Data Room</button>
              )}
            </div>
          </div>
        </div>
      </div>

      <UnlockModal isOpen={showUnlock} onClose={() => setShowUnlock(false)} />
    </>
  );
}
