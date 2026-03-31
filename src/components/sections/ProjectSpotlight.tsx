"use client";

import { motion } from "framer-motion";
import { NeonBadge } from "@/components/ui/NeonBadge";
import { POST_LOAN_SEGMENTS } from "@/lib/data/projects";

const SCHEMA_FIELDS = [
  { name: "loan_id", type: "UUID", key: "PK" },
  { name: "customer_id", type: "UUID", key: "FK" },
  { name: "overdue_days", type: "INT", key: "" },
  { name: "segment", type: "TEXT", key: "" },
  { name: "last_action_at", type: "TIMESTAMPTZ", key: "" },
  { name: "next_action_at", type: "TIMESTAMPTZ", key: "" },
  { name: "retry_count", type: "INT", key: "" },
  { name: "status", type: "ENUM", key: "" },
];

export default function ProjectSpotlight() {
  return (
    <section
      id="Works"
      className="w-full bg-carbon-900 bg-grid py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="font-mono text-[#00d4ff] text-xs tracking-widest uppercase">
            Project Spotlight
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-100">
            Post Loan{" "}
            <span className="gradient-text-cyan">Data Pipeline</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm leading-relaxed">
            An automated customer segmentation and messaging system built for the
            Fintech/NBFI domain. Classifies post-disbursement loan portfolios by overdue
            risk tier and triggers multi-channel communications with a 99.2% delivery rate.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Node.js", "PostgreSQL", "ACID", "Cron", "Segmentation", "DLQ", "Observability"].map((t) => (
              <NeonBadge key={t} color="cyan">{t}</NeonBadge>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Segmentation Tiers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-xl border border-[rgba(0,212,255,0.15)] p-6"
          >
            <h3 className="font-mono text-slate-100 text-sm font-semibold mb-5 flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-sm bg-[#00d4ff]" />
              Customer Segmentation Tiers
            </h3>
            <div className="flex flex-col gap-3">
              {POST_LOAN_SEGMENTS.map((seg) => (
                <div
                  key={seg.label}
                  className="flex items-start gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]"
                >
                  <div
                    className="mt-0.5 w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: seg.color, boxShadow: `0 0 6px ${seg.color}` }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <span className="font-mono text-xs text-slate-200 font-semibold">{seg.label}</span>
                      <span className="font-mono text-xs text-slate-500">{seg.range}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{seg.action}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SQL snippet */}
            <div className="mt-5 code-surface rounded-lg p-4 text-xs">
              <div className="text-slate-500 mb-2">-- Segmentation query (simplified)</div>
              <div className="text-[#a78bfa]">SELECT</div>
              <div className="pl-4 text-slate-300">
                loan_id, customer_id,<br />
                overdue_days,
              </div>
              <div className="pl-4 text-[#00d4ff]">CASE</div>
              <div className="pl-8 text-slate-300">WHEN overdue_days = 0 THEN <span className="text-[#10b981]">&apos;current&apos;</span></div>
              <div className="pl-8 text-slate-300">WHEN overdue_days &lt;= 30 THEN <span className="text-[#f59e0b]">&apos;watch&apos;</span></div>
              <div className="pl-8 text-slate-300">WHEN overdue_days &lt;= 90 THEN <span className="text-[#f97316]">&apos;sub_standard&apos;</span></div>
              <div className="pl-8 text-slate-300">ELSE <span className="text-[#ef4444]">&apos;doubtful&apos;</span></div>
              <div className="pl-4 text-[#00d4ff]">END AS segment</div>
              <div className="text-[#a78bfa]">FROM</div>
              <div className="pl-4 text-slate-300">loan_accounts</div>
              <div className="text-[#a78bfa]">WHERE</div>
              <div className="pl-4 text-slate-300">is_active = true;</div>
            </div>
          </motion.div>

          {/* DB Schema + Stats */}
          <div className="flex flex-col gap-6">
            {/* Schema */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl border border-[rgba(124,58,237,0.2)] p-6"
            >
              <h3 className="font-mono text-slate-100 text-sm font-semibold mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-sm bg-[#a78bfa]" />
                Schema: post_loan_actions
              </h3>
              <div className="code-surface rounded-lg overflow-hidden">
                <table className="w-full text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[rgba(255,255,255,0.06)]">
                      <th className="text-left px-3 py-2 text-slate-500 font-normal">column</th>
                      <th className="text-left px-3 py-2 text-slate-500 font-normal">type</th>
                      <th className="text-left px-3 py-2 text-slate-500 font-normal">key</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SCHEMA_FIELDS.map((f) => (
                      <tr key={f.name} className="border-b border-[rgba(255,255,255,0.03)] hover:bg-[rgba(0,212,255,0.03)] transition-colors">
                        <td className="px-3 py-1.5 text-[#00d4ff]">{f.name}</td>
                        <td className="px-3 py-1.5 text-[#a78bfa]">{f.type}</td>
                        <td className="px-3 py-1.5 text-[#10b981] text-[10px]">{f.key}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Pipeline stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { label: "Delivery Rate", value: "99.2%", color: "#10b981" },
                { label: "Avg. Latency", value: "1.7 s", color: "#00d4ff" },
                { label: "Segments", value: "5", color: "#a78bfa" },
                { label: "DLQ Retries", value: "3×", color: "#f59e0b" },
              ].map(({ label, value, color }) => (
                <div
                  key={label}
                  className="glass-card rounded-lg p-4 border border-[rgba(255,255,255,0.06)] text-center"
                >
                  <div
                    className="font-mono text-2xl font-bold"
                    style={{ color, textShadow: `0 0 10px ${color}60` }}
                  >
                    {value}
                  </div>
                  <div className="text-slate-500 text-xs mt-1 font-mono uppercase tracking-wide">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
