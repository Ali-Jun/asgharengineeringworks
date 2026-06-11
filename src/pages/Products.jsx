import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { products } from '../data/products.js';

export default function Products() {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return products;

    return products.filter((product) =>
      [product.name, product.category, product.shortDescription].some((field) => field.toLowerCase().includes(value)),
    );
  }, [query]);

  const categories = useMemo(() => [...new Set(products.map((product) => product.category))], []);

  return (
    <>
      <PageMeta
        title="Products"
        description="Browse precision machined products from Asghar Engineering Works with details and WhatsApp inquiry links."
      />
      <PageHeader eyebrow="Products" title="Responsive catalog for 13 engineering products.">
        Review the current machined component range and open a direct inquiry for any product.
      </PageHeader>

      <section className="motion-fade-in page-band industrial-grid bg-slate-100">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
            <aside className="motion-fade-up h-fit rounded-lg border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
              <p className="eyebrow">Catalog Desk</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Find a machined part</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Search by component type, category, or visible product detail.
              </p>
              <label className="relative mt-5 block">
                <span className="sr-only">Search products</span>
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={19} aria-hidden="true" />
                <input
                  className="focus-ring h-12 w-full rounded-md border border-slate-300 bg-white pl-10 pr-4 text-slate-900"
                  placeholder="Search catalog"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-sm font-bold text-slate-500">{filteredProducts.length} of {products.length} products shown</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700" key={category}>
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <div className="motion-fade-up motion-delay-1">
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {filteredProducts.length === 0 ? (
                <div className="motion-fade-up rounded-lg border border-slate-200 bg-white p-8 text-center">
                  <p className="text-lg font-bold text-slate-950">No products match that search.</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
