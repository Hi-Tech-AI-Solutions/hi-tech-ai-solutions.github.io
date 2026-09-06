'use client';

import React, { useState } from 'react';
import {
  Cpu,
  Zap,
  GraduationCap,
  BarChart3,
  Code,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface Capability {
  id: string;
  category: 'ai' | 'automation' | 'academic' | 'enterprise';
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  highlight: string;
  accentColor: string;
}

const CAPABILITIES: Capability[] = [
  {
    id: 'ai-solutions',
    category: 'ai',
    icon: Cpu,
    title: 'AI Solutions & Neural Agents',
    subtitle: 'Autonomous agents, cognitive workflows, and tailored LLM integrations',
    description:
      'We architect AI systems that actively perform work, synthesize unstructured campus and business data, and assist human operators through conversational and deterministic intelligence.',
    deliverables: [
      'Multi-agent task orchestration pipelines',
      'Context-grounded retrieval-augmented generation (RAG)',
      'Autonomous inquiry triage & real-time response agents',
    ],
    techStack: ['Python', 'LangChain', 'FastAPI', 'Vector Databases', 'OpenAI / Claude API'],
    highlight: 'Active in jyotAssist AI',
    accentColor: 'border-cyan-500/30 text-neon-cyan',
  },
  {
    id: 'automation',
    category: 'automation',
    icon: Zap,
    title: 'Intelligent Workflow Automation',
    subtitle: 'Eliminating repetitive human drag with deterministic pipelines',
    description:
      'Turn complex, multi-person operational approval processes into automated, zero-latency workflows with automated audit logs, notifications, and verification checks.',
    deliverables: [
      'Automated credentialing & verifiable ID issuance',
      'Instant attendance verification & anomaly detection',
      'Lifecycle event coordination & automated ticketing',
    ],
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Webhooks', 'Background Workers'],
    highlight: 'Active in ScholarCard AI & EventOS',
    accentColor: 'border-violet-500/30 text-violet-400',
  },
  {
    id: 'academic-tech',
    category: 'academic',
    icon: GraduationCap,
    title: 'Academic & Institutional OS',
    subtitle: 'Unified operating platforms for colleges, universities, and institutions',
    description:
      'Modern institutions require integrated digital infrastructure. We replace scattered legacy spreadsheets with unified platforms coordinating students, faculty, staff, and leadership.',
    deliverables: [
      'Comprehensive campus administration dashboards',
      'Role-governed multi-tier access permissions',
      'End-to-end examination and credential lifecycle',
    ],
    techStack: ['JyotOS Core', 'TypeScript', 'Tailwind', 'Supabase', 'RESTful APIs'],
    highlight: 'Powering JyotOS Flagship',
    accentColor: 'border-emerald-500/30 text-emerald-400',
  },
  {
    id: 'analytics',
    category: 'enterprise',
    icon: BarChart3,
    title: 'Operational Analytics & Telemetry',
    subtitle: 'Transforming institutional noise into actionable executive foresight',
    description:
      'High-throughput analytics engines translating daily operational metrics into clean, understandable visualizations, attendance trend lines, and predictive capacity planning.',
    deliverables: [
      'Executive real-time KPI command centers',
      'Institutional resource utilization tracking',
      'Automated compliance and audit reporting',
    ],
    techStack: ['Next.js', 'ChartJS', 'SQL Aggregations', 'Telemetry Pipelines'],
    highlight: 'Real-time Dashboards',
    accentColor: 'border-sky-500/30 text-sky-400',
  },
  {
    id: 'custom-software',
    category: 'enterprise',
    icon: Code,
    title: 'Custom Enterprise Software',
    subtitle: 'Bespoke high-performance software built around exact operational requirements',
    description:
      'When commercial off-the-shelf software fails to adapt to your unique institutional hierarchy or business rules, we engineer tailor-made software that fits like a glove.',
    deliverables: [
      'Full-stack cloud-native SaaS applications',
      'Responsive web and Progressive Web App (PWA) clients',
      'Clean modular APIs with comprehensive documentation',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Cloud Infrastructure'],
    highlight: 'Zero Compromise Architecture',
    accentColor: 'border-amber-500/30 text-amber-400',
  },
  {
    id: 'transformation',
    category: 'academic',
    icon: Repeat,
    title: 'Complete Digital Transformation',
    subtitle: 'Modernizing operational workflows without organizational friction',
    description:
      'Digital transformation is not just digitizing paper; it is reimagining workflows to empower people. We guide institutions through seamless transition from legacy to AI-era agility.',
    deliverables: [
      'Legacy database migration and cleanup',
      'Hands-on administrative workflow simplification',
      'Staff onboarding and operational training documentation',
    ],
    techStack: ['Data Migration Scripts', 'Zero-Downtime Cutover', 'Security Audits'],
    highlight: 'Proven Institutional Adoption',
    accentColor: 'border-rose-500/30 text-rose-400',
  },
];

export default function CapabilitiesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredCapabilities =
    selectedFilter === 'all'
      ? CAPABILITIES
      : CAPABILITIES.filter((c) => c.category === selectedFilter);

  return (
    <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neon-cyan">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineered Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What We Build
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We don&apos;t just build software. We craft intelligent, automated, and mission-critical
            systems that solve real institutional and enterprise challenges.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#080e1a] border border-white/10 self-start md:self-auto">
          {[
            { id: 'all', label: 'All Capabilities' },
            { id: 'ai', label: 'AI Solutions' },
            { id: 'automation', label: 'Automation' },
            { id: 'academic', label: 'Academic & OS' },
            { id: 'enterprise', label: 'Enterprise' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-neon-cyan/20 to-violet-500/20 text-neon-cyan border border-neon-cyan/40 font-semibold shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCapabilities.map((cap) => {
          return (
            <div
              key={cap.id}
              className="cyber-glass rounded-2xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-neon-cyan/50"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan group-hover:scale-110 group-hover:border-neon-cyan/40 transition-all">
                    <cap.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border bg-white/5 ${cap.accentColor}`}>
                    {cap.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 mb-3 leading-relaxed">
                  {cap.subtitle}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed font-sans mb-5">
                  {cap.description}
                </p>

                {/* Core Deliverables List */}
                <div className="space-y-2 mb-5">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                    Key Deliverables:
                  </p>
                  {cap.deliverables.map((deliv, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags & Detail Toggle */}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {cap.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-neon-cyan hover:underline pt-2 group/link"
                >
                  <span>Discuss This Capability</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
