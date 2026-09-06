import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustStrip from '@/components/home/TrustStrip';
import CapabilitiesSection from '@/components/home/CapabilitiesSection';
import JyotOSShowcase from '@/components/products/JyotOSShowcase';
import ProductShowcase from '@/components/products/ProductShowcase';
import {
  ArrowRight,
  CheckCircle2,
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

      {/* 4. Flagship Experience: JyotOS Platform ("One Campus. One Intelligence.") */}
      <JyotOSShowcase />

      {/* 5. Complete Product Ecosystem Catalog with Interactive Detail Inspector */}
      <ProductShowcase />

      {/* 6. Strong Conversion CTA: Build With Us */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
        <div className="cyber-glass rounded-3xl p-8 sm:p-14 relative overflow-hidden text-center max-w-3xl mx-auto space-y-7 border border-white/10 shadow-[0_0_50px_-15px_rgba(0,240,255,0.2)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Ready for Institutional & Enterprise Deployments</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Have an institutional challenge? <br />
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
