import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, XCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie & Storage Policy — Hi-Tech AI Solutions & Services',
  description:
    'Technical explanation of cookie usage, session storage, and the strict absence of advertising trackers on the Hi-Tech AI website and platforms.',
};

export default function CookiePolicyPage() {
  return (
    <div className="space-y-8 text-gray-300 font-sans leading-relaxed">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border bg-amber-950/60 border-amber-500/40 text-amber-400 font-semibold">
            COOKIE & STORAGE POLICY
          </span>
          <span className="text-xs font-mono text-gray-500">•</span>
          <span className="text-xs font-mono text-gray-400">Version 2.4 • Effective September 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Cookie & Local Storage Policy
        </h1>
        <p className="text-sm text-amber-300 font-mono mt-1">
          Zero-Tracker Architecture & Transparent Technical State Management
        </p>
      </div>

      {/* Zero Tracker Badge */}
      <div className="p-5 rounded-2xl bg-[#080e1a] border border-amber-500/30 flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-white font-mono uppercase">
            Strict Zero-Advertising Tracking Commitment
          </h3>
          <p className="text-xs text-gray-300">
            Hi-Tech AI Solutions & Services does NOT deploy third-party advertising tracking pixels, cross-site profiling beacons, or commercial retargeting cookies on this website.
          </p>
        </div>
      </div>

      {/* Section 1: What We Use */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight">1. Essential Technical Storage Only</h2>
        <p className="text-sm">
          Our websites and cloud portals utilize strictly necessary client-side storage technologies to ensure responsive user interfaces, authentication state, and keyboard navigation:
        </p>
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white">Theme & UI State</span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">Local Storage</span>
            </div>
            <p className="text-xs text-gray-400">
              Preserves dark-mode cyberpunk interface tokens, active drawer states, and assessment selections across page reloads.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white">Institutional Authentication (When Logged In)</span>
              <span className="text-[10px] font-mono text-violet-400 bg-violet-950/40 px-2 py-0.5 rounded border border-violet-500/30">Secure HttpOnly Cookie</span>
            </div>
            <p className="text-xs text-gray-400">
              In contracted institutional portals (e.g. JyotOS, StaffBridge), cryptographic session tokens are stored in secure, encrypted HttpOnly cookies to authenticate staff and students without exposing tokens to client script attacks.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: What We Don't Do */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight">2. What We Explicitly Avoid</h2>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>No commercial ad-network pixels (e.g. Meta Pixel, TikTok pixel, or third-party ad brokers).</span>
          </li>
          <li className="flex items-start gap-2">
            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>No fingerprinting or cross-domain behavioral monitoring.</span>
          </li>
          <li className="flex items-start gap-2">
            <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <span>No selling, trading, or leasing of visitor telemetry data.</span>
          </li>
        </ul>
      </section>

      {/* Section 3: User Control */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight">3. User Control & Clearing</h2>
        <p className="text-sm">
          Visitors retain complete control over their browser storage. You can clear cookies and local storage at any time through your browser settings without impacting your ability to review our public showcase materials.
        </p>
      </section>
    </div>
  );
}
