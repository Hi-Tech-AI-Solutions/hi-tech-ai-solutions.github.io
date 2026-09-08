export type ProductStatus =
  | 'ECOSYSTEM FLAGSHIP'
  | 'LIVE PRODUCTION'
  | 'LIVE DEPLOYMENT'
  | 'IN DEVELOPMENT'
  | 'ACTIVE PROTOTYPE';

export type ProductCategory =
  | 'Institutional Core & OS'
  | 'AI Agents & Support'
  | 'Academic Telemetry & Analytics'
  | 'Smart Campus & Identity'
  | 'Operations & Events';

export interface ProductMetric {
  label: string;
  value: string;
}

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
  institution: string;
  summary: string;
  architectureDescription: string;
  coreHighlights: string[];
  modules: ProductModule[];
  techStack: string[];
  targetAudience: string[];
  liveDemoUrl?: string;
  githubRepo?: string;
  metrics?: ProductMetric[];
  demoAvailable: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'jyotos',
    name: 'JyotOS Platform',
    tagline: 'AI-Native Institutional Operating System for Higher Education',
    category: 'Institutional Core & OS',
    status: 'ECOSYSTEM FLAGSHIP',
    badgeColor: 'border-cyan-500/40 text-neon-cyan bg-cyan-950/60',
    institution: 'Higher Education Consortia & Universities',
    summary:
      'A comprehensive, AI-native operating system designed to unify academic, administrative, communication, and student services into one synchronized, cognitive ecosystem.',
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
    liveDemoUrl: 'https://hi-tech-ai-solutions.github.io/#jyotos',
    githubRepo: 'https://github.com/Hi-Tech-AI-Solutions',
    metrics: [
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Data Leak Risk', value: 'Zero' },
      { label: 'Admin Overhead', value: '-60%' },
      { label: 'Architecture', value: '4-Tier AAI' },
    ],
    demoAvailable: true,
  },
  {
    id: 'jyotassist-ai',
    name: 'jyotAssist AI',
    tagline: 'Next-Gen WhatsApp Business CRM & Grounded AI Support Desk',
    category: 'AI Agents & Support',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/60',
    institution: 'Amroli SFI Colleges / Enterprise Support',
    summary:
      'Enterprise-grade, self-hosted WhatsApp Business CRM communicating directly with Meta WhatsApp Cloud API v21.0, featuring multi-agent shared inboxes, visual flow builders, pgvector RAG, and social feeds.',
    architectureDescription:
      'Direct Meta Cloud API integration connected to Supabase Realtime PostgreSQL, pgvector embedding retrieval via Google Gemini Flash, and @xyflow/react canvas orchestrator for multi-branch bot execution.',
    coreHighlights: [
      'Multi-Agent Shared Inbox with real-time collision prevention, presence indicators, and voice notes',
      'Grounded AI Knowledge Base (AAI Vector RAG) delivering zero-hallucination document answers',
      'Interactive 3-Event Photo Chain with Instagram Graph API integration for campus event broadcasts',
      'Visual No-Code Flow Builder and Sales & Admission Kanban pipelines with multi-currency tracking',
    ],
    modules: [
      {
        name: 'Multi-Agent Shared Inbox',
        description: 'Real-time collaborative WhatsApp inbox with collision detection and voice notes.',
        status: 'Production',
      },
      {
        name: 'Grounded AI Knowledge Engine',
        description: 'pgvector RAG over circulars, prospectuses, and institutional handbooks.',
        status: 'Production',
      },
      {
        name: 'Visual Flow Canvas',
        description: 'Drag-and-drop conversational node editor with quick buttons and interactive lists.',
        status: 'Production',
      },
      {
        name: 'Sales & Admission Kanban',
        description: 'Visual lead progression pipeline with stage totals and counselor assignment.',
        status: 'Production',
      },
      {
        name: 'Instagram Social Media Sync',
        description: 'Live Graph API sync delivering high-res photo chains and event brochures.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js 16', 'React 19', 'Supabase Realtime', 'pgvector', 'Meta Cloud API v21.0', 'Gemini Flash'],
    targetAudience: ['Academic Admissions', 'Enterprise Customer Support', 'Counseling Teams'],
    liveDemoUrl: 'https://jyot-assist-ai.vercel.app/',
    githubRepo: 'https://github.com/jyotOS-Core/jyotAssist-AI',
    metrics: [
      { label: 'Official Protocol', value: 'Meta API v21.0' },
      { label: 'Knowledge Base', value: 'pgvector RAG' },
      { label: 'Automated Tests', value: '487 Passing' },
      { label: 'Workflow Editor', value: '@xyflow Canvas' },
    ],
    demoAvailable: true,
  },
  {
    id: 'scholarcard-ai',
    name: 'ScholarCard AI',
    tagline: 'Smart Student ID Card Lifecycle & High-DPI Print Production Platform',
    category: 'Smart Campus & Identity',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-violet-500/40 text-violet-400 bg-violet-950/60',
    institution: 'Amroli SFI Colleges',
    summary:
      'Complete smart student ID card lifecycle platform featuring a mobile-first student profile intake wizard, dynamic Excel header mapping, and high-DPI CR80 thermal printer queue generation.',
    architectureDescription:
      'Client-side HTML5 canvas image compressor locking uploads to 3:4 aspect ratio JPEGs (~100KB), cryptographic QR token generation, and thermal card calibration formatted to 85.6mm × 54mm.',
    coreHighlights: [
      'Touch-responsive mobile student portal with HTML5 signature pad and 3D flippable CSS preview',
      'Dynamic Excel column-to-schema mapper for zero-effort bulk student roster ingestion',
      'Librarian Front Desk managing lost/damaged card re-issue fees and barcode verification',
      'High-DPI 300 DPI batch ZIP print export formatted precisely for CR80 card printers',
    ],
    modules: [
      {
        name: 'Mobile Student Profile Wizard',
        description: 'Touch-friendly cropping canvas and digital signature submission drawer.',
        status: 'Production',
      },
      {
        name: 'Smart Excel Header Mapper',
        description: 'Drag-and-drop spreadsheet column mapping to relational database schemas.',
        status: 'Production',
      },
      {
        name: 'Thermal Print Calibration Desk',
        description: 'Sliders for offset and corner radius with 300 DPI batch ZIP downloads.',
        status: 'Production',
      },
      {
        name: 'Librarian Re-Issue Desk',
        description: 'Fee collection receipt recording, barcode lookup, and dispatch tracking.',
        status: 'Production',
      },
      {
        name: 'SaaS Super Admin Terminal',
        description: 'Tenant client provisioning and per-card licensing rates governance.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Supabase PostgreSQL', 'Canvas API'],
    targetAudience: ['Colleges & Universities', 'ID Card Printers', 'Campus Librarians'],
    liveDemoUrl: 'https://scholarcard-ai.vercel.app/',
    githubRepo: 'https://github.com/jyotOS-Core/scholarcard-ai',
    metrics: [
      { label: 'Print Standard', value: '300 DPI CR80' },
      { label: 'Image Engine', value: 'Client-Crop 100KB' },
      { label: 'Schema Mapping', value: 'Smart Excel' },
      { label: 'Security', value: 'QR Cryptography' },
    ],
    demoAvailable: true,
  },
  {
    id: 'classpulse-pro',
    name: 'ClassPulsePro',
    tagline: 'Real-Time Academic Timetable & Lecture Reconciliation Engine',
    category: 'Academic Telemetry & Analytics',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-sky-500/40 text-sky-400 bg-sky-950/60',
    institution: 'Amroli SFI Colleges (BCA, BBA, B.Com, M.Com)',
    summary:
      'High-throughput academic reconciliation platform reconciling 10,459 lecture log entries across 87 faculty identities against master aSc timetables with AI pedagogical support.',
    architectureDescription:
      'PostgREST chunked streaming pipeline ingesting daily lecture CSV logs, cross-reconciling against aSc timetable matrices, and providing scoped HOD/Principal dashboards and AI lesson planners.',
    coreHighlights: [
      'Master Reconciliation Matrix processing 10,459+ lecture logs in real time across 4 wings',
      'Principal Executive Cockpit & HOD-scoped department variance gauges with working-day calculators',
      'Next-Gen AI Teacher Diary generating Bloom taxonomy lesson plans and exam questions',
      'NAAC-compliant inspection sheets and StaffBridge profile verification animation sequence',
    ],
    modules: [
      {
        name: 'Principal Executive Cockpit',
        description: 'College-wide completion rates, variance inspection, and contract adherence.',
        status: 'Production',
      },
      {
        name: 'HOD Department Cockpit',
        description: 'Strictly scoped department views tracking expected vs delivered sessions.',
        status: 'Production',
      },
      {
        name: 'AI Teacher Diary & Copilot',
        description: 'Auto-generates Bloom taxonomy lesson plans, exam questions, and recaps.',
        status: 'Production',
      },
      {
        name: 'Master Reconciliation Matrix',
        description: 'Streams and reconciles 10,459 lecture logs against timetable schedules.',
        status: 'Production',
      },
      {
        name: 'NAAC Compliance Exporter',
        description: 'Print-ready statutory audit sheets and faculty contract verification.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js 16 App Router', 'TypeScript', 'Supabase PostgreSQL', 'PostgREST Streaming', 'Python Pandas'],
    targetAudience: ['College Principals', 'Department HODs', 'Faculty Members', 'NAAC Coordinators'],
    liveDemoUrl: 'https://classpulse-jyotos-ai.vercel.app/',
    githubRepo: 'https://github.com/jyotOS-Core/ClassPulsePro',
    metrics: [
      { label: 'Reconciled Logs', value: '10,459+ Sessions' },
      { label: 'Faculty Roster', value: '87 Tracked' },
      { label: 'NAAC Compliance', value: '1-Click Export' },
      { label: 'AI Diary', value: "Bloom's Lesson Plan" },
    ],
    demoAvailable: true,
  },
  {
    id: 'jyotos-showcase',
    name: 'JyotOS AAI Showcase',
    tagline: 'Institutional Presentation Runtime & Grounded Interactive AI',
    category: 'AI Agents & Support',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-amber-500/40 text-amber-400 bg-amber-950/60',
    institution: 'Amroli SFI Colleges FY Orientation',
    summary:
      'Futuristic presentation runtime and grounded institutional memory engine for First-Year Orientation, featuring rotating neon shaders, switchable themes, and real-time streaming AI.',
    architectureDescription:
      'Hardware-accelerated CSS @property conic gradients, zero-latency synthesizer Web Audio micro-interactions, and grounded LLM wiki indexed from 65 master orientation slides with slide-jump triggers.',
    coreHighlights: [
      'Grounded Ask JyotOS AI Knowledge Engine with real-time typewriter streaming and 1-click slide jump',
      'Hardware-accelerated rotating neon borders (@property --border-angle) with 5 cyber themes',
      'Multi-audience filtering for Full Institutional Deck, Parents PTM, Student Orientation, and Exec Summary',
      'Presenter HUD with hotkeys, Web Audio sound effects, and GPU battery-saving Eco Mode',
    ],
    modules: [
      {
        name: 'Ask JyotOS AI Engine',
        description: 'Grounded streaming conversational memory with zero hallucinations.',
        status: 'Production',
      },
      {
        name: 'Shader & Theme Matrix',
        description: '5 switchable cyber colorways with rotating conic gradient animations.',
        status: 'Production',
      },
      {
        name: 'Multi-Audience Filter',
        description: 'Dynamic slide deck re-ordering tailored to parents, students, or trustees.',
        status: 'Production',
      },
      {
        name: 'Presenter HUD & Audio FX',
        description: 'Keyboard navigation, slide overview grid, and synthesizer audio feedback.',
        status: 'Production',
      },
    ],
    techStack: ['HTML5 Canvas', 'Vanilla CSS Engine', 'Web Audio API', 'Grounded LLM RAG', 'Vercel Edge CDN'],
    targetAudience: ['College Leadership', 'First-Year Students', 'Parents & Guardians', 'Institutional Presenters'],
    liveDemoUrl: 'https://jyotos-showcase.vercel.app/',
    githubRepo: 'https://github.com/jyotOS-Core/JyotOS-AAI-Showcase',
    metrics: [
      { label: 'Memory Base', value: '65-Slide Wiki' },
      { label: 'Aesthetics', value: 'Rotating CSS Border' },
      { label: 'Colorways', value: '5 Cyber Themes' },
      { label: 'Typewriter Speed', value: '<20ms Latency' },
    ],
    demoAvailable: true,
  },
  {
    id: 'staffbridge',
    name: 'StaffBridge',
    tagline: 'Staff Administration, Human Capital Governance & Roster Management',
    category: 'Institutional Core & OS',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-indigo-500/40 text-indigo-400 bg-indigo-950/60',
    institution: 'Amroli SFI Colleges',
    summary:
      'Institutional human capital platform managing staff onboarding, academic year 2026-27 roster assignments, multi-tier coordinator verifications, and PWA Web Push alerts.',
    architectureDescription:
      'Next.js 16 App Router backed by Supabase PostgreSQL RLS, Google Workspace OAuth auto-promotion, VAPID Web Push notification service workers, and Resend transactional email triggers.',
    coreHighlights: [
      'Multi-tier verification workflow: Coordinator Department Scoping → Principal Approval → Admin Seal',
      'Progressive Web App (PWA) with VAPID Web Push alerts notifying admins on registrations',
      'Official Google Workspace SSO with automatic staff profile linking and safe auto-promotion',
      'Gender-based ID card colorways, in-app journey timeline, and NAAC strength audit reports',
    ],
    modules: [
      {
        name: 'Multi-Tier Verification Desk',
        description: 'Role-scoped approval hierarchy for coordinators, principals, and admins.',
        status: 'Production',
      },
      {
        name: 'PWA Web Push Engine',
        description: 'Real-time browser notifications on new staff onboarding events.',
        status: 'Production',
      },
      {
        name: 'Staff Self-Service Portal',
        description: 'Credential review, correction requests, and digital ID card inspection.',
        status: 'Production',
      },
      {
        name: 'NAAC Strength Report Generator',
        description: 'Campus-wide headcount reports, CSV exports, and printable rosters.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Supabase PostgreSQL', 'VAPID Web Push', 'Resend API'],
    targetAudience: ['College Principals', 'Academic Coordinators', 'Institutional HR', 'Faculty Members'],
    liveDemoUrl: 'https://staff-bridge-jyotos.vercel.app/',
    githubRepo: 'https://github.com/jyotOS-Core/StaffBridge',
    metrics: [
      { label: 'Push Engine', value: 'VAPID Web Push' },
      { label: 'Verification', value: '3-Tier Flow' },
      { label: 'Auth Integration', value: 'Google SSO' },
      { label: 'Compliance', value: 'NAAC Roster' },
    ],
    demoAvailable: true,
  },
  {
    id: 'eventos',
    name: 'EventOS',
    tagline: 'Academic Event Lifecycle Management & Real-Time Gate Orchestration',
    category: 'Operations & Events',
    status: 'LIVE DEPLOYMENT',
    badgeColor: 'border-rose-500/40 text-rose-400 bg-rose-950/60',
    institution: 'Amroli SFI Colleges & JyotOS Ecosystem',
    summary:
      'End-to-end academic event orchestration system managing proposals, approvals, student registrations, high-speed mobile QR check-ins, and verified public event archives.',
    architectureDescription:
      'Unified ems_* database schema integrated with StaffBridge faculty profiles and ScholarCard AI student IDs, featuring offline-tolerant QR check-ins and public report archives.',
    coreHighlights: [
      'Complete 9-step institutional lifecycle from coordinator proposal to public verified archive',
      'High-speed mobile PWA camera QR scanner processing check-ins in under 400ms',
      'Unified Supabase data strategy linking active StaffBridge and ScholarCard AI accounts',
      'Post-event report generation with photo galleries, participant counts, and principal approval',
    ],
    modules: [
      {
        name: 'Coordinator Proposal Engine',
        description: 'Budget planning, venue reservation, and committee assignment.',
        status: 'Production',
      },
      {
        name: 'Principal Approval Cockpit',
        description: 'Executive review workflow for event authorization and report sign-off.',
        status: 'Production',
      },
      {
        name: 'High-Speed QR Scanner Desk',
        description: 'Offline-tolerant sub-second check-in scanner for entry gates.',
        status: 'Production',
      },
      {
        name: 'Verified Public Archive',
        description: 'Public-safe archive of approved event reports and participant records.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Supabase ems_* Schema'],
    targetAudience: ['Event Coordinators', 'Cultural Committees', 'College Deans', 'Student Participants'],
    liveDemoUrl: 'https://event-os-jyot-os.vercel.app/',
    githubRepo: 'https://github.com/jyotOS-Core/EventOS',
    metrics: [
      { label: 'Check-in Latency', value: '<400ms QR' },
      { label: 'Data Mesh', value: 'ems_* Schema' },
      { label: 'Pass Delivery', value: 'Instant Digital' },
      { label: 'Reporting', value: 'Public Archive' },
    ],
    demoAvailable: true,
  },
  {
    id: 'gcas-vacant-seats',
    name: 'GCAS AdmitTracker',
    tagline: 'VNSGU GCAS Live Seat Availability & Round Vacancy Intelligence',
    category: 'Smart Campus & Identity',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-cyan-500/40 text-cyan-400 bg-cyan-950/60',
    institution: 'VNSGU Affiliated Colleges',
    summary:
      'Futuristic seat availability and admission tracking portal aggregating live Gujarat Common Admission Services (GCAS) seat allotment data for all colleges affiliated with VNSGU.',
    architectureDescription:
      'Real-time web ingestion pipeline parsing GCAS merit seat matrices, indexed into a responsive combobox search engine with instant college, course, and quota filters.',
    coreHighlights: [
      'Comprehensive seat tracking covering all VNSGU affiliated undergraduate and postgraduate colleges',
      'Instant searchable combobox filtering by College Code, Course Name, and Quota Category',
      'Futuristic glowing glassmorphism UI with real-time vacant seat counters and shift indicators',
      'Zero-latency edge querying providing students and parents with instant admission transparency',
    ],
    modules: [
      {
        name: 'GCAS Intake Ingestion Engine',
        description: 'Automated parser pulling round-wise vacant seat allotments.',
        status: 'Production',
      },
      {
        name: 'Instant Combobox Query Desk',
        description: 'Sub-second lookup across colleges, programs, and categories.',
        status: 'Production',
      },
      {
        name: 'Seat Matrix Visualizer',
        description: 'Real-time breakdown of open vs reserved quota availability.',
        status: 'Production',
      },
    ],
    techStack: ['Vanilla JS Engine', 'HTML5', 'CSS Glassmorphism', 'Web Scraping Pipeline', 'Vercel Edge'],
    targetAudience: ['Prospective Students', 'College Admissions Staff', 'Academic Counselors'],
    liveDemoUrl: 'https://gcas-vacant-seats.vercel.app/',
    githubRepo: 'https://github.com/amroli/admission-webscrapper',
    metrics: [
      { label: 'Coverage', value: 'All VNSGU Colleges' },
      { label: 'Update Cycle', value: 'Round-by-Round' },
      { label: 'Search Latency', value: 'Instant Combobox' },
      { label: 'Scraper Engine', value: 'Automated Pipeline' },
    ],
    demoAvailable: true,
  },
  {
    id: 'bamts',
    name: 'BAMTS Operations Hub',
    tagline: 'AI-Driven Study Centre Operations & Assignment Tracking Platform',
    category: 'Operations & Events',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-teal-500/40 text-teal-400 bg-teal-950/60',
    institution: 'BAOU Study Centre 1839',
    summary:
      'High-performance educational administration platform managing assignment submissions, evaluation grades, PDF receipts, and public QR verification for BAOU Study Centre 1839.',
    architectureDescription:
      'Next.js 16 and Supabase architecture featuring transactional cascading rollback engines, bulk Excel roster importing, and public unauthenticated QR verification endpoints.',
    coreHighlights: [
      'Interactive assignment submission wizard with one-click safe cascading rollback engine',
      'Bulk student import utility auto-extracting courses, subjects, and student identities from spreadsheets',
      'Public QR-code verification portal (/verify/[id]) with masked student names for data privacy',
      'Global student search history logs tracking marks evaluations and receipt timelines',
    ],
    modules: [
      {
        name: 'Assignment Submission Desk',
        description: 'Subject checklist with instant PDF receipt generation and counter tracking.',
        status: 'Production',
      },
      {
        name: 'Cascading Rollback Engine',
        description: 'Safe administrator purge clearing accidental entries without data corruption.',
        status: 'Production',
      },
      {
        name: 'Bulk Student Excel Importer',
        description: 'Auto-syncs courses, subjects, and enrollments from spreadsheet sheets.',
        status: 'Production',
      },
      {
        name: 'Public QR Verification Portal',
        description: 'Authenticated verification route verifying student receipt legitimacy.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js 16', 'React 19', 'Supabase PostgreSQL', 'Tailwind CSS', 'QR Receipt Engine'],
    targetAudience: ['BAOU Coordinators', 'Study Centre Staff', 'Distance Learning Students'],
    liveDemoUrl: 'https://bamts.vercel.app/',
    githubRepo: 'https://github.com/amroli/bamts',
    metrics: [
      { label: 'Verification', value: 'Public QR Route' },
      { label: 'Safety Guarantee', value: 'Cascade Rollback' },
      { label: 'Bulk Intake', value: 'Dynamic Excel Parser' },
      { label: 'Audit Log', value: 'Full History' },
    ],
    demoAvailable: true,
  },
  {
    id: 'amroli-digital-campus',
    name: 'Amroli Digital Campus',
    tagline: 'Central Control Launchpad & Student Onboarding Platform 2026-27',
    category: 'Smart Campus & Identity',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-fuchsia-500/40 text-fuchsia-400 bg-fuchsia-950/60',
    institution: 'Amroli SFI Colleges',
    summary:
      'Official digital onboarding launchpad for Amroli SFI Colleges, providing verified admission intake, sequential virtual queue tokens, and secure segregated WhatsApp group onboarding.',
    architectureDescription:
      'Multi-portal gateway featuring dedicated Student, Operator, Admin, and Staff terminals with real-time Supabase telemetry and group routing governance.',
    coreHighlights: [
      'Four dedicated portal gates: Student Gateway, Operator Terminal, Admin Command, and Staff Gateway',
      'Sequential virtual queue token issuance keeping on-campus admission verification orderly',
      'Secure segregated WhatsApp group routing ensuring students join verified official batches',
      'Admin command dashboard with live enrollment counts, waiting queue gauges, and rollback tools',
    ],
    modules: [
      {
        name: 'Student Gateway',
        description: 'Admission verification entry-point to claim tokens and join WhatsApp groups.',
        status: 'Production',
      },
      {
        name: 'Operator Workstation',
        description: 'Physical credential verification terminal issuing sequential queue tokens.',
        status: 'Production',
      },
      {
        name: 'Admin Command Console',
        description: 'Real-time onboarding funnel charts, audit logs, and student rollback tools.',
        status: 'Production',
      },
      {
        name: 'Staff Gateway Desk',
        description: 'Direct QR-based entry for faculty coordinators to manage division groups.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'Supabase PostgreSQL', 'Lucide Icons'],
    targetAudience: ['Enrolled Freshmen', 'Campus Operators', 'College Administration', 'Faculty In-Charges'],
    liveDemoUrl: 'https://amroli-digital-campus.vercel.app/',
    githubRepo: 'https://github.com/amroli/amroli-digital-campus',
    metrics: [
      { label: 'Intake Protocol', value: 'Virtual Token Queue' },
      { label: 'Community Sync', value: 'Segregated WA Groups' },
      { label: 'Operator Station', value: 'Physical Desk' },
      { label: 'Audit Trail', value: 'Live Streaming' },
    ],
    demoAvailable: true,
  },
  {
    id: 'baou-1839-ai-helpdesk',
    name: 'BAOU 1839 AI Helpdesk',
    tagline: 'Bilingual Autonomous AI Student Helpdesk & Knowledge Assistant',
    category: 'AI Agents & Support',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-orange-500/40 text-orange-400 bg-orange-950/60',
    institution: 'BAOU Study Centre 1839',
    summary:
      'Bilingual conversational student assistant built for BAOU Study Centre 1839, delivering instantaneous verified answers on admissions, fee schedules, exam forms, and assignment submissions.',
    architectureDescription:
      'Lightweight, edge-deployed React application backed by domain-grounded NLP models with full bilingual English and Gujarati understanding and fast semantic question matching.',
    coreHighlights: [
      'Bilingual intelligence supporting both Gujarati and English student inquiries with zero wait time',
      'Authoritative guidance verified directly against official BAOU university circulars and ordinances',
      'Mobile-first conversational layout accessible from low-bandwidth mobile networks',
      'Instant triage covering admission timelines, assignment deadlines, and exam hall tickets',
    ],
    modules: [
      {
        name: 'Bilingual Conversational Core',
        description: 'Natural language dialog system understanding English and Gujarati queries.',
        status: 'Production',
      },
      {
        name: 'Circular Knowledge Base',
        description: 'Indexed repository of official BAOU university ordinances and announcements.',
        status: 'Production',
      },
      {
        name: 'Exam & Assignment Assistant',
        description: 'Submission guidelines, deadlines, and project format instructions.',
        status: 'Production',
      },
    ],
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Domain-Adapted NLP', 'Vercel Edge'],
    targetAudience: ['Distance Education Students', 'Open University Candidates', 'Helpdesk Volunteers'],
    liveDemoUrl: 'https://baou1839ai.vercel.app/',
    githubRepo: 'https://github.com/amroli/baou-1839-ai-helpdesk',
    metrics: [
      { label: 'Linguistic Engine', value: 'Bilingual (EN / GUJ)' },
      { label: 'Resolution Rate', value: 'Instant Verified' },
      { label: 'Availability', value: '24/7 Grounded' },
      { label: 'Focus', value: 'Admissions & Exams' },
    ],
    demoAvailable: true,
  },
  {
    id: 'admission-analytics',
    name: 'Admission Analytics Hub',
    tagline: 'Intake Intelligence, Multi-Choice Preference Modeling & Cutoff Analytics',
    category: 'Academic Telemetry & Analytics',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-blue-500/40 text-blue-400 bg-blue-950/60',
    institution: 'Amroli College Admissions Cell',
    summary:
      'Comprehensive institutional admission analytics portal (v2.0.0 Cloud-Sync) analyzing applicant preferences, round-wise seat allotments, and cut-off metrics with Google Workspace security.',
    architectureDescription:
      'Chart.js interactive visualizations integrated with Supabase PostgreSQL client SDK, secured by institutional Google Workspace OAuth (@amrolicollege.ac.in) and strict database RLS.',
    coreHighlights: [
      'Cross-preference multiple choice analyzer evaluating student behavior across colleges and branches',
      'Round-by-round allotment tracking revealing admission conversion rates and vacant quotas',
      'Category-wise and shift-wise cut-off analytics forecasting intake cutoffs for subsequent rounds',
      'Full searchable student database with merit rank lookup and verified administrative reports',
    ],
    modules: [
      {
        name: 'Admission Overview Dashboard',
        description: 'Live Chart.js telemetry covering application volumes and enrollment rates.',
        status: 'Production',
      },
      {
        name: 'Multi-Choice Preference Matrix',
        description: 'Models applicant second/third choice preferences across competing institutions.',
        status: 'Production',
      },
      {
        name: 'Cut-Off Analytics Desk',
        description: 'Historical and round-wise cutoff benchmarks across reservation quotas.',
        status: 'Production',
      },
      {
        name: 'Verified Student Database',
        description: 'Searchable student records indexed by GCAS number, merit, and category.',
        status: 'Production',
      },
      {
        name: 'Campus Pulse Inquiry Tracker',
        description: 'PWA-enabled front-desk intake counseling logs and lead follow-up stages.',
        status: 'Production',
      },
    ],
    techStack: ['HTML5', 'Chart.js', 'Supabase JS SDK', 'PostgreSQL RLS', 'Google Workspace SSO'],
    targetAudience: ['Admission Deans', 'Institutional Trustees', 'Faculty Counselors', 'Registrars'],
    liveDemoUrl: 'https://adm-analytics.vercel.app/',
    githubRepo: 'https://github.com/amroli/admission-analytics',
    metrics: [
      { label: 'Preference Matrix', value: 'Multi-Choice Model' },
      { label: 'Security', value: 'Google Workspace RLS' },
      { label: 'Visual Engine', value: 'Chart.js Telemetry' },
      { label: 'Cutoff Models', value: 'Category & Quota' },
    ],
    demoAvailable: true,
  },
  {
    id: 'amroli-lms',
    name: 'HiTECH LMS (Leave Management)',
    tagline: 'Multi-Campus Paperless Faculty & Staff Leave Governance',
    category: 'Institutional Core & OS',
    status: 'LIVE PRODUCTION',
    badgeColor: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/60',
    institution: 'Amroli SFI Colleges (Campus 1 & 2)',
    summary:
      'Paperless leave governance and academic coordination system serving Campus 1 (Amroli) and Campus 2 (Chaprabhatha), featuring instant email notifications and 2-step administrative approvals.',
    architectureDescription:
      'Next.js App Router with dual-campus configuration, Google Workspace institutional authentication, role-governed approval state machine (Staff → HOD → Principal), and audit logging.',
    coreHighlights: [
      'Dual-campus support synchronizing records for Campus 1 (Amroli) and Campus 2 (Chaprabhatha)',
      '2-step paperless approval pipeline with automated email notifications to HODs and the Principal Office',
      'Institutional Google Workspace auth strictly gated to verified @amrolicollege.ac.in staff accounts',
      'Comprehensive transparency with tamper-evident audit trails and NAAC accreditation compliance logs',
    ],
    modules: [
      {
        name: 'Staff Leave Portal',
        description: 'Mobile-friendly application submission with leave balance tracking.',
        status: 'Production',
      },
      {
        name: 'HOD Approval Cockpit',
        description: 'Departmental duty substitution verification and first-level sign-off.',
        status: 'Production',
      },
      {
        name: 'Principal Executive Desk',
        description: 'Institutional-level leave authorization and executive leave reports.',
        status: 'Production',
      },
      {
        name: 'Accreditation Audit Export',
        description: 'One-click NAAC compliance sheets tracking total faculty duty leaves.',
        status: 'Production',
      },
    ],
    techStack: ['Next.js App Router', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Google Workspace Auth'],
    targetAudience: ['College Principals', 'Department Heads', 'Administrative Staff', 'College Faculty'],
    liveDemoUrl: 'https://amroli-lms1.vercel.app/',
    githubRepo: 'https://github.com/amroli/leave_management_system',
    metrics: [
      { label: 'Campuses', value: 'Campus 1 & Campus 2' },
      { label: 'Approval Speed', value: '2-Step HOD/Principal' },
      { label: 'Paperless Rate', value: '100% Digital' },
      { label: 'Auth Standard', value: '@amrolicollege SSO' },
    ],
    demoAvailable: true,
  },
];
