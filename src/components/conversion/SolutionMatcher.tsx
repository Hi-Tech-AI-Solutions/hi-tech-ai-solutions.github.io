'use client';

import React, { useEffect, useRef, useState } from 'react';
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
import { CONTACT, telUrl, whatsappUrl, mailtoUrl } from '@/lib/site';

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

// Questions and options are written for a principal or registrar, not an engineer.
// The option ids are unchanged, so the matching logic below works exactly as before.
const STEPS: QuestionStep[] = [
  {
    title: 'What kind of organisation are you?',
    subtitle: 'Pick the closest match.',
    options: [
      {
        id: 'college',
        label: 'College or polytechnic',
        desc: 'A single undergraduate or postgraduate institute.',
        icon: Building2,
      },
      {
        id: 'university',
        label: 'University or multi-campus trust',
        desc: 'Several colleges or campuses under one management.',
        icon: Layers,
      },
      {
        id: 'enterprise',
        label: 'Business or other organisation',
        desc: 'A company that needs custom AI software or automation.',
        icon: Cpu,
      },
      {
        id: 'events',
        label: 'Event or conference organiser',
        desc: 'Fests, summits and conferences with registration and entry.',
        icon: Sparkles,
      },
    ],
  },
  {
    title: 'What do you most want to fix first?',
    subtitle: 'Choose the one that costs your staff the most time today.',
    options: [
      {
        id: 'campus-erps',
        label: 'Everything in one system',
        desc: 'Replace scattered software, spreadsheets and paper approvals with one platform.',
      },
      {
        id: 'identity-credentialing',
        label: 'Student ID cards and verification',
        desc: 'Collect student details, print ID cards and verify them by QR code.',
      },
      {
        id: 'staff-governance',
        label: 'Staff attendance, leave and rosters',
        desc: 'Paperless leave approvals, duty rosters and staff records.',
      },
      {
        id: 'admission-analytics',
        label: 'Admissions tracking',
        desc: 'See seats filled, merit ranks and enrolment as admissions happen.',
      },
      {
        id: 'event-orchestration',
        label: 'Event registration and entry',
        desc: 'QR passes and fast check-in at the gate.',
      },
      {
        id: 'custom-ai-agents',
        label: 'A custom AI assistant or automation',
        desc: 'A helpdesk or workflow built around your own documents and rules.',
      },
    ],
  },
  {
    title: 'How big is this, and how soon?',
    subtitle: 'This helps us plan the rollout.',
    options: [
      {
        id: 'immediate-semester',
        label: 'Under 3,000 users, by next semester',
        desc: 'You need it running within about 30 days.',
        icon: Clock,
      },
      {
        id: 'enterprise-scale',
        label: '3,000 to 15,000+ users, phased rollout',
        desc: 'Several departments, with data moved over from your current system.',
        icon: ShieldCheck,
      },
      {
        id: 'exploratory-pilot',
        label: 'A pilot first',
        desc: 'Try one module with a small group before deciding.',
        icon: Sparkles,
      },
    ],
  },
];

