import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MessageCircle } from 'lucide-react';
import MotionToggle from '@/components/ui/MotionToggle';
import { CONTACT, telUrl, whatsappUrl, mailtoUrl } from '@/lib/site';

// Root-relative hashes so these links also work from the legal pages and the 404 page.
const SOLUTION_LINKS = [
  'AI-Powered Software',
  'Intelligent Automation',
  'Academic Technology',
  'Institutional Intelligence',
  'Custom AI SaaS',
];

const ECOSYSTEM_LINKS = ['ScholarCard AI', 'jyotAssist AI', 'StaffBridge', 'EventOS'];

const LEGAL_LINKS = [
  { href: '/legal/', label: 'Central Legal Hub' },
  { href: '/legal/privacy/', label: 'Privacy Policy' },
  { href: '/legal/terms/', label: 'Terms of Service' },
  { href: '/legal/security/', label: 'Security Architecture' },
  { href: '/legal/cookies/', label: 'Cookie Policy' },
  { href: '/legal/disclaimer/', label: 'Disclaimer & Bounds' },
];

export default function Footer() {
  // Evaluated at build time (static export), so it follows the year of the latest deploy.
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0B0F19] border-t border-white/10 text-gray-400 overflow-hidden">
      {/* md:pb-28 keeps the last row clear of the floating design switch, which sits bottom-right from md up */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pb-28 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#111724] border border-neon-cyan/40 p-1 flex items-center justify-center">
                <svg viewBox="0 0 128 128" className="w-full h-full" fill="none" aria-hidden="true">
                  <path d="M38 28v72M90 28v72M38 64h52" stroke="#B7C2D6" strokeWidth="14" strokeLinecap="round" />
                  <circle cx="38" cy="28" r="8" fill="#B7C2D6" />
                  <circle cx="38" cy="100" r="8" fill="#10B981" />
                  <circle cx="90" cy="28" r="8" fill="#B7C2D6" />
                  <circle cx="90" cy="100" r="8" fill="#10B981" />
                  <circle cx="64" cy="64" r="10" fill="#FFFFFF" stroke="#B7C2D6" strokeWidth="4" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Hi-Tech <span className="text-neon-cyan">AI Solutions</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              We don&apos;t just build software. We build intelligent solutions. Empowering
              educational institutions, enterprises, and innovators with next-generation AI systems.
            </p>

            {/* Direct contact: the phone number and email must be findable without opening a dialog */}
            <ul className="pt-1 space-y-2 text-sm">
              <li>
                <a href={telUrl} className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-gray-400" aria-hidden="true" />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
              <li>
                <a href={mailtoUrl()} className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-gray-400" aria-hidden="true" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
            </ul>

            {/* Verified Google Business Address & Rating */}
            <div className="pt-2 space-y-2 text-xs font-mono text-gray-400">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400" aria-hidden="true">📍</span>
                <span>
                  Bhavani Complex, Katargam, Surat, Gujarat 395004
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <span>5.0</span>
                  <span aria-hidden="true">★★★★★</span>
                </span>
                <span className="text-gray-400" aria-hidden="true">|</span>
                <span className="text-cyan-400">Verified Google Business</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Hi-Tech-AI-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-neon-cyan hover:text-white flex items-center justify-center text-gray-300 transition-colors"
                aria-label="GitHub Organization"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" aria-hidden="true" />
                <span>24/7 Operations</span>
              </div>
            </div>
          </div>

          {/* Solutions Col */}
          <nav aria-label="Core solutions">
            <h2 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Core Solutions
            </h2>
            <ul className="space-y-2.5 text-sm">
              {SOLUTION_LINKS.map((label) => (
                <li key={label}>
                  <Link href="/#solutions" className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Products & Ecosystem Col */}
          <nav aria-label="Product ecosystem">
            <h2 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Ecosystem
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#jyotos"
                  className="hover:text-white transition-colors flex items-center justify-between"
                >
                  <span>JyotOS Platform</span>
                  <span className="text-[10px] font-mono text-violet-400 bg-violet-950/50 px-1.5 py-0.5 rounded border border-violet-500/30">
                    Flagship
                  </span>
                </Link>
              </li>
              {ECOSYSTEM_LINKS.map((label) => (
                <li key={label}>
                  <Link href="/#ecosystem" className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal & Compliance Col */}
          <nav aria-label="Governance and legal">
            <h2 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Governance & Legal
            </h2>
            <ul className="space-y-2.5 text-sm">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <div>
            © {currentYear} Hi-Tech AI Solutions & Services. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>Institutional Grade Security</span>
            </span>
            <MotionToggle alwaysShowLabel />
            <span>Version 1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
