'use client';

import React, { useState, useEffect, useId, useRef } from 'react';
import {
  X,
  Mail,
  MessageCircle,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Send,
  Building,
  Sparkles,
  Phone,
} from 'lucide-react';
import { useDialog } from '@/lib/useDialog';
import { CONTACT, telUrl, whatsappUrl, mailtoUrl } from '@/lib/site';

interface ExecutiveConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

const FIELD_CLASS =
  'w-full px-4 py-2.5 rounded-xl bg-[#111724] border border-white/10 text-white text-sm focus:outline-none focus:border-neon-cyan focus-visible:ring-1 focus-visible:ring-neon-cyan transition-colors';
const LABEL_CLASS = 'block text-xs font-mono uppercase text-gray-400 mb-1.5';

export default function ExecutiveConsultationModal({
  isOpen,
  onClose,
  defaultTopic,
}: ExecutiveConsultationModalProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    solution: defaultTopic || 'JyotOS Campus Operating System',
    message: '',
  });
  const [activeTab, setActiveTab] = useState<'form' | 'channels'>('form');

  const dialogRef = useDialog<HTMLDivElement>(isOpen, onClose);
  const formRef = useRef<HTMLFormElement>(null);
  const fieldId = useId();

  useEffect(() => {
    if (defaultTopic) {
      setFormData((prev) => ({ ...prev, solution: defaultTopic }));
    }
  }, [defaultTopic]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Clipboard unavailable: the address is still shown as a selectable link.
    }
  };

  // Name and organisation are required. The browser shows its own message and moves
  // focus to the first empty field. (Before, the required attributes were never
  // checked and an empty form sent "[Not Specified]" four times.)
  const formIsValid = () => formRef.current?.reportValidity() ?? true;

  const generateMessageText = () => {
    const lines = [
      'Hello Hi-Tech AI Solutions Team,',
      '',
      'I would like to initiate an Executive Consultation:',
      `- Name: ${formData.name.trim()}`,
      `- Organization: ${formData.organization.trim()}`,
      `- Solution Area: ${formData.solution}`,
    ];
    // Optional details appear only when they were filled in.
    if (formData.email.trim()) lines.push(`- Contact Email: ${formData.email.trim()}`);
    if (formData.phone.trim()) lines.push(`- Contact Phone: ${formData.phone.trim()}`);
    lines.push(
      '',
      'Inquiry Details:',
      formData.message.trim() ||
        'We would like to explore institutional deployment and architecture integration.',
      '',
      'Looking forward to hearing from you.'
    );
    return lines.join('\n');
  };

  const handleSendWhatsApp = () => {
    if (!formIsValid()) return;
    window.open(whatsappUrl(generateMessageText()), '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = () => {
    if (!formIsValid()) return;
    const subject = `Executive Consultation Inquiry: ${formData.organization.trim()} — ${formData.solution}`;
    window.location.href = mailtoUrl(subject, generateMessageText());
  };

  const tabClass = (active: boolean) =>
    `text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all ${
      active ? 'bg-white/10 text-white font-bold' : 'text-gray-400 hover:text-white'
    }`;

  return (
    <div
      ref={dialogRef}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md focus:outline-none"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0B0F19] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(183,194,214,0.25)] flex flex-col">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-neon-cyan text-xs font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Direct Institutional Channel</span>
            </div>
            <h2
              id="consultation-modal-title"
              className="text-2xl sm:text-3xl font-semibold text-white tracking-tight"
            >
              Initiate Executive Consultation
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Connect directly with our engineering and executive leadership in Surat, Gujarat.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close consultation dialog"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* View switcher. The selected view is neutral: amber is kept for the send actions. */}
        <div
          role="group"
          aria-label="Choose how to reach us"
          className="flex gap-2 my-5 p-1 rounded-xl bg-[#111724] border border-white/10 self-start"
        >
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            aria-pressed={activeTab === 'form'}
            className={tabClass(activeTab === 'form')}
          >
            Draft Inquiry Form
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('channels')}
            aria-pressed={activeTab === 'channels'}
            className={tabClass(activeTab === 'channels')}
          >
            Direct Channels & HQ
          </button>
        </div>

        {activeTab === 'form' ? (
          <form ref={formRef} className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <p className="text-[11px] font-mono text-gray-400">
              Fields marked <span aria-hidden="true">*</span>
              <span className="sr-only">with an asterisk</span> are required.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${fieldId}-name`} className={LABEL_CLASS}>
                  Your Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id={`${fieldId}-name`}
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Dr. Rajesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor={`${fieldId}-org`} className={LABEL_CLASS}>
                  Institution / Organization <span aria-hidden="true">*</span>
                </label>
                <input
                  id={`${fieldId}-org`}
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="e.g. University / Enterprise"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className={FIELD_CLASS}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={`${fieldId}-email`} className={LABEL_CLASS}>
                  Email Address
                </label>
                <input
                  id={`${fieldId}-email`}
                  type="email"
                  autoComplete="email"
                  placeholder="name@institution.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={FIELD_CLASS}
                />
              </div>
              <div>
                <label htmlFor={`${fieldId}-phone`} className={LABEL_CLASS}>
                  Phone / WhatsApp
                </label>
                <input
                  id={`${fieldId}-phone`}
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={FIELD_CLASS}
                />
              </div>
            </div>

            <div>
              <label htmlFor={`${fieldId}-solution`} className={LABEL_CLASS}>
                Solution Area of Interest
              </label>
              <select
                id={`${fieldId}-solution`}
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className={FIELD_CLASS}
              >
                <option value="JyotOS Campus Operating System">JyotOS — Campus Operating System</option>
                <option value="ScholarCard AI Credentialing">ScholarCard AI — Verification & Digital IDs</option>
                <option value="jyotAssist AI Agent">jyotAssist AI — Autonomous Multi-Agent Assistant</option>
                <option value="StaffBridge Operations">StaffBridge — Institutional Governance & Biometric Sync</option>
                <option value="EventOS Management">EventOS — High-Concurrency Event Lifecycle</option>
                <option value="Admission Analytics Hub">Admission Analytics Hub — Predictive Enrollment</option>
                <option value="Custom Enterprise AI Solution">Custom Enterprise AI / Automation Architecture</option>
              </select>
            </div>

            <div>
              <label htmlFor={`${fieldId}-message`} className={LABEL_CLASS}>
                Key Requirements or Objectives
              </label>
              <textarea
                id={`${fieldId}-message`}
                rows={3}
                placeholder="Briefly describe your campus, student scale, or technical timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`${FIELD_CLASS} resize-none`}
              />
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Send via WhatsApp Priority</span>
              </button>

              <button
                type="button"
                onClick={handleSendEmail}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-accent hover:bg-accent-hover text-[#0B0F19] font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(183,194,214,0.3)] transition-all"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Dispatch Email Inquiry</span>
              </button>
            </div>

            {/* The email button needs a mail app on the device. This is the way out when there is none. */}
            <p className="text-xs text-gray-400 leading-relaxed">
              Nothing opened? Write to{' '}
              <a href={mailtoUrl()} className="text-gray-200 underline underline-offset-2 hover:text-white">
                {CONTACT.email}
              </a>{' '}
              or call{' '}
              <a href={telUrl} className="text-gray-200 underline underline-offset-2 hover:text-white whitespace-nowrap">
                {CONTACT.phoneDisplay}
              </a>
              .
            </p>
          </form>
        ) : (
          <div className="space-y-4">
            {/* Quick Contact Cards */}
            <div className="p-4 rounded-2xl bg-[#111724] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Mail className="w-4 h-4 text-neon-cyan" aria-hidden="true" />
                  <span>Official Corporate Email</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={mailtoUrl()}
                className="inline-block text-sm font-mono text-cyan-300 underline underline-offset-2 hover:text-white"
              >
                {CONTACT.email}
              </a>
            </div>

            <div className="p-4 rounded-2xl bg-[#111724] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <span>Direct WhatsApp / Phone Line</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                  Priority
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-mono">
                <a
                  href={telUrl}
                  className="inline-flex items-center gap-1.5 text-emerald-300 underline underline-offset-2 hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-300 underline underline-offset-2 hover:text-white"
                >
                  <span>Open WhatsApp chat</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#111724] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <MapPin className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Headquarters & Google Verified Office</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                Bhavani Complex, nr. Gajera Circle, opp. SAIBABA PETROL PUMP, Mahavir Nagar Society, Katargam, Surat, Gujarat 395004
              </p>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.google.com/search?q=hitech+ai+solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-400 underline underline-offset-2 hover:text-white flex items-center gap-1"
                >
                  <span>Google Listing & Reviews (5.0 ⭐)</span>
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#111724] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Building className="w-4 h-4 text-violet-400" aria-hidden="true" />
                <span>Operating Schedule</span>
              </div>
              <p className="text-xs text-gray-300">
                Open <strong>24 Hours / 7 Days a Week</strong> for institutional emergency support and continuous development cycles.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://github.com/Hi-Tech-AI-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 text-white text-xs font-mono flex items-center justify-center gap-2 transition-all"
              >
                <span>View GitHub Organization Profile & Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Zero-Leak Data Confidentiality</span>
          </span>
          <span>Surat • Gujarat • India</span>
        </div>
      </div>
    </div>
  );
}
