"use client";

import Image from "next/image";

const projects = [
  {
    title: "Food Delivery Web Application",
    description:
      "A full-featured food delivery platform for restaurant owners. Add your menu, manage orders, and keep customers satisfied with just a few clicks.",
    image: "/fooddeliver.png",
    tags: ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "MUI"],
    link: "https://food-delivery-ulaaka.vercel.app/",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "E-commerce Web Application",
    description:
      "Discover a curated selection of trendy fashion, stylish accessories, gadgets, and home goods. Fast shipping, secure payments, reliable service.",
    image: "/ecommerce.png",
    tags: ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "Cloudinary"],
    link: "https://ecommerce-mo.vercel.app/",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "MetaBlog Platform",
    description:
      "A modern blog platform powered by an API. Clean reading experience with full content management capabilities for writers and editors.",
    image: "/metablog.png",
    tags: ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS"],
    link: "https://metablog-mo.vercel.app/",
    color: "from-purple-500/20 to-pink-500/20",
  },
];

export const Works = () => {
  return (
    <section
      id="Works"
      className="w-full py-24 md:py-32 bg-gray-50 dark:bg-dark-card relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="section-tag">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl text-center">
            A selection of projects I&apos;ve built — from concept to
            deployment.
          </p>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-12 md:gap-20">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2 w-full">
                <div
                  className={`relative rounded-2xl overflow-hidden p-1 bg-gradient-to-br ${project.color} cursor-pointer group`}
                  onClick={() => window.open(project.link)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      fill
                      alt={project.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 text-white font-semibold">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        View Live
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 w-full flex flex-col gap-5 text-center lg:text-left">
                <div>
                  <p className="text-sm font-semibold text-primary mb-2">
                    Project {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white cursor-pointer hover:text-primary dark:hover:text-primary transition-colors"
                    onClick={() => window.open(project.link)}
                  >
                    {project.title}
                  </h3>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-dark border border-gray-100 dark:border-dark-border">
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {project.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 text-xs font-semibold rounded-lg bg-primary/10 text-primary dark:text-indigo-300 border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={() => window.open(project.link)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors group"
                  >
                    View Live Project
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
