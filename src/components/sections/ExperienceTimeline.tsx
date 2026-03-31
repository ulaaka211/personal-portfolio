"use client";

import { motion } from "framer-motion";
import { NeonBadge } from "@/components/ui/NeonBadge";
import { FRONTEND_TIMELINE, BACKEND_TIMELINE } from "@/lib/data/timeline";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface TimelineItem {
  quarter: string;
  title: string;
  description: string;
  tags: readonly string[];
  metric: string;
}

interface TimelineCardProps {
  item: TimelineItem;
  side: "left" | "right";
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ item, side, index }) => {
  const borderColor = side === "left" ? "border-[rgba(0,212,255,0.25)]" : "border-[rgba(124,58,237,0.25)]";
  const accentColor = side === "left" ? "text-[#00d4ff]" : "text-[#a78bfa]";
  const metricBg = side === "left"
    ? "bg-[rgba(0,212,255,0.08)] border-[rgba(0,212,255,0.2)] text-[#00d4ff]"
    : "bg-[rgba(124,58,237,0.08)] border-[rgba(124,58,237,0.2)] text-[#a78bfa]";
  const tagColor = side === "left" ? "cyan" : "purple" as const;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ delay: index * 0.1 }}
      className={`glass-card rounded-lg p-5 border ${borderColor} flex flex-col gap-3`}
    >
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className={`font-mono text-xs ${accentColor} tracking-wide`}>{item.quarter}</span>
        <span className={`font-mono text-xs px-2 py-0.5 rounded border ${metricBg}`}>
          {item.metric}
        </span>
      </div>
      <h4 className="text-slate-100 font-semibold text-sm">{item.title}</h4>
      <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {item.tags.map((tag) => (
          <NeonBadge key={tag} color={tagColor}>{tag}</NeonBadge>
        ))}
      </div>
    </motion.div>
  );
};

export default function ExperienceTimeline() {
  return (
    <section
      id="About"
      className="w-full bg-carbon-800 bg-grid py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-[#00d4ff] text-xs tracking-widest uppercase">
            Career Architecture
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-100">
            2 Years at{" "}
            <span className="gradient-text-cyan">Invescore</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
            A deliberate split between mastering frontend architecture and
            engineering backend data pipelines in the Fintech/NBFI sector.
          </p>
        </motion.div>

        {/* Column labels */}
        <div className="grid lg:grid-cols-[1fr_60px_1fr] gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_8px_#00d4ff]" />
            <span className="font-mono text-[#00d4ff] text-sm font-semibold tracking-wide uppercase">
              Frontend — Year 1
            </span>
          </div>
          <div className="hidden lg:block" />
          <div className="flex items-center gap-3 lg:justify-end">
            <span className="font-mono text-[#a78bfa] text-sm font-semibold tracking-wide uppercase">
              Backend — Year 2
            </span>
            <div className="w-2 h-2 rounded-full bg-[#a78bfa] shadow-[0_0_8px_#a78bfa]" />
          </div>
        </div>

        {/* Timeline grid */}
        <div className="grid lg:grid-cols-[1fr_60px_1fr] gap-4">
          {/* Frontend column */}
          <div className="flex flex-col gap-4">
            {FRONTEND_TIMELINE.map((item, i) => (
              <TimelineCard key={item.quarter} item={item} side="left" index={i} />
            ))}
          </div>

          {/* Center spine */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="w-px flex-1 timeline-line" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full border-2 border-[rgba(0,212,255,0.6)] bg-carbon-900 my-2 shadow-[0_0_8px_rgba(0,212,255,0.4)]" />
                <div className="w-px flex-1 timeline-line" />
              </div>
            ))}
          </div>

          {/* Backend column */}
          <div className="flex flex-col gap-4">
            {BACKEND_TIMELINE.map((item, i) => (
              <TimelineCard key={item.quarter + "-be"} item={item} side="right" index={i} />
            ))}
          </div>
        </div>

        {/* Bottom summary row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid md:grid-cols-3 gap-4"
        >
          {[
            { icon: "⚡", title: "Next.js 14", sub: "App Router, RSC, Dynamic Imports" },
            { icon: "🗄️", title: "PostgreSQL", sub: "ACID, Indexing, Query Optimisation" },
            { icon: "🏗️", title: "Architecture", sub: "SOLID, Modular, <150 LOC/file" },
          ].map(({ icon, title, sub }) => (
            <div
              key={title}
              className="glass-card rounded-lg p-4 border border-[rgba(0,212,255,0.1)] text-center"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-mono text-slate-100 text-sm font-semibold">{title}</div>
              <div className="text-slate-500 text-xs mt-1">{sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
