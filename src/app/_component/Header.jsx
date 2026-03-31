"use client";

import { useState } from "react";
import { Bars } from "../assets/Bars";
import { useScroll } from "../hooks/UseScroll";
import { BurgerMenu } from "../_component/BurgerMenu";

export const navbar = ["Home", "About", "Works", "Contact"];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(0);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header
      className={
        scrolled
          ? "h-full w-full flex items-center justify-between py-2 md:py-4 md:px-10 pl-4 pr-2 bg-[rgba(10,14,26,0.92)] backdrop-blur-md sticky top-0 left-0 z-10 border-b border-[rgba(0,212,255,0.1)]"
          : "h-full w-full flex items-center justify-between py-2 md:py-4 md:px-10 pl-4 pr-2 bg-transparent relative top-0 left-0 z-10"
      }
    >
      {/* Logo */}
      <div
        className="flex items-center justify-center cursor-pointer"
        onClick={() => {
          document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
        }}
      >
        <h1 className="md:text-[28px] text-[24px] font-bold flex justify-center items-center font-mono text-[#00d4ff]"
          style={{ textShadow: "0 0 10px rgba(0,212,255,0.5)" }}>
          &#60;S&#47;&#62;
        </h1>
      </div>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center justify-center gap-6">
        <ul className="flex items-center justify-center gap-6 text-sm font-mono text-slate-400">
          {navbar.map((item, index) => (
            <li
              onClick={() => {
                document.getElementById(`${item}`).scrollIntoView({ behavior: "smooth" });
              }}
              key={index}
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
        <div onClick={toggle} className="text-slate-400 cursor-pointer">
          <Bars />
        </div>
      </div>
      {open && <BurgerMenu setOpen={setOpen} toggle={toggle} />}
    </header>
  );
};

