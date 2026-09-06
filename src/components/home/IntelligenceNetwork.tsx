'use client';

import React, { useState } from 'react';
import {
  HelpCircle,
  Database,
  Cpu,
  BarChart3,
  Zap,
  BookOpen,
  CheckCircle2,
  TrendingUp,
  Layers,
} from 'lucide-react';

interface NetworkNode {
  id: string;
  label: string;
  category: 'Input' | 'Core' | 'Engine' | 'Output';
  icon: React.ElementType;
  x: number; // percentage in SVG coordinate space
  y: number;
  color: string;
  summary: string;
  details: string;
  metrics: string;
}

const NODES: NetworkNode[] = [
  {
    id: 'problem',
    label: 'Human Problem',
    category: 'Input',
    icon: HelpCircle,
    x: 50,
    y: 10,
    color: '#38BDF8', // Sky Cyan
    summary: 'Operational friction and institutional bottlenecks.',
    details:
      'We start from ground reality: academic administrative drag, fragmented student verification, manual staff coordination, and uncoordinated event lifecycles.',
    metrics: 'Root Cause Discovery',
  },
  {
    id: 'data',
    label: 'Data Streams',
    category: 'Input',
    icon: Database,
    x: 50,
    y: 26,
    color: '#00F0FF', // Electric Cyan
    summary: 'Institutional & operational signal streams.',
    details:
      'Secure ingestion of campus records, telemetry, schedules, and enterprise workflows with zero-leak data governance.',
    metrics: 'Strict Isolation',
  },
  {
    id: 'core',
    label: 'AI Core Engine',
    category: 'Core',
    icon: Cpu,
    x: 50,
    y: 45,
    color: '#8B5CF6', // Neural Violet
    summary: 'Cognitive reasoning & orchestration layer.',
    details:
      'Multi-agent systems, fine-tuned domain LLMs, and deterministic rule engines coordinating intelligent task dispatch.',
    metrics: 'Multi-Agent Logic',
  },
  {
    id: 'analytics',
    label: 'Analytics',
    category: 'Engine',
    icon: BarChart3,
    x: 20,
    y: 62,
    color: '#38BDF8', // Cyan
    summary: 'Real-time decision intelligence.',
    details:
      'Translating institutional volume into clear predictive signals, attendance heatmaps, and executive visibility.',
    metrics: 'Predictive Signals',
  },
  {
    id: 'automation',
    label: 'Automation',
    category: 'Engine',
    icon: Zap,
    x: 50,
    y: 62,
    color: '#10B981', // Pulse Emerald
    summary: 'Autonomous zero-drag workflows.',
    details:
      'Instantaneous credential generation, self-driving event check-ins, and automated multi-step approvals.',
    metrics: 'Zero Human Drag',
  },
  {
    id: 'knowledge',
    label: 'Knowledge Hub',
    category: 'Engine',
    icon: BookOpen,
    x: 80,
    y: 62,
    color: '#F59E0B', // Amber
    summary: 'Institutional memory & governance.',
    details:
      'Context-aware knowledge retrieval for assistant bots, audit compliance, and policy guidance.',
    metrics: 'Context Grounded',
  },
  {
    id: 'solution',
    label: 'Engineered Solution',
    category: 'Output',
    icon: CheckCircle2,
    x: 50,
    y: 78,
    color: '#10B981',
    summary: 'Production-hardened software ecosystem.',
    details:
      'Modular systems such as JyotOS, ScholarCard AI, StaffBridge, and EventOS deployed into mission-critical production.',
    metrics: 'Modular Ecosystem',
  },
  {
    id: 'impact',
    label: 'Measurable Impact',
    category: 'Output',
    icon: TrendingUp,
    x: 50,
    y: 92,
    color: '#00F0FF',
    summary: 'Tangible institutional ROI & speed.',
    details:
      'Realized administrative time savings, 100% digital verification speed, and high-trust institutional transformation.',
    metrics: 'Multiplied Speed',
  },
];

// Vector connections between nodes: [sourceId, targetId]
const CONNECTIONS: [string, string][] = [
  ['problem', 'data'],
  ['data', 'core'],
  ['core', 'analytics'],
  ['core', 'automation'],
  ['core', 'knowledge'],
  ['analytics', 'solution'],
  ['automation', 'solution'],
  ['knowledge', 'solution'],
  ['solution', 'impact'],
];

