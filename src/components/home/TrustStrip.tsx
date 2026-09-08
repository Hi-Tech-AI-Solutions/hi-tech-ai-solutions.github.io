import React from 'react';
import { ShieldCheck, Server, Lock, Cpu } from 'lucide-react';

export default function TrustStrip() {
  const credentials = [
    {
      icon: ShieldCheck,
      title: 'Institutional Grade Security',
      subtitle: 'Zero data leaks & confidential student data isolation',
      color: 'text-emerald-400',
    },
    {
      icon: Server,
      title: 'High-Availability Architecture',
      subtitle: 'Engineered for 99.9% uptime across production workloads',
      color: 'text-cyan-400',
    },
    {
      icon: Cpu,
      title: 'Active Product Ecosystem',
      subtitle: '13 synchronized platforms running across active deployments',
      color: 'text-violet-400',
    },
    {
      icon: Lock,
      title: 'Strict Data Governance',
      subtitle: 'Compliance-ready role access & institutional control',
      color: 'text-amber-400',
    },
  ];

  return (
    <section className="relative py-10 border-y border-white/10 bg-[#040813]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {credentials.map((cred, idx) => (
            <div key={idx} className="flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-neon-cyan transition-colors">
                <cred.icon className={`w-5 h-5 ${cred.color}`} />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-white tracking-tight flex items-center gap-1.5">
                  <span>{cred.title}</span>
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-sans">
                  {cred.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
