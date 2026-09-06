export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Operational Analytics' | 'Institutional OS' | 'Event Lifecycle' | 'Digital Credentialing';
  badge: string;
  badgeColor: string;
  timeline: string;
  theProblem: {
    overview: string;
    painPoints: string[];
  };
  theApproach: {
    strategy: string;
    keyDecisions: string[];
  };
  theTechnology: {
    stack: string[];
    architectureHighlights: string[];
  };
  theExperience: string;
  theImpact: {
    summary: string;
    metrics: { label: string; value: string; detail: string }[];
  };
  whatWeLearned: string;
  quote?: {
    text: string;
    author: string;
    role: string;
    institution: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'gcas-admission-analytics',
    title: 'GCAS 2026–27 Admission Intelligence & Rapid Operational Analytics',
    subtitle: 'Transforming high-stakes university admission telemetry into real-time decision intelligence',
    category: 'Operational Analytics',
    badge: 'PROVEN PROJECT STORY',
    badgeColor: 'border-cyan-500/40 text-neon-cyan bg-cyan-950/60',
    timeline: 'Executed in 72 Hours • Continuous 30-Min Telemetry',
    theProblem: {
      overview:
        'During the critical Gujarat Common Admission Services (GCAS) admission cycles, university leadership, college principals, and HODs faced severe operational blindspots. Seat occupancy shifted by the hour, but official reports were periodic, scattered, and cumbersome to synthesize.',
      painPoints: [
        'Delayed visibility into department-wise vacancies during crucial admission rounds',
        'Manual phone and spreadsheet inquiries between institutional deans and coordinators',
        'High administrative friction preventing agile outreach and capacity optimization',
      ],
    },
    theApproach: {
      strategy:
        'Engineered an automated data extraction and transformation pipeline operating on a scheduled 30-minute cycle, converting raw public admission metrics into an interactive, high-speed executive dashboard.',
      keyDecisions: [
        'Automated 30-minute scheduled polling and deterministic schema normalization',
        'Zero-login, friction-free interactive analytics dashboard for academic leadership',
        'Department-wise and institution-wise comparative occupancy telemetry',
      ],
    },
    theTechnology: {
      stack: ['Python Automation', 'FastAPI Data Core', 'PostgreSQL Cache', 'Next.js Analytics UI', 'Tailwind CSS'],
      architectureHighlights: [
        'Deterministic data extraction with auto-retry and schema validation',
        'Sub-second query caching for high-concurrency peak admission periods',
        'Mobile-optimized responsive views for leadership on-the-go',
      ],
    },
    theExperience:
      'Institutional leaders could open a clean, real-time URL and immediately inspect sanctioned capacity versus occupied seats across every department, vacancy percentages, and round-by-round shifts without requiring technical assistance.',
    theImpact: {
      summary:
        'Provided completely free of charge to participating colleges, receiving overwhelming praise and official letters of appreciation from principals and administrators for eliminating hours of manual reporting.',
      metrics: [
        { label: 'Sync Frequency', value: '30 Min', detail: 'Automated operational updates' },
        { label: 'Reporting Delay', value: 'Instant', detail: 'Down from 24-48 hr manual lag' },
        { label: 'Institutional Support', value: '100% Free', detail: 'Offered pro-bono to academic leaders' },
      ],
    },
    whatWeLearned:
      'True digital transformation does not require multi-year procurement cycles. When engineering focuses on acute operational friction with rapid, automated intelligence, immense organizational value is created in days.',
    quote: {
      text: 'The real-time admission telemetry eliminated our reporting blindspots during the most intense days of the GCAS cycle. Having department occupancy updated continuously gave our administrative team complete clarity.',
      author: 'Academic Leadership & HODs',
      role: 'Institutional Admissions Governance',
      institution: 'Participating Higher Education Colleges',
    },
  },
  {
    id: 'jyotos-campus-modernization',
    title: 'JyotOS Campus Modernization: Eliminating Paper & Legacy ERP Drag',
    subtitle: 'Replacing 7 disconnected legacy spreadsheets and paper files with a cognitive campus operating system',
    category: 'Institutional OS',
    badge: 'FLAGSHIP TRANSFORMATION',
    badgeColor: 'border-violet-500/40 text-violet-400 bg-violet-950/60',
    timeline: 'Full Semester Production Deployment',
    theProblem: {
      overview:
        'A multi-department college was struggling with fragmented legacy ERP software, paper leave registers, disconnected internal exam mark sheets, and manual student notices that frequently resulted in delays and lost records.',
      painPoints: [
        'Faculty spent up to 6 hours weekly on manual paperwork and attendance collation',
        'Student internal exam verification required days of physical file routing',
        'Lack of role-based data security led to cross-department data leakage risks',
      ],
    },
    theApproach: {
      strategy:
        'Deployed the unified 4-tier JyotOS Architecture with strict data isolation, role-based access control, paperless faculty governance, and automated examination workflows powered by the AAI engine.',
      keyDecisions: [
        'Unification of student lifecycle data under a single authoritative institutional schema',
        'Automated internal exam marksheet generation with deterministic validation rules',
        'Single Sign-On (SSO) for faculty, staff, students, and institutional trustees',
      ],
    },
    theTechnology: {
      stack: ['Next.js 15 App Router', 'TypeScript', 'PostgreSQL RBAC', 'AAI Automation Engine', 'Tailwind Cyber UI'],
      architectureHighlights: [
        'Zero-leak student data isolation with cryptographic audit logs',
        'Sub-100ms API response time across all internal portal queries',
        'Automatic document generation for official academic transcripts',
      ],
    },
    theExperience:
      'Faculty submitted examination grades and paperless leave requests directly through a responsive dashboard. The AAI engine cross-checked eligibility and anomalies automatically, cutting processing from days to seconds.',
    theImpact: {
      summary:
        'Transformed institutional speed across academic operations while maintaining complete audit integrity and 100% student data sovereignty.',
      metrics: [
        { label: 'Admin Drag', value: '-60%', detail: 'Reduction in manual paper workflows' },
        { label: 'Exam Accuracy', value: '99.4%', detail: 'Automated verification rules' },
        { label: 'Student Data Leaks', value: 'Zero', detail: 'Strict cryptographic RBAC' },
      ],
    },
    whatWeLearned:
      'Institutions do not need more software tools; they need a single, synchronized intelligence operating system that adapts to human faculty workflows rather than forcing humans into rigid legacy software.',
    quote: {
      text: 'JyotOS unified what used to take four different tools and endless paper approvals into a single, seamless digital campus. The faculty adopted it effortlessly within the first week.',
      author: 'Campus Director & System Administrator',
      role: 'Campus Operations & Technology',
      institution: 'Higher Education Institutional Partner',
    },
  },
  {
    id: 'eventos-concurrency',
    title: 'EventOS: High-Concurrency Orchestration for Institutional Summits',
    subtitle: 'Managing thousands of live participants, QR passes, and automated entrance verification with zero queue latency',
    category: 'Event Lifecycle',
    badge: 'HIGH-CONCURRENCY SUMMIT',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/60',
    timeline: 'Single-Day Peak Concurrency Operation',
    theProblem: {
      overview:
        'Large-scale institutional symposiums and technical conferences suffered from massive morning entrance bottlenecks, printed ticket discrepancies, duplicate entries, and zero real-time attendee tracking for security teams.',
      painPoints: [
        'Queue wait times exceeding 45 minutes at primary campus auditorium gates',
        'Fraudulent ticket transfers and untracked visitor entry',
        'Manual registration lists with zero live attendance telemetry for organizers',
      ],
    },
    theApproach: {
      strategy:
        'Engineered EventOS as a distributed event lifecycle engine: dynamic encrypted QR pass distribution via WhatsApp/Email, offline-tolerant optical scanning apps, and real-time WebSocket check-in telemetry.',
      keyDecisions: [
        'Tamper-evident, single-use encrypted QR codes generated per attendee',
        'Multi-device rapid camera scanning with sub-200ms cryptographic verification',
        'Live central command dashboard displaying real-time entry velocity',
      ],
    },
    theTechnology: {
      stack: ['Next.js', 'WebSockets', 'Encrypted QR Protocols', 'PostgreSQL Transaction Pipeline', 'Mobile Web PWA'],
      architectureHighlights: [
        'Offline-capable scanning nodes with automated rollback synchronization',
        'Instant duplicate pass detection and unauthorized badge alerts',
        'Automated post-event digital participation credential issuance',
      ],
    },
    theExperience:
      'Attendees arrived with digital wallet passes on their smartphones. Gate volunteers scanned each pass in under 1 second, granting immediate access while the central command desk watched entry telemetry update live.',
    theImpact: {
      summary:
        'Completely eradicated campus entry congestion, providing flawless security governance and real-time institutional attendance auditability.',
      metrics: [
        { label: 'Check-In Velocity', value: '< 1 Sec', detail: 'Average gate scan & verification' },
        { label: 'Total Verified', value: '2,500+', detail: 'Participants checked in smoothly' },
        { label: 'Gate Bottleneck', value: '0 Min', detail: 'Zero queue backlog at main entrance' },
      ],
    },
    whatWeLearned:
      'High-stakes event infrastructure requires bulletproof local resilience. When security, speed, and real-time telemetry synchronize, both attendees and campus organizers experience effortless operational mastery.',
  },
];
