'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '@/data/products';
import ProductDetailModal from './ProductDetailModal';
import {
  Layers,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    'All',
    'Institutional OS',
    'Identity & Credentialing',
    'AI Agents',
    'Operations & Governance',
    'Event Management',
    'Analytics',
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/5 blur-[140px] pointer-events-none" />

      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative z-10">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Product Portfolio & Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Hi-Tech Product Ecosystem
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every platform is purpose-built to solve real institutional, academic, and enterprise
            operational friction with cutting-edge AI architecture.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#080e1a] border border-white/10 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-neon-cyan/20 to-violet-500/20 text-neon-cyan border border-neon-cyan/40 font-semibold shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 relative z-10">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="cyber-glass rounded-3xl p-7 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-neon-cyan/50 hover:shadow-[0_10px_35px_-10px_rgba(0,240,255,0.25)]"
          >
            <div>
              {/* Card Header & Status */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className={`text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded-md border ${product.badgeColor}`}>
                  {product.status}
                </span>
                <span className="text-[11px] font-mono text-gray-400">
                  {product.modules.length} Modules
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                {product.name}
              </h3>
              <p className="text-xs font-mono text-neon-cyan/90 mb-4 leading-relaxed">
                {product.tagline}
              </p>

              {/* Summary */}
              <p className="text-sm text-gray-300 leading-relaxed font-sans mb-6">
                {product.summary}
              </p>

              {/* Quick Feature Bullets */}
              <div className="space-y-2 mb-6">
                {product.coreHighlights.slice(0, 2).map((hl, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-gray-400">
                {product.category}
              </span>
              <button
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-neon-cyan hover:underline group/btn focus:outline-none focus:ring-1 focus:ring-neon-cyan rounded px-2 py-1"
              >
                <span>Inspect Architecture</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
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
