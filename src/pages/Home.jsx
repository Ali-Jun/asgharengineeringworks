import { ArrowRight, Clock, Cog, Factory, Gauge, ShieldCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import CustomerLogoMarquee from '../components/CustomerLogoMarquee.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ProductCard from '../components/ProductCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import WhatsAppButton from '../components/WhatsAppButton.jsx';
import { company } from '../data/company.js';
import { featuredProducts } from '../data/products.js';
import { assetPath } from '../utils/assetPath.js';

const strengths = [
  { icon: ShieldCheck, title: 'Quality Focus', copy: 'Inspection-minded production for dependable engineering parts.' },
  { icon: Gauge, title: 'Precision Work', copy: 'Machining and finishing workflows shaped around dimensional accuracy.' },
  { icon: Clock, title: 'Timely Delivery', copy: 'Straightforward inquiry flow for clear quantity and delivery discussion.' },
  { icon: Cog, title: 'Custom Components', copy: 'Support for drawings, samples, repairs, and small-to-batch requirements.' },
];

const capabilities = ['Turning', 'Boring', 'Threading', 'Finishing', 'Custom fitting', 'Workshop repair support'];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Precision Engineering Components"
        description="Asghar Engineering Works manufactures precision machined components with quality inspection and direct WhatsApp inquiry support."
      />

      <section
        className="animated-hero motion-fade-in relative overflow-hidden bg-slate-950 text-white"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(7, 17, 44, 0.88) 0%, rgba(26, 50, 116, 0.58) 48%, rgba(46, 79, 163, 0.08) 100%), url('${assetPath('/images/hero-manufacturing.png')}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container-shell grid min-h-[78vh] items-center gap-10 py-14 lg:grid-cols-[1fr_420px]">
          <div className="motion-fade-up max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/10 px-3 py-2 text-sm font-bold text-slate-100">
              <Factory size={17} aria-hidden="true" />
              Corporate manufacturing and product catalog
            </p>
            <h1 className="max-w-full text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-7xl">
              <span className="block">Asghar Engineering</span>
              <span className="block">Works</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Precision machined components, clean inspection workflows, and direct inquiry support for industrial and
              engineering customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn-primary focus-ring w-full sm:w-auto" to="/products">
                View Products
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <WhatsAppButton className="btn-whatsapp w-full sm:w-auto" />
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {['13 Products', 'Product Catalog', 'Direct WhatsApp', 'Quality First'].map((item) => (
                <div className="stat-tile rounded-lg border border-white/14 bg-white/10 px-4 py-3 backdrop-blur" key={item}>
                  <p className="text-sm font-extrabold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="motion-fade-up motion-delay-2 hidden lg:block">
            <div className="hero-product-panel border border-white/14 bg-white/10 p-4 backdrop-blur">
              <img
                className="aspect-square w-full bg-white object-cover"
                src={assetPath('/images/products/product-12.jpeg')}
                alt="Stepped precision machined pin"
              />
              <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-4">
                <div>
                  <p className="text-sm font-bold text-amber-200">Featured Part</p>
                  <p className="font-display text-2xl font-black text-white">Stepped Precision Pin</p>
                </div>
                <Link className="btn-primary px-4" to="/products/product-12" aria-label="View stepped precision pin">
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CustomerLogoMarquee />

      <section className="page-band bg-white">
        <div className="container-shell">
          <div className="motion-fade-up grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionTitle eyebrow="Company Profile" title="Built for reliable industrial part inquiries.">
              Asghar Engineering Works manufactures precision metal components for customers who need reliable fitting,
              clean finishing, and straightforward communication.
            </SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <article className="stat-tile rounded-lg border border-slate-200 bg-slate-50 p-5" key={item.title}>
                    <Icon className="text-teal-700" size={28} aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-black text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="page-band industrial-grid bg-slate-100">
        <div className="container-shell">
          <div className="motion-fade-up flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle eyebrow="Featured Products" title="A clean catalog for 13 engineering products.">
              Browse the machined components produced for industrial assemblies, maintenance work, and custom
              requirements.
            </SectionTitle>
            <Link className="btn-quiet w-fit" to="/products">
              Browse All
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_1.85fr]">
            <Link
              className="classic-product-card group overflow-hidden rounded-md border border-slate-300 bg-white shadow-sm"
              to={`/products/${featuredProducts[0].id}`}
            >
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  src={featuredProducts[0].image}
                  alt={`${featuredProducts[0].name} product`}
                />
              </div>
              <div className="p-6">
                <p className="eyebrow">{featuredProducts[0].category}</p>
                <h3 className="mt-2 text-3xl font-black text-slate-950">{featuredProducts[0].name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{featuredProducts[0].shortDescription}</p>
              </div>
            </Link>
            <div className="grid gap-5 sm:grid-cols-2">
              {featuredProducts.slice(1).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-band bg-white">
        <div className="container-shell">
          <div className="motion-fade-up grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
              <img
                className="aspect-square w-full object-cover"
                src={assetPath('/images/products/product-08.jpeg')}
                alt="Double lug machined connector"
                loading="lazy"
              />
            </div>
            <div>
              <SectionTitle eyebrow="Manufacturing Capability" title="Clear workflows for custom engineering work.">
                Our workflow is built around practical requirements: sample review, drawing discussion, machining,
                finishing, and final inspection.
              </SectionTitle>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div className="stat-tile flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3" key={capability}>
                    <Wrench size={18} className="text-amber-600" aria-hidden="true" />
                    <span className="font-bold text-slate-800">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
