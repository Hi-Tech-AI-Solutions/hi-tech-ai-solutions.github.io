'use client';

import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import { isMotionOff, onMotionChange, setMotion } from '@/lib/motion';

type Props = {
  className?: string;
  /** Show the text label at every width (the navbar hides it on narrower screens). */
  alwaysShowLabel?: boolean;
};

/**
 * Lets visitors switch animation off (and remembers the choice).
 * The state is carried by the label itself ("Motion on" / "Motion off"), so it is not
 * repeated with aria-pressed, which made screen readers announce "Motion on, not pressed".
 */
export default function MotionToggle({ className = '', alwaysShowLabel = false }: Props) {
  const [off, setOff] = useState(false);

  useEffect(() => {
    setOff(isMotionOff());
    return onMotionChange(() => setOff(isMotionOff()));
  }, []);

  const label = off ? 'Motion off' : 'Motion on';

  return (
    <button
      type="button"
      onClick={() => setMotion(off ? 'on' : 'off')}
      title={off ? 'Animations are off. Click to turn them on.' : 'Animations are on. Click to turn them off.'}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-colors ${className}`}
    >
      <Activity className="w-3.5 h-3.5" aria-hidden="true" />
      {alwaysShowLabel ? (
        <span>{label}</span>
      ) : (
        <>
          <span className="hidden xl:inline">{label}</span>
          <span className="sr-only xl:hidden">{label}</span>
        </>
      )}
    </button>
  );
}
