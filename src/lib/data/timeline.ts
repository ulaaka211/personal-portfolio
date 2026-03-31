export const FRONTEND_TIMELINE = [
  {
    quarter: "Q1–Q2 2023",
    title: "Component Library Bootstrap",
    description:
      "Designed and built the internal UI component library with strict TypeScript prop interfaces. Established design tokens, Storybook documentation, and snapshot testing.",
    tags: ["Next.js 13", "TypeScript", "Storybook", "Jest"],
    metric: "42 components shipped",
  },
  {
    quarter: "Q3 2023",
    title: "State Management Overhaul",
    description:
      "Migrated global state from prop-drilling to Zustand stores sliced by domain (auth, loan, customer). Reduced re-renders by 40% using selective subscriptions.",
    tags: ["Zustand", "React Query", "Memoization"],
    metric: "40% fewer re-renders",
  },
  {
    quarter: "Q4 2023",
    title: "Performance Engineering",
    description:
      "Achieved Lighthouse score ≥ 95 on core pages. Implemented dynamic imports, image optimisation with next/image, and route-based code splitting.",
    tags: ["Core Web Vitals", "Code Splitting", "next/image"],
    metric: "Lighthouse 95+",
  },
  {
    quarter: "Q1 2024",
    title: "Modular Refactoring Initiative",
    description:
      "Broke down monolithic page components (500–800 LOC) into atomic, single-responsibility modules. Enforced <150 LOC per file via ESLint rule.",
    tags: ["Refactoring", "SOLID", "ESLint"],
    metric: "<150 LOC per file",
  },
] as const;

export const BACKEND_TIMELINE = [
  {
    quarter: "Q1–Q2 2023",
    title: "PostgreSQL Schema Design",
    description:
      "Designed normalised schema for loan origination lifecycle. Implemented ACID-compliant transaction boundaries for loan disbursement and repayment posting.",
    tags: ["PostgreSQL", "ACID", "Schema Design"],
    metric: "3NF normalised schema",
  },
  {
    quarter: "Q3 2023",
    title: "Query Optimisation",
    description:
      "Analysed slow-query logs, added composite indexes on high-cardinality join columns. Used EXPLAIN ANALYSE to reduce critical report query time from 4.2 s → 1.7 s.",
    tags: ["EXPLAIN ANALYSE", "Indexes", "Partitioning"],
    metric: "4.2 s → 1.7 s",
  },
  {
    quarter: "Q4 2023",
    title: "Post Loan Pipeline v1",
    description:
      "Engineered the initial automated messaging trigger system — cron-based customer segmentation with configurable overdue-day thresholds.",
    tags: ["Node.js", "Cron", "Segmentation"],
    metric: "3 customer segments",
  },
  {
    quarter: "Q1 2024",
    title: "Post Loan Pipeline v2 — Automation",
    description:
      "Extended pipeline with priority-weighted messaging, retry logic with exponential back-off, and a dead-letter queue for failed notifications. Added observability via structured logs.",
    tags: ["DLQ", "Retry Logic", "Observability"],
    metric: "99.2% delivery rate",
  },
] as const;
