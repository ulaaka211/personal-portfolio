"use client";

import { useState, type FC } from "react";
import { BarsIcon } from "@/components/icons/BarsIcon";
import { useScroll } from "@/hooks/use-scroll";
import { BurgerMenu } from "@/components/layout/BurgerMenu";

export const NAV_ITEMS = ["Home", "About", "Works", "Contact"] as const;

export const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(0);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const baseClasses =
    "h-full w-full flex items-center justify-between py-2 md:py-4 md:px-10 pl-4 pr-2 sticky top-0 left-0 z-10";
  const scrolledClasses = scrolled
    ? "bg-[rgba(10,14,26,0.92)] backdrop-blur-md border-b border-[rgba(0,212,255,0.1)]"
    : "bg-transparent relative";

  return (
    <header className={`${baseClasses} ${scrolledClasses}`}>
      <div
        className="flex items-center cursor-pointer"
        onClick={() => scrollTo("Home")}
      >
        <h1
          className="md:text-[28px] text-[24px] font-bold font-mono text-[#00d4ff]"
          style={{ textShadow: "0 0 10px rgba(0,212,255,0.5)" }}
        >
          &#60;S&#47;&#62;
        </h1>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex items-center gap-6 text-sm font-mono text-slate-400">
          {NAV_ITEMS.map((item) => (
            <li
              key={item}
              onClick={() => scrollTo(item)}
              className="cursor-pointer hover:text-[#00d4ff] transition-colors tracking-wide"
            >
              {item}
            </li>
          ))}
        </ul>
        <a
          download
          href="/cv.pdf"
          className="px-4 py-1.5 rounded border border-[rgba(0,212,255,0.4)] text-[#00d4ff] font-mono text-sm hover:bg-[rgba(0,212,255,0.1)] transition-colors"
        >
          Download CV
        </a>
      </div>

      {/* Mobile nav */}
      <div className="flex md:hidden p-1.5 items-center gap-2">
        <a
          download
          href="/cv.pdf"
          className="px-3 py-1 rounded border border-[rgba(0,212,255,0.4)] text-[#00d4ff] font-mono text-xs hover:bg-[rgba(0,212,255,0.1)] transition-colors"
        >
          CV
        </a>
        <button onClick={() => setOpen((p) => !p)} aria-label="Toggle menu">
          <BarsIcon />
        </button>
      </div>

      {open && <BurgerMenu onClose={() => setOpen(false)} />}
    </header>
  );
};
