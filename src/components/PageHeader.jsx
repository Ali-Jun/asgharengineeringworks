import ScrollReveal from './ScrollReveal.jsx';

export default function PageHeader({ eyebrow, title, children }) {
  return (
    <section className="industrial-grid border-b border-slate-200 bg-white py-16 md:py-20">
      <div className="container-shell">
        <ScrollReveal className="max-w-3xl">
          {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
          <h1 className="font-display text-3xl font-black leading-tight text-slate-950 sm:text-4xl md:text-6xl">{title}</h1>
          {children ? <p className="mt-5 text-lg leading-8 text-slate-600">{children}</p> : null}
        </ScrollReveal>
      </div>
    </section>
  );
}
