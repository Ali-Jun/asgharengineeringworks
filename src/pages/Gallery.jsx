import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { products } from '../data/products.js';

const galleryItems = products.map((product) => ({
  title: product.name,
  type: product.category,
  image: product.image,
  position: product.imagePosition,
}));

export default function Gallery() {
  return (
    <>
      <PageMeta
        title="Gallery"
        description="Gallery page for product photos, machine photos, workshop images, and completed work."
      />
      <PageHeader eyebrow="Gallery" title="Workshop and product visuals.">
        A responsive image grid showing the same 13 product photos used in the catalog.
      </PageHeader>

      <section className="page-band bg-white">
        <div className="container-shell">
          <SectionTitle eyebrow="Visual Catalog" title="Product photos from our machined component range.">
            View the component shapes, bores, threads, and finishing details used across our product range.
          </SectionTitle>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm" key={item.title}>
                <div className="aspect-square overflow-hidden bg-white">
                  <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{ objectPosition: item.position }}
                  />
                </div>
                <div className="p-5">
                  <p className="eyebrow">{item.type}</p>
                  <h2 className="mt-2 text-xl font-black text-slate-950">{item.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
