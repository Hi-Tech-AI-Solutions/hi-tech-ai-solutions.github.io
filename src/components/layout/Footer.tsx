import React from 'react';
import Link from 'next/link';
import { Cpu, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#02050d] border-t border-white/10 text-gray-400 overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 border border-neon-cyan/40 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-neon-cyan" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Hi-Tech <span className="text-neon-cyan">AI Solutions</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              We don&apos;t just build software. We build intelligent solutions. Empowering
              educational institutions, enterprises, and innovators with next-generation AI systems.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Hi-Tech-AI-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-neon-cyan hover:text-neon-cyan flex items-center justify-center text-gray-300 transition-colors"
                aria-label="GitHub Organization"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Systems Operational</span>
              </div>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Core Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#solutions" className="hover:text-neon-cyan transition-colors">
                  AI-Powered Software
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-neon-cyan transition-colors">
                  Intelligent Automation
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-neon-cyan transition-colors">
                  Academic Technology
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-neon-cyan transition-colors">
                  Institutional Intelligence
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-neon-cyan transition-colors">
                  Custom AI SaaS
                </a>
              </li>
            </ul>
          </div>

          {/* Products & Ecosystem Col */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Ecosystem
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#ecosystem"
                  className="hover:text-neon-cyan transition-colors flex items-center justify-between"
                >
                  <span>JyotOS Platform</span>
                  <span className="text-[10px] font-mono text-violet-400 bg-violet-950/50 px-1.5 py-0.5 rounded border border-violet-500/30">
                    Flagship
                  </span>
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-neon-cyan transition-colors">
                  ScholarCard AI
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-neon-cyan transition-colors">
                  jyotAssist AI
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-neon-cyan transition-colors">
                  StaffBridge
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-neon-cyan transition-colors">
                  EventOS
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Col */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Governance & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/legal/privacy/" className="hover:text-neon-cyan transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms/" className="hover:text-neon-cyan transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/security/" className="hover:text-neon-cyan transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies/" className="hover:text-neon-cyan transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            © {currentYear} Hi-Tech AI Solutions & Services. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Institutional Grade Security</span>
            </span>
            <span>Version 1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
