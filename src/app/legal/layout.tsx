import React from 'react';
import Link from 'next/link';
import { Shield, ArrowLeft, FileText, Lock, Cookie, Scale, AlertCircle } from 'lucide-react';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cyber-bg cyber-grid-bg pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Digital Headquarters</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" />
            <span>Official Institutional Governance • Surat, Gujarat</span>
          </div>
        </div>

        {/* Quick Document Navigation Strip */}
        <div className="flex flex-wrap gap-2 mb-10 p-2 rounded-2xl bg-[#080e1a] border border-white/10">
          <Link
            href="/legal/"
            className="text-xs font-mono px-3 py-1.5 rounded-xl text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <Scale className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Legal Hub</span>
          </Link>
          <Link
            href="/legal/privacy/"
            className="text-xs font-mono px-3 py-1.5 rounded-xl text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-violet-400" />
            <span>Privacy Policy</span>
          </Link>
          <Link
            href="/legal/terms/"
            className="text-xs font-mono px-3 py-1.5 rounded-xl text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <Scale className="w-3.5 h-3.5 text-sky-400" />
            <span>Terms of Service</span>
          </Link>
          <Link
            href="/legal/security/"
            className="text-xs font-mono px-3 py-1.5 rounded-xl text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Security Architecture</span>
          </Link>
          <Link
            href="/legal/cookies/"
            className="text-xs font-mono px-3 py-1.5 rounded-xl text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <Cookie className="w-3.5 h-3.5 text-amber-400" />
            <span>Cookie Policy</span>
          </Link>
          <Link
            href="/legal/disclaimer/"
            className="text-xs font-mono px-3 py-1.5 rounded-xl text-gray-300 hover:text-neon-cyan hover:bg-white/5 transition-all flex items-center gap-1.5"
          >
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>Disclaimer</span>
          </Link>
        </div>

        {/* Document Content Canvas */}
        <div className="cyber-glass rounded-3xl p-6 sm:p-12 border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
          {children}
        </div>

        {/* Legal Footer Note */}
        <div className="mt-10 p-6 rounded-2xl bg-[#080e1a] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            <span>Corporate Entity: </span>
            <strong className="text-white">Hi-Tech AI Solutions & Services</strong>
            <span className="block text-[11px] text-gray-500">Bhavani Complex, Katargam, Surat, Gujarat 395004</span>
          </div>
          <div className="text-right">
            <span>Governance Inquiries: </span>
            <a href="mailto:hitech.nft@gmail.com" className="text-neon-cyan hover:underline">
              hitech.nft@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
