"use client";

export const AboutMe = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "100%", label: "Commitment" },
  ];

  return (
    <section
      id="About"
      className="w-full py-24 md:py-32 bg-gray-50 dark:bg-dark-card relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="section-tag">About Me</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white text-center">
            Who{" "}
            <span className="gradient-text">Am I?</span>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image */}
          <div className="lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/coding.png"
                  alt="coding"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 md:w-80 md:h-80 rounded-3xl border-2 border-primary/30 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-3/5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center lg:text-left">
                Full-Stack Developer & Problem Solver
              </h3>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed text-center lg:text-left">
                I&apos;m a passionate Full-Stack Developer specializing in the
                MERN stack. I craft clean, efficient, and scalable web
                applications that deliver exceptional user experiences.
              </p>
              <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed text-center lg:text-left">
                With a strong foundation in both frontend and backend
                development, I bridge the gap between design and functionality
                — turning ideas into polished digital products. I thrive on
                solving complex problems and constantly learning new
                technologies.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1 p-4 rounded-2xl bg-white dark:bg-dark border border-gray-100 dark:border-dark-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <span className="text-2xl md:text-3xl font-black gradient-text">
                    {stat.number}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <a
                download
                href="/cv.pdf"
                className="btn-gradient px-8 py-3.5 rounded-xl text-base font-semibold text-white inline-flex items-center gap-2"
              >
                <span>Download Resume</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};
