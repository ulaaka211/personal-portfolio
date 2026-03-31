"use client";

import { useState, useEffect } from "react";
import { useScroll } from "../hooks/UseScroll";
import { ThemeSwitch } from "./ThemeSwitch";

export const navbar = [
  { label: "Home", id: "Home" },
  { label: "About", id: "About" },
  { label: "Skills", id: "Skills" },
  { label: "Projects", id: "Works" },
  { label: "Contact", id: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(20);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-dark/80 backdrop-blur-xl shadow-lg shadow-primary/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <button
          onClick={() => scrollTo("Home")}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl font-black gradient-text">S</span>
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            aikhanbayar
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navbar.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="nav-link text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitch />
          <a
            download
            href="/cv.pdf"
            className="btn-gradient px-5 py-2.5 rounded-xl text-sm font-semibold text-white inline-flex items-center gap-2"
          >
            <span>Download CV</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeSwitch />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border px-6 py-4 flex flex-col gap-4 shadow-xl">
          {navbar.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-base font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
          <a
            download
            href="/cv.pdf"
            className="mt-2 btn-gradient px-5 py-3 rounded-xl text-sm font-semibold text-white text-center"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
};
