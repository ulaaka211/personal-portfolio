const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Technologies" },
];

export const AboutMe = () => {
  return (
    <section
      id="About"
      className="relative w-full py-24 bg-[#0d0d0d] overflow-hidden"
    >
      {/* Accent blur */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </div>

        <div className="flex flex-col lg:flex-row gap-14 items-center">
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/coding.png"
                alt="Coding"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl border-2 border-indigo-500/40" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-indigo-500/10 border border-indigo-500/30" />
          </div>

          {/* Text + stats */}
          <div className="flex flex-col gap-8 flex-1">
            <p className="text-gray-400 text-lg leading-relaxed">
              I&apos;m a passionate{" "}
              <span className="text-white font-semibold">
                Full-Stack Developer
              </span>{" "}
              with a focus on the{" "}
              <span className="text-indigo-400 font-semibold">MERN stack</span>.
              I design and build dynamic, user-friendly web applications that
              are both seamless and scalable. I thrive on continuous learning
              and applying cutting-edge technologies to solve real-world
              problems efficiently.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new frameworks,
              contributing to open-source, and sharpening my skills in both
              front-end aesthetics and back-end architecture.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <span className="text-3xl font-extrabold gradient-text">
                    {value}
                  </span>
                  <span className="text-xs text-gray-400 text-center">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <a
              download
              href="/cv.pdf"
              className="inline-flex items-center gap-2 self-start px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-semibold hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
