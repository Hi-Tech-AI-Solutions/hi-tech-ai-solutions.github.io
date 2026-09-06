import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Shield, FileText, Scale, Lock, Cookie, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Central Legal Hub & Governance — Hi-Tech AI Solutions & Services',
  description:
    'Official corporate governance documents, privacy standards, security architectures, and institutional terms for Hi-Tech AI Solutions & Services and the JyotOS product ecosystem.',
};

export default function LegalHubPage() {
  const documents = [
    {
      title: 'Privacy Policy & Data Sovereignty',
      href: '/legal/privacy/',
      icon: FileText,
      color: 'text-violet-400',
      border: 'border-violet-500/30',
      tag: 'ZERO DATA LEAKAGE',
      summary:
        'Our strict commitment to confidential student and institutional data isolation, zero unauthorized LLM ingestion, and compliance with the Digital Personal Data Protection (DPDP) Act.',
    },
    {
      title: 'Institutional Terms of Service',
      href: '/legal/terms/',
      icon: Scale,
      color: 'text-sky-400',
      border: 'border-sky-500/30',
      tag: 'ENTERPRISE SLA',
      summary:
        'Terms governing institutional subscriptions, deployment agreements, uptime commitments (99.9%), licensing scope, and multi-tenant operational rights.',
    },
    {
      title: 'Security Architecture & Compliance',
      href: '/legal/security/',
      icon: Lock,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30',
      tag: 'CRYPTOGRAPHIC RBAC',
      summary:
        'In-depth technical specifications of our AES-256 at-rest encryption, TLS 1.3 in-transit safeguards, immutable audit logging, and vulnerability management posture.',
    },
    {
      title: 'Cookie & Storage Transparency',
      href: '/legal/cookies/',
      icon: Cookie,
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      tag: 'ZERO TRACKING PIXELS',
      summary:
        'Complete transparency regarding our technical session management, absence of commercial ad-tracking cookies, and client-side data sovereignty.',
    },
    {
      title: 'Institutional Disclaimer & Prototype Status',
      href: '/legal/disclaimer/',
      icon: AlertCircle,
      color: 'text-rose-400',
      border: 'border-rose-500/30',
      tag: 'TRANSPARENT CLASSIFICATION',
      summary:
        'Official lifecycle demarcations distinguishing live commercial deployments from active prototypes, experimental algorithms, and pro-bono educational initiatives.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-neon-cyan text-xs font-mono uppercase tracking-wider mb-3">
          <Shield className="w-3.5 h-3.5" />
          <span>Governance Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Central Legal Hub & Governance Directory
        </h1>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-2 font-sans">
          Hi-Tech AI Solutions & Services operates as an institutional technology partner. This hub houses the
          authoritative legal frameworks, privacy safeguards, and architectural security standards governing our
          entire ecosystem, including <strong>JyotOS</strong>, <strong>ScholarCard AI</strong>, <strong>StaffBridge</strong>, and <strong>EventOS</strong>.
        </p>
      </div>

      {/* Grid of Legal Documents */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {documents.map((doc, idx) => {
          const Icon = doc.icon;
          return (
            <Link
              key={idx}
              href={doc.href}
              className="p-6 rounded-2xl bg-[#080e1a] border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border bg-white/5 font-semibold ${doc.color} ${doc.border}`}>
                    {doc.tag}
                  </span>
                  <Icon className={`w-5 h-5 ${doc.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">
                  {doc.title}
                </h3>
                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  {doc.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-white transition-colors">
                <span>Inspect Full Document</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Governance Guarantees */}
      <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
        <h4 className="text-xs font-mono uppercase tracking-wider text-neon-cyan flex items-center gap-2 font-bold">
          <CheckCircle2 className="w-4 h-4" />
          <span>Institutional Trust Commitment</span>
        </h4>
        <p className="text-xs text-gray-300 leading-relaxed font-sans">
          All client data processed across the Hi-Tech ecosystem remains strictly under institutional ownership. We do not sell, license, or expose proprietary academic records, student identities, or employee attendance datasets to public AI training corpuses.
        </p>
      </div>
    </div>
  );
}
