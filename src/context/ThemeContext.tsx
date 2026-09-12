'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Zap, Shield, Sparkles } from 'lucide-react';

export type ThemeMode = 'quantum-cockpit' | 'classic-cyber';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'quantum-cockpit',
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeToggleProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('quantum-cockpit');
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('hitech_theme_mode') as ThemeMode;
    if (saved === 'quantum-cockpit' || saved === 'classic-cyber') {
      setThemeState(saved);
    }
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem('hitech_theme_mode', newTheme);
  };

  const toggleTheme = () => {
    const next = theme === 'quantum-cockpit' ? 'classic-cyber' : 'quantum-cockpit';
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
      {mounted && <FloatingThemeSwitcher />}
    </ThemeContext.Provider>
  );
}

export const useThemeMode = () => useContext(ThemeContext);

/**
 * Floating Theme Switcher Dock allowing instantaneous toggling between
 * "Quantum Cockpit (Hybrid A+B)" and "Classic Cyber Studio (Previous Version)"
 */
function FloatingThemeSwitcher() {
  const { theme, setTheme } = useThemeMode();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#060b17]/90 border border-neon-cyan/40 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-xl font-mono text-[11px] animate-in fade-in slide-in-from-bottom-3 duration-500">
      <div className="px-2 py-1 text-[10px] uppercase text-gray-400 font-bold hidden sm:flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-neon-cyan" />
        <span>Design:</span>
      </div>

      <button
        type="button"
        onClick={() => setTheme('quantum-cockpit')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          theme === 'quantum-cockpit'
            ? 'bg-gradient-to-r from-neon-cyan/25 to-sky-400/25 text-neon-cyan border border-neon-cyan font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
            : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
        }`}
        title="Switch to Quantum Command Cockpit (Hybrid A+B)"
      >
        <Zap className="w-3.5 h-3.5 text-neon-cyan animate-pulse" />
        <span>Quantum Cockpit</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme('classic-cyber')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
          theme === 'classic-cyber'
            ? 'bg-white/15 text-white border border-white/40 font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
            : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
        }`}
        title="Switch back to Classic Cyber Studio (Previous Version)"
      >
        <Shield className="w-3.5 h-3.5 text-violet-400" />
        <span>Classic Studio</span>
      </button>
    </div>
  );
}
