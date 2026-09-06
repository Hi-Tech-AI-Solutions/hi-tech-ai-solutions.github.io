'use client';

import React, { useState } from 'react';
import {
  Network,
  Shield,
  Layers,
  Cpu,
  Lock,
  ArrowRight,
  CheckCircle2,
  Share2,
  Server,
  Sparkles,
  FileCode2,
} from 'lucide-react';

interface ArchLayer {
  id: string;
  number: string;
  name: string;
  tagline: string;
  icon: React.ElementType;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  description: string;
  protocols: string[];
  securitySafeguards: string[];
  participatingSystems: string[];
}

const ARCH_LAYERS: ArchLayer[] = [
  {
    id: 'layer-apps',
    number: '04',
    name: 'Synchronized Application Suite',
    tagline: 'Independently Deployable, Unified by Design',
    icon: Layers,
    accentColor: 'text-sky-400',
    borderColor: 'border-sky-500/40',
    glowColor: 'rgba(56,189,248,0.2)',
    description:
      'Domain-specific production applications engineered to handle campus admissions, digital student credentialing, faculty leave governance, high-concurrency event lifecycle, and operational analytics.',
    protocols: ['RESTful JSON APIs', 'WebSocket Real-time Events', 'PWA Offline Cache', 'Encrypted QR Protocols'],
    securitySafeguards: [
      'Client-side sanitization and CSRF token binding',
      'Zero sensitive institutional data cached in local browser storage',
      'Tamper-evident verification watermarks on digital credentials',
    ],
    participatingSystems: ['ScholarCard AI', 'StaffBridge', 'EventOS', 'Admission Analytics Hub'],
  },
  {
    id: 'layer-ai',
    number: '03',
    name: 'Cognitive AI & Multi-Agent Nexus',
    tagline: 'Proprietary AAI Engine & Conversational Intelligence',
    icon: Cpu,
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/40',
    glowColor: 'rgba(139,92,246,0.2)',
    description:
      'The cognitive reasoning layer coordinating autonomous agents, anomaly detection algorithms, RAG knowledge retrieval, and predictive analytics models across the institutional lifecycle.',
    protocols: ['LangChain / LlamaIndex RAG Pipelines', 'Vector Embedding Streams', 'Deterministic Business Rules', 'Anomaly Scoring Engines'],
    securitySafeguards: [
      'Zero-leak student confidentiality — LLM prompts stripped of PII',
      'Private vector embeddings isolated per college partition',
      'Deterministic rule guardrails preventing hallucinated approvals',
    ],
    participatingSystems: ['AAI (Academic Artificial Intelligence)', 'Ask Jyot Multi-Agent Assistant', 'Predictive Anomaly Scanners'],
  },
  {
    id: 'layer-core',
    number: '02',
    name: 'JyotOS Operating Platform Core',
    tagline: 'High-Throughput Institutional Kernel',
    icon: Server,
    accentColor: 'text-neon-cyan',
    borderColor: 'border-cyan-500/40',
    glowColor: 'rgba(0,240,255,0.25)',
    description:
      'The central nervous system linking students, faculty, administrators, and trustees into one synchronized institutional directory with single sign-on, auditing, and multi-tenant partitioning.',
    protocols: ['Next.js 15 App Router', 'FastAPI Micro-Core', 'Asynchronous Task Workers', 'Event Bus Dispatcher'],
    securitySafeguards: [
      'Granular Role-Based Access Control (RBAC) with least-privilege policies',
      'Immutable audit logging capturing every administrative transaction',
      'Automated database transactions with instantaneous rollback on error',
    ],
    participatingSystems: ['JyotOS Core Platform', 'Multi-Tenant Partition Engine', 'Institutional Notification Dispatcher'],
  },
  {
    id: 'layer-security',
    number: '01',
    name: 'Data Sovereignty & Security Backbone',
    tagline: 'Institutional Grade Zero-Leak Privacy Infrastructure',
    icon: Shield,
    accentColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    glowColor: 'rgba(16,185,129,0.2)',
    description:
      'The foundational trust infrastructure guaranteeing strict institutional data sovereignty, AES-256 at-rest encryption, isolated database schemas, and cryptographic integrity verification.',
    protocols: ['PostgreSQL Relational + pgvector', 'TLS 1.3 in-transit encryption', 'AES-256 database storage', 'Redis In-Memory Session Cache'],
    securitySafeguards: [
      'Physical & logical multi-tenant college data partitioning',
      'Strict Zero Data Leakage architecture — your campus data is never shared',
      'Cryptographically signed tokens and automated vulnerability scanners',
    ],
    participatingSystems: ['Encrypted PostgreSQL Core', 'pgvector Knowledge Store', 'Secure Identity Vault'],
  },
];

