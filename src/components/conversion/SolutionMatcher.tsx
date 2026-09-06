'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  Cpu,
  Layers,
  MessageSquare,
  ShieldCheck,
  Send,
  Building2,
  Clock,
} from 'lucide-react';

interface QuestionStep {
  title: string;
  subtitle: string;
  options: {
    id: string;
    label: string;
    desc: string;
    icon?: React.ElementType;
  }[];
}

interface MatchResult {
  title: string;
  tagline: string;
  primaryProduct: string;
  matchedTiers: string[];
  estimatedImpact: string;
  recommendedPlan: string;
  badge: string;
}

export default function SolutionMatcher() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{
    orgType?: string;
    challenge?: string;
    scale?: string;
    timeline?: string;
  }>({});
  const [result, setResult] = useState<MatchResult | null>(null);

  const WHATSAPP_NUMBER = '919909988111';

  const steps: QuestionStep[] = [
    {
      title: '1. What type of organization or institution are you representing?',
      subtitle: 'Select the operational model that best describes your campus or enterprise.',
      options: [
        {
          id: 'college',
          label: 'Higher Education College / Polytechnic',
          desc: 'Undergraduate or postgraduate institute seeking academic and administrative unity.',
          icon: Building2,
        },
        {
          id: 'university',
          label: 'University / Multi-Campus Trust',
          desc: 'Large collegiate consortium requiring multi-tenant partitioned governance.',
          icon: Layers,
        },
        {
          id: 'enterprise',
          label: 'Enterprise / Corporate Organization',
          desc: 'High-growth business needing intelligent workflow automation and custom AI software.',
          icon: Cpu,
        },
        {
          id: 'events',
          label: 'Summit / Conference / Event Entity',
          desc: 'Institutional or industry organizer managing high-concurrency ticket lifecycle.',
          icon: Sparkles,
        },
      ],
    },
    {
      title: '2. What is your primary operational friction or objective?',
      subtitle: 'Where is manual drag or data fragmentation slowing your organization down?',
      options: [
        {
          id: 'campus-erps',
          label: 'Unified Campus Operating System',
          desc: 'Replace disconnected ERPs, spreadsheets, and manual approval chains with one brain.',
        },
        {
          id: 'identity-credentialing',
          label: 'Student Credentialing & Verification',
          desc: 'Issue tamper-evident digital IDs, automated academic transcripts, and credentials.',
        },
        {
          id: 'staff-governance',
          label: 'Faculty & Human Capital Governance',
          desc: 'Sync biometric attendance, paperless leave approvals, and duty rosters.',
        },
        {
          id: 'admission-analytics',
          label: 'Admission Telemetry & Capacity Forecasting',
          desc: 'Track real-time seat occupancy, merit ranks, and enrollment velocity.',
        },
        {
          id: 'event-orchestration',
          label: 'High-Concurrency Event Access',
          desc: 'Instant QR ticket distribution and sub-second optical gate check-ins.',
        },
        {
          id: 'custom-ai-agents',
          label: 'Custom Autonomous AI Workflows',
          desc: 'Bespoke multi-agent LLM assistants, RAG knowledge retrieval, and data pipelines.',
        },
      ],
    },
    {
      title: '3. What is your operational scale and target implementation timeline?',
      subtitle: 'Help us calibrate the architecture tier and deployment runway.',
      options: [
        {
          id: 'immediate-semester',
          label: 'Next Semester / Within 30 Days (< 3,000 Users)',
          desc: 'Rapid deployment with zero downtime during active academic operations.',
          icon: Clock,
        },
        {
          id: 'enterprise-scale',
          label: 'Strategic Transformation (3,000 – 15,000+ Users)',
          desc: 'Multi-department rollout with legacy database schema migration and custom integrations.',
          icon: ShieldCheck,
        },
        {
          id: 'exploratory-pilot',
          label: 'Proof-of-Concept Pilot / Single Module',
          desc: 'Targeted trial to benchmark speed and staff adoption before full rollout.',
          icon: Sparkles,
        },
      ],
    },
  ];

  const handleSelectOption = (optionId: string) => {
    const updatedAnswers = { ...answers };
    if (currentStep === 0) updatedAnswers.orgType = optionId;
    if (currentStep === 1) updatedAnswers.challenge = optionId;
    if (currentStep === 2) updatedAnswers.scale = optionId;
    setAnswers(updatedAnswers);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (finalAnswers: typeof answers) => {
    const { challenge, orgType } = finalAnswers;

    if (challenge === 'identity-credentialing') {
      setResult({
        title: 'ScholarCard AI + Digital Campus Identity Framework',
        tagline: 'Cryptographic Student Credentialing & Verification Nexus',
        primaryProduct: 'ScholarCard AI',
        matchedTiers: ['Tier 1 Core Schema', 'Tamper-Evident QR Vault', 'AAI Verification Engine'],
        estimatedImpact: '99.8% verification accuracy • Zero counterfeit credentials',
        recommendedPlan: 'Immediate Module Deployment + Registrar Single Sign-On sync',
        badge: 'IDENTITY & VERIFICATION',
      });
    } else if (challenge === 'staff-governance') {
      setResult({
        title: 'StaffBridge Institutional Human Capital Engine',
        tagline: 'Biometric Attendance Synchronization & Paperless Faculty Workflows',
        primaryProduct: 'StaffBridge',
        matchedTiers: ['Hardware Biometric Connector', 'Duty Allocation Engine', 'Paperless Approval Flow'],
        estimatedImpact: '-65% administrative overhead on monthly leave reconciliation',
        recommendedPlan: 'Departmental pilot followed by full faculty rollout',
        badge: 'OPERATIONAL GOVERNANCE',
      });
    } else if (challenge === 'admission-analytics') {
      setResult({
        title: 'Admission Analytics Hub & Telemetry Engine',
        tagline: 'Predictive Enrollment Velocity & Departmental Seat Optimization',
        primaryProduct: 'Admission Analytics Hub',
        matchedTiers: ['Automated Scheduled Poller', 'Sub-second Query Cache', 'Executive Visualizer'],
        estimatedImpact: 'Continuous 30-min telemetry • 0-latency departmental vacancy visibility',
        recommendedPlan: 'Cloud telemetry bridge configured in under 72 hours',
        badge: 'DECISION INTELLIGENCE',
      });
    } else if (challenge === 'event-orchestration' || orgType === 'events') {
      setResult({
        title: 'EventOS High-Concurrency Summit Engine',
        tagline: 'End-to-End Ticketing, Optical Gate Scanners & Live Attendance Command',
        primaryProduct: 'EventOS',
        matchedTiers: ['Dynamic QR Wallet Passes', 'Offline Scanner Nodes', 'Real-time WebSocket Bus'],
        estimatedImpact: '< 1 sec check-in gate speed • Zero queue bottlenecks',
        recommendedPlan: 'Full summit infrastructure setup with volunteer device provisioning',
        badge: 'EVENT LIFECYCLE',
      });
    } else if (challenge === 'custom-ai-agents' || orgType === 'enterprise') {
      setResult({
        title: 'Hi-Tech Custom AI Core & Autonomous Agent Nexus',
        tagline: 'Bespoke Multi-Agent Automation, Domain LLMs & Zero-Leak Security',
        primaryProduct: 'Custom AI Solutions',
        matchedTiers: ['FastAPI Data Nexus', 'Isolated pgvector Store', 'Multi-Agent Router'],
        estimatedImpact: '-80% human repetition on document synthesis & approval routing',
        recommendedPlan: 'Architecture sprint + Sandbox proof-of-concept in 14 days',
        badge: 'AUTONOMOUS AI',
      });
    } else {
      // Default & Higher Ed Flagship: JyotOS
      setResult({
        title: 'JyotOS AI-Native Institutional Operating System',
        tagline: 'Comprehensive Campus Unification: One Campus. One Intelligence.',
        primaryProduct: 'JyotOS Flagship Suite',
        matchedTiers: [
          'Tier 1: Core OS & Multi-Tenant Partitioning',
          'Tier 2: AAI Academic Intelligence Engine',
          'Tier 3: Ask Jyot Conversational Assistant',
          'Tier 4: Admissions, Exams & Faculty Applications',
        ],
        estimatedImpact: '-60% administrative paper drag • 99.4% exam processing accuracy',
        recommendedPlan: 'Comprehensive semester roadmap with phased legacy database migration',
        badge: 'FLAGSHIP INSTITUTIONAL OS',
      });
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const handleDispatchWhatsApp = () => {
    if (!result) return;
    const text = encodeURIComponent(
      `Hello Hi-Tech AI Solutions Team,

I completed the Solution Architecture Assessment on your website:
- Organization Type: ${answers.orgType || 'Higher Education'}
- Primary Objective: ${answers.challenge || 'Campus Modernization'}
- Scale & Timeline: ${answers.scale || 'Next Semester'}
- Recommended Solution: ${result.title} (${result.primaryProduct})

I would like to schedule a technical walkthrough and discuss institutional sandbox deployment.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleDispatchEmail = () => {
    if (!result) return;
    const subject = encodeURIComponent(
      `Solution Assessment Inquiry: ${result.primaryProduct} for our Institution`
    );
    const body = encodeURIComponent(
      `Hello Hi-Tech AI Solutions Team,\n\nWe evaluated our institutional requirements using your online Solution Matcher:\n- Organization: ${answers.orgType}\n- Primary Friction: ${answers.challenge}\n- Scale / Timeline: ${answers.scale}\n- Matched Architecture: ${result.title}\n\nPlease share your implementation blueprint and available times for an executive briefing.\n\nBest regards.`
    );
    window.location.href = `mailto:contact@hi-tech-ai-solutions.github.io?subject=${subject}&body=${body}`;
  };

  return (
    <div className="cyber-glass rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-[0_0_50px_-15px_rgba(0,240,255,0.2)] text-left relative overflow-hidden">
      {/* Background Corner Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-neon-cyan text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Assessment Engine</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Solution Architecture Matcher
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm font-sans mt-1">
            Answer 3 quick questions to discover the optimal Hi-Tech platform configuration for your campus or enterprise.
          </p>
        </div>

        {result && (
          <button
            type="button"
            onClick={handleReset}
            className="self-start sm:self-auto text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Start Over</span>
          </button>
        )}
      </div>

      {!result ? (
        /* Questionnaire Steps */
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span>Question {currentStep + 1} of {steps.length}</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-neon-cyan to-violet-500 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <span className="text-neon-cyan font-bold">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </span>
          </div>

          {/* Current Step Question */}
          <div className="space-y-1">
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {steps[currentStep].title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 font-sans">
              {steps[currentStep].subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {steps[currentStep].options.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelectOption(option.id)}
                  className="p-5 rounded-2xl bg-[#080e1a] border border-white/10 hover:border-cyan-500/50 hover:bg-[#080e1a]/80 transition-all text-left group flex flex-col justify-between cursor-pointer space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      {Icon && (
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-neon-cyan group-hover:bg-cyan-950/60 group-hover:border-cyan-500/40 transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      )}
                      <h5 className="text-sm font-bold text-white group-hover:text-neon-cyan transition-colors">
                        {option.label}
                      </h5>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {option.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {currentStep > 0 && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="text-xs font-mono text-gray-400 hover:text-white transition-colors"
              >
                ← Back to previous question
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Result & Recommended Architecture Card */
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#080e1a] border border-cyan-500/40 space-y-5 shadow-[0_0_30px_rgba(0,240,255,0.15)]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border bg-cyan-950/60 border-cyan-500/40 text-neon-cyan font-semibold">
                  RECOMMENDED ARCHITECTURE: {result.badge}
                </span>
                <h4 className="text-2xl font-extrabold text-white tracking-tight mt-1.5">
                  {result.title}
                </h4>
                <p className="text-xs text-cyan-300 font-mono">{result.tagline}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Optimal Fit Identified</span>
                </span>
              </div>
            </div>

            {/* Matched Tiers & Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Synchronized Architecture Tiers:
                </span>
                <ul className="space-y-1.5 text-gray-300">
                  {result.matchedTiers.map((tier, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5" />
                      <span>{tier}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 p-4 rounded-xl bg-black/40 border border-white/5">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                    Estimated Institutional Impact:
                  </span>
                  <p className="text-emerald-400 font-bold font-mono text-sm mt-0.5">
                    {result.estimatedImpact}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                    Recommended Runway:
                  </span>
                  <p className="text-gray-300 text-xs mt-0.5">
                    {result.recommendedPlan}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Dispatch */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleDispatchWhatsApp}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Assessment via WhatsApp Priority</span>
              </button>

              <button
                type="button"
                onClick={handleDispatchEmail}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-neon-cyan to-cyan-400 hover:from-cyan-300 hover:to-neon-cyan text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Email Assessment to Engineering Team</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
