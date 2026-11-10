'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product, ProductCategory } from '@/data/products';
import ProductDetailModal from './ProductDetailModal';
import { Layers, ArrowRight, ExternalLink } from 'lucide-react';
import { useThemeMode } from '@/context/ThemeContext';

const FEATURED_IDS = ['jyotos', 'jyotassist-ai', 'scholarcard-ai', 'classpulse-pro'];

export default function ProductShowcase() {
  const { theme } = useThemeMode();
  const isCockpit = theme === 'quantum-cockpit';

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: { label: string; value: string }[] = [
    { label: isCockpit ? 'All Fleet' : 'All Innovations', value: 'All' },
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

  // Featured cards only on the "All" view; filtered views show everything compactly.
  const featured: Product[] =
    selectedCategory === 'All'
      ? FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
          (p): p is Product => Boolean(p)
        )
      : [];
  const rest = filteredProducts.filter((p) => !featured.some((f) => f.id === p.id));

  return (
    <section
      id="ecosystem"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative"
    >
      {/* Header */}
      <div className="max-w-2xl space-y-3 mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neon-cyan">
          <Layers className="w-3.5 h-3.5" />
          <span>{PRODUCTS.length} deployed solutions</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
          The Hi-Tech product ecosystem
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Every platform is purpose-built to remove institutional friction, automate complex
          administrative pipelines, and bring AI-native intelligence to higher education.
        </p>
      </div>

      {/* Category filter */}
      <div
        role="group"
        aria-label="Filter products by category"
        className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#111724] border border-white/10 mb-10 relative z-10"
      >
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              aria-pressed={isSelected}
              className={`text-xs font-mono px-3.5 py-2 rounded-xl transition-colors flex items-center gap-2 border ${
                isSelected
                  ? 'bg-white/10 text-white border-white/20 font-semibold'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border-transparent'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-white/10 text-gray-400'
                }`}
              >
                {getCategoryCount(cat.value)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative z-10 space-y-10">
        {/* Featured four */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((product, i) => (
              <article
                key={product.id}
                className={`group flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111724] p-7 sm:p-8 transition-colors hover:border-neon-cyan/40 ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neon-cyan">
                      {product.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Live
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">{product.name}</h3>
                  <p className="mt-2 text-gray-300 leading-relaxed max-w-2xl">{product.tagline}</p>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-2xl line-clamp-3">
                    {product.summary}
                  </p>

                  {product.metrics && product.metrics.length > 0 && (
                    <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                      {product.metrics.slice(0, 3).map((m) => (
                        <div key={m.label}>
                          <dd className="text-xl font-semibold text-white">{m.value}</dd>
                          <dt className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                            {m.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {product.liveDemoUrl && (
                    <a
                      href={product.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber-primary !py-2.5 !px-5"
                    >
                      <span>Launch live app</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="btn-cyber-secondary !py-2.5 !px-5"
                  >
                    <span>Architecture &amp; specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Compact list for everything else */}
        {rest.length > 0 && (
          <div>
            {featured.length > 0 && (
              <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-4">
                More from the ecosystem
              </h3>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {rest.map((product) => (
                <article
                  key={product.id}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111724] p-5 transition-colors hover:border-neon-cyan/40"
                >
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-2">
                      {product.category}
                    </div>
                    <h4 className="text-lg font-semibold text-white">{product.name}</h4>
                    <p className="mt-1.5 text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {product.tagline}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    {product.liveDemoUrl ? (
                      <a
                        href={product.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent hover:text-accent-hover transition-colors"
                      >
                        Launch <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span />
                    )}
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                    >
                      Specs <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
