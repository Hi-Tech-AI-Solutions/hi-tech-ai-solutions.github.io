// Motion preference shared by every animated component.
// The effective value lives on <html data-motion="on|off"> (set before first paint
// by the inline script in layout.tsx), so CSS and JS read the same source of truth.

export const MOTION_STORAGE_KEY = 'hitech-motion';
export const MOTION_EVENT = 'hitech-motionchange';

export function isMotionOff(): boolean {
  if (typeof document === 'undefined') return false;
  return document.documentElement.dataset.motion === 'off';
}

export function setMotion(mode: 'on' | 'off') {
  document.documentElement.dataset.motion = mode;
  try {
    localStorage.setItem(MOTION_STORAGE_KEY, mode);
  } catch {
    /* storage unavailable: preference lasts for this visit only */
  }
  window.dispatchEvent(new Event(MOTION_EVENT));
}

export function onMotionChange(cb: () => void): () => void {
  window.addEventListener(MOTION_EVENT, cb);
  return () => window.removeEventListener(MOTION_EVENT, cb);
}

// Runs inline in <head> before paint. Kept as a string so it stays dependency-free.
export const MOTION_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('${MOTION_STORAGE_KEY}');var r=window.matchMedia('(prefers-reduced-motion: reduce)').matches;document.documentElement.dataset.motion=(s==='on'||s==='off')?s:(r?'off':'on');}catch(e){document.documentElement.dataset.motion='on';}})();`;
