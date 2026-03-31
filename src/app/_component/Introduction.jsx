"use client";

import { useEffect, useState } from "react";
import { GithubIcon } from "../assets/GithubIcon";
import { LinkedInIcon } from "../assets/LinkedInIcon";

const titles = [
  "Full-Stack Developer",
  "MERN Stack Engineer",
  "React Specialist",
  "Node.js Developer",
];

export const Introduction = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark hero-bg pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex justify-center lg:justify-start">
            <span className="section-tag">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
          </div>

          {/* Name */}
          <div>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">
              Hi there, I&apos;m
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight">
              Saikhan
              <span className="gradient-text">bayar</span>
            </h1>
          </div>

          {/* Animated title */}
          <div className="flex items-center gap-2 justify-center lg:justify-start min-h-[2rem]">
            <span className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300">
              {displayed}
              <span className="cursor-blink text-primary">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Passionate about building modern, scalable web applications with
            clean code and exceptional user experiences. Specializing in the
            MERN stack.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
            <button
              onClick={() => scrollTo("Works")}
              className="btn-gradient px-8 py-3.5 rounded-xl text-base font-semibold text-white"
            >
              <span>View My Work</span>
            </button>
            <button
              onClick={() => scrollTo("Contact")}
              className="px-8 py-3.5 rounded-xl text-base font-semibold text-gray-800 dark:text-white border-2 border-primary/40 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mt-2">
            <span className="text-sm text-gray-400">Find me on:</span>
            <div className="flex gap-3">
              <div className="p-2 rounded-xl bg-gray-100 dark:bg-dark-card hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 border border-transparent hover:border-primary/30 cursor-pointer">
                <GithubIcon />
              </div>
              <div className="p-2 rounded-xl bg-gray-100 dark:bg-dark-card hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 border border-transparent hover:border-primary/30 cursor-pointer">
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow opacity-70 blur-sm scale-105" />
            {/* Image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark shadow-2xl">
              <img
                src="/me.png"
                alt="Saikhanbayar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-4 -left-8 glass-card dark:glass-card bg-white dark:bg-dark-card px-4 py-3 rounded-2xl shadow-xl border border-primary/20 dark:border-dark-border">
              <p className="text-2xl font-black gradient-text">3+</p>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Years Exp.
              </p>
            </div>
            <div className="absolute -top-4 -right-8 glass-card dark:glass-card bg-white dark:bg-dark-card px-4 py-3 rounded-2xl shadow-xl border border-primary/20 dark:border-dark-border">
              <p className="text-2xl font-black gradient-text">10+</p>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-gray-400 dark:text-gray-500">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};
