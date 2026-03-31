"use client";

import { GithubIcon } from "../assets/GithubIcon";
import { LinkedInIcon } from "../assets/LinkedInIcon";

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Node.js", "Express",
  "MongoDB", "GraphQL", "Tailwind CSS", "Material UI",
  "Cypress", "Jest", "Git",
];

export const Introduction = () => {
  return (
    <section
      id="Home"
      className="relative min-h-screen bg-[#0a0a0a] flex flex-col justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">
          {/* Text */}
          <div className="flex flex-col gap-6 lg:max-w-[55%] fade-in-up text-center lg:text-left">
            <span className="inline-block text-indigo-400 font-mono text-sm tracking-widest uppercase">
              Hello, I&apos;m
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              Saikhanbayar
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">
              Full-Stack Developer
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Passionate MERN stack developer who loves crafting clean,
              performant, and user-friendly web applications. Always eager to
              learn and build things that make a difference.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-2">
              <button
                onClick={() =>
                  document
                    .getElementById("Works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/30"
              >
                View My Work
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("Contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-7 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-5 justify-center lg:justify-start mt-1">
              <GithubIcon />
              <LinkedInIcon />
            </div>
          </div>

          {/* Avatar */}
          <div className="relative flex-shrink-0 float">
            <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0a]">
                <img
                  src="/me.png"
                  alt="Saikhanbayar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-indigo-500/20 spinner" />
          </div>
        </div>

        {/* Skills strip */}
        <div className="mt-20 fade-in-up">
          <p className="text-center text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">
            Tech Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-badge px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-indigo-500/50 hover:text-white cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-gray-400 font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
};
