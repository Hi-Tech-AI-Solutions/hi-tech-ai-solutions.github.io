import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Lock, EyeOff, Server, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy & Zero Data Leakage — Hi-Tech AI Solutions & Services',
  description:
    'Institutional privacy framework, student data isolation standards, and Digital Personal Data Protection compliance for Hi-Tech AI Solutions & Services.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8 text-gray-300 font-sans leading-relaxed">
      {/* Document Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border bg-violet-950/60 border-violet-500/40 text-violet-400 font-semibold">
            OFFICIAL PRIVACY POLICY
          </span>
          <span className="text-xs font-mono text-gray-500">•</span>
          <span className="text-xs font-mono text-gray-400">Version 2.4 • Effective September 2026</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Privacy Policy & Data Sovereignty
        </h1>
        <p className="text-sm text-cyan-300 font-mono mt-1">
          Zero-Leak Institutional Privacy Architecture for JyotOS and Product Ecosystem
        </p>
      </div>

      {/* Core Highlights Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-[#080e1a] border border-cyan-500/20 space-y-1">
          <div className="flex items-center gap-2 text-neon-cyan font-mono text-xs font-bold uppercase">
            <Lock className="w-3.5 h-3.5" />
            <span>Zero Data Leakage</span>
          </div>
          <p className="text-[11px] text-gray-400">
            Student & employee records are cryptographically isolated per institution.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#080e1a] border border-violet-500/20 space-y-1">
          <div className="flex items-center gap-2 text-violet-400 font-mono text-xs font-bold uppercase">
            <EyeOff className="w-3.5 h-3.5" />
            <span>No Model Training</span>
          </div>
          <p className="text-[11px] text-gray-400">
            Client data is strictly never used to train public commercial AI models.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#080e1a] border border-emerald-500/20 space-y-1">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DPDP 2023 Compliant</span>
          </div>
          <p className="text-[11px] text-gray-400">
            Full alignment with India Digital Personal Data Protection mandates.
          </p>
        </div>
      </div>

      {/* Section 1: Overview */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span>1. Institutional Trust & Purpose</span>
        </h2>
        <p className="text-sm">
          <strong>Hi-Tech AI Solutions & Services</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides high-performance AI systems, academic operating platforms (including <strong>JyotOS</strong>, <strong>ScholarCard AI</strong>, <strong>jyotAssist AI</strong>, <strong>StaffBridge</strong>, and <strong>EventOS</strong>), and automated enterprise software.
        </p>
        <p className="text-sm">
          This Privacy Policy governs the processing of technical, academic, and administrative information collected through our official portal (<code className="text-cyan-300 font-mono">hi-tech-ai-solutions.github.io</code>) and client-contracted institutional cloud environments.
        </p>
      </section>

      {/* Section 2: Data Classification */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span>2. Data Classification & Collection Boundaries</span>
        </h2>
        <p className="text-sm">We strictly limit data processing to necessary operational parameters:</p>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
            <span><strong>Institutional Administrative Data:</strong> College department configurations, curriculum structures, examination grade entries, and sanctioned capacities required for operating JyotOS.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
            <span><strong>Student Identity & Verification Data:</strong> Digital identity records for ScholarCard AI, enrollment IDs, and tamper-evident QR verification tokens.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
            <span><strong>Faculty & Staff Attendance Metrics:</strong> Biometric sync logs, duty rosters, and leave approvals processed through StaffBridge.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" />
            <span><strong>Consultation & Inquiry Information:</strong> Contact names, institutional email addresses, and phone numbers willingly submitted via our executive consultation portal.</span>
          </li>
        </ul>
      </section>

      {/* Section 3: AI Core Governance & Zero Model Training */}
      <section className="space-y-3 p-5 rounded-2xl bg-[#080e1a] border border-cyan-500/30">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2 text-neon-cyan">
          <Server className="w-5 h-5" />
          <span>3. AI Core Safeguards: Zero Model Training Guarantee</span>
        </h2>
        <p className="text-sm">
          A fundamental tenet of our engineering philosophy is that <strong>institutional data belongs solely to the institution</strong>.
        </p>
        <p className="text-sm">
          When AI reasoning, RAG (Retrieval-Augmented Generation), or anomaly detection is performed via the <strong>AAI (Academic Artificial Intelligence) Engine</strong> or <strong>jyotAssist AI</strong>:
        </p>
        <ul className="space-y-1.5 text-xs font-mono text-cyan-200">
          <li>• Client datasets are NEVER submitted into public foundation models for model retraining.</li>
          <li>• Prompts dispatched for contextual inference are sanitized to scrub personally identifiable information (PII).</li>
          <li>• Vector embeddings generated for institutional knowledge bases reside in dedicated, private PostgreSQL pgvector instances.</li>
        </ul>
      </section>

      {/* Section 4: Security & Encryption */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span>4. Storage, Encryption & Multi-Tenant Partitioning</span>
        </h2>
        <p className="text-sm">
          All client databases leverage AES-256 at-rest encryption and TLS 1.3 in-transit protocol enforcement. Each college, university, or enterprise client operates in logically and physically isolated tenant schemas, completely eliminating cross-tenant visibility.
        </p>
      </section>

      {/* Section 5: Data Subject Rights & Grievance */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
          <span>5. Data Subject Rights & Grievance Officer</span>
        </h2>
        <p className="text-sm">
          In accordance with the Digital Personal Data Protection Act, institutional users and individuals retain the right to access, correct, or request deletion of personal information.
        </p>
        <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-mono space-y-1">
          <div><strong>Grievance Officer:</strong> Legal & Data Protection Cell</div>
          <div><strong>Corporate Office:</strong> Bhavani Complex, nr. Gajera Circle, Katargam, Surat, Gujarat 395004</div>
          <div><strong>Contact Email:</strong> <a href="mailto:contact@hi-tech-ai-solutions.github.io" className="text-neon-cyan underline">contact@hi-tech-ai-solutions.github.io</a></div>
        </div>
      </section>
    </div>
  );
}
