'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cpu, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-emerald-500/20 border border-neon-cyan/40 flex items-center justify-center group-hover:border-neon-cyan group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <Cpu className="w-5 h-5 text-neon-cyan group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                Hi-Tech <span className="text-neon-cyan">AI Solutions</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                Intelligent Systems & Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            <Link
              href="#solutions"
              className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#ecosystem"
              className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors flex items-center gap-1.5"
            >
              <span>Ecosystem</span>
              <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-violet-500/20 border border-violet-500/30 text-violet-300 rounded">
                5 Active
              </span>
            </Link>
            <Link
              href="#architecture"
              className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Architecture
            </Link>
            <Link
              href="#proof"
              className="text-sm font-medium text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Impact
            </Link>
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="btn-cyber-primary text-xs uppercase tracking-wider py-2.5 px-5"
            >
              <span>Build With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070b14]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-neon-cyan hover:bg-white/5"
          >
            Solutions
          </Link>
          <Link
            href="#ecosystem"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-neon-cyan hover:bg-white/5"
          >
            Ecosystem (JyotOS & Suite)
          </Link>
          <Link
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-neon-cyan hover:bg-white/5"
          >
            Architecture
          </Link>
          <Link
            href="#proof"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-neon-cyan hover:bg-white/5"
          >
            Impact & Proof
          </Link>
          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-cyber-primary w-full py-3 justify-center text-sm"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Build With Us</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
