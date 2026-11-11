'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Sparkles, Cpu, CheckCircle2, CornerDownLeft } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import ProductLink from '@/components/products/ProductLink';
import { isMotionOff, onMotionChange } from '@/lib/motion';

interface PromptPreset {
  id: string;
  /** id of the matching entry in the product catalogue (drives the link under the answer) */
  productId: string;
  label: string;
  query: string;
  productName: string;
  response: string;
  metrics: string[];
}

const PRESETS: PromptPreset[] = [
  {
    id: 'classpulse',
    productId: 'classpulse-pro',
    label: '📊 Timetable Reconciliation',
    query: 'How does the system reconcile 10,459 lecture logs across 87 faculty members?',
    productName: 'ClassPulsePro',
    response:
      'ClassPulsePro utilizes chunked PostgREST streaming to ingest daily CSV session logs, cross-referencing them against master aSc timetable workbooks across 4 college wings. Features scoped HOD/Principal variance cockpits, dynamic working-day deduction, and an AI Teacher Diary that auto-generates Bloom’s taxonomy lesson plans and NAAC-compliant inspection sheets.',
    metrics: ['10,459+ Logs Reconciled', '87 Faculty Identities', '4 College Wings Scoped'],
  },
  {
    id: 'jyotassist',
    productId: 'jyotassist-ai',
    label: '💬 WhatsApp Cloud CRM',
    query: 'Explain the Meta WhatsApp API v21.0 integration and vector AI auto-replies.',
    productName: 'jyotAssist AI',
    response:
      'jyotAssist AI connects natively to Meta Cloud API v21.0 backed by Supabase Realtime and pgvector. Incoming student/client queries are semantically matched via Gemini Flash embeddings against institutional handbooks with zero hallucinations. Includes a visual @xyflow drag-and-drop bot builder, live Instagram Graph API event photo chains, and sales/admission Kanban pipelines.',
    metrics: ['Official Meta API v21.0', 'pgvector RAG Grounding', '487 Passing Tests'],
  },
  {
    id: 'scholarcard',
    productId: 'scholarcard-ai',
    label: '🪪 Smart Student ID Lifecycle',
    query: 'How are physical and digital credentials generated and verified?',
    productName: 'ScholarCard AI',
    response:
      'ScholarCard AI provides a mobile-first student profile intake wizard with client-side 3:4 canvas cropping (~100KB compression) and HTML5 signature pad. College admins drag-and-drop Excel sheets to auto-map columns to database schemas, generating 300 DPI high-resolution batch ZIP print feeds formatted precisely for CR80 thermal card machines.',
    metrics: ['300 DPI CR80 Print Output', 'HTML5 Signature Pad', 'Smart Excel Mapper'],
  },
  {
    id: 'jyotos',
    productId: 'jyotos',
    label: '🏛️ AI Institutional OS',
    query: 'What is the 4-Tier JyotOS Institutional Architecture?',
    productName: 'JyotOS Platform',
    response:
      'JyotOS is an AI-native operating system designed to replace fragmented legacy ERPs. Built on a four-tier architecture: Tier 1 (Core Multi-Tenant OS) → Tier 2 (AAI Academic Intelligence Engine) → Tier 3 (Ask Jyot Conversational Multi-Agent AI) → Tier 4 (Institutional Applications: Admissions, Exams, Events, Placement, Finance, and Leave Governance).',
    metrics: ['99.99% Uptime SLA', 'Zero Data Leak Policy', '-60% Admin Overhead'],
  },
  {
    id: 'eventos',
    productId: 'eventos',
    label: '🎟️ Event Lifecycle & QR Gate',
    query: 'How does EventOS handle large-scale campus fest check-ins?',
    productName: 'EventOS',
    response:
      'EventOS executes the full 9-step event lifecycle from coordinator proposal to verified public archive. Features offline-tolerant mobile camera PWA scanning processing QR tickets in under 400ms, synchronizing directly with StaffBridge and ScholarCard AI accounts via shared ems_* schemas.',
    metrics: ['<400ms QR Gate Scan', 'ems_* Shared Schema', 'Public Verified Archive'],
  },
];

