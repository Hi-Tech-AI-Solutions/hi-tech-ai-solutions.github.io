'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Cpu,
  CheckCircle2,
  CornerDownLeft,
} from 'lucide-react';

interface PromptPreset {
  id: string;
  label: string;
  query: string;
  productName: string;
  productLink: string;
  githubLink?: string;
  response: string;
  metrics: string[];
}

const PRESETS: PromptPreset[] = [
  {
    id: 'classpulse',
    label: '📊 Timetable Reconciliation',
    query: 'How does the system reconcile 10,459 lecture logs across 87 faculty members?',
    productName: 'ClassPulsePro',
    productLink: 'https://classpulse-jyotos-ai.vercel.app/',
    githubLink: 'https://github.com/jyotOS-Core/ClassPulsePro',
    response:
      'ClassPulsePro utilizes chunked PostgREST streaming to ingest daily CSV session logs, cross-referencing them against master aSc timetable workbooks across 4 college wings. Features scoped HOD/Principal variance cockpits, dynamic working-day deduction, and an AI Teacher Diary that auto-generates Bloom’s taxonomy lesson plans and NAAC-compliant inspection sheets.',
    metrics: ['10,459+ Logs Reconciled', '87 Faculty Identities', '4 College Wings Scoped'],
  },
  {
    id: 'jyotassist',
    label: '💬 WhatsApp Cloud CRM',
    query: 'Explain the Meta WhatsApp API v21.0 integration and vector AI auto-replies.',
    productName: 'jyotAssist AI',
    productLink: 'https://jyot-assist-ai.vercel.app/',
    githubLink: 'https://github.com/jyotOS-Core/jyotAssist-AI',
    response:
      'jyotAssist AI connects natively to Meta Cloud API v21.0 backed by Supabase Realtime and pgvector. Incoming student/client queries are semantically matched via Gemini Flash embeddings against institutional handbooks with zero hallucinations. Includes a visual @xyflow drag-and-drop bot builder, live Instagram Graph API event photo chains, and sales/admission Kanban pipelines.',
    metrics: ['Official Meta API v21.0', 'pgvector RAG Grounding', '487 Passing Tests'],
  },
  {
    id: 'scholarcard',
    label: '🪪 Smart Student ID Lifecycle',
    query: 'How are physical and digital credentials generated and verified?',
    productName: 'ScholarCard AI',
    productLink: 'https://scholarcard-ai.vercel.app/',
    githubLink: 'https://github.com/jyotOS-Core/scholarcard-ai',
    response:
      'ScholarCard AI provides a mobile-first student profile intake wizard with client-side 3:4 canvas cropping (~100KB compression) and HTML5 signature pad. College admins drag-and-drop Excel sheets to auto-map columns to database schemas, generating 300 DPI high-resolution batch ZIP print feeds formatted precisely for CR80 thermal card machines.',
    metrics: ['300 DPI CR80 Print Output', 'HTML5 Signature Pad', 'Smart Excel Mapper'],
  },
  {
    id: 'jyotos',
    label: '🏛️ AI Institutional OS',
    query: 'What is the 4-Tier JyotOS Institutional Architecture?',
    productName: 'JyotOS Platform',
    productLink: 'https://hi-tech-ai-solutions.github.io/#jyotos',
    githubLink: 'https://github.com/Hi-Tech-AI-Solutions',
    response:
      'JyotOS is an AI-native operating system designed to replace fragmented legacy ERPs. Built on a four-tier architecture: Tier 1 (Core Multi-Tenant OS) → Tier 2 (AAI Academic Intelligence Engine) → Tier 3 (Ask Jyot Conversational Multi-Agent AI) → Tier 4 (Institutional Applications: Admissions, Exams, Events, Placement, Finance, and Leave Governance).',
    metrics: ['99.99% Uptime SLA', 'Zero Data Leak Policy', '-60% Admin Overhead'],
  },
  {
    id: 'eventos',
    label: '🎟️ Event Lifecycle & QR Gate',
    query: 'How does EventOS handle large-scale campus fest check-ins?',
    productName: 'EventOS',
    productLink: 'https://event-os-jyot-os.vercel.app/',
    githubLink: 'https://github.com/jyotOS-Core/EventOS',
    response:
      'EventOS executes the full 9-step event lifecycle from coordinator proposal to verified public archive. Features offline-tolerant mobile camera PWA scanning processing QR tickets in under 400ms, synchronizing directly with StaffBridge and ScholarCard AI accounts via shared ems_* schemas.',
    metrics: ['<400ms QR Gate Scan', 'ems_* Shared Schema', 'Public Verified Archive'],
  },
];

