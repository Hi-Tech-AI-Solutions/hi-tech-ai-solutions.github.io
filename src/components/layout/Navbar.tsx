'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Zap, Shield } from 'lucide-react';
import { useThemeMode } from '@/context/ThemeContext';
import MotionToggle from '@/components/ui/MotionToggle';

// Root-relative hashes ("/#contact", not "#contact") so the same links work from the
// legal pages and the 404 page, where a bare hash pointed at a section that is not there.
const NAV_LINKS: { href: string; label: string; badge?: string }[] = [
  { href: '/#solutions', label: 'Solutions' },
  { href: '/#ecosystem', label: 'Ecosystem', badge: '13 Live' },
  { href: '/#architecture', label: 'Architecture' },
  { href: '/#proof', label: 'Impact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useThemeMode();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isCockpit = theme === 'quantum-cockpit';
  const themeLabel = isCockpit
    ? 'Design: Quantum Cockpit. Switch to Classic Studio'
    : 'Design: Classic Studio. Switch to Quantum Cockpit';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    // Also run once on load: a deep link or a restored scroll position starts mid-page.
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape closes the mobile menu and puts focus back on the button that opened it.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0B0F19]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan rounded-lg p-1"
          >
            <div className="w-10 h-10 shrink-0 rounded-xl bg-[#111724] border border-neon-cyan/40 p-1 flex items-center justify-center group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(183,194,214,0.4)] transition-all">
              <svg viewBox="0 0 128 128" className="w-full h-full" fill="none" aria-hidden="true">
                <path d="M38 28v72M90 28v72M38 64h52" stroke="#B7C2D6" strokeWidth="14" strokeLinecap="round" />
                <circle cx="38" cy="28" r="8" fill="#B7C2D6" />
                <circle cx="38" cy="100" r="8" fill="#10B981" />
                <circle cx="90" cy="28" r="8" fill="#B7C2D6" />
                <circle cx="90" cy="100" r="8" fill="#10B981" />
                <circle cx="64" cy="64" r="10" fill="#FFFFFF" stroke="#B7C2D6" strokeWidth="4" />
              </svg>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                Hi-Tech <span className="text-neon-cyan">AI Solutions</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase flex items-center gap-1">
                <span>Fleet:</span>
                <strong className="text-emerald-400">13 Active</strong>
              </span>
            </div>
          </Link>

          {/* Desktop navigation. Starts at lg: at 768 px the links, logo and button did not fit and overlapped. */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 whitespace-nowrap" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1.5 py-2"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-violet-500/20 border border-violet-500/30 text-violet-300 rounded font-mono">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop call to action, design switch and motion switch */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              title={themeLabel}
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#111724] hover:bg-white/10 border border-white/10 hover:border-neon-cyan/50 text-xs font-mono text-gray-300 hover:text-white transition-all"
            >
              {isCockpit ? (
                <>
                  <Zap className="w-3.5 h-3.5 text-neon-cyan animate-pulse" aria-hidden="true" />
                  <span className="text-neon-cyan font-bold">Cockpit</span>
                </>
              ) : (
                <>
                  <Shield className="w-3.5 h-3.5 text-violet-400" aria-hidden="true" />
                  <span>Classic</span>
                </>
              )}
            </button>

            <MotionToggle className="hidden xl:inline-flex" />

            <Link
              href="/#contact"
              className="btn-cyber-primary text-xs uppercase tracking-wider py-2.5 px-5 whitespace-nowrap"
            >
              <span>Build With Us</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile and tablet: menu button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden shrink-0 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile and tablet dropdown menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-white/5"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="px-2 py-0.5 text-xs font-semibold bg-violet-500/20 text-violet-300 rounded font-mono">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}

          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-cyber-primary w-full text-center text-xs uppercase tracking-wider py-3"
            >
              <span>Build With Us</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Display preferences live here on small screens so the header bar stays uncluttered */}
          <div className="pt-3 mt-2 border-t border-white/10 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={themeLabel}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-colors"
            >
              {isCockpit ? (
                <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              ) : (
                <Shield className="w-3.5 h-3.5" aria-hidden="true" />
              )}
              <span>Design: {isCockpit ? 'Cockpit' : 'Classic'}</span>
            </button>
            <MotionToggle alwaysShowLabel />
          </div>
        </div>
      )}
    </header>
  );
}