export default function IntelligenceNetwork() {
  const [activeNodeId, setActiveNodeId] = useState<string>('core');

  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[2];

  // Helper to find coordinates for drawing lines
  const getNodePos = (id: string) => {
    const node = NODES.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 50, y: 50 };
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto my-8">
      {/* Visual Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 px-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Signature Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            The Hi-Tech Intelligence Network
          </h3>
        </div>
        <div className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
          <span>Click any node to inspect data vector</span>
        </div>
      </div>

      {/* Main Grid Container: Network Visualization + Live HUD Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left / Center: Interactive SVG Network Canvas */}
        <div className="lg:col-span-7 relative h-[440px] sm:h-[480px] cyber-glass rounded-2xl p-4 overflow-hidden flex items-center justify-center">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-700 opacity-40"
            style={{
              background: `radial-gradient(circle at ${activeNode.x}% ${activeNode.y}%, ${activeNode.color}33, transparent 65%)`,
            }}
          />

          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="cyanVioletGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Connection Lines with Animated Data Flow Pulses */}
            {CONNECTIONS.map(([src, dst], i) => {
              const p1 = getNodePos(src);
              const p2 = getNodePos(dst);
              const isConnectedToActive = src === activeNodeId || dst === activeNodeId;

              return (
                <g key={i}>
                  {/* Base Line */}
                  <line
                    x1={`${p1.x}%`}
                    y1={`${p1.y}%`}
                    x2={`${p2.x}%`}
                    y2={`${p2.y}%`}
                    stroke={isConnectedToActive ? '#00F0FF' : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={isConnectedToActive ? '0.8' : '0.4'}
                    strokeDasharray={isConnectedToActive ? '2 1' : 'none'}
                    className="transition-all duration-500"
                  />
                  {/* Subtle Pulse Circle Along Active Vectors */}
                  {isConnectedToActive && (
                    <circle
                      r="1"
                      fill="#00F0FF"
                      className="animate-pulse"
                    >
                      <animate
                        attributeName="cx"
                        from={`${p1.x}%`}
                        to={`${p2.x}%`}
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        from={`${p1.y}%`}
                        to={`${p2.y}%`}
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Nodes */}
            {NODES.map((node) => {
              const isActive = node.id === activeNodeId;

              return (
                <g
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  className="cursor-pointer group"
                  tabIndex={0}
                  role="button"
                  aria-label={`Node: ${node.label}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveNodeId(node.id);
                    }
                  }}
                >
                  {/* Halo Glow for Active Node */}
                  {isActive && (
                    <circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r="7"
                      fill="none"
                      stroke={node.color}
                      strokeWidth="0.5"
                      strokeOpacity="0.4"
                      className="animate-ping"
                    />
                  )}

                  {/* Node Outer Circle */}
                  <circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r={isActive ? '4.8' : '3.6'}
                    fill="#0a101f"
                    stroke={isActive ? node.color : 'rgba(255, 255, 255, 0.25)'}
                    strokeWidth={isActive ? '0.9' : '0.5'}
                    className="transition-all duration-300 group-hover:stroke-neon-cyan"
                  />

                  {/* Inner Indicator Dot */}
                  <circle
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r="1.8"
                    fill={node.color}
                    className="transition-transform duration-300"
                  />

                  {/* Label Text */}
                  <text
                    x={`${node.x}%`}
                    y={`${node.y + 4.2}%`}
                    textAnchor="middle"
                    fill={isActive ? '#FFFFFF' : '#9CA3AF'}
                    fontSize="2.4"
                    fontFamily="monospace"
                    fontWeight={isActive ? 'bold' : 'normal'}
                    className="select-none pointer-events-none transition-colors duration-300"
                  >
                    {node.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right: Live Technical Inspection HUD */}
        <div className="lg:col-span-5 cyber-glass rounded-2xl p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
          {/* Top Status Header */}
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: activeNode.color }} />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
                  Node Layer: <strong className="text-white">{activeNode.category}</strong>
                </span>
              </div>
              <span className="text-[11px] font-mono text-neon-cyan bg-cyan-950/60 border border-neon-cyan/30 px-2 py-0.5 rounded">
                {activeNode.metrics}
              </span>
            </div>

            {/* Active Node Title & Icon */}
            <div className="flex items-center gap-3.5 mb-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all"
                style={{
                  backgroundColor: `${activeNode.color}15`,
                  borderColor: `${activeNode.color}60`,
                  boxShadow: `0 0 20px ${activeNode.color}30`,
                }}
              >
                <activeNode.icon className="w-6 h-6" style={{ color: activeNode.color }} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">{activeNode.label}</h4>
                <p className="text-xs font-mono text-gray-400">{activeNode.summary}</p>
              </div>
            </div>

            {/* In-depth Technical Description */}
            <div className="bg-black/40 border border-white/5 rounded-xl p-4 my-4">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                {activeNode.details}
              </p>
            </div>
          </div>

          {/* Connected Flow Pathways & Fast Selection Chips */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-2">
              Quick Layer Navigation:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {NODES.map((n) => (
                <button
                  key={n.id}
                  onClick={() => setActiveNodeId(n.id)}
                  className={`text-[10px] font-mono px-2 py-1 rounded transition-all ${
                    n.id === activeNodeId
                      ? 'bg-neon-cyan text-black font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                      : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
