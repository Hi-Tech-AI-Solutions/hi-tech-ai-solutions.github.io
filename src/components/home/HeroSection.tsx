import {
  Terminal,
  ArrowRight,
  Activity,
  Layers,
  Shield,
} from 'lucide-react';
import IntelligenceNetwork from './IntelligenceNetwork';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-cyan-500/15 via-violet-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[550px] right-4 w-[450px] h-[450px] bg-violet-600/10 blur-[140px] pointer-events-none" />

      {/* Hero Content Header */}
      <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Futuristic Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-neon-cyan/40 text-neon-cyan text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.25)]">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
          <span>AI Solutions & Digital Transformation</span>
        </div>

        {/* Signature Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          We don&apos;t just build software.{' '}
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-sky-400 to-violet-400">
            We build intelligent solutions.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
          Engineering futuristic, AI-native platforms, autonomous workflows, and institutional
          operating ecosystems designed to solve real-world operational friction.
        </p>

        {/* Interactive Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="#ecosystem" className="btn-cyber-primary w-full sm:w-auto">
            <span>Explore Our Innovations</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-cyber-secondary w-full sm:w-auto">
            <Terminal className="w-4 h-4 text-neon-cyan" />
            <span>Build With Us</span>
          </a>
        </div>

        {/* Real-Time Live Architecture Indicators */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <Activity className="w-4 h-4 text-neon-cyan" />
            <span>Status: <strong className="text-white">Active Production</strong></span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <Layers className="w-4 h-4 text-violet-400" />
            <span>Flagship: <strong className="text-white">JyotOS Suite</strong></span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Privacy: <strong className="text-white">Zero Leak Policy</strong></span>
          </div>
        </div>
      </div>

      {/* Signature Interactive Visualization: The Hi-Tech Intelligence Network */}
      <div className="mt-16 pt-4 relative z-10">
        <IntelligenceNetwork />
      </div>
    </section>
  );
}
