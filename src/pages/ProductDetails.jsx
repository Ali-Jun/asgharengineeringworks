import { ArrowLeft, CheckCircle2, ClipboardList, Layers } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PageMeta from '../components/PageMeta.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { products } from '../data/products.js';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="page-band bg-white">
        <div className="container-shell">
          <PageMeta title="Product Not Found" description="The requested product was not found." />
          <Link className="btn-quiet" to="/products">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Products
          </Link>
          <h1 className="mt-8 text-4xl font-black text-slate-950">Product not found</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageMeta title={product.name} description={product.shortDescription} />
      <section className="industrial-grid bg-white py-12 md:py-16">
        <div className="container-shell">
          <Link className="mb-8 inline-flex items-center gap-2 rounded-md font-bold text-slate-700 hover:text-slate-950" to="/products">
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Products
          </Link>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
            <ScrollReveal className="overflow-hidden rounded-lg border border-slate-200 bg-white">
              <img
                className="h-full min-h-[420px] w-full object-cover"
                src={product.image}
                alt={`${product.name} product detail`}
                style={{ objectPosition: product.imagePosition }}
              />
            </ScrollReveal>
            <ScrollReveal className="flex flex-col justify-between rounded-lg bg-[var(--brand-strong)] p-6 text-white md:p-8" delay={100}>
              <div>
                <p className="eyebrow">{product.category}</p>
                <h1 className="mt-3 text-4xl font-black leading-tight text-white md:text-6xl">{product.name}</h1>
                <p className="mt-5 text-lg leading-8 text-slate-300">{product.description}</p>
              </div>
              <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-3">
                {['Drawing', 'Sample', 'Custom Size'].map((item) => (
                  <div className="rounded-md bg-white/[0.06] px-4 py-3" key={item}>
                    <p className="text-sm font-bold text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppButton
                  message={`Hello Asghar Engineering Works, I want to inquire about ${product.name}.`}
                  label="Inquire on WhatsApp"
                />
                <Link className="btn-quiet" to="/contact">
                  Contact Details
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="page-band bg-slate-100">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
            <DetailList delay={0} icon={CheckCircle2} title="Features" items={product.features} />
            <DetailList delay={90} icon={Layers} title="Applications" items={product.applications} />
            <DetailList delay={180} icon={ClipboardList} title="Specifications" items={product.specifications} />
          </div>
        </div>
      </section>
    </>
  );
}

function DetailList({ delay = 0, icon: Icon, title, items }) {
  return (
    <ScrollReveal as="article" className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" delay={delay}>
      <Icon className="text-teal-700" size={28} aria-hidden="true" />
      <h2 className="mt-4 text-2xl font-black text-slate-950">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li className="flex gap-3 text-slate-700" key={item}>
            <CheckCircle2 className="mt-0.5 shrink-0 text-amber-600" size={18} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
