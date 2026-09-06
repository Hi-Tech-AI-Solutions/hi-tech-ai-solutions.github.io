import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Cpu,
  Layers,
  Shield,
  Zap,
  Terminal,
  Server,
  Activity,
  CheckCircle2,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-bg overflow-hidden cyber-grid-bg">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-violet-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[600px] right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Futuristic Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-neon-cyan/40 text-neon-cyan text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.25)]">
            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
            <span>AI Solutions & Digital Transformation</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            We don&apos;t just build software.{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-sky-400 to-violet-400">
              We build intelligent solutions.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Engineering futuristic, AI-native platforms, intelligent automation, and institutional
            operating ecosystems built for real-world reliability and scale.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#ecosystem" className="btn-cyber-primary w-full sm:w-auto">
              <span>Explore Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-cyber-secondary w-full sm:w-auto">
              <Terminal className="w-4 h-4 text-neon-cyan" />
              <span>Build With Us</span>
            </a>
          </div>

          {/* Live Status Ticker */}
          <div className="pt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-gray-400">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-neon-cyan" />
              <span>Status: <strong className="text-white">Active Production</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-violet-400" />
              <span>Flagship: <strong className="text-white">JyotOS Ecosystem</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Governance: <strong className="text-white">Institutional Grade</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Section: What We Build */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered for the AI Era
          </h2>
          <p className="text-gray-400 text-sm">
            High-impact software architecture solving real institutional, academic, and business problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="cyber-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-neon-cyan mb-5 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
              AI-Powered Software
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Custom SaaS, intelligent agents, and neural interfaces that automate complex workflows and simplify human decisions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="cyber-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-lg bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
              Intelligent Automation
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Autonomous pipelines reducing operational drag, eliminating repetitive tasks, and executing with millimeter precision.
            </p>
          </div>

          {/* Card 3 */}
          <div className="cyber-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Academic & Institutional OS
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mission-critical campus operating systems, academic credentialing, student verification, and staff coordination.
            </p>
          </div>

          {/* Card 4 */}
          <div className="cyber-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-5 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
              Data & Decision Systems
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              High-throughput analytics engines delivering predictive insights and institutional visibility in real time.
            </p>
          </div>

          {/* Card 5 */}
          <div className="cyber-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
              Institutional Privacy & Security
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Zero-leak architecture ensuring student records, institutional intelligence, and corporate assets remain confidential.
            </p>
          </div>

          {/* Card 6 */}
          <div className="cyber-glass rounded-xl p-6 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-rose-400 transition-colors">
              Custom AI Engineering
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Tailor-made artificial intelligence solutions engineered directly to solve unique operational and business bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Ecosystem Preview (Phase 3 Foundation) */}
      <section id="ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-violet-400">Flagship Suite</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The Product Ecosystem
          </h2>
          <p className="text-gray-400 text-sm">
            Five synchronized platforms engineered by Hi-Tech AI Solutions & Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'JyotOS Platform',
              tag: 'FLAGSHIP ECOSYSTEM',
              desc: 'Intelligent campus & institutional operating system integrating academic workflows, faculty coordination, and student lifecycle management.',
              status: 'Active Ecosystem',
              color: 'border-cyan-500/30 text-neon-cyan',
            },
            {
              name: 'ScholarCard AI',
              tag: 'CREDENTIALING & IDENTITY',
              desc: 'Next-generation student identity verification, digital credentialing, and academic intelligence platform.',
              status: 'Live Deployment',
              color: 'border-violet-500/30 text-violet-400',
            },
            {
              name: 'jyotAssist AI',
              tag: 'CONVERSATIONAL AGENT',
              desc: 'Autonomous AI assistant delivering contextual guidance, workflow assistance, and conversational intelligence.',
              status: 'Live Deployment',
              color: 'border-emerald-500/30 text-emerald-400',
            },
            {
              name: 'StaffBridge',
              tag: 'OPERATIONAL GOVERNANCE',
              desc: 'Staff administration, institutional attendance governance, and human capital coordination engine.',
              status: 'Live Deployment',
              color: 'border-sky-500/30 text-sky-400',
            },
            {
              name: 'EventOS',
              tag: 'EVENT LIFECYCLE',
              desc: 'End-to-end institutional event coordination, real-time participant management, and automated ticketing.',
              status: 'Live Deployment',
              color: 'border-amber-500/30 text-amber-400',
            },
          ].map((product, idx) => (
            <div key={idx} className="cyber-glass rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase px-2 py-0.5 rounded border bg-white/5 ${product.color}`}>
                    {product.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {product.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{product.desc}</p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>Hi-Tech AI Architecture</span>
                <span className="text-neon-cyan flex items-center gap-1 hover:underline cursor-pointer">
                  Details in Phase 3 →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Call to Action / Build With Us */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="cyber-glass rounded-2xl p-8 sm:p-12 relative overflow-hidden text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Ready for Institutional & Enterprise Deployments</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Have a challenge? <br />
            <span className="text-neon-cyan">Let&apos;s build the intelligent solution.</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            From customized institutional operating systems to enterprise AI agents and automated workflows,
            partner with Hi-Tech AI Solutions & Services.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@hi-tech-ai-solutions.github.io"
              className="btn-cyber-primary w-full sm:w-auto"
            >
              <span>Initiate Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Hi-Tech-AI-Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-secondary w-full sm:w-auto"
            >
              <span>Explore GitHub Org</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
