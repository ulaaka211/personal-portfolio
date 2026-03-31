"use client";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML5", icon: "/icon-html.png" },
        { name: "CSS3", icon: "/icon-css.png" },
        { name: "JavaScript", icon: "/icon-javascript.png" },
        { name: "TypeScript", icon: "/icon-typescript.svg" },
        { name: "React", icon: "/icon-react.svg" },
        { name: "Next.js", icon: "/icon-nextjs.svg" },
        { name: "Tailwind", icon: "/icon-tailwindcss.svg" },
        { name: "Material UI", icon: "/icon-materialui.png" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", icon: "/icon-nodejs.svg" },
        { name: "Express", icon: "/icon-express.svg" },
        { name: "MongoDB", icon: "/icon-mongodb.svg" },
        { name: "GraphQL", icon: "/icon-graphql.png" },
      ],
    },
    {
      title: "Tools & Testing",
      icon: "🛠️",
      skills: [
        { name: "Git", icon: "/icon-git.svg" },
        { name: "Jest", icon: "/icon-jest.jpeg" },
        { name: "Cypress", icon: "/icon-cypress.svg" },
      ],
    },
  ];

  return (
    <section
      id="Skills"
      className="w-full py-24 md:py-32 bg-white dark:bg-dark relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="section-tag">Skills</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white text-center">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl text-center">
            Technologies I work with to build modern, performant web
            applications.
          </p>
        </div>

        {/* Skill categories */}
        <div className="flex flex-col gap-10">
          {skillCategories.map((category, i) => (
            <div key={i} className="flex flex-col gap-5">
              {/* Category header */}
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="skill-tag flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-default"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              Always learning new technologies
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Passionate about staying up-to-date with the latest trends in web
              development.
            </p>
          </div>
          <button
            onClick={() => {
              document
                .getElementById("Contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-gradient px-8 py-3.5 rounded-xl text-base font-semibold text-white whitespace-nowrap flex-shrink-0"
          >
            <span>Let&apos;s Work Together</span>
          </button>
        </div>
      </div>
    </section>
  );
};
