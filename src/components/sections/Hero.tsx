"use client";

import { motion } from "framer-motion";
import { MetricCard } from "@/components/ui/MetricCard";
import { NeonBadge } from "@/components/ui/NeonBadge";
import { TerminalText } from "@/components/ui/TerminalText";
import { PERSONAL, METRICS, SKILLS } from "@/lib/data/personal";

const TERMINAL_LINES = [
  "cd ~/engineering-portfolio",
  "cat profile.json | jq '.role'",
  "\"Systems & Performance Engineer\"",
  "git log --oneline -3",
  "a1f3c8d feat: optimise post-loan segmentation pipeline",
  "b2e4d9a refactor: modularise loan approval components",
  "c3f5e0b perf: reduce query time 4.2s → 1.7s with composite index",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section
      id="Home"
      className="relative w-full min-h-screen flex flex-col justify-center bg-carbon-900 bg-grid overflow-hidden"
    >
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(0,212,255,0.04)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(124,58,237,0.05)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full px-5 md:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — Text content */}
        <div className="flex flex-col gap-6">
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
            <span className="font-mono text-sm text-slate-400 tracking-widest uppercase">
              Available · Fintech / NBFI
            </span>
          </motion.div>

          <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
              {PERSONAL.name}
            </h1>
            <h2 className="mt-2 text-xl md:text-2xl font-mono gradient-text-cyan">
              {PERSONAL.title}
            </h2>
          </motion.div>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-slate-400 leading-relaxed max-w-lg"
          >
            2 years engineering production systems at{" "}
            <span className="text-[#00d4ff] font-mono">Invescore</span> — from building
            modular, high-performance React interfaces to designing ACID-compliant
            PostgreSQL pipelines for automated post-loan workflows.
          </motion.p>

          {/* Skill badges */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-2"
          >
            {SKILLS.frontend.slice(0, 4).map((s) => (
              <NeonBadge key={s} color="cyan">{s}</NeonBadge>
            ))}
            {SKILLS.backend.slice(0, 3).map((s) => (
              <NeonBadge key={s} color="purple">{s}</NeonBadge>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-4 mt-2"
          >
            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-[rgba(0,212,255,0.4)] text-[#00d4ff] font-mono text-sm hover:bg-[rgba(0,212,255,0.1)] transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.57v-2c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.74-1.33-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              download
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[rgba(0,212,255,0.12)] border border-[rgba(0,212,255,0.4)] text-[#00d4ff] font-mono text-sm hover:bg-[rgba(0,212,255,0.2)] transition-colors"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right — Terminal + Metrics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-5"
        >
          <TerminalText lines={TERMINAL_LINES} typingSpeed={30} />

          <div className="grid grid-cols-2 gap-3">
            {METRICS.map((m) => (
              <MetricCard
                key={m.label}
                label={m.label}
                value={m.value}
                unit={m.unit}
                color={m.color as "cyan" | "purple" | "green" | "amber"}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 font-mono text-xs tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#00d4ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
