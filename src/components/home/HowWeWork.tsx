import React from 'react';

const STEPS = [
  { n: '01', title: 'Discovery call', body: 'Tell us the problem. We listen first and map where AI can remove friction.' },
  { n: '02', title: 'Working prototype', body: 'A demo you can click through, before you commit to a full build.' },
  { n: '03', title: 'Build in milestones', body: 'Regular demos against agreed milestones, so there are no surprises.' },
  { n: '04', title: 'Deploy & support', body: 'We take it live on your campus and stay on for training and support.' },
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="max-w-2xl mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">How we work</span>
        <h2 className="mt-3 text-3xl sm:text-5xl font-semibold text-white tracking-tight">
          From first call to live on campus.
        </h2>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
        {STEPS.map((s) => (
          <li key={s.n} className="relative md:pt-6 md:border-t md:border-white/10">
            <span className="text-sm font-mono text-neon-cyan">{s.n}</span>
            <h3 className="mt-2 text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
