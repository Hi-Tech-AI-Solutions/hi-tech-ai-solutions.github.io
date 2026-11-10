'use client';

import React, { useEffect, useRef, useState } from 'react';
import { isMotionOff, onMotionChange } from '@/lib/motion';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms, useful for staggering siblings */
  delay?: number;
};

/**
 * Fades and lifts content in when it scrolls into view.
 * Content is fully visible on the server, with JS off, with reduced motion,
 * and for anything already on screen at load, so nothing can get stuck hidden.
 */
export default function Reveal({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'visible' | 'hidden' | 'shown'>('visible');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (isMotionOff() || !('IntersectionObserver' in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setState('hidden');
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState('shown');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    io.observe(el);
    // If the visitor switches motion off mid-scroll, show everything straight away.
    const off = onMotionChange(() => {
      if (isMotionOff()) {
        setState('visible');
        io.disconnect();
      }
    });
    return () => {
      io.disconnect();
      off();
    };
  }, []);

  const cls =
    state === 'hidden' ? 'reveal-hidden' : state === 'shown' ? 'reveal-shown' : '';

  return (
    <div
      ref={ref}
      className={`${cls} ${className}`}
      style={state === 'shown' && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
