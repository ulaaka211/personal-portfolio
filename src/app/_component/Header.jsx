"use client";

import { useState } from "react";
import { useScroll } from "../hooks/UseScroll";
import { ThemeSwitch } from "./ThemeSwitch";

export const navbar = ["Home", "About", "Works", "Contact"];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("Home")}
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            &lt;S /&gt;
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navbar.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
            <ThemeSwitch />
            <a
              download
              href="/cv.pdf"
              className="px-4 py-2 text-sm font-semibold rounded-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              Resume
            </a>
          </nav>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeSwitch />
            <button
              onClick={() => setOpen((p) => !p)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-lg flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navbar.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className="text-3xl font-bold text-white hover:text-indigo-400 transition-colors"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <a
          download
          href="/cv.pdf"
          className="px-6 py-3 rounded-lg border border-indigo-500 text-indigo-400 font-semibold hover:bg-indigo-500 hover:text-white transition-all"
        >
          Resume
        </a>
      </div>
    </>
  );
};
