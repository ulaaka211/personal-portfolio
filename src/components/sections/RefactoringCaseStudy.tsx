"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { REFACTOR_EXAMPLE } from "@/lib/data/projects";

export default function RefactoringCaseStudy() {
  const [view, setView] = useState<"legacy" | "refactored">("legacy");

  return (
    <section className="w-full bg-carbon-800 bg-grid py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-[#10b981] text-xs tracking-widest uppercase">
            Engineering Excellence
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-100">
            Refactoring{" "}
            <span className="gradient-text-green">Case Study</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm leading-relaxed">
            Decomposing monolithic React page components (500–800 LOC) into atomic,
            single-responsibility modules. Each file targets <strong className="text-slate-300">&lt;150 lines</strong>,
            improving testability, code review velocity, and onboarding time.
          </p>
        </motion.div>

        {/* Toggle switch */}
        <div className="flex items-center justify-center mb-8">
          <div className="glass-card rounded-full border border-[rgba(0,212,255,0.2)] p-1 flex gap-1">
            <button
              onClick={() => setView("legacy")}
              className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                view === "legacy"
                  ? "bg-[rgba(239,68,68,0.2)] text-[#f87171] border border-[rgba(239,68,68,0.4)]"
                  : "text-slate-500 hover:text-slate-400"
              }`}
            >
              ❌ Legacy Code
            </button>
            <button
              onClick={() => setView("refactored")}
              className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                view === "refactored"
                  ? "bg-[rgba(16,185,129,0.15)] text-[#34d399] border border-[rgba(16,185,129,0.4)]"
                  : "text-slate-500 hover:text-slate-400"
              }`}
            >
              ✅ Refactored
            </button>
          </div>
        </div>

        {/* Code panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Code window chrome */}
          <div className="glass-card rounded-xl border border-[rgba(0,212,255,0.15)] overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <span className="w-3 h-3 rounded-full bg-[#10b981]" />
              </div>
              <div className="font-mono text-xs text-slate-500">
                {view === "legacy" ? "MonolithicLoanPage.jsx — 847 lines" : "Modular Architecture — <150 LOC/file"}
              </div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    view === "legacy" ? "bg-[#ef4444]" : "bg-[#10b981]"
                  }`}
                  style={{
                    boxShadow: view === "legacy"
                      ? "0 0 6px #ef4444"
                      : "0 0 6px #10b981",
                  }}
                />
                <span className={`font-mono text-xs ${view === "legacy" ? "text-[#f87171]" : "text-[#34d399]"}`}>
                  {view === "legacy" ? "technical debt" : "production ready"}
                </span>
              </div>
            </div>

            {/* Code content */}
            <AnimatePresence mode="wait">
              <motion.pre
                key={view}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="overflow-x-auto p-5 text-xs leading-relaxed font-mono text-slate-300 bg-[#050709] max-h-[480px]"
              >
                <code>{view === "legacy" ? REFACTOR_EXAMPLE.legacy : REFACTOR_EXAMPLE.refactored}</code>
              </motion.pre>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Comparison metrics */}
        <div className="grid md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "File Size", legacy: "847 LOC", after: "<150 LOC", good: true },
            { label: "State Declarations", legacy: "30+", after: "2–4 per hook", good: true },
            { label: "Unit Testability", legacy: "❌ Hard", after: "✅ Easy", good: true },
            { label: "Code Review Time", legacy: "~45 min", after: "~8 min", good: true },
          ].map(({ label, legacy, after }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-lg border border-[rgba(0,212,255,0.1)] p-4"
            >
              <div className="font-mono text-slate-500 text-xs uppercase tracking-wide mb-3">{label}</div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Before</span>
                  <span className="font-mono text-xs text-[#f87171]">{legacy}</span>
                </div>
                <div className="w-full h-px bg-[rgba(255,255,255,0.05)]" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">After</span>
                  <span className="font-mono text-xs text-[#34d399]">{after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
