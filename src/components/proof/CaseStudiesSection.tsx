'use client';

import React, { useState } from 'react';
import { CASE_STUDIES } from '@/data/caseStudies';
import {
  FileCheck2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Eye,
  Award,
  BookOpen,
  Quote,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
} from 'lucide-react';

export default function CaseStudiesSection() {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);
  const currentCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <section id="proof" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background Atmosphere */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-cyan-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-500/5 blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-neon-cyan text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <FileCheck2 className="w-3.5 h-3.5" />
          <span>Proof Over Adjectives</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Proven Solutions.{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-sky-300 to-violet-400">
            Measurable Institutional Impact.
          </span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
          We don&apos;t just architect theoretical models. Discover how our rapid engineering, cognitive
          automation, and institutional operating platforms solve high-stakes challenges in the real world.
        </p>
      </div>

      {/* Case Study Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 relative z-10">
        {CASE_STUDIES.map((study) => {
          const isSelected = study.id === selectedCaseId;
          return (
            <button
              key={study.id}
              type="button"
              onClick={() => setSelectedCaseId(study.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center gap-2 border cursor-pointer ${
                isSelected
                  ? 'bg-[#080e1a] border-cyan-500/60 text-white shadow-[0_0_20px_rgba(0,240,255,0.25)] font-bold'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-neon-cyan animate-pulse' : 'bg-gray-500'}`} />
              <span>{study.title.split(':')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Active Case Study Detailed Presentation (Structure: Problem -> Approach -> Technology -> Experience -> Impact -> What We Learned) */}
      <div className="cyber-glass rounded-3xl p-6 sm:p-10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden mb-16 z-10">
        {/* Top Header of Selected Study */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border font-semibold ${currentCase.badgeColor}`}>
                {currentCase.badge}
              </span>
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-500" />
                <span>{currentCase.timeline}</span>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {currentCase.title}
            </h3>
            <p className="text-xs sm:text-sm text-cyan-300 font-mono mt-1">
              {currentCase.subtitle}
            </p>
          </div>

          {/* Key Impact Metric Badges */}
          <div className="flex flex-wrap gap-3">
            {currentCase.theImpact.metrics.map((m, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-[#080e1a] border border-cyan-500/20 text-center min-w-[100px]"
              >
                <div className="text-lg sm:text-xl font-extrabold text-neon-cyan font-mono">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Part Architectural Walkthrough */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Left Column: Problem & Approach */}
          <div className="lg:col-span-6 space-y-6">
            {/* 1. The Problem */}
            <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/20 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-2 font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>1. The Operational Challenge</span>
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {currentCase.theProblem.overview}
              </p>
              <ul className="space-y-1.5 pt-1">
                {currentCase.theProblem.painPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. The Approach */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neon-cyan flex items-center gap-2 font-bold">
                <Lightbulb className="w-4 h-4" />
                <span>2. The Engineering Strategy</span>
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {currentCase.theApproach.strategy}
              </p>
              <ul className="space-y-1.5 pt-1">
                {currentCase.theApproach.keyDecisions.map((dec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5" />
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. The Technology Stack */}
            <div className="p-5 rounded-2xl bg-[#080e1a] border border-white/10 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-violet-400" />
                <span>3. Technology Core</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {currentCase.theTechnology.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Experience, Impact & What We Learned */}
          <div className="lg:col-span-6 space-y-6">
            {/* 4. The Experience */}
            <div className="p-5 rounded-2xl bg-[#080e1a] border border-white/10 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2 font-bold">
                <Eye className="w-4 h-4" />
                <span>4. The User & Operator Experience</span>
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {currentCase.theExperience}
              </p>
            </div>

            {/* 5. The Impact */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2 font-bold">
                <Award className="w-4 h-4" />
                <span>5. Verified Institutional Impact</span>
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {currentCase.theImpact.summary}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                {currentCase.theImpact.metrics.map((m, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#030712] border border-emerald-500/20">
                    <div className="text-sm font-bold text-emerald-400 font-mono">{m.value}</div>
                    <div className="text-[10px] text-gray-400 font-mono">{m.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. What We Learned */}
            <div className="p-5 rounded-2xl bg-[#080e1a] border border-white/10 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2 font-bold">
                <BookOpen className="w-4 h-4" />
                <span>6. Key Architectural Takeaway</span>
              </h4>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {currentCase.whatWeLearned}
              </p>
            </div>

            {/* Optional Institutional Testimonial Quote */}
            {currentCase.quote && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/30 to-cyan-950/30 border border-violet-500/30 relative">
                <Quote className="w-6 h-6 text-violet-400/40 absolute top-3 right-3" />
                <p className="text-xs text-gray-200 italic leading-relaxed font-sans mb-3">
                  &ldquo;{currentCase.quote.text}&rdquo;
                </p>
                <div className="text-[11px] font-mono">
                  <div className="font-bold text-white">{currentCase.quote.author}</div>
                  <div className="text-gray-400">
                    {currentCase.quote.role} • {currentCase.quote.institution}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Institutional Before vs. After Transformation Matrix */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#080e1a] border border-white/10 relative overflow-hidden z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-violet-400 tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Transformation Difference</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Before vs. After Hi-Tech AI Systems
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 font-sans">
            How modernizing from fragmented spreadsheets and legacy ERPs unlocks cognitive operational agility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before: Fragmented Legacy World */}
          <div className="p-6 rounded-2xl bg-rose-950/10 border border-rose-500/20 space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-rose-400 uppercase tracking-wider font-mono">
              <XCircle className="w-4 h-4" />
              <span>Legacy & Fragmented ERP Reality</span>
            </div>
            <ul className="space-y-3 text-xs text-gray-300 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Siloed Spreadsheets:</strong> Admissions, exams, and attendance kept in isolated departmental files prone to data conflicts.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Manual Physical Paperwork:</strong> Days of delay waiting for handwritten signatures and file approvals across faculty cabins.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Delayed Reporting:</strong> Deans and principals forced to wait 24–48 hours for compiled seat occupancy or progression statistics.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>High Security & Leakage Vulnerability:</strong> Unrestricted staff exports of sensitive student mobile numbers and academic records.</span>
              </li>
            </ul>
          </div>

          {/* After: Hi-Tech Cognitive Speed */}
          <div className="p-6 rounded-2xl bg-cyan-950/10 border border-cyan-500/30 space-y-4 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <div className="flex items-center gap-2 text-sm font-bold text-neon-cyan uppercase tracking-wider font-mono">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Hi-Tech Intelligent Speed</span>
            </div>
            <ul className="space-y-3 text-xs text-gray-200 font-sans">
              <li className="flex items-start gap-2">
                <span className="text-neon-cyan font-bold">•</span>
                <span><strong>Single Synchronized Source of Truth:</strong> One authoritative schema powering JyotOS, ScholarCard AI, StaffBridge, and EventOS.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-cyan font-bold">•</span>
                <span><strong>Sub-Second AI Workflows:</strong> Autonomous AAI validation rules automating exam grades, attendance anomaly alerts, and approvals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-cyan font-bold">•</span>
                <span><strong>Real-Time Continuous Telemetry:</strong> 30-minute automated telemetry streams providing instant clarity for executive decisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-neon-cyan font-bold">•</span>
                <span><strong>Zero-Leak Cryptographic RBAC:</strong> Strict role-based least-privilege security with immutable audit trails and data isolation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
