import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import {
  ArrowRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cyber-bg overflow-hidden cyber-grid-bg">
      {/* 1. Hero Experience with Signature Intelligence Network Visualization */}
      <HeroSection />

      {/* 2. Trust & Credibility Strip */}
      <TrustStrip />

      {/* 3. Capabilities: What We Build */}
      <CapabilitiesSection />

      {/* 4. Ecosystem Teaser (Preparing for Phase 3 Deep Dive) */}
      <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Family</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Product Ecosystem
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Five synchronized, production-deployed platforms engineered by Hi-Tech AI Solutions & Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'JyotOS Platform',
              tag: 'FLAGSHIP ECOSYSTEM',
              desc: 'Intelligent campus & institutional operating system integrating academic workflows, faculty governance, and student lifecycles.',
              status: 'Active Ecosystem',
              color: 'border-cyan-500/30 text-neon-cyan',
            },
            {
              name: 'ScholarCard AI',
              tag: 'CREDENTIALING & IDENTITY',
              desc: 'Next-generation student identity verification, tamper-evident digital credentialing, and academic intelligence platform.',
              status: 'Live Deployment',
              color: 'border-violet-500/30 text-violet-400',
            },
            {
              name: 'jyotAssist AI',
              tag: 'CONVERSATIONAL AGENT',
              desc: 'Autonomous multi-agent assistant delivering contextual campus guidance, workflow automation, and real-time answers.',
              status: 'Live Deployment',
              color: 'border-emerald-500/30 text-emerald-400',
            },
            {
              name: 'StaffBridge',
              tag: 'OPERATIONAL GOVERNANCE',
              desc: 'Staff administration, institutional attendance governance, leave orchestration, and human capital workflows.',
              status: 'Live Deployment',
              color: 'border-sky-500/30 text-sky-400',
            },
            {
              name: 'EventOS',
              tag: 'EVENT LIFECYCLE',
              desc: 'End-to-end institutional event coordination, real-time participant management, pass generation, and automated check-ins.',
              status: 'Live Deployment',
              color: 'border-amber-500/30 text-amber-400',
            },
          ].map((product, idx) => (
            <div
              key={idx}
              className="cyber-glass rounded-2xl p-7 flex flex-col justify-between group hover:border-violet-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-0.5 rounded border bg-white/5 ${product.color}`}>
                    {product.tag}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {product.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-sans mb-6">
                  {product.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-500">
                <span>Production Architecture</span>
                <span className="text-neon-cyan flex items-center gap-1 font-semibold">
                  Ecosystem Detail in Phase 3 →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Strong Conversion CTA: Build With Us */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="cyber-glass rounded-3xl p-8 sm:p-14 relative overflow-hidden text-center max-w-3xl mx-auto space-y-7 border border-white/10 shadow-[0_0_50px_-15px_rgba(0,240,255,0.2)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Ready for Institutional & Enterprise Deployments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Have a challenge? <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-sky-300 to-violet-400">
              Let&apos;s build the intelligent solution.
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-sans">
            From customized campus operating systems to institutional AI agents and automated
            approval pipelines, partner with Hi-Tech AI Solutions & Services.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@hi-tech-ai-solutions.github.io"
              className="btn-cyber-primary w-full sm:w-auto"
            >
              <span>Initiate Executive Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Hi-Tech-AI-Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-secondary w-full sm:w-auto"
            >
              <span>Explore GitHub Organization</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
