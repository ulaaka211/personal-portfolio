"use client";

import type { FC } from "react";

type MetricColor = "cyan" | "purple" | "green" | "amber";

interface MetricCardProps {
  label: string;
  value: string;
  unit?: string;
  color?: MetricColor;
}

const colorMap: Record<MetricColor, { text: string; border: string; glow: string }> = {
  cyan:   { text: "text-[#00d4ff]", border: "border-[rgba(0,212,255,0.3)]",   glow: "shadow-[0_0_12px_rgba(0,212,255,0.2)]" },
  purple: { text: "text-[#a78bfa]", border: "border-[rgba(124,58,237,0.3)]",  glow: "shadow-[0_0_12px_rgba(124,58,237,0.2)]" },
  green:  { text: "text-[#34d399]", border: "border-[rgba(16,185,129,0.3)]",  glow: "shadow-[0_0_12px_rgba(16,185,129,0.2)]" },
  amber:  { text: "text-[#fbbf24]", border: "border-[rgba(245,158,11,0.3)]",  glow: "shadow-[0_0_12px_rgba(245,158,11,0.2)]" },
};

export const MetricCard: FC<MetricCardProps> = ({ label, value, unit, color = "cyan" }) => {
  const c = colorMap[color];
  return (
    <div className={`glass-card rounded-lg p-4 border ${c.border} ${c.glow} flex flex-col gap-1`}>
      <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">{label}</span>
      <div className="flex items-baseline gap-1.5">
        <span className={`font-mono text-2xl font-bold ${c.text}`}>{value}</span>
        {unit && <span className="text-slate-500 font-mono text-xs">{unit}</span>}
      </div>
    </div>
  );
};
