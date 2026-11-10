'use client';

import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import { isMotionOff, onMotionChange, setMotion } from '@/lib/motion';

/** Lets visitors switch animation off (and remembers the choice). */
export default function MotionToggle({ className = '' }: { className?: string }) {
  const [off, setOff] = useState(false);

  useEffect(() => {
    setOff(isMotionOff());
    return onMotionChange(() => setOff(isMotionOff()));
  }, []);

  return (
    <button
      type="button"
      onClick={() => setMotion(off ? 'on' : 'off')}
      aria-pressed={off}
      title={off ? 'Motion is off. Turn animations on' : 'Turn animations off'}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-colors ${className}`}
    >
      <Activity className="w-3.5 h-3.5" aria-hidden="true" />
      <span className="hidden xl:inline">Motion {off ? 'off' : 'on'}</span>
      <span className="sr-only xl:hidden">{off ? 'Motion off' : 'Motion on'}</span>
    </button>
  );
}
