"use client";

import Image from "next/image";

const projects = [
  {
    title: "Food Delivery Web Application",
    description:
      "The easy-to-use food delivery platform for restaurant owners. Add your menu, manage orders, and keep your customers satisfied with just a few clicks.",
    image: "/fooddeliver.png",
    tech: ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "MUI", "JWT", "Cloudinary"],
    link: "https://food-delivery-ulaaka.vercel.app/",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "E-Commerce Web Application",
    description:
      "Discover a curated selection of trendy fashion, stylish accessories, gadgets, and home goods. Fast shipping, secure payments, reliable customer service.",
    image: "/ecommerce.png",
    tech: ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "MUI", "Cloudinary"],
    link: "https://ecommerce-mo.vercel.app/",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "MetaBlog — API Blog Platform",
    description:
      "A modern blogging platform powered by a custom REST API. Browse, create, and manage blog posts with a clean and responsive interface.",
    image: "/metablog.png",
    tech: ["JavaScript", "React", "Next.js", "Node.js", "Tailwind CSS"],
    link: "https://metablog-mo.vercel.app/",
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
];

export const Works = () => {
  return (
    <section
      id="Works"
      className="relative w-full py-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Accent blobs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col items-center mb-16">
          <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3">
            What I&apos;ve built
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-card group flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8`}
            >
              {/* Image */}
              <div
                className="relative w-full lg:w-[55%] aspect-video overflow-hidden rounded-xl cursor-pointer flex-shrink-0"
                onClick={() => window.open(project.link)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity z-10`} />
                <Image
                  src={project.image}
                  fill
                  alt={project.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Link icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 flex-1 text-center lg:text-left">
                <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase">
                  Featured Project
                </span>
                <h3
                  className="text-2xl font-bold text-white cursor-pointer hover:text-indigo-400 transition-colors"
                  onClick={() => window.open(project.link)}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => window.open(project.link)}
                  className="mt-2 self-center lg:self-start inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-white transition-colors"
                >
                  View Live
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
