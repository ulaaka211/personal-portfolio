"use client";

import type { FC, ReactNode } from "react";

type BadgeColor = "cyan" | "purple" | "green" | "amber" | "red";

interface NeonBadgeProps {
  children: ReactNode;
  color?: BadgeColor;
  className?: string;
}

const colorMap: Record<BadgeColor, string> = {
  cyan: "border-[rgba(0,212,255,0.4)] text-[#00d4ff] bg-[rgba(0,212,255,0.08)]",
  purple: "border-[rgba(124,58,237,0.4)] text-[#a78bfa] bg-[rgba(124,58,237,0.08)]",
  green: "border-[rgba(16,185,129,0.4)] text-[#34d399] bg-[rgba(16,185,129,0.08)]",
  amber: "border-[rgba(245,158,11,0.4)] text-[#fbbf24] bg-[rgba(245,158,11,0.08)]",
  red: "border-[rgba(239,68,68,0.4)] text-[#f87171] bg-[rgba(239,68,68,0.08)]",
};

export const NeonBadge: FC<NeonBadgeProps> = ({ children, color = "cyan", className = "" }) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded border font-mono text-xs ${colorMap[color]} ${className}`}
  >
    {children}
  </span>
);
