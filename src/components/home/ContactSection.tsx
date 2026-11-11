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
  Phone,
} from 'lucide-react';
import ExecutiveConsultationModal from '@/components/consultation/ExecutiveConsultationModal';
import { CONTACT, telUrl, whatsappUrl, mailtoUrl } from '@/lib/site';

const WHATSAPP_GREETING =
  'Hello Hi-Tech AI Solutions team, I would like to initiate an executive consultation regarding an intelligent institutional / enterprise solution.';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Clipboard unavailable: the address is still shown as a link.
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-neon-cyan text-xs font-mono uppercase tracking-widest shadow-[0_0_20px_rgba(183,194,214,0.2)]">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Get in touch</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-semibold text-white leading-tight tracking-tight">
          Have an institutional challenge? <br />
          <span className="text-neon-cyan">
            Let&apos;s build the intelligent solution.
          </span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
          Whether you require a full-scale campus operating system like <strong>JyotOS</strong>, student credentialing via <strong>ScholarCard AI</strong>, or custom autonomous AI workflows, try the{' '}
          <a href="#matcher" className="text-white underline underline-offset-4 decoration-white/40 hover:decoration-white">
            60-second solution finder
          </a>{' '}
          or talk to us directly.
        </p>
      </div>

      {/* Direct Executive Consultation Card */}
      <div className="cyber-glass rounded-3xl p-8 sm:p-14 relative overflow-hidden text-center max-w-4xl mx-auto space-y-8 border border-cyan-500/30 shadow-[0_0_60px_-15px_rgba(183,194,214,0.25)] z-10">
        {/* Primary actions: the enquiry form, and WhatsApp as a real link */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-cyber-primary w-full sm:w-auto cursor-pointer"
            id="btn-initiate-consultation"
          >
            <span>Initiate Executive Consultation</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <a
            href={whatsappUrl(WHATSAPP_GREETING)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber-secondary w-full sm:w-auto"
            id="btn-whatsapp-direct"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        {/* Direct channels: every one is a real link, reachable by keyboard and by long-press */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {/* Phone */}
          <a
            href={telUrl}
            className="p-4 rounded-2xl bg-[#111724]/80 border border-emerald-500/20 hover:border-emerald-500/50 transition-all block"
          >
            <span className="mb-2 text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Call or WhatsApp</span>
            </span>
            <span className="block text-sm font-mono text-white">{CONTACT.phoneDisplay}</span>
          </a>

          {/* Email Channel */}
          <div className="p-4 rounded-2xl bg-[#111724]/80 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neon-cyan flex items-center gap-1.5 font-semibold">
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Direct Email</span>
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={mailtoUrl()}
              className="block text-sm font-mono text-white underline underline-offset-2 decoration-white/30 hover:decoration-white break-all"
            >
              {CONTACT.email}
            </a>
          </div>

          {/* Google Verified HQ */}
          <a
            href="https://www.google.com/search?q=hitech+ai+solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-[#111724]/80 border border-violet-500/20 hover:border-violet-500/50 transition-all group block"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono uppercase tracking-wider text-violet-400 flex items-center gap-1.5 font-semibold">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Headquarters</span>
              </span>
              <span className="text-[10px] font-mono text-violet-400">
                5.0 ⭐ Verified
              </span>
            </div>
            <p className="text-xs text-gray-300 line-clamp-2">
              Bhavani Complex, Katargam, Surat, Gujarat 395004
            </p>
            <span className="sr-only">(opens in a new tab)</span>
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
