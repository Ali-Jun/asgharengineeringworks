import { ArrowRight, Package, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const productCode = `AEW-${product.id.replace('product-', 'P')}`;
  const primaryUse = product.applications?.[0] || 'Industrial assemblies';
  const finish = product.specifications?.find((item) => item.toLowerCase().includes('finish'))?.replace('Finish: ', '') || 'Machined metal';

  return (
    <article className="classic-product-card group overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm">
      <div className="grid grid-cols-[1fr_auto] items-center border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2 text-xs font-black uppercase text-teal-700">
          <Package size={15} aria-hidden="true" />
          {product.category}
        </div>
        <span className="rounded-sm border border-slate-300 bg-white px-2 py-1 font-display text-xs font-black text-slate-700">
          {productCode}
        </span>
      </div>

      <Link className="focus-ring block bg-white p-4" to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
        <div className="aspect-square overflow-hidden border border-slate-200 bg-white">
          <img
            className="h-full w-full object-cover"
            src={product.image}
            alt={`${product.name} precision engineering component`}
            loading="lazy"
            style={{ objectPosition: product.imagePosition }}
          />
        </div>
      </Link>

      <div className="p-5 pt-1">
        <h3 className="text-xl font-black text-slate-950">{product.name}</h3>
        <p className="line-clamp-2 mt-2 min-h-[48px] text-sm leading-6 text-slate-600">{product.shortDescription}</p>

        <div className="mt-5 divide-y divide-slate-200 border-y border-slate-200 text-sm">
          <div className="tech-row py-2">
            <span className="font-bold text-slate-500">Use</span>
            <span className="font-semibold text-slate-800">{primaryUse}</span>
          </div>
          <div className="tech-row py-2">
            <span className="font-bold text-slate-500">Finish</span>
            <span className="font-semibold text-slate-800">{finish}</span>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
            <Ruler size={15} aria-hidden="true" />
            Custom Size
          </div>
          <Link className="inline-flex items-center gap-2 rounded-md font-bold text-slate-950 hover:text-teal-700" to={`/products/${product.id}`}>
            Details
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
