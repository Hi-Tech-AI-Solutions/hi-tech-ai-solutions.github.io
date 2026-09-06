export type ProductStatus =
  | 'ECOSYSTEM FLAGSHIP'
  | 'LIVE DEPLOYMENT'
  | 'IN DEVELOPMENT'
  | 'ACTIVE PROTOTYPE';

export type ProductCategory =
  | 'Institutional OS'
  | 'Identity & Credentialing'
  | 'AI Agents'
  | 'Operations & Governance'
  | 'Event Management'
  | 'Analytics';

export interface ProductModule {
  name: string;
  description: string;
  status: 'Production' | 'Beta' | 'Planned';
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  status: ProductStatus;
  badgeColor: string;
  summary: string;
  architectureDescription: string;
  coreHighlights: string[];
  modules: ProductModule[];
  techStack: string[];
  targetAudience: string[];
  githubRepo?: string;
  demoAvailable: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'jyotos',
    name: 'JyotOS Platform',
    tagline: 'AI-Native Institutional Operating System for Education',
    category: 'Institutional OS',
    status: 'ECOSYSTEM FLAGSHIP',
    badgeColor: 'border-cyan-500/40 text-neon-cyan bg-cyan-950/60',
    summary:
      'A comprehensive, AI-native operating system designed to unify academic, administrative, communication, and student services into one synchronized, intelligent ecosystem.',
    architectureDescription:
      'Built upon the four-tier JyotOS Architecture: Core Operating Platform → AAI (Academic Artificial Intelligence engine) → Ask Jyot (Conversational AI Assistant) → Institutional Applications (Admissions, Exams, Events, Analytics, Placement, Finance, and Attendance).',
    coreHighlights: [
      'Replaces fragmented legacy ERPs with a unified cognitive campus operating system',
      'AAI (Academic AI) intelligence engine driving predictive insights and auto-approvals',
      'Ask Jyot multi-agent conversational assistant for students, faculty, and leadership',
      'Multi-role access governance with zero-leak institutional data confidentiality',
    ],
    modules: [
      {
        name: 'Admissions & Student Onboarding',
        description: 'End-to-end digital intake, verification, and multi-channel onboarding.',
        status: 'Production',
      },
      {
        name: 'Internal Examination Engine',
        description: 'Automated exam scheduling, marks entry, and grade sheet generation.',
        status: 'Production',
      },
      {
        name: 'Academic Analytics Hub',
        description: 'Campus telemetry, student progression indicators, and executive dashboards.',
        status: 'Production',
      },
      {
        name: 'Faculty & Leave Governance',
        description: 'Duty allocation, biometric integration, and paperless leave workflows.',
        status: 'Production',
      },
      {
        name: 'Placement & Career Intelligence',
        description: 'Student portfolio matching, recruiter coordination, and interview tracking.',
        status: 'Beta',
      },
      {
        name: 'AAI Automation Nexus',
        description: 'Self-driving institutional workflows, notification triggers, and document verification.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'FastAPI', 'Python AI Core'],
    targetAudience: ['Universities', 'Colleges', 'Polytechnic Institutes', 'Higher Education Consortia'],
    githubRepo: 'https://github.com/Hi-Tech-AI-Solutions',
    demoAvailable: true,
  },
  {
    id: 'scholarcard-ai',
    name: 'ScholarCard AI',
    tagline: 'Student Identity, Verification & Academic Credentialing',
    category: 'Identity & Credentialing',
    status: 'LIVE DEPLOYMENT',
    badgeColor: 'border-violet-500/40 text-violet-400 bg-violet-950/60',
    summary:
      'A next-generation student identity verification and digital credentialing platform ensuring tamper-evident institutional IDs and real-time academic validation.',
    architectureDescription:
      'Cryptographically signed student records integrated with QR validation, biometric verification protocols, and live institutional registry synchronization.',
    coreHighlights: [
      'Tamper-evident dynamic digital student identity with cryptographic verification',
      'Instant institutional scan-to-verify mobile reader for campus gates, libraries, and exams',
      'Automated batch generation of physical and mobile wallet credentials',
      'Complete student lifecycle audit logs and identity revocation controls',
    ],
    modules: [
      {
        name: 'Digital Credential Generator',
        description: 'Instant PDF and mobile wallet student ID issuance.',
        status: 'Production',
      },
      {
        name: 'Gate & Library QR Scanner',
        description: 'Sub-second real-time check-in and attendance recording.',
        status: 'Production',
      },
      {
        name: 'Identity Verification Registry',
        description: 'Public cryptographic verification endpoint for employers and universities.',
        status: 'Production',
      },
      {
        name: 'Anomaly & Duplicate Detection',
        description: 'AI-assisted verification preventing fraudulent credentials.',
        status: 'Production',
      },
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'QR Cryptography'],
    targetAudience: ['Academic Institutions', 'Exam Boards', 'Campus Security Teams'],
    githubRepo: 'https://github.com/Hi-Tech-AI-Solutions/scholarcard-ai',
    demoAvailable: true,
  },
  {
    id: 'jyotassist-ai',
    name: 'jyotAssist AI',
    tagline: 'Contextual Conversational AI Assistant & Workflow Agent',
    category: 'AI Agents',
    status: 'LIVE DEPLOYMENT',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/60',
    summary:
      'Autonomous conversational agent and multi-agent assistant delivering instant answers, syllabus guidance, operational FAQs, and workflow triage for campus communities.',
    architectureDescription:
      'Domain-adapted Large Language Models paired with Retrieval-Augmented Generation (RAG) over institutional handbooks, circulars, and course catalogs.',
    coreHighlights: [
      'Zero-hallucination institutional guidance grounded in verified campus documents',
      'Multi-lingual conversational support for students, parents, and faculty',
      'Automated routing of administrative grievances and helpdesk requests',
      'Seamless integration into WhatsApp, institutional portals, and mobile apps',
    ],
    modules: [
      {
        name: 'Institutional Knowledge RAG',
        description: 'Vector-indexed circulars, syllabus handbooks, and policy guidelines.',
        status: 'Production',
      },
      {
        name: 'Multi-Agent Triage Router',
        description: 'Classifies and routes inquiries to academic, accounts, or exam desks.',
        status: 'Production',
      },
      {
        name: 'WhatsApp Bot Interface',
        description: 'Conversational assistant available directly on WhatsApp 24/7.',
        status: 'Production',
      },
      {
        name: 'Analytics & Query Heatmap',
        description: 'Identifies common student pain points and administrative bottlenecks.',
        status: 'Beta',
      },
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'Vector DB', 'WhatsApp Cloud API'],
    targetAudience: ['Students', 'College Helpdesks', 'Academic Counselors', 'Faculty'],
    githubRepo: 'https://github.com/Hi-Tech-AI-Solutions/jyotAssist-AI',
    demoAvailable: true,
  },
  {
    id: 'staffbridge',
    name: 'StaffBridge',
    tagline: 'Staff Administration & Human Capital Operational Governance',
    category: 'Operations & Governance',
    status: 'LIVE DEPLOYMENT',
    badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-950/60',
    summary:
      'A streamlined human capital and operational governance platform coordinating faculty attendance, leave approvals, institutional workloads, and administrative accountability.',
    architectureDescription:
      'Role-governed state machine coordinating multi-tier leave approval hierarchies, biometric device streams, and academic duty substitution.',
    coreHighlights: [
      'Multi-level hierarchy approvals (HOD → Principal → Management) with zero paperwork',
      'Biometric and mobile attendance reconciliation with anomaly alerting',
      'Automatic lecture substitution coordinator when faculty members take leave',
      'Institutional compliance reports ready for audit and accreditation reviews',
    ],
    modules: [
      {
        name: 'Paperless Leave Management',
        description: 'Configurable casual, medical, and duty leave approval workflows.',
        status: 'Production',
      },
      {
        name: 'Biometric Stream Sync',
        description: 'Daily automated reconciliation of device logs into central registers.',
        status: 'Production',
      },
      {
        name: 'Workload & Lecture Tracker',
        description: 'Department-wise lecture distribution and substitution governance.',
        status: 'Production',
      },
      {
        name: 'Accreditation Audit Export',
        description: 'One-click compliance reporting for institutional quality assurance.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
    targetAudience: ['College Principals', 'HR & Administrative Officers', 'Department Heads'],
    githubRepo: 'https://github.com/Hi-Tech-AI-Solutions/StaffBridge',
    demoAvailable: true,
  },
  {
    id: 'eventos',
    name: 'EventOS',
    tagline: 'Institutional Event Lifecycle & Real-Time Orchestration',
    category: 'Event Management',
    status: 'LIVE DEPLOYMENT',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/60',
    summary:
      'End-to-end institutional event coordination platform managing registrations, QR passes, schedule broadcasts, team competitions, and real-time gate entry.',
    architectureDescription:
      'High-concurrency cloud architecture built to handle thousands of simultaneous registrations, instant QR badge generation, and sub-second offline-capable gate check-ins.',
    coreHighlights: [
      'Instant registration and digital pass delivery via WhatsApp and email',
      'High-speed mobile camera QR scanner for fast queue clearance at event venues',
      'Multi-track schedule coordinator and real-time announcement broadcaster',
      'Automated digital certificates of participation with verification hashes',
    ],
    modules: [
      {
        name: 'Event Registration Engine',
        description: 'Configurable solo and team registration forms with capacity caps.',
        status: 'Production',
      },
      {
        name: 'High-Speed Scanner App',
        description: 'Mobile PWA scanner processing check-ins in under 400ms.',
        status: 'Production',
      },
      {
        name: 'Live Crowd Dashboard',
        description: 'Real-time venue capacity and check-in telemetry.',
        status: 'Production',
      },
      {
        name: 'Automated Certificate Issuer',
        description: 'One-click batch generation of verifiable participant certificates.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js App Router', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'QR Engine'],
    targetAudience: ['Institutions', 'Tech Fests', 'Academic Conferences', 'Cultural Committees'],
    githubRepo: 'https://github.com/Hi-Tech-AI-Solutions/EventOS',
    demoAvailable: true,
  },
  {
    id: 'admission-analytics',
    name: 'Admission Analytics',
    tagline: 'Predictive Seat Occupancy & Institutional Intake Intelligence',
    category: 'Analytics',
    status: 'ACTIVE PROTOTYPE',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/60',
    summary:
      'Data-driven intake intelligence analyzing historical application patterns, merit trends, and quota allocations to forecast institutional seat occupancy.',
    architectureDescription:
      'Predictive time-series statistical models and interactive funnel visualizations evaluating admission conversion rates and dropout probabilities.',
    coreHighlights: [
      'Multi-year historical intake comparisons and predictive round-by-round fill forecasts',
      'Category and quota tracking ensuring statutory compliance and seat optimization',
      'Applicant drop-off heatmaps identifying friction points during fee payment and document upload',
      'Executive dashboards for college trustees and admissions committees',
    ],
    modules: [
      {
        name: 'Intake Funnel Analyzer',
        description: 'Application to enrollment conversion telemetry.',
        status: 'Beta',
      },
      {
        name: 'Seat Matrix Simulator',
        description: 'Scenario analysis for reservation quotas and category cutoffs.',
        status: 'Beta',
      },
      {
        name: 'Merit Trend Telemetry',
        description: 'Predictive forecasting of cutoff marks across academic programs.',
        status: 'Beta',
      },
    ],
    techStack: ['Next.js', 'TypeScript', 'Python Data Analytics', 'SQL Aggregations'],
    targetAudience: ['Admissions Deans', 'College Trustees', 'Institutional Registrars'],
    demoAvailable: false,
  },
];
