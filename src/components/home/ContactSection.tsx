'use client';

import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  MessageCircle,
  Mail,
  MapPin,
  ExternalLink,
  Check,
  Copy,
} from 'lucide-react';
import ExecutiveConsultationModal from '@/components/consultation/ExecutiveConsultationModal';
import SolutionMatcher from '@/components/conversion/SolutionMatcher';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const OFFICIAL_EMAIL = 'contact@hi-tech-ai-solutions.github.io';
  const WHATSAPP_NUMBER = '919909988111';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Hi-Tech AI Solutions team, I would like to initiate an executive consultation regarding an intelligent institutional / enterprise solution.'
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[180px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-neon-cyan text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Conversion & Institutional Solutions Hub</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Have an institutional challenge? <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan via-sky-300 to-violet-400">
            Let&apos;s build the intelligent solution.
          </span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Whether you require a full-scale campus operating system like <strong>JyotOS</strong>, student credentialing via <strong>ScholarCard AI</strong>, or custom autonomous AI workflows, evaluate your architecture below or consult directly with our engineering leadership.
        </p>
      </div>

      {/* 1. Interactive Solution Matcher Engine */}
      <div className="mb-14 relative z-10">
        <SolutionMatcher />
      </div>

      {/* 2. Direct Executive Consultation Card */}
      <div className="cyber-glass rounded-3xl p-8 sm:p-14 relative overflow-hidden text-center max-w-4xl mx-auto space-y-8 border border-cyan-500/30 shadow-[0_0_60px_-15px_rgba(0,240,255,0.25)] z-10">

        {/* Primary Interactive Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-cyber-primary w-full sm:w-auto cursor-pointer"
            id="btn-initiate-consultation"
          >
            <span>Initiate Executive Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://github.com/Hi-Tech-AI-Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-secondary w-full sm:w-auto"
            id="btn-explore-github"
          >
            <span>Explore GitHub Organization</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Instant Channels Strip */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {/* WhatsApp Direct */}
          <div
            onClick={handleDirectWhatsApp}
            className="p-4 rounded-2xl bg-[#080e1a]/80 border border-emerald-500/20 hover:border-emerald-500/50 cursor-pointer transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Priority</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Chat Now →
              </span>
            </div>
            <p className="text-xs text-gray-300">
              Immediate connection for leadership, deans, and tech executives.
            </p>
          </div>

          {/* Email Channel */}
          <div className="p-4 rounded-2xl bg-[#080e1a]/80 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neon-cyan flex items-center gap-1.5 font-semibold">
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Email</span>
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs font-mono text-cyan-300 select-all truncate">
              {OFFICIAL_EMAIL}
            </p>
          </div>

          {/* Google Verified HQ */}
          <a
            href="https://www.google.com/search?q=hitech+ai+solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#080e1a]/80 border border-violet-500/20 hover:border-violet-500/50 transition-all group block"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400 flex items-center gap-1.5 font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Headquarters</span>
              </span>
              <span className="text-[10px] font-mono text-violet-400">
                5.0 ⭐ Verified
              </span>
            </div>
            <p className="text-xs text-gray-300 line-clamp-2">
              Bhavani Complex, Katargam, Surat, Gujarat 395004
            </p>
          </a>
        </div>
      </div>

      {/* Interactive Consultation Modal */}
      <ExecutiveConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