export default function SolutionMatcher() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<{
    orgType?: string;
    challenge?: string;
    scale?: string;
    timeline?: string;
  }>({});
  const [result, setResult] = useState<MatchResult | null>(null);

  // After each answer the old buttons disappear, which used to drop keyboard focus onto <body>
  // and gave screen-reader users no sign that a new question had appeared. Focus now moves to
  // the new question (or the result) heading. Never on first render: that would steal focus on load.
  const headingRef = useRef<HTMLHeadingElement>(null);
  const hasInteracted = useRef(false);

  useEffect(() => {
    if (!hasInteracted.current) return;
    headingRef.current?.focus();
  }, [currentStep, result]);

  const handleSelectOption = (optionId: string) => {
    hasInteracted.current = true;
    const updatedAnswers = { ...answers };
    if (currentStep === 0) updatedAnswers.orgType = optionId;
    if (currentStep === 1) updatedAnswers.challenge = optionId;
    if (currentStep === 2) updatedAnswers.scale = optionId;
    setAnswers(updatedAnswers);

    if (currentStep < STEPS.length - 1) {
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
    hasInteracted.current = true;
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const handleBack = () => {
    hasInteracted.current = true;
    setCurrentStep(currentStep - 1);
  };

  // Turn internal option ids (e.g. "campus-erps") into the readable label the visitor clicked.
  const labelFor = (stepIndex: number, id?: string) =>
    id ? STEPS[stepIndex]?.options.find((o) => o.id === id)?.label ?? id : '';

  // One summary for both channels. It ends with a line for the sender to complete, because
  // the answers alone do not say who is asking or from which institution.
  const summaryLines = (r: MatchResult) => [
    `- We are: ${labelFor(0, answers.orgType)}`,
    `- We want to fix first: ${labelFor(1, answers.challenge)}`,
    `- Size and timing: ${labelFor(2, answers.scale)}`,
    `- Suggested setup: ${r.title} (${r.primaryProduct})`,
  ];

  const handleDispatchWhatsApp = () => {
    if (!result) return;
    const text = [
      'Hello Hi-Tech AI Solutions Team,',
      '',
      'I used the solution finder on your website:',
      ...summaryLines(result),
      '',
      'Please contact me to arrange a walkthrough.',
      '',
      'My name and institution:',
    ].join('\n');
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  const handleDispatchEmail = () => {
    if (!result) return;
    const subject = `Solution finder enquiry: ${result.primaryProduct}`;
    const body = [
      'Hello Hi-Tech AI Solutions Team,',
      '',
      'We used the solution finder on your website:',
      ...summaryLines(result),
      '',
      'Please contact us to arrange a walkthrough.',
      '',
      'Name and institution:',
      'Phone:',
    ].join('\n');
    window.location.href = mailtoUrl(subject, body);
  };

  const step = STEPS[currentStep];
  const percent = Math.round(((currentStep + 1) / STEPS.length) * 100);

  return (
    <div className="cyber-glass rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-[0_0_50px_-15px_rgba(183,194,214,0.2)] text-left relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
            Solution finder
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm font-sans mt-1">
            Three questions, no sign-up. You get a suggested setup to send us on WhatsApp or by email.
          </p>
        </div>

        {result && (
          <button
            type="button"
            onClick={handleReset}
            className="self-start sm:self-auto text-xs font-mono px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Start Over</span>
          </button>
        )}
      </div>

      {!result ? (
        /* Questionnaire Steps */
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span>Question {currentStep + 1} of {STEPS.length}</span>
            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden" aria-hidden="true">
              <div
                className="h-full bg-gray-300 transition-all duration-300"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="text-neon-cyan font-bold" aria-hidden="true">
              {percent}%
            </span>
          </div>

          {/* Current Step Question. The key remounts the heading so the new question is announced. */}
          <div className="space-y-1">
            <h4
              key={currentStep}
              ref={headingRef}
              tabIndex={-1}
              className="scroll-mt-28 text-lg sm:text-xl font-bold text-white tracking-tight rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0F19]"
            >
              {step.title}
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 font-sans">
              {step.subtitle}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {step.options.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSelectOption(option.id)}
                  className="p-5 rounded-2xl bg-[#111724] border border-white/10 hover:border-cyan-500/50 hover:bg-[#111724]/80 transition-all text-left group flex flex-col justify-between cursor-pointer space-y-3"
                >
                  <span className="flex items-start justify-between gap-2">
                    <span className="flex items-center gap-2.5">
                      {Icon && (
                        <span className="p-2 rounded-lg bg-white/5 border border-white/10 text-neon-cyan group-hover:bg-cyan-950/60 group-hover:border-cyan-500/40 transition-colors">
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </span>
                      )}
                      <span className="text-sm font-bold text-white">
                        {option.label}
                      </span>
                    </span>
                    <ArrowRight className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" aria-hidden="true" />
                  </span>
                  <span className="block text-xs text-gray-400 font-sans leading-relaxed">
                    {option.desc}
                  </span>
                </button>
              );
            })}
          </div>

          {currentStep > 0 && (
            <div className="pt-2">
              <button
                type="button"
                onClick={handleBack}
                className="text-xs font-mono py-2 text-gray-400 hover:text-white transition-colors"
              >
                ← Back to previous question
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Result & Recommended Architecture Card */
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111724] border border-cyan-500/40 space-y-5 shadow-[0_0_30px_rgba(183,194,214,0.15)]">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded border bg-cyan-950/60 border-cyan-500/40 text-neon-cyan font-semibold">
                Suggested setup: {result.badge}
              </span>
              <h4
                ref={headingRef}
                tabIndex={-1}
                className="scroll-mt-28 text-2xl font-semibold text-white tracking-tight mt-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-[#111724]"
              >
                {result.title}
              </h4>
              <p className="text-xs text-cyan-300 font-mono mt-1">{result.tagline}</p>
            </div>

            {/* Matched Tiers & Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans">
              <div className="space-y-2 p-4 rounded-xl bg-black/40 border border-white/5">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  What it includes
                </span>
                <ul className="space-y-1.5 text-gray-300">
                  {result.matchedTiers.map((tier, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-neon-cyan shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{tier}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 p-4 rounded-xl bg-black/40 border border-white/5">
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                    Estimated impact
                  </span>
                  <p className="text-emerald-400 font-bold font-mono text-sm mt-0.5">
                    {result.estimatedImpact}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                    Suggested rollout
                  </span>
                  <p className="text-gray-300 text-xs mt-0.5">
                    {result.recommendedPlan}
                  </p>
                </div>
              </div>
            </div>

            {/* Send it to us */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleDispatchWhatsApp}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>Send this to us on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleDispatchEmail}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-accent hover:bg-accent-hover text-[#0B0F19] font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(183,194,214,0.3)] transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send this to us by email</span>
              </button>
            </div>

            {/* The buttons need WhatsApp or a mail app on the device. This always works. */}
            <p className="text-xs text-gray-400 leading-relaxed">
              Prefer to talk? Call or WhatsApp{' '}
              <a href={telUrl} className="text-gray-200 underline underline-offset-2 hover:text-white whitespace-nowrap">
                {CONTACT.phoneDisplay}
              </a>
              , or write to{' '}
              <a href={mailtoUrl()} className="text-gray-200 underline underline-offset-2 hover:text-white">
                {CONTACT.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
