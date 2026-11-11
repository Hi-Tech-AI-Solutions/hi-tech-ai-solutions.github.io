'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Radio, Clock } from 'lucide-react';
import ProductWindow from './ProductWindow';
import { useThemeMode } from '@/context/ThemeContext';
import { isMotionOff, onMotionChange } from '@/lib/motion';

const STATS = [
  { v: '13', l: 'Products deployed' },
  { v: '50,000+', l: 'Student records on JyotOS' },
  { v: '1,500+', l: 'BAOU students managed' },
];

/**
 * Hero, built on the "mirror test": it says who it is for, what they get, and what to do next.
 * Depth: back = soft light, middle = copy, front = the product window, which hangs over the
 * bottom edge into the next section. Only the product window moves on scroll.
 *
 * Order matters here. Headline, one-line proof and the primary button come first so that they
 * are on the first screen of a 1366 x 768 laptop and a 360 x 640 phone. The Quantum Cockpit
 * status strip used to sit above the headline and pushed the button below the fold on both;
 * it now sits just above the product console.
 */
export default function HeroSection() {
  const { theme } = useThemeMode();
  const isCockpit = theme === 'quantum-cockpit';
  const [timeString, setTimeString] = useState<string>('');
  const heroRef = useRef<HTMLElement>(null);

  // Scroll progress (0 → 1 across the hero) drives the product window only.
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      if (isMotionOff()) {
        el.style.setProperty('--hero-p', '0');
        return;
      }
      const h = el.offsetHeight || 1;
      const p = Math.min(1, Math.max(0, window.scrollY / h));
      el.style.setProperty('--hero-p', p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    const off = onMotionChange(update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      off();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!isCockpit) return;
    const updateTime = () => {
      setTimeString(
        new Date().toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [isCockpit]);

  return (
    <section
      ref={heroRef}
      className="relative pt-24 pb-0 md:pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      {/* Back layer: soft light behind the copy */}
      <div
        className="absolute inset-x-0 top-0 h-[620px] pointer-events-none bg-[radial-gradient(ellipse_60%_55%_at_50%_30%,rgba(26,34,51,0.9),transparent)]"
        aria-hidden="true"
      />

      {/* Middle layer: the copy. Readable immediately, never animated in. */}
      <div className="text-center max-w-5xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-gray-300 text-xs font-mono tracking-wide mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          <span>Built for colleges and universities</span>
        </div>

        <h1 className="text-4xl max-[359px]:text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
          AI that runs your campus admin,{' '}
          <span className="block mt-1.5 text-gray-400">so your staff can focus on students.</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Admissions, exams, attendance, ID cards and a student helpdesk on one connected system.
          Already live at Amroli colleges, BAOU Study Centre 1839 and VNSGU-affiliated campuses.
        </p>

        {/* The primary action of the page */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#matcher" className="btn-cyber-primary w-full sm:w-auto">
            <span>Find your solution in 60 seconds</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="#ecosystem" className="btn-cyber-secondary w-full sm:w-auto">
            <span>See the 13 products</span>
          </a>
        </div>

        {/* Label first in the markup (a <dd> must follow its <dt>); flex-col-reverse shows the number on top */}
        <dl className="mt-10 grid grid-cols-3 max-w-2xl mx-auto gap-4 border-t border-white/10 pt-8">
          {STATS.map((s) => (
            <div key={s.l} className="flex flex-col-reverse justify-end">
              <dt className="mt-1 text-[11px] sm:text-xs text-gray-400">{s.l}</dt>
              <dd className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Front layer: the product window rises and hangs over the section edge */}
      <div className="hero-plane-near relative z-20 mt-14 max-w-4xl mx-auto -mb-24 md:-mb-32">
        {/* Quantum Cockpit status strip: a caption on the console, inside the moving layer so the
            two travel together on scroll. It is no longer the first thing on the page. */}
        {isCockpit && (
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 mb-3 rounded-2xl bg-[#111724]/85 border border-white/10 font-mono text-[11px] text-gray-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
              <span className="text-white font-semibold">MISSION CONTROL</span>
              <span className="text-white/20" aria-hidden="true">|</span>
              <span className="text-gray-300">QUANTUM COCKPIT V3.8</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-gray-300">
                <Radio className="w-3 h-3" aria-hidden="true" />
                <span>PING: <strong className="text-emerald-400">11ms</strong></span>
              </div>
              <span className="text-white/20 hidden sm:inline" aria-hidden="true">|</span>
              <div className="flex items-center gap-1.5 text-gray-300">
                <Clock className="w-3 h-3" aria-hidden="true" />
                <span className="text-white">{timeString || 'LIVE IST'}</span>
              </div>
            </div>
          </div>
        )}
        <ProductWindow />
      </div>
    </section>
  );
}
