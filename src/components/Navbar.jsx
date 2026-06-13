import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.jsx';
import Logo from './Logo.jsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/podcast', label: 'Podcast' },
  { to: '/upload', label: 'Upload Story' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/profile', label: 'Profile' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Logo */}
        <div className="min-w-0 shrink">
          <Logo size="md" />
        </div>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-600 text-white'
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            className="lg:hidden w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center"
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium ${
                    isActive
                      ? 'bg-brand-600 text-white'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
