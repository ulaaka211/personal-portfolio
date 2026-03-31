"use client";

import { motion } from "framer-motion";
import { RUST_TOPICS } from "@/lib/data/personal";

export default function RustProgress() {
  return (
    <section className="w-full bg-carbon-800 bg-grid py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5 min-w-0"
          >
            <div>
              <span className="font-mono text-[#f97316] text-xs tracking-widest uppercase">
                Learning Vector
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-100">
                Shifting to{" "}
                <span className="font-mono" style={{ color: "#f97316", textShadow: "0 0 12px rgba(249,115,22,0.5)" }}>
                  Rust
                </span>
              </h2>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              After 2 years building production-grade JavaScript systems, the next frontier
              is{" "}
              <span className="text-slate-200 font-mono">systems-level programming</span>.
              Rust provides memory safety without GC — critical for high-frequency
              fintech workloads and future WebAssembly targets.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: "🦀", text: "Memory safety without garbage collection" },
                { icon: "⚡", text: "Zero-cost abstractions for performance-critical paths" },
                { icon: "🌐", text: "WebAssembly compilation target for edge compute" },
                { icon: "🔒", text: "Type-safe concurrency — no data races by design" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-sm">
                  <span className="text-base flex-shrink-0">{icon}</span>
                  <span className="text-slate-400">{text}</span>
                </div>
              ))}
            </div>

            {/* Rust code snippet */}
            <div className="code-surface rounded-lg p-3 sm:p-4 text-xs overflow-x-auto">
              <div className="text-slate-500 mb-2 font-mono">// Current exercise — ownership</div>
              <div className="font-mono space-y-0.5">
                <div><span className="text-[#a78bfa]">fn</span> <span className="text-[#00d4ff]">process_loan</span><span className="text-slate-300">(</span></div>
                <div className="pl-4"><span className="text-slate-300">loan: </span><span className="text-[#10b981]">&amp;LoanRecord</span><span className="text-slate-300">,</span></div>
                <div className="pl-4"><span className="text-slate-300">config: </span><span className="text-[#10b981]">&amp;PipelineConfig</span><span className="text-slate-300">,</span></div>
                <div><span className="text-slate-300">) -&gt; </span><span className="text-[#f59e0b]">Result</span><span className="text-slate-300">&lt;</span><span className="text-[#10b981]">SegmentLabel</span><span className="text-slate-300">, </span><span className="text-[#f87171]">PipelineError</span><span className="text-slate-300">&gt; &#123;</span></div>
                <div className="pl-4 text-slate-400">// ownership, no GC overhead</div>
                <div className="pl-4"><span className="text-[#a78bfa]">match</span><span className="text-slate-300"> loan.overdue_days &#123;</span></div>
                <div className="pl-8 text-slate-300">0 =&gt; <span className="text-[#10b981]">Ok</span>(SegmentLabel::Current),</div>
                <div className="pl-8 text-slate-300">1..=30 =&gt; <span className="text-[#10b981]">Ok</span>(SegmentLabel::Watch),</div>
                <div className="pl-8 text-slate-300">_ =&gt; <span className="text-[#f87171]">Err</span>(PipelineError::UnknownSegment),</div>
                <div className="pl-4 text-slate-300">&#125;</div>
                <div className="text-slate-300">&#125;</div>
              </div>
            </div>
          </motion.div>

          {/* Right — progress bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-xl border border-[rgba(249,115,22,0.2)] p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-slate-100 text-sm font-semibold">
                🦀 Rust Learning Progress
              </h3>
              <span className="font-mono text-xs text-[#f97316] border border-[rgba(249,115,22,0.3)] px-2 py-0.5 rounded">
                In Progress
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {RUST_TOPICS.map((topic, i) => (
                <motion.div
                  key={topic.topic}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs text-slate-300">{topic.topic}</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-[10px] px-1.5 py-0.5 rounded border ${
                          topic.status === "In Progress"
                            ? "border-[rgba(249,115,22,0.3)] text-[#fb923c] bg-[rgba(249,115,22,0.08)]"
                            : topic.status === "Started"
                            ? "border-[rgba(245,158,11,0.3)] text-[#fbbf24] bg-[rgba(245,158,11,0.08)]"
                            : "border-[rgba(100,116,139,0.3)] text-slate-500 bg-[rgba(100,116,139,0.05)]"
                        }`}
                      >
                        {topic.status}
                      </span>
                      <span className="font-mono text-xs text-slate-500">{topic.progress}%</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${topic.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                      className="h-full rounded-full rust-progress-bar"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[rgba(255,255,255,0.05)] flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full bg-[#f97316]"
                style={{ boxShadow: "0 0 8px #f97316, 0 0 4px #f97316" }}
              />
              <span className="font-mono text-xs text-slate-500">
                Estimated full proficiency: Q4 2025
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
