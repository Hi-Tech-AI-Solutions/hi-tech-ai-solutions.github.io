'use client';

import React, { useEffect } from 'react';
import { Product } from '@/data/products';
import {
  X,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto cyber-glass rounded-3xl border border-white/20 p-6 sm:p-9 shadow-2xl space-y-7">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan"
          aria-label="Close product details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-md border ${product.badgeColor}`}>
              {product.status}
            </span>
            <span className="text-xs font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
              {product.category}
            </span>
          </div>

          <h2 id="modal-title" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {product.name}
          </h2>
          <p className="text-sm sm:text-base text-neon-cyan font-mono leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Product Overview Summary */}
        <div className="bg-black/50 border border-white/10 rounded-2xl p-5 space-y-3">
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            {product.summary}
          </p>
          <div className="pt-2 border-t border-white/10">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
              Architecture Blueprint:
            </span>
            <p className="text-xs sm:text-sm text-gray-400 font-mono leading-relaxed">
              {product.architectureDescription}
            </p>
          </div>
        </div>

        {/* Core Highlights */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300">
            System Highlights:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.coreHighlights.map((hl, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-gray-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modules Breakdown */}
        {product.modules.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300">
              Engineered Sub-Modules:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#080e1a] border border-white/10 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono">{mod.name}</span>
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                        mod.status === 'Production'
                          ? 'border-emerald-500/40 text-emerald-400 bg-emerald-950/40'
                          : 'border-violet-500/40 text-violet-400 bg-violet-950/40'
                      }`}
                    >
                      {mod.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack & Target Users */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2">
              Technology Stack:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block mb-2">
              Designed For:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.targetAudience.map((aud, i) => (
                <span
                  key={i}
                  className="text-[10px] font-mono text-neon-cyan bg-cyan-950/40 px-2 py-1 rounded border border-cyan-500/30"
                >
                  {aud}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {product.githubRepo ? (
            <a
              href={product.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-secondary w-full sm:w-auto text-xs py-2.5"
            >
              <span>Inspect GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div className="text-xs font-mono text-gray-500">Institutional Enterprise Suite</div>
          )}

          <a
            href="#contact"
            onClick={onClose}
            className="btn-cyber-primary w-full sm:w-auto text-xs py-2.5 px-5"
          >
            <span>Request Architecture Briefing</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
