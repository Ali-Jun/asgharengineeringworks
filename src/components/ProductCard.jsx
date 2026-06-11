import { ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <Link className="focus-ring block" to={`/products/${product.id}`} aria-label={`View ${product.name}`}>
        <div className="aspect-square overflow-hidden bg-white">
          <img
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={product.image}
            alt={`${product.name} precision engineering component`}
            loading="lazy"
            style={{ objectPosition: product.imagePosition }}
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-bold text-teal-700">
          <Package size={16} aria-hidden="true" />
          {product.category}
        </div>
        <h3 className="text-xl font-black text-slate-950">{product.name}</h3>
        <p className="line-clamp-2 mt-2 min-h-[48px] text-sm leading-6 text-slate-600">{product.shortDescription}</p>
        <Link className="mt-5 inline-flex items-center gap-2 rounded-md font-bold text-slate-950 hover:text-teal-700" to={`/products/${product.id}`}>
          View details
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
