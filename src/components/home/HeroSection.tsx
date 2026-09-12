'use client';

import React, { useState, useEffect } from 'react';
import {
  Terminal,
  ArrowRight,
  Activity,
  Layers,
  Shield,
  Cpu,
  Radio,
  Clock,
} from 'lucide-react';
import IntelligenceNetwork from './IntelligenceNetwork';
import CommandTerminal from './CommandTerminal';
import { useThemeMode } from '@/context/ThemeContext';

export default function HeroSection() {
  const { theme } = useThemeMode();
  const isCockpit = theme === 'quantum-cockpit';
  const [timeString, setTimeString] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-violet-500/10 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute top-[650px] right-4 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] pointer-events-none" />

      {/* Flight Deck Top Telemetry Bar (Exclusive to Quantum Cockpit) */}
      {isCockpit && (
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 rounded-2xl bg-[#040813]/85 border border-neon-cyan/30 mb-10 max-w-5xl mx-auto backdrop-blur-md font-mono text-[11px] text-gray-400 shadow-[0_0_20px_rgba(0,240,255,0.15)] animate-in fade-in duration-300">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-white font-bold">MISSION CONTROL</span>
            <span className="text-white/20">|</span>
            <span className="text-neon-cyan/90">QUANTUM COCKPIT V3.8</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-gray-300">
              <Radio className="w-3 h-3 text-neon-cyan animate-pulse" />
              <span>PING: <strong className="text-emerald-400">11ms</strong></span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5 text-gray-300">
              <Clock className="w-3 h-3 text-violet-400" />
              <span className="text-white font-mono">{timeString || 'LIVE IST'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content Header */}
      <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10">
        {/* Futuristic Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-neon-cyan/40 text-neon-cyan text-xs font-mono uppercase tracking-widest shadow-[0_0_25px_rgba(0,240,255,0.3)]">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
          <span>Autonomous AI Solutions & Institutional Operating Systems</span>
        </div>

        {/* Signature Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
          We don&apos;t just build software.{' '}
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-sky-400 to-violet-400">
            We build intelligent solutions.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
          Engineering mission-critical AI-native platforms, autonomous workflows, and institutional
          operating ecosystems designed to solve real-world friction with quantum precision.
        </p>

        {/* Interactive Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="#ecosystem" className="btn-cyber-primary w-full sm:w-auto">
            <span>Explore 13 Deployed Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="btn-cyber-secondary w-full sm:w-auto">
            <Terminal className="w-4 h-4 text-neon-cyan" />
            <span>Build With Us</span>
          </a>
        </div>

        {/* Real-Time Live Architecture Indicators */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono text-gray-400">
          <div className={isCockpit ? "avionics-pill" : "flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"}>
            <Activity className="w-3.5 h-3.5 text-neon-cyan" />
            <span>Status: <strong className="text-white">Active Production</strong></span>
          </div>
          <div className={isCockpit ? "avionics-pill" : "flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"}>
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>Flagship: <strong className="text-white">JyotOS Suite</strong></span>
          </div>
          <div className={isCockpit ? "avionics-pill" : "flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"}>
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Fleet: <strong className="text-white">13 Deployed Solutions</strong></span>
          </div>
          <div className={isCockpit ? "avionics-pill" : "flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"}>
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Privacy: <strong className="text-white">Zero Leak Policy</strong></span>
          </div>
        </div>
      </div>

      {/* Interactive AAI Command Terminal Centerpiece (in Quantum Cockpit Mode) */}
      {isCockpit && (
        <div className="mt-14 relative z-10 animate-in fade-in duration-300">
          <CommandTerminal />
        </div>
      )}

      {/* Signature Interactive Visualization: The Hi-Tech Intelligence Network */}
      <div className="mt-20 pt-4 relative z-10">
        <div className="text-center mb-6">
          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">
            {'// ARCHITECTURAL CORE TOPOLOGY'}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            The Hi-Tech Cognitive Processing Pipeline
          </h3>
        </div>
        <IntelligenceNetwork />
      </div>
    </section>
  );
}
