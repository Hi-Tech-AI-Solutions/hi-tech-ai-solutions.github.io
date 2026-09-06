'use client';

import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  MessageSquare,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Calendar,
  FileCheck,
  TrendingUp,
} from 'lucide-react';

interface ArchTier {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgColor: string;
  description: string;
  keyFunctions: string[];
}

const ARCH_TIERS: ArchTier[] = [
  {
    id: 'core',
    name: 'JyotOS Core OS',
    badge: 'TIER 1 — KERNEL',
    icon: Layers,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    bgColor: 'bg-cyan-950/40',
    description:
      'The central institutional foundation providing high-security authentication, role-based access control (RBAC), multi-tenant college data partitioning, and unified audit logs.',
    keyFunctions: [
      'Institutional Data Isolation & Zero-Leak Security',
      'Campus-wide Single Sign-On (SSO) & Granular Roles',
      'High-throughput PostgreSQL data orchestration',
      'Unified schema linking students, faculty, and leadership',
    ],
  },
  {
    id: 'aai',
    name: 'AAI — Academic AI Engine',
    badge: 'TIER 2 — COGNITIVE ENGINE',
    icon: Cpu,
    color: 'text-violet-400',
    borderColor: 'border-violet-500/40',
    bgColor: 'bg-violet-950/40',
    description:
      'The proprietary intelligence engine running machine learning models, deterministic validation rules, anomaly detectors, and predictive analytics across the institution.',
    keyFunctions: [
      'Automated attendance anomaly and risk flags',
      'Intelligent marks aggregation and grade predictions',
      'Predictive intake forecasting and seat matrix models',
      'Multi-agent task dispatch for routine approvals',
    ],
  },
  {
    id: 'askjyot',
    name: 'Ask Jyot — Conversational Agent',
    badge: 'TIER 3 — CONVERSATIONAL INTERFACE',
    icon: MessageSquare,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgColor: 'bg-emerald-950/40',
    description:
      'The human-facing conversational interface grounded in institutional circulars, syllabi, and administrative regulations via Retrieval-Augmented Generation (RAG).',
    keyFunctions: [
      '24/7 student inquiry resolution on web & WhatsApp',
      'Faculty timetable, leave balance, and duty queries',
      'Executive natural-language queries (e.g. "show today\'s overall attendance")',
      'Zero-hallucination answers citing exact institutional documents',
    ],
  },
  {
    id: 'applications',
    name: 'Institutional Applications',
    badge: 'TIER 4 — APPLICATION SUITE',
    icon: GraduationCap,
    color: 'text-sky-400',
    borderColor: 'border-sky-500/40',
    bgColor: 'bg-sky-950/40',
    description:
      'The operational application suite coordinating specific campus departments into a harmonious digital campus workflow.',
    keyFunctions: [
      'Admissions, Merit Lists & Student Onboarding',
      'Internal Examinations, Timetables & Grade Sheets',
      'EventOS Institutional Event Lifecycle Integration',
      'StaffBridge Faculty Governance & Leave Orchestration',
    ],
  },
];

const MODULE_PILLS = [
  { label: 'Admissions', icon: Users },
  { label: 'Internal Exams', icon: FileCheck },
  { label: 'Campus Events', icon: Calendar },
  { label: 'Analytics Hub', icon: TrendingUp },
  { label: 'Faculty Governance', icon: ShieldCheck },
  { label: 'Placement Cell', icon: GraduationCap },
];

export default function JyotOSShowcase() {
  const [activeTierId, setActiveTierId] = useState<string>('core');
  const activeTier = ARCH_TIERS.find((t) => t.id === activeTierId) || ARCH_TIERS[0];

  return (
    <section id="jyotos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-violet-600/10 blur-[150px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-neon-cyan text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flagship Institutional Ecosystem</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          One Campus.{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-sky-400 to-violet-400">
            One Intelligence.
          </span>
        </h2>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-sans">
          From admissions to academics, communication to analytics, <strong>JyotOS</strong> is engineered
          as an intelligent operating system designed to replace fragmented legacy ERPs with unified,
          AI-native institutional speed.
        </p>
      </div>

      {/* Interactive Architecture Visualizer (Section 15 Specification) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        {/* Left: 4-Tier Interactive Architectural Stack */}
        <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
          <p className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            <span>Interactive JyotOS Tier Architecture — Select a Tier</span>
          </p>

          <div className="space-y-3.5">
            {ARCH_TIERS.map((tier) => {
              const isSelected = tier.id === activeTierId;

              return (
                <div
                  key={tier.id}
                  onClick={() => setActiveTierId(tier.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveTierId(tier.id);
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? `${tier.bgColor} ${tier.borderColor} shadow-[0_0_25px_-5px_rgba(0,240,255,0.3)] scale-[1.01]`
                      : 'bg-[#080e1a]/70 border-white/10 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-all ${
                        isSelected
                          ? `${tier.borderColor} bg-black/40 ${tier.color}`
                          : 'border-white/10 bg-white/5 text-gray-400'
                      }`}
                    >
                      <tier.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase block ${tier.color}`}>
                        {tier.badge}
                      </span>
                      <h4 className="text-lg font-bold text-white tracking-tight">
                        {tier.name}
                      </h4>
                    </div>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-xs font-mono px-2.5 py-1 rounded transition-colors ${
                        isSelected
                          ? 'bg-neon-cyan text-black font-bold'
                          : 'text-gray-400 bg-white/5'
                      }`}
                    >
                      {isSelected ? 'Active Layer' : 'Inspect →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connected Institutional Module Ribbons */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/10">
            <span className="text-[10px] font-mono uppercase text-gray-400 block mb-2.5 tracking-wider">
              Integrated Campus Application Modules:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {MODULE_PILLS.map((mod, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/5 text-xs text-gray-300 font-mono"
                >
                  <mod.icon className="w-3.5 h-3.5 text-neon-cyan shrink-0" />
                  <span className="truncate">{mod.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Active Tier Live Deep-Dive HUD */}
        <div className="lg:col-span-6 cyber-glass rounded-3xl p-8 border border-white/10 flex flex-col justify-between relative overflow-hidden shadow-2xl">
          {/* Top Status Header */}
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                  Architectural Inspection
                </span>
              </div>
              <span className={`text-xs font-mono px-3 py-1 rounded-full border ${activeTier.borderColor} ${activeTier.color} bg-black/40`}>
                {activeTier.badge}
              </span>
            </div>

            {/* Title & Tier Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${activeTier.borderColor} bg-black/60 shadow-lg`}>
                <activeTier.icon className={`w-8 h-8 ${activeTier.color}`} />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeTier.name}
                </h3>
                <p className="text-xs font-mono text-neon-cyan mt-1">
                  High-Trust Institutional Infrastructure
                </p>
              </div>
            </div>

            {/* Description Paragraph */}
            <div className="bg-black/50 border border-white/5 rounded-2xl p-5 mb-6">
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                {activeTier.description}
              </p>
            </div>

            {/* Core Functions List */}
            <div className="space-y-3 mb-6">
              <h5 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                Key Layer Capabilities:
              </h5>
              <div className="space-y-2">
                {activeTier.keyFunctions.map((fn, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{fn}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Trigger Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-gray-400">
              <span>Status: </span>
              <strong className="text-emerald-400">Deployed in Active Institutions</strong>
            </div>
            <a
              href="#contact"
              className="btn-cyber-primary text-xs uppercase tracking-wider py-2.5 px-5 w-full sm:w-auto"
            >
              <span>Schedule JyotOS Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
