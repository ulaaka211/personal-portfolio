export const PERSONAL = {
  name: "Saikhanbayar",
  title: "Software Engineer",
  subtitle: "Frontend Architecture · Backend Pipelines · Fintech/NBFI",
  company: "Invescore NBFI",
  email: "uulaaka73@gmail.com",
  github: "https://github.com/ulaaka211",
  linkedin: "https://linkedin.com/in/saikhanbayar",
  tagline:
    "Building modular UIs and robust data pipelines in the credit-risk domain.",
} as const;

export const METRICS = [
  { label: "Years Experience", value: "2+", unit: "yrs", color: "cyan" },
  {
    label: "React Components Refactored",
    value: "80+",
    unit: "components",
    color: "purple",
  },
  {
    label: "Lines per File (Target)",
    value: "<150",
    unit: "LOC",
    color: "green",
  },
  {
    label: "DB Query Optimisation",
    value: "~60%",
    unit: "faster",
    color: "amber",
  },
] as const;

export const SKILLS = {
  frontend: [
    "Next.js 14",
    "React 18",
    "TypeScript",
    "Zustand",
    "React Query",
    "Tailwind CSS",
    "Framer Motion",
    "Storybook",
  ],
  backend: [
    "Node.js",
    "PostgreSQL",
    "REST APIs",
    "ACID Transactions",
    "Query Optimisation",
    "Cron Pipelines",
    "Redis",
  ],
  tools: ["Git", "Docker", "Vercel", "ESLint", "Jest", "Cypress", "Prometheus"],
} as const;

export const RUST_TOPICS = [
  { topic: "Ownership & Borrowing", progress: 80, status: "In Progress" },
  { topic: "Lifetimes", progress: 55, status: "In Progress" },
  { topic: "Traits & Generics", progress: 70, status: "In Progress" },
  { topic: "Async / Tokio", progress: 30, status: "Started" },
  { topic: "Systems Programming", progress: 20, status: "Planned" },
  { topic: "WebAssembly (WASM)", progress: 10, status: "Planned" },
] as const;
