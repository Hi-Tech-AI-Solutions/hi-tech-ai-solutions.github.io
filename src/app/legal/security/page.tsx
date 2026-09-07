import React from 'react';
import { Metadata } from 'next';
import { Lock, Shield, Server, KeyRound, FileCode2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security Architecture & Compliance — Hi-Tech AI Solutions & Services',
  description:
    'Detailed technical breakdown of security controls, cryptographic isolation, encryption standards, and institutional data protection across Hi-Tech AI systems.',
};

export default function SecurityArchitecturePage() {
  const securityControls = [
    {
      title: 'Cryptographic RBAC & Least Privilege',
      icon: KeyRound,
      desc: 'Fine-grained access controls ensuring faculty, students, department HODs, and trustees only access their explicitly authorized operational data partitions.',
    },
    {
      title: 'AES-256 At-Rest Encryption',
      icon: Lock,
      desc: 'All institutional database records, student credentials, and historical marks transcripts are encrypted with military-grade AES-256 encryption at rest.',
    },
    {
      title: 'TLS 1.3 In-Transit Safeguards',
      icon: Shield,
      desc: 'Enforced HTTPS with TLS 1.3 cryptographic suites across all API endpoints, WebSockets, and PWA client requests with Strict-Transport-Security (HSTS).',
    },
    {
      title: 'Immutable Audit Telemetry',
      icon: FileCode2,
      desc: 'Every administrative modification, grade submission, and pass validation event is recorded in tamper-evident, append-only transaction ledgers.',
    },
  ];

  return (
    <div className="space-y-8 text-gray-300 font-sans leading-relaxed">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border bg-emerald-950/60 border-emerald-500/40 text-emerald-400 font-semibold">
            SECURITY ARCHITECTURE
          </span>
          <span className="text-xs font-mono text-gray-500">•</span>
          <span className="text-xs font-mono text-gray-400">Institutional Whitepaper • September 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Security Architecture & Technical Controls
        </h1>
        <p className="text-sm text-emerald-400 font-mono mt-1">
          Zero-Trust Infrastructure Safeguarding the Hi-Tech Institutional Cloud
        </p>
      </div>

      {/* Grid of Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {securityControls.map((ctrl, idx) => {
          const Icon = ctrl.icon;
          return (
            <div key={idx} className="p-5 rounded-2xl bg-[#080e1a] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Icon className="w-4 h-4 text-emerald-400" />
                <span>{ctrl.title}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-sans">
                {ctrl.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive: Multi-Tenant Schema Partitioning */}
      <section className="space-y-3 p-6 rounded-2xl bg-[#080e1a] border border-emerald-500/30">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 text-emerald-400">
          <Server className="w-5 h-5" />
          <span>Multi-Tenant Schema Partitioning Architecture</span>
        </h2>
        <p className="text-sm">
          Unlike legacy monolithic software that mingles multiple colleges into a single flat table with loose column filters, the <strong>JyotOS Operating Platform Core</strong> implements strict logical and physical PostgreSQL schema isolation:
        </p>
        <ul className="space-y-1.5 text-xs font-mono text-emerald-200">
          <li>• Dedicated schema namespaces per participating college or educational trust.</li>
          <li>• Database-level connection pool tenancy binding — queries cannot cross tenant boundaries.</li>
          <li>• Isolated cryptographic encryption keys for each institutional repository.</li>
          <li>• Automated transaction rollbacks upon any authorization anomaly detection.</li>
        </ul>
      </section>

      {/* AI Inference Security */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span>AI Inference & Confidential Computing</span>
        </h2>
        <p className="text-sm">
          Inference requests made to <strong>AAI Engine</strong> or <strong>jyotAssist AI</strong> execute in memory-restricted stateless workers. No institutional session data is retained post-inference in model memory buffers, guaranteeing that confidential institutional intelligence remains strictly sovereign.
        </p>
      </section>

      {/* Vulnerability Management */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight">Vulnerability Management & Responsible Disclosure</h2>
        <p className="text-sm">
          We maintain automated continuous integration vulnerability scans across our dependency matrices, container base images, and Next.js static asset bundles. Security researchers and campus systems administrators are invited to report findings directly to <a href="mailto:hitech.nft@gmail.com" className="text-neon-cyan underline">hitech.nft@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
