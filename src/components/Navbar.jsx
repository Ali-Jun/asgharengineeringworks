import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { company, navItems } from '../data/company.js';
import CompanyLogo from './CompanyLogo.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import WhatsAppLogo from './WhatsAppLogo.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    [
      'rounded-md px-3 py-2 text-sm font-bold transition-colors focus-ring',
      isActive
        ? 'bg-[var(--brand)] text-white'
        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:hover:bg-slate-800',
    ].join(' ');

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/94 backdrop-blur dark:bg-[#0b1220]/94">
      <div className="container-shell">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link className="focus-ring flex min-w-0 max-w-[calc(100%-56px)] items-center gap-3 rounded-md" to="/" onClick={() => setIsOpen(false)}>
            <CompanyLogo className="h-11 w-16 border border-slate-200 p-1 sm:h-12 sm:w-20" />
            <span className="min-w-0 max-w-[170px] sm:max-w-none">
              <span className="block truncate text-sm font-black text-slate-950 sm:text-base xl:text-sm 2xl:text-base">
                Asghar Engineering Works
              </span>
              <span className="block truncate text-xs font-semibold text-slate-500">Precision manufacturing</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink className={linkClass} key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 xl:flex">
            <a className="btn-quiet text-sm" href={`tel:${company.phones[0].replaceAll('-', '')}`}>
              <Phone size={17} aria-hidden="true" />
              {company.phones[0]}
            </a>
            <ThemeToggle />
            <a
              className="btn-whatsapp text-sm"
              href={`${company.whatsappUrl}?text=${encodeURIComponent('Hello Asghar Engineering Works, I want to inquire about your products.')}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppLogo size={18} />
              WhatsApp
            </a>
          </div>

          <div className="hidden lg:block xl:hidden">
            <ThemeToggle />
          </div>

          <button
            className="focus-ring grid h-11 w-11 place-items-center rounded-md border border-slate-200 bg-white text-slate-900 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-slate-200 py-4 lg:hidden">
            <nav className="grid gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink className={linkClass} key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <a className="btn-quiet text-sm" href={`tel:${company.phones[0].replaceAll('-', '')}`}>
                <Phone size={17} aria-hidden="true" />
                {company.phones[0]}
              </a>
              <a
                className="btn-whatsapp text-sm"
                href={`${company.whatsappUrl}?text=${encodeURIComponent('Hello Asghar Engineering Works, I want to inquire about your products.')}`}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppLogo size={18} />
                WhatsApp
              </a>
              <ThemeToggle />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
