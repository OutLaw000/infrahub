import Link from 'next/link';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const neDeploy = product.deployments.ma + product.deployments.nh + product.deployments.me;
  const isPremium = product.tier === 'premium';

  return (
    <Link href={`/products/${product.slug}`} className="block group">
      <div className="lux-card rounded-3xl p-5 sm:p-6 cursor-pointer h-full flex flex-col">
        <div className="flex justify-between mb-3">
          <div>
            <div className="font-semibold text-lg sm:text-xl tracking-tight group-hover:text-[#0EA5E9] transition-colors">
              {product.name}
            </div>
            <div className="text-[#0EA5E9] text-sm">{product.company}</div>
          </div>
          {isPremium ? (
            <div className="premium-tier-logo text-xs">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#C5A46E"/>
              </svg>
              <span>PREMIUM</span>
            </div>
          ) : (
            <div className="text-xs px-3 py-1 rounded-full bg-[#1E2937] text-[#64748B]">FREE</div>
          )}
        </div>

        <div className="text-[#94A3B8] text-sm sm:text-base leading-snug mb-5 flex-1">
          {product.short}
        </div>

        <div className="flex justify-between items-end pt-4 border-t border-[#1E2937]">
          <div>
            <span className="font-mono text-xl sm:text-2xl font-semibold tracking-tighter">{neDeploy}</span>
            <span className="text-xs text-[#64748B] ml-1">NE deployments</span>
          </div>
          <div className="text-sm px-4 sm:px-5 py-1.5 rounded-2xl bg-[#1E2937] group-hover:bg-[#334155] transition">
            View Full Profile →
          </div>
        </div>
      </div>
    </Link>
  );
}
