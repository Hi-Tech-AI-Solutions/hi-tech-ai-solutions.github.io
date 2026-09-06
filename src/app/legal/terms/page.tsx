import React from 'react';
import { Metadata } from 'next';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service & Institutional SLA — Hi-Tech AI Solutions & Services',
  description:
    'Institutional master services agreement, acceptable use guidelines, and enterprise SLAs governing the Hi-Tech AI software and JyotOS ecosystem.',
};

export default function TermsOfServicePage() {
  return (
    <div className="space-y-8 text-gray-300 font-sans leading-relaxed">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border bg-sky-950/60 border-sky-500/40 text-sky-400 font-semibold">
            MASTER SERVICE AGREEMENT
          </span>
          <span className="text-xs font-mono text-gray-500">•</span>
          <span className="text-xs font-mono text-gray-400">Version 2.4 • Effective September 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Terms of Service & Deployment Agreement
        </h1>
        <p className="text-sm text-sky-300 font-mono mt-1">
          Operational Standards, SLA Commitments & Licensing for Hi-Tech AI Systems
        </p>
      </div>

      {/* SLA Guarantees Card */}
      <div className="p-5 rounded-2xl bg-[#080e1a] border border-sky-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono uppercase text-sky-400 font-bold block mb-1">
            Service Level Commitment (SLA)
          </span>
          <p className="text-xs text-gray-300">
            Engineered for continuous production availability with rapid emergency support response.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 font-mono">
          <div className="text-center px-3 py-1.5 rounded-xl bg-black/40 border border-sky-500/20">
            <div className="text-lg font-bold text-sky-400">99.9%</div>
            <div className="text-[10px] text-gray-400">Core Uptime</div>
          </div>
          <div className="text-center px-3 py-1.5 rounded-xl bg-black/40 border border-sky-500/20">
            <div className="text-lg font-bold text-emerald-400">&lt; 4 Hr</div>
            <div className="text-[10px] text-gray-400">Sev-1 Response</div>
          </div>
        </div>
      </div>

      {/* Section 1: Agreement */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight">1. Acceptance of Terms</h2>
        <p className="text-sm">
          By accessing or utilizing services provided by <strong>Hi-Tech AI Solutions & Services</strong>, including <strong>JyotOS</strong>, <strong>ScholarCard AI</strong>, <strong>StaffBridge</strong>, <strong>EventOS</strong>, and custom automation architectures, client institutions agree to be bound by these Terms of Service.
        </p>
      </section>

      {/* Section 2: Deployment Scope */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight">2. Licensing & Multi-Tenant Deployment</h2>
        <p className="text-sm">
          Hi-Tech AI Solutions grants the client institution a non-exclusive, non-transferable license to operate contracted modules across designated campus departments, student bodies, and faculty administrators.
        </p>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span>Client institutions maintain complete ownership of all student academic data, faculty records, and proprietary operational datasets uploaded to the platform.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span>The underlying cognitive algorithms, source code, design systems, and AAI engine models remain the proprietary intellectual property of Hi-Tech AI Solutions & Services.</span>
          </li>
        </ul>
      </section>

      {/* Section 3: Acceptable Use */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight">3. Acceptable Use & Academic Integrity</h2>
        <p className="text-sm">
          Users of the platform agree to adhere strictly to standards of academic integrity, legal compliance, and authorized access governance.
        </p>
        <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs space-y-1 text-gray-300">
          <div className="font-bold text-rose-400 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Prohibited Conduct</span>
          </div>
          <p>
            Reverse engineering compiled software, attempting cross-tenant cryptographic partition breach, injecting unauthorized adversarial prompts into AI agent interfaces, or distributing fraudulent examination credentials is strictly prohibited and results in immediate service termination.
          </p>
        </div>
      </section>

      {/* Section 4: Governing Law */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight">4. Governing Law & Jurisdiction</h2>
        <p className="text-sm">
          These Terms of Service and all institutional deployment contracts shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in <strong>Surat, Gujarat, India</strong>.
        </p>
      </section>
    </div>
  );
}
