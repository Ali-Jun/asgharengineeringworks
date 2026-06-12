import { ArrowRight, CheckCircle2, Clock, Cog, Factory, Gauge, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTA from '../components/CTA.jsx';
import CustomerLogoMarquee from '../components/CustomerLogoMarquee.jsx';
import PageMeta from '../components/PageMeta.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { assetPath } from '../utils/assetPath.js';

const strengths = [
  { icon: ShieldCheck, title: 'Quality Focus', copy: 'Inspection-minded production for dependable engineering parts.' },
  { icon: Gauge, title: 'Precision Work', copy: 'Machining and finishing workflows shaped around dimensional accuracy.' },
  { icon: Clock, title: 'Timely Delivery', copy: 'Straightforward inquiry flow for clear quantity and delivery discussion.' },
  { icon: Cog, title: 'Custom Components', copy: 'Support for drawings, samples, repairs, and small-to-batch requirements.' },
];

const capabilities = [
  { icon: Wrench, title: 'Turning and Boring', copy: 'Clean machining support for round, stepped, and bored metal work.' },
  { icon: Ruler, title: 'Fitment Review', copy: 'Measurements and matching checks for drawing, sample, and repair jobs.' },
  { icon: Cog, title: 'Threading and Fitting', copy: 'Practical support for threaded, connected, and assembled components.' },
  { icon: CheckCircle2, title: 'Final Finishing', copy: 'Surface, edge, and readiness checks before delivery discussion.' },
];

const workflow = ['Requirement review', 'Material discussion', 'Machining plan', 'Inspection and delivery'];

export default function Home() {
  return (
    <>
      <PageMeta
        title="Precision Engineering Components"
        description="Asghar Engineering Works manufactures precision machined components with quality inspection and direct inquiry support."
      />

      <section
        className="animated-hero motion-fade-in relative overflow-hidden bg-slate-950 text-white"
        style={{
          backgroundImage:
            `linear-gradient(90deg, rgba(1, 44, 26, 0.9) 0%, rgba(1, 65, 28, 0.74) 46%, rgba(1, 65, 28, 0.26) 100%), url('${assetPath('/images/hero-manufacturing.png')}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container-shell grid min-h-[78vh] items-center gap-10 py-14 lg:grid-cols-[1fr_380px]">
          <div className="motion-fade-up w-full min-w-0 max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-white/18 bg-white/10 px-3 py-2 text-sm font-bold text-slate-100">
              <Factory size={17} aria-hidden="true" />
              Pakistan based precision manufacturing
            </p>
            <h1 className="max-w-full text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-7xl">
              <span className="block">Asghar Engineering</span>
              <span className="block">Works</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Precision machined components, clean inspection workflows, and direct inquiry support for local
              industrial and engineering customers.
            </p>
            <div className="mt-8 flex min-w-0 flex-wrap gap-3">
              <Link className="btn-primary focus-ring min-w-0 w-full sm:w-auto" to="/products">
                View Products
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="btn-secondary focus-ring min-w-0 w-full sm:w-auto" to="/contact">
                Contact Details
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {['Local Support', 'Custom Work', 'Direct Contact', 'Quality First'].map((item) => (
                <div className="stat-tile rounded-lg border border-white/14 bg-white/10 px-4 py-3 backdrop-blur" key={item}>
                  <p className="text-sm font-extrabold text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="motion-fade-up motion-delay-2 hidden lg:block">
            <div className="hero-product-panel border border-white/14 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold text-amber-200">Industrial Supply Desk</p>
              <h2 className="mt-2 font-display text-3xl font-black text-white">Made for reliable work</h2>
              <div className="mt-6 grid gap-3">
                {workflow.map((item, index) => (
                  <div className="grid grid-cols-[42px_1fr] items-center gap-3 rounded-md border border-white/12 bg-white/10 p-3" key={item}>
                    <span className="grid h-10 w-10 place-items-center rounded-md bg-white text-sm font-black text-[var(--brand)]">
                      {index + 1}
                    </span>
                    <span className="font-bold text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
              <Link className="btn-primary mt-6 w-full" to="/contact">
                Start Inquiry
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CustomerLogoMarquee />

      <section className="page-band bg-white">
        <div className="container-shell">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
          </ScrollReveal>
        </div>
      </section>

      <section className="page-band industrial-grid bg-slate-100">
        <div className="container-shell">
          <ScrollReveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle eyebrow="Engineering Capability" title="Classic workshop capability for serious inquiries.">
              Clear manufacturing support for buyers who want practical machining, repair, and fitment communication
              before placing an order.
            </SectionTitle>
            <Link className="btn-quiet w-fit" to="/products">
              Open Products Page
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </ScrollReveal>
          <ScrollReveal className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" delay={80}>
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article className="stat-tile rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={item.title}>
                  <Icon className="text-teal-700" size={30} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
                </article>
              );
            })}
          </ScrollReveal>
        </div>
      </section>

      <section className="page-band bg-white">
        <div className="container-shell">
          <ScrollReveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="process-panel rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
              <p className="eyebrow text-white">Process Board</p>
              <h2 className="mt-3 font-display text-3xl font-black">From sample to finished work.</h2>
              <div className="mt-8 grid gap-4">
                {workflow.map((item, index) => (
                  <div className="tech-row items-start" key={item}>
                    <div className="grid h-12 w-12 place-items-center rounded-md bg-white font-black text-[var(--brand)]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">{item}</h3>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        Each step keeps communication clear, dimensions practical, and delivery expectations direct.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle eyebrow="Manufacturing Capability" title="Clear workflows for custom engineering work.">
                Our workflow is built around practical requirements: sample review, drawing discussion, machining,
                finishing, and final inspection.
              </SectionTitle>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div className="stat-tile flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3" key={capability.title}>
                    <Wrench size={18} className="text-amber-600" aria-hidden="true" />
                    <span className="font-bold text-slate-800">{capability.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