export default function CommandTerminal() {
  const [activePreset, setActivePreset] = useState<PromptPreset>(PRESETS[0]);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>('');
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startTypewriter = (text: string) => {
    if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    setIsTyping(true);
    setDisplayedText('');
    let index = 0;

    typingTimerRef.current = setInterval(() => {
      index++;
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
      } else {
        setIsTyping(false);
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      }
    }, 12);
  };

  useEffect(() => {
    startTypewriter(activePreset.response);
    return () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    };
  }, [activePreset]);

  const handleSelectPreset = (preset: PromptPreset) => {
    setActivePreset(preset);
    setCustomInput(preset.query);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    // Match query against keywords
    const lower = customInput.toLowerCase();
    const matched =
      PRESETS.find(
        (p) =>
          lower.includes(p.productName.toLowerCase()) ||
          lower.includes(p.id) ||
          p.label.toLowerCase().includes(lower)
      ) || PRESETS[0];

    setActivePreset(matched);
  };

  return (
    <div className="w-full max-w-4xl mx-auto neon-conic-border rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(0,240,255,0.15)] bg-[#040813]/90 backdrop-blur-2xl border border-neon-cyan/20">
      {/* Terminal Top Command Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#080f1e] border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          </div>
          <span className="text-gray-400 font-bold hidden sm:inline">
            AAI-COMMAND-NEXUS // V3.8-COCKPIT
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>13 NODES ONLINE</span>
          </span>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="hidden md:inline text-neon-cyan/80">LATENCY: 12ms</span>
        </div>
      </div>

      {/* Preset Chips Bar */}
      <div className="px-4 sm:px-6 py-3 bg-[#060b17] border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-neon-cyan" />
          <span>Telemetry Presets:</span>
        </span>
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => handleSelectPreset(preset)}
            className={`text-xs font-mono px-3 py-1.5 rounded-xl whitespace-nowrap transition-all border shrink-0 ${
              activePreset.id === preset.id
                ? 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/60 font-semibold shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'bg-white/5 text-gray-400 hover:text-white border-white/10 hover:border-white/20'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Interactive Input Form */}
      <form onSubmit={handleCustomSubmit} className="p-4 sm:p-6 bg-[#040813]">
        <div className="relative flex items-center">
          <Terminal className="absolute left-3.5 w-4 h-4 text-neon-cyan shrink-0 pointer-events-none" />
          <input
            type="text"
            value={customInput || activePreset.query}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Ask or select an institutional capability..."
            className="w-full pl-10 pr-24 py-3 bg-black/60 border border-white/15 focus:border-neon-cyan rounded-2xl text-xs sm:text-sm font-mono text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all shadow-inner"
          />
          <button
            type="submit"
            className="absolute right-2 px-3 py-1.5 bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/40 rounded-xl text-xs font-mono font-bold flex items-center gap-1 transition-all"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </div>

        {/* Live Output HUD */}
        <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#060b17]/90 border border-white/10 space-y-3 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-neon-cyan" />
              <span className="text-gray-400">Target Platform:</span>
              <span className="font-bold text-white tracking-wide">
                {activePreset.productName}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {activePreset.metrics.map((m, i) => (
                <span
                  key={i}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-neon-cyan font-mono"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Typewriter Stream */}
          <div className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed min-h-[58px]">
            {displayedText}
            {isTyping && <span className="inline-block w-1.5 h-3.5 ml-1 bg-neon-cyan animate-pulse align-middle" />}
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>Verified Institutional Deployment Ready</span>
            </div>

            <div className="flex items-center gap-2">
              {activePreset.githubLink && (
                <a
                  href={activePreset.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all flex items-center gap-1.5"
                >
                  <span>Repo</span>
                  <ExternalLink className="w-3 h-3 text-violet-400" />
                </a>
              )}

              <a
                href={activePreset.productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold px-4 py-1.5 rounded-xl bg-gradient-to-r from-neon-cyan to-sky-400 hover:from-neon-cyan/90 hover:to-sky-400/90 text-black shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all flex items-center gap-1.5"
              >
                <span>Launch {activePreset.productName}</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
