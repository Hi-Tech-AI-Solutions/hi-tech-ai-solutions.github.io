'use client';

import React from 'react';
import IntelligenceNetwork from './IntelligenceNetwork';
import CommandTerminal from './CommandTerminal';
import { useThemeMode } from '@/context/ThemeContext';

/** The cognitive pipeline visual (plus the AI command terminal in Quantum Cockpit mode). */
export default function ArchitectureTopology() {
  const { theme } = useThemeMode();
  const isCockpit = theme === 'quantum-cockpit';

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
      {isCockpit && (
        <div className="mb-20">
          <CommandTerminal />
        </div>
      )}

      <div className="text-center mb-6">
        <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest">Architecture</span>
        <h2 className="text-xl sm:text-3xl font-semibold text-white mt-1">
          How the Hi-Tech platform thinks
        </h2>
      </div>
      <IntelligenceNetwork />
    </section>
  );
}
