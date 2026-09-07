'use client';

import React, { useState, useEffect } from 'react';
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
} from 'lucide-react';

interface ExecutiveConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTopic?: string;
}

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

  const OFFICIAL_EMAIL = 'hitech.nft@gmail.com';
  const OFFICIAL_PHONE = '+919974803770';
  const WHATSAPP_NUMBER = '919974803770';

  useEffect(() => {
    if (defaultTopic) {
      setFormData((prev) => ({ ...prev, solution: defaultTopic }));
    }
  }, [defaultTopic]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OFFICIAL_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const generateMessageText = () => {
    return `Hello Hi-Tech AI Solutions Team,

I would like to initiate an Executive Consultation:
- Name: ${formData.name || '[Not Specified]'}
- Organization: ${formData.organization || '[Not Specified]'}
- Solution Area: ${formData.solution}
- Contact Email: ${formData.email || '[Not Specified]'}
- Contact Phone: ${formData.phone || '[Not Specified]'}

Inquiry Details:
${formData.message || 'We would like to explore institutional deployment and architecture integration.'}

Looking forward to hearing from you.`;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(generateMessageText());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Executive Consultation Inquiry: ${formData.organization || 'Institutional Solution'} — ${formData.solution}`
    );
    const body = encodeURIComponent(generateMessageText());
    window.location.href = `mailto:${OFFICIAL_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#030712] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-neon-cyan text-xs font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Institutional Channel</span>
            </div>
            <h3
              id="consultation-modal-title"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
            >
              Initiate Executive Consultation
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Connect directly with our engineering and executive leadership in Surat, Gujarat.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 my-5 p-1 rounded-xl bg-[#080e1a] border border-white/10 self-start">
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'form'
                ? 'bg-gradient-to-r from-neon-cyan to-cyan-400 text-[#030712] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Draft Inquiry Form
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('channels')}
            className={`text-xs font-mono px-3.5 py-1.5 rounded-lg transition-all ${
              activeTab === 'channels'
                ? 'bg-gradient-to-r from-neon-cyan to-cyan-400 text-[#030712] font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Direct Channels & HQ
          </button>
        </div>

        {activeTab === 'form' ? (
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Patel"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080e1a] border border-white/10 text-white text-sm focus:outline-none focus:border-neon-cyan transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                  Institution / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. University / Enterprise"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080e1a] border border-white/10 text-white text-sm focus:outline-none focus:border-neon-cyan transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@institution.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080e1a] border border-white/10 text-white text-sm focus:outline-none focus:border-neon-cyan transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080e1a] border border-white/10 text-white text-sm focus:outline-none focus:border-neon-cyan transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                Solution Area of Interest
              </label>
              <select
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080e1a] border border-white/10 text-white text-sm focus:outline-none focus:border-neon-cyan transition-colors"
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
              <label className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                Key Requirements or Objectives
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your campus, student scale, or technical timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#080e1a] border border-white/10 text-white text-sm focus:outline-none focus:border-neon-cyan transition-colors resize-none"
              />
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp Priority</span>
              </button>

              <button
                type="button"
                onClick={handleSendEmail}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-neon-cyan to-cyan-400 text-black font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Dispatch Email Inquiry</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            {/* Quick Contact Cards */}
            <div className="p-4 rounded-2xl bg-[#080e1a] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Mail className="w-4 h-4 text-neon-cyan" />
                  <span>Official Corporate Email</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs font-mono text-cyan-300 select-all">{OFFICIAL_EMAIL}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#080e1a] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Direct WhatsApp / Phone Line</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30">
                  Priority
                </span>
              </div>
              <p className="text-xs font-mono text-emerald-300 select-all">{OFFICIAL_PHONE}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#080e1a] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <MapPin className="w-4 h-4 text-emerald-400" />
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
                  className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <span>Google Listing & Reviews (5.0 ⭐)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#080e1a] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Building className="w-4 h-4 text-violet-400" />
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
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Footer Note */}
        <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero-Leak Data Confidentiality</span>
          </span>
          <span>Surat • Gujarat • India</span>
        </div>
      </div>
    </div>
  );
}
