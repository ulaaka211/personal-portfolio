import type { FC } from "react";

export const Footer: FC = () => (
  <footer className="w-full flex items-center justify-center px-8 py-6 bg-carbon-950 border-t border-[rgba(0,212,255,0.08)]">
    <p className="font-mono text-xs text-slate-600 text-center">
      © 2024 Saikhanbayar — Systems &amp; Performance Engineer
      <span className="ml-2 text-[#00d4ff]">{"</>"}</span>
    </p>
  </footer>
);
