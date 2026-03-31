"use client";

export const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-50 dark:bg-dark-card border-t border-gray-100 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black gradient-text">S</span>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              aikhanbayar
            </span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Full-Stack Developer · MERN Stack
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6">
          {["Home", "About", "Skills", "Works", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {item === "Works" ? "Projects" : item}
            </button>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-400 dark:text-gray-500 text-center">
          © {new Date().getFullYear()} Saikhanbayar. All rights reserved.
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
    </footer>
  );
};