export default function CommandTerminal() {
  const [activePreset, setActivePreset] = useState<PromptPreset>(PRESETS[0]);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  // Starts with the first preset's question. It is a normal controlled input: before, an
  // empty field snapped back to the preset text, so the question could never be cleared.
  const [customInput, setCustomInput] = useState<string>(PRESETS[0].query);
  const typingTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const text = activePreset.response;
    const stop = () => {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      typingTimerRef.current = null;
    };
    const showAll = () => {
      stop();
      setDisplayedText(text);
      setIsTyping(false);
    };

    stop();
    // With motion off (the toggle or the OS setting) the answer appears at once.
    if (isMotionOff()) {
      showAll();
    } else {
      setIsTyping(true);
      setDisplayedText('');
      let index = 0;
      typingTimerRef.current = setInterval(() => {
        index++;
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
        } else {
          setIsTyping(false);
          stop();
        }
      }, 12);
    }

    // If motion is switched off while the answer is still typing, finish it immediately.
    const off = onMotionChange(() => {
      if (isMotionOff()) showAll();
    });
    return () => {
      stop();
      off();
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

  const activeProduct = PRODUCTS.find((p) => p.id === activePreset.productId);

  return (
    <div className="w-full max-w-4xl mx-auto neon-conic-border rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(183,194,214,0.15)] bg-[#0D121D]/90 backdrop-blur-2xl border border-neon-cyan/20">
      {/* Terminal Top Command Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#111724] border-b border-white/10 font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-white/15 inline-block" />
            <span className="w-3 h-3 rounded-full bg-white/15 inline-block" />
            <span className="w-3 h-3 rounded-full bg-white/15 inline-block" />
          </div>
          <span className="text-gray-400 font-bold hidden sm:inline">
            AAI-COMMAND-NEXUS // V3.8-COCKPIT
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" aria-hidden="true" />
            <span>13 NODES ONLINE</span>
          </span>
          <span className="hidden md:inline text-white/30" aria-hidden="true">•</span>
          <span className="hidden md:inline text-neon-cyan/80">LATENCY: 12ms</span>
        </div>
      </div>

      {/* Preset Chips Bar */}
      {/* Wraps onto a second line: it used to scroll sideways, hiding two presets even at 1440 px */}
      <div className="px-4 sm:px-6 py-3 bg-[#111724] border-b border-white/5 flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-neon-cyan" aria-hidden="true" />
          <span>Telemetry Presets:</span>
        </span>
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => handleSelectPreset(preset)}
            aria-pressed={activePreset.id === preset.id}
            className={`text-xs font-mono px-3 py-1.5 rounded-xl whitespace-nowrap transition-all border shrink-0 ${
              activePreset.id === preset.id
                ? 'bg-neon-cyan/15 text-neon-cyan border-neon-cyan/60 font-semibold shadow-[0_0_15px_rgba(183,194,214,0.2)]'
                : 'bg-white/5 text-gray-400 hover:text-white border-white/10 hover:border-white/20'
            }`}
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Interactive Input Form */}
      <form onSubmit={handleCustomSubmit} className="p-4 sm:p-6 bg-[#0D121D]">
        <div className="relative flex items-center">
          <Terminal className="absolute left-3.5 w-4 h-4 text-neon-cyan shrink-0 pointer-events-none" aria-hidden="true" />
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            aria-label="Ask about a Hi-Tech product"
            placeholder="Ask or select an institutional capability..."
            className="w-full pl-10 pr-24 py-3 bg-black/60 border border-white/15 focus:border-neon-cyan rounded-2xl text-xs sm:text-sm font-mono text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-neon-cyan transition-all shadow-inner"
          />
          <button
            type="submit"
            className="absolute right-2 px-3 py-1.5 bg-neon-cyan/20 hover:bg-neon-cyan/30 text-neon-cyan border border-neon-cyan/40 rounded-xl text-xs font-mono font-bold flex items-center gap-1 transition-all"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" aria-hidden="true" />
          </button>
        </div>

        {/* Live Output HUD */}
        <div className="mt-4 p-4 sm:p-5 rounded-2xl bg-[#111724]/90 border border-white/10 space-y-3 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-neon-cyan" aria-hidden="true" />
              <span className="text-gray-400">Target Platform:</span>
              <span className="font-bold text-white tracking-wide">
                {activePreset.productName}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
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

          {/* Typewriter stream. Screen readers get the full answer once, not one letter at a time. */}
          <p className="sr-only" aria-live="polite">
            {activePreset.response}
          </p>
          <div className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed min-h-[58px]" aria-hidden="true">
            {displayedText}
            {isTyping && <span className="inline-block w-1.5 h-3.5 ml-1 bg-neon-cyan animate-pulse align-middle" />}
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Verified Institutional Deployment Ready</span>
            </div>

            {activeProduct && (
              <ProductLink
                product={activeProduct}
                className="text-xs font-mono font-semibold px-4 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 hover:text-white border border-white/15 transition-all flex items-center gap-1.5"
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