export default function EnterpriseArchitectureBlueprint() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('layer-core');
  const selectedLayer = ARCH_LAYERS.find((l) => l.id === selectedLayerId) || ARCH_LAYERS[2];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(139,92,246,0.2)]">
          <Network className="w-3.5 h-3.5 text-violet-400" />
          <span>Unified Enterprise Architecture</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Engineered for Sovereignty.{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-sky-300 to-violet-400">
            Architected for Scale.
          </span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
          Every platform in the Hi-Tech ecosystem operates independently while adhering to a unified,
          zero-leak enterprise blueprint: shared authentication, single source of truth, API-first
          interoperability, and cognitive AI guardrails.
        </p>
      </div>

      {/* Interactive Architecture Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left Column: Interactive 4-Tier Blueprint Stack */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center justify-between px-2 mb-2">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <Share2 className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Click a Layer to Inspect Architecture</span>
            </span>
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Cross-System Interop</span>
            </span>
          </div>

          <div className="space-y-3.5">
            {ARCH_LAYERS.map((layer) => {
              const isSelected = layer.id === selectedLayerId;
              const Icon = layer.icon;

              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 relative border flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? `bg-[#080e1a] ${layer.borderColor} shadow-[0_0_30px_rgba(0,240,255,0.15)]`
                      : 'cyber-glass border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all ${
                        isSelected
                          ? `bg-white/10 ${layer.borderColor} ${layer.accentColor}`
                          : 'bg-white/5 border-white/10 text-gray-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400">
                          LAYER {layer.number}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-neon-cyan transition-colors">
                        {layer.name}
                      </h4>
                      <p className="text-xs text-gray-400 font-mono">{layer.tagline}</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-400">
                    <span className={isSelected ? layer.accentColor : 'group-hover:text-white'}>
                      Inspect
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'translate-x-1 ' + layer.accentColor : 'group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Architectural Principles Matrix */}
          <div className="p-5 rounded-2xl bg-[#080e1a] border border-white/10 mt-6">
            <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Core Architectural Tenets</span>
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Single Source of Truth</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Shared Identity (SSO)</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>API-First Integration</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                <span>Zero Data Leaks</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Layer Technical Inspector HUD */}
        <div className="lg:col-span-6">
          <div className="cyber-glass rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] space-y-6 relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded border bg-white/5 text-neon-cyan border-cyan-500/30">
                  LAYER {selectedLayer.number} SPECIFICATION
                </span>
                <span className="text-xs font-mono text-gray-400">HUD Telemetry</span>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Production Ready</span>
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>{selectedLayer.name}</span>
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                {selectedLayer.description}
              </p>
            </div>

            {/* Security & Data Sovereignty Safeguards */}
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2 font-semibold">
                <Shield className="w-4 h-4" />
                <span>Security & Confidentiality Safeguards</span>
              </h4>
              <ul className="space-y-2">
                {selectedLayer.securitySafeguards.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Communication Protocols & Technologies */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <FileCode2 className="w-3.5 h-3.5 text-neon-cyan" />
                <span>Communication Protocols & Engines</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedLayer.protocols.map((protocol, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#080e1a] border border-white/10 text-cyan-300"
                  >
                    {protocol}
                  </span>
                ))}
              </div>
            </div>

            {/* Participating Systems & Modules */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                <span>Synchronized Systems in this Layer</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedLayer.participatingSystems.map((sys, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono font-medium px-3 py-1 rounded-lg bg-violet-950/40 border border-violet-500/30 text-violet-300"
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
