'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product, ProductCategory } from '@/data/products';
import ProductDetailModal from './ProductDetailModal';
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Activity,
  Cpu,
  Building2,
} from 'lucide-react';

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: { label: string; value: string }[] = [
    { label: 'All Innovations', value: 'All' },
    { label: 'Institutional Core & OS', value: 'Institutional Core & OS' },
    { label: 'AI Agents & Support', value: 'AI Agents & Support' },
    { label: 'Academic Telemetry & Analytics', value: 'Academic Telemetry & Analytics' },
    { label: 'Smart Campus & Identity', value: 'Smart Campus & Identity' },
    { label: 'Operations & Events', value: 'Operations & Events' },
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === (selectedCategory as ProductCategory));

  const getCategoryCount = (categoryValue: string) => {
    if (categoryValue === 'All') return PRODUCTS.length;
    return PRODUCTS.filter((p) => p.category === categoryValue).length;
  };

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Ambient Neon Backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] pointer-events-none" />

      {/* Header & Category Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 relative z-10">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neon-cyan">
            <Layers className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
            <span>Active Production Ecosystem ({PRODUCTS.length} Platforms)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Hi-Tech Product Ecosystem
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every platform is purpose-built to eliminate institutional friction, automate complex
            administrative pipelines, and empower higher education with AI-native intelligence.
          </p>
        </div>

        {/* Global Live Stat Pill */}
        <div className="hidden lg:flex items-center gap-3 bg-[#080e1a]/80 border border-white/10 rounded-2xl px-4 py-2.5 backdrop-blur-md">
          <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
          <div className="text-left font-mono">
            <div className="text-[10px] uppercase text-gray-400">Deployed Fleet</div>
            <div className="text-xs font-bold text-white">13 Verified Live Solutions</div>
          </div>
        </div>
      </div>

      {/* Category Tabs with Dynamic Count Badges */}
      <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#080e1a]/90 border border-white/10 mb-12 relative z-10 backdrop-blur-md">
        {categories.map((cat) => {
          const count = getCategoryCount(cat.value);
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-gradient-to-r from-neon-cyan/20 to-violet-500/20 text-neon-cyan border border-neon-cyan/50 font-semibold shadow-[0_0_20px_rgba(0,240,255,0.25)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isSelected
                    ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30'
                    : 'bg-white/10 text-gray-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="cyber-glass rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_12px_40px_-10px_rgba(0,240,255,0.3)] bg-gradient-to-b from-[#080e1a]/90 via-[#0a1224]/80 to-[#050811]/95"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              {/* Card Header: Live Indicator, Status Badge & Institution Tag */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase px-2 py-0.5 rounded border ${product.badgeColor}`}>
                    {product.status}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {product.modules.length} Modules
                </span>
              </div>

              {/* Institution Scope Pill */}
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 mb-3">
                <Building2 className="w-3 h-3 text-neon-cyan shrink-0" />
                <span className="truncate">{product.institution}</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors tracking-tight">
                {product.name}
              </h3>
              <p className="text-xs font-mono text-neon-cyan/90 mb-4 leading-relaxed line-clamp-2">
                {product.tagline}
              </p>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-5 line-clamp-3">
                {product.summary}
              </p>

              {/* Telemetry Chips (Real Production Metrics) */}
              {product.metrics && product.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mb-5 p-2.5 rounded-xl bg-black/40 border border-white/5">
                  {product.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="text-[9px] uppercase font-mono text-gray-400">{m.label}</div>
                      <div className="text-xs font-mono font-bold text-white flex items-center gap-1">
                        <Cpu className="w-2.5 h-2.5 text-neon-cyan shrink-0" />
                        <span className="truncate">{m.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Feature Bullets */}
              <div className="space-y-2 mb-6">
                {product.coreHighlights.slice(0, 2).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2 leading-relaxed">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions: Direct Launch + Architecture Inspector */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Category</span>
                <span className="text-neon-cyan/80">{product.category}</span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                {product.liveDemoUrl && (
                  <a
                    href={product.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-mono font-semibold px-3 py-2 rounded-xl bg-neon-cyan/15 hover:bg-neon-cyan/25 text-neon-cyan border border-neon-cyan/40 hover:border-neon-cyan shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.35)] transition-all"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="inline-flex items-center justify-center gap-1 text-xs font-mono text-gray-300 hover:text-white px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all group/btn"
                  title="Inspect Technical Architecture"
                >
                  <span>Specs</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
