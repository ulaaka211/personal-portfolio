"use client";

import { motion } from "framer-motion";
import { ARCH_NODES } from "@/lib/data/projects";

interface ArchNode {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  color: string;
}

interface NodeBoxProps {
  node: ArchNode;
}

const NodeBox: React.FC<NodeBoxProps> = ({ node }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.05 }}
    whileHover={{ scale: 1.04 }}
    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-default"
    style={{ left: `${node.x}%`, top: `${node.y}%` }}
  >
    <div
      className="px-3 py-2 rounded-lg border text-center min-w-[100px] max-w-[120px] bg-carbon-900"
      style={{
        borderColor: `${node.color}50`,
        boxShadow: `0 0 12px ${node.color}20`,
      }}
    >
      <div className="font-mono text-xs font-semibold" style={{ color: node.color }}>
        {node.label}
      </div>
      <div className="text-[10px] text-slate-500 mt-0.5">{node.sublabel}</div>
    </div>
  </motion.div>
);

const EDGES = [
  { from: "trigger", to: "segment", label: "daily run" },
  { from: "segment", to: "queue", label: "enqueue" },
  { from: "queue", to: "sms", label: "notify" },
  { from: "queue", to: "call", label: "escalate" },
  { from: "queue", to: "dlq", label: "on failure" },
  { from: "segment", to: "db", label: "audit" },
];

export default function ArchitectureVisualizer() {
  return (
    <section className="w-full bg-carbon-900 bg-grid py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-[#a78bfa] text-xs tracking-widest uppercase">
            System Design
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-100">
            Architecture{" "}
            <span className="neon-text-cyan">Visualizer</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm">
            Post Loan Pipeline — data flows from a daily cron trigger through PostgreSQL-powered
            segmentation into a priority-weighted message queue with DLQ fault tolerance.
          </p>
        </motion.div>

        {/* Diagram container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-xl border border-[rgba(0,212,255,0.15)] p-4 md:p-8 overflow-x-auto"
        >
          {/* SVG for edges */}
          <div className="relative w-full" style={{ minHeight: "300px" }}>
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <marker id="arrow-cyan" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="rgba(0,212,255,0.7)" />
                </marker>
                <marker id="arrow-red" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="rgba(239,68,68,0.7)" />
                </marker>
              </defs>
              {/* Cron → Segment */}
              <line x1="18" y1="42" x2="28" y2="42" stroke="rgba(0,212,255,0.5)" strokeWidth="0.4" markerEnd="url(#arrow-cyan)" strokeDasharray="1.5 0.8" />
              {/* Segment → Queue */}
              <line x1="40" y1="42" x2="50" y2="42" stroke="rgba(0,212,255,0.5)" strokeWidth="0.4" markerEnd="url(#arrow-cyan)" strokeDasharray="1.5 0.8" />
              {/* Queue → SMS */}
              <line x1="62" y1="39" x2="70" y2="24" stroke="rgba(16,185,129,0.5)" strokeWidth="0.4" markerEnd="url(#arrow-cyan)" strokeDasharray="1.5 0.8" />
              {/* Queue → Call */}
              <line x1="62" y1="42" x2="70" y2="42" stroke="rgba(16,185,129,0.5)" strokeWidth="0.4" markerEnd="url(#arrow-cyan)" strokeDasharray="1.5 0.8" />
              {/* Queue → DLQ */}
              <line x1="62" y1="45" x2="70" y2="61" stroke="rgba(239,68,68,0.5)" strokeWidth="0.4" markerEnd="url(#arrow-red)" strokeDasharray="1.5 0.8" />
              {/* Segment → DB */}
              <line x1="43" y1="47" x2="50" y2="66" stroke="rgba(0,212,255,0.3)" strokeWidth="0.35" markerEnd="url(#arrow-cyan)" strokeDasharray="1.5 0.8" />
            </svg>

            {/* Node overlays */}
            {ARCH_NODES.map((node) => (
              <NodeBox key={node.id} node={node} />
            ))}

            {/* Flow step labels */}
            <div className="absolute font-mono text-[9px] text-slate-600" style={{ left: "21%", top: "36%" }}>
              daily
            </div>
            <div className="absolute font-mono text-[9px] text-slate-600" style={{ left: "43%", top: "36%" }}>
              enqueue
            </div>
            <div className="absolute font-mono text-[9px] text-[#ef4444]" style={{ left: "63%", top: "56%" }}>
              on fail
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          {[
            { color: "#f59e0b", label: "Trigger" },
            { color: "#00d4ff", label: "Processing" },
            { color: "#7c3aed", label: "Queue" },
            { color: "#10b981", label: "Delivery" },
            { color: "#ef4444", label: "Fault Handling" },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
              />
              <span className="font-mono text-xs text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
