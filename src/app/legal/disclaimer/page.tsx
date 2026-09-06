import React from 'react';
import { Metadata } from 'next';
import { AlertCircle, ShieldAlert, Cpu, Sparkles, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Institutional Disclaimer & Prototype Status — Hi-Tech AI Solutions & Services',
  description:
    'Official operational boundaries, AI decision-support limitations, prototype classifications, and intellectual property disclaimers for Hi-Tech AI Solutions & Services.',
};

export default function DisclaimerPage() {
  return (
    <div className="space-y-8 text-gray-300 font-sans leading-relaxed">
      {/* Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border bg-rose-950/60 border-rose-500/40 text-rose-400 font-semibold">
            INSTITUTIONAL DISCLAIMER & BOUNDARIES
          </span>
          <span className="text-xs font-mono text-gray-500">•</span>
          <span className="text-xs font-mono text-gray-400">Version 2.4 • Effective September 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Disclaimer & Operational Boundaries
        </h1>
        <p className="text-sm text-rose-300 font-mono mt-1">
          System Demarcation, AI Decision-Support Limitations & Intellectual Property Notice
        </p>
      </div>

      {/* Warning Banner */}
      <div className="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-4">
        <ShieldAlert className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h3 className="text-sm font-bold text-white font-mono uppercase">
            Mandatory Human-in-the-Loop Governance Notice
          </h3>
          <p className="text-xs text-gray-300">
            All AI models, predictive algorithms, automated triage agents, and anomaly detectors deployed across the Hi-Tech ecosystem operate as assistive intelligence tools. They are designed to augment administrative staff and faculty, not replace statutory human institutional authority.
          </p>
        </div>
      </div>

      {/* Section 1: AI Decision-Support & Accuracy Bounds */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Cpu className="w-5 h-5 text-neon-cyan" />
          <span>1. Assistive AI & Algorithmic Bounds</span>
        </h2>
        <p className="text-sm">
          While our neural architectures, agentic pipelines, and RAG engines are engineered for maximum precision and calibrated against verified institutional data schemas:
        </p>
        <ul className="space-y-2 text-sm text-gray-300 pl-2">
          <li className="flex items-start gap-2">
            <span className="text-rose-400 font-mono text-xs font-bold">1.1</span>
            <span><strong>No Statutory Decision Substitution:</strong> AI recommendations—including automated attendance flaggings, predictive student grade risk scores, or timetable optimizations—must be ratified by authorized human personnel before disciplinary, legal, or academic status changes take effect.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-rose-400 font-mono text-xs font-bold">1.2</span>
            <span><strong>Probabilistic Inferences:</strong> Machine learning models inherently generate probabilistic outputs. While false-positive mitigation safeguards are actively applied, Hi-Tech AI Solutions & Services disclaims liability for unilateral decisions made without verified human oversight.</span>
          </li>
        </ul>
      </section>

      {/* Section 2: Production vs. Prototype Demarcation */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-violet-400" />
          <span>2. System Status & Prototype Classification</span>
        </h2>
        <p className="text-sm">
          To maintain strict enterprise transparency, our software releases and portfolio assets are classified under three distinct lifecycle tiers:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/30 space-y-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-bold uppercase">
              Live Production
            </span>
            <h4 className="text-sm font-bold text-white">Commercial Deployments</h4>
            <p className="text-xs text-gray-400">
              Battle-tested, enterprise-grade software backed by formal SLAs, 24/7 telemetry monitoring, and contractual uptime guarantees (e.g. JyotOS Core, Admission Analytics Hub).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/30 space-y-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/40 text-neon-cyan font-bold uppercase">
              Active Beta / Pilot
            </span>
            <h4 className="text-sm font-bold text-white">Institutional Sandbox</h4>
            <p className="text-xs text-gray-400">
              Functional solutions deployed in staged campus environments for user acceptance testing, feedback gathering, and stress-load testing prior to general release.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-amber-500/30 space-y-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/40 text-amber-400 font-bold uppercase">
              R&D / Experimental
            </span>
            <h4 className="text-sm font-bold text-white">Innovation Prototypes</h4>
            <p className="text-xs text-gray-400">
              Forward-looking experimental frameworks, exploratory multi-agent protocols, and UI concept previews displayed strictly for technical demonstration and feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Third-Party Trademarks & Institutional References */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-400" />
          <span>3. Institutional References & Trademark Disclaimers</span>
        </h2>
        <p className="text-sm">
          Case studies, architectural diagrams, and empirical results presented on this platform may reference external institutional frameworks (such as the Gujarat Common Admission Services — GCAS, university management portals, or affiliated partner colleges).
        </p>
        <div className="p-4 rounded-xl bg-[#080e1a] border border-white/10 space-y-2 text-xs text-gray-300">
          <p>
            • All registered trademarks, logos, university emblems, and institutional titles mentioned are the property of their respective owners.
          </p>
          <p>
            • Reference to specific governmental portals or public educational entities reflects technical interoperability, historical analytical case studies, or pro-bono institutional tooling developed to address specific operational challenges.
          </p>
          <p>
            • Unless explicitly stated, such references do not imply official governmental endorsement, exclusive partnership, or statutory affiliation.
          </p>
        </div>
      </section>

      {/* Section 4: Limitation of Liability */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight">4. General Limitation of Website Content</h2>
        <p className="text-sm">
          Information provided on this promotional website is for general informational and architectural evaluation purposes. While we endeavor to keep all product specifications, performance benchmarks, and feature roadmaps up-to-date, actual commercial deliverables are defined exclusively by executed Master Service Agreements (MSAs) and Statements of Work (SOWs).
        </p>
      </section>

      {/* Section 5: Inquiries & Verification */}
      <section className="p-6 rounded-2xl bg-[#080e1a] border border-white/10 space-y-3">
        <h3 className="text-sm font-bold text-white font-mono uppercase flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-neon-cyan" />
          <span>Questions & Governance Inquiries</span>
        </h3>
        <p className="text-xs text-gray-300">
          If you have questions regarding the classification of any tool, algorithm, or case study presented on this platform, or wish to review enterprise service agreements:
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono text-cyan-400 pt-1">
          <span>Official Corporate Email: <a href="mailto:contact@hi-tech-ai-solutions.github.io" className="underline text-white">contact@hi-tech-ai-solutions.github.io</a></span>
          <span>•</span>
          <span>Surat HQ Phone: <a href="tel:+919909988111" className="underline text-white">+91 99099 88111</a></span>
        </div>
      </section>
    </div>
  );
}
