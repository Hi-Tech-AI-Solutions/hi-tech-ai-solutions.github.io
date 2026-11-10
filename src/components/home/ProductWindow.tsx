'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

// Illustrative console built from the real product catalogue (no invented numbers).
const FEATURED_IDS = ['jyotos', 'jyotassist-ai', 'scholarcard-ai', 'classpulse-pro', 'staffbridge', 'eventos'];

export default function ProductWindow() {
  const items = FEATURED_IDS.map((id) => PRODUCTS.find((p) => p.id === id)).filter(
    (p): p is (typeof PRODUCTS)[number] => Boolean(p)
  );
  const list = items.length >= 4 ? items : PRODUCTS.slice(0, 6);
  const [activeId, setActiveId] = useState(list[0].id);
  const active = list.find((p) => p.id === activeId) ?? list[0];

  return (
    <div
      className="relative rounded-2xl border border-white/10 bg-[#111724] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] overflow-hidden"
      role="group"
      aria-label="Illustrative product console showing live Hi-Tech products"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-[11px] font-mono text-gray-400">hi-tech / products</span>
        <span className="ml-auto text-[10px] font-mono uppercase tracking-wider text-gray-400">
          Illustrative interface
        </span>
      </div>

      <div className="grid md:grid-cols-[220px_1fr] min-h-[300px]">
        {/* Sidebar */}
        <ul className="flex md:flex-col gap-1 p-2 md:p-3 overflow-x-auto border-b md:border-b-0 md:border-r border-white/10">
          {list.map((p) => {
            const isActive = p.id === active.id;
            return (
              <li key={p.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveId(p.id)}
                  onMouseEnter={() => setActiveId(p.id)}
                  onFocus={() => setActiveId(p.id)}
                  aria-pressed={isActive}
                  className={`w-full text-left text-sm px-3 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-neon-cyan' : 'bg-white/20'}`}
                  />
                  <span className="whitespace-nowrap">{p.name}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Detail pane */}
        <div className="p-5 md:p-7 flex flex-col gap-5">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-neon-cyan mb-2">
              {active.category}
            </div>
            <p className="text-xl md:text-2xl font-semibold text-white">{active.name}</p>
            <p className="mt-2 text-sm text-gray-400 max-w-xl leading-relaxed">{active.tagline}</p>
          </div>

          {active.metrics && active.metrics.length > 0 && (
            <dl className="grid grid-cols-2 gap-3 max-w-xl">
              {active.metrics.slice(0, 2).map((m) => (
                <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <dt className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-white">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}

          {active.liveDemoUrl && (
            <a
              href={active.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1.5 self-start text-sm text-accent hover:text-accent-hover transition-colors"
            >
              Open live app <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
