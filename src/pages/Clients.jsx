import { Factory, Hammer, Settings, Wrench } from 'lucide-react';
import CTA from '../components/CTA.jsx';
import PageHeader from '../components/PageHeader.jsx';
import PageMeta from '../components/PageMeta.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { customers } from '../data/customers.js';

const industries = [
  { icon: Factory, title: 'Manufacturing', copy: 'Component support for production and repair needs.' },
  { icon: Settings, title: 'Industrial', copy: 'Machined parts for equipment and assemblies.' },
  { icon: Wrench, title: 'Engineering', copy: 'Custom items based on drawings, samples, and fitment.' },
  { icon: Hammer, title: 'Maintenance', copy: 'Replacement parts and workshop repair support.' },
];

export default function Clients() {
  return (
    <>
      <PageMeta
        title="Clients"
        description="Industries served by Asghar Engineering Works, including manufacturing, industrial, engineering, and maintenance customers."
      />
      <PageHeader eyebrow="Clients" title="Industries served with practical engineering support.">
        Asghar Engineering Works works with customers who need reliable machined components, replacement parts, and
        custom engineering support.
      </PageHeader>

      <section className="page-band industrial-grid bg-slate-100">
        <div className="container-shell">
          <SectionTitle eyebrow="Customer Logos" title="Companies and sectors connected with our work." align="center">
            These logos represent the customer and industry network shown for Asghar Engineering Works.
          </SectionTitle>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customers.map((customer) => (
              <article className="logo-surface grid h-32 place-items-center rounded-lg border border-slate-200 p-5 shadow-sm" key={customer.name}>
                <img className="max-h-20 w-full object-contain" src={customer.logo} alt={`${customer.name} logo`} loading="lazy" />
              </article>
            ))}
          </div>

          <div className="mt-16">
            <SectionTitle eyebrow="Customer Groups" title="Built for buyers who need clear component communication." align="center">
              We support production teams, maintenance teams, and engineering buyers with clear communication from
              sample to delivery.
            </SectionTitle>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => {
              const Icon = item.icon;
              return (
                <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={item.title}>
                  <Icon className="text-teal-700" size={30} aria-hidden="true" />
                  <h2 className="mt-5 text-xl font-black text-slate-950">{item.title}</h2>
                  <p className="mt-3 leading-6 text-slate-600">{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
