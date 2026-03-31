"use client";

import { useState, useEffect, type FC } from "react";

interface TerminalTextProps {
  lines: string[];
  typingSpeed?: number;
  className?: string;
}

export const TerminalText: FC<TerminalTextProps> = ({
  lines,
  typingSpeed = 35,
  className = "",
}) => {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[currentLine] = (next[currentLine] ?? "") + line[currentChar];
          return next;
        });
        setCurrentChar((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, lines, typingSpeed]);

  return (
    <div className={`code-surface rounded-lg p-4 text-sm ${className}`}>
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
        <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
        <span className="w-3 h-3 rounded-full bg-[#10b981]" />
        <span className="ml-2 text-slate-500 text-xs font-mono">terminal</span>
      </div>
      <div className="font-mono space-y-1 min-h-[120px] overflow-x-auto">
        {displayed.map((line, i) => (
          <div key={i} className="text-slate-300 text-xs leading-relaxed">
            <span className="text-[#00d4ff] select-none">$ </span>
            {line}
            {i === currentLine && currentLine < lines.length && (
              <span className="terminal-cursor" />
            )}
          </div>
        ))}
        {currentLine >= lines.length && displayed.length > 0 && (
          <div className="text-xs font-mono">
            <span className="text-[#00d4ff] select-none">$ </span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
};
