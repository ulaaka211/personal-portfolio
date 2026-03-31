// Portfolio Data — Advanced Engineering Portfolio
// Saikhanbayar | Fintech/NBFI @ Invescore

export const PERSONAL = {
  name: "Saikhanbayar",
  title: "Systems & Performance Engineer",
  subtitle: "Frontend Architecture · Backend Pipelines · Fintech/NBFI",
  company: "Invescore",
  email: "saikhanbayar@example.com",
  github: "https://github.com/ulaaka211",
  linkedin: "https://linkedin.com/in/saikhanbayar",
  tagline: "Building modular UIs and robust data pipelines in the credit-risk domain.",
} as const;

export const METRICS = [
  { label: "Years Experience", value: "2+", unit: "yrs", color: "cyan" },
  { label: "React Components Refactored", value: "80+", unit: "components", color: "purple" },
  { label: "Lines per File (Target)", value: "<150", unit: "LOC", color: "green" },
  { label: "DB Query Optimisation", value: "~60%", unit: "faster", color: "amber" },
] as const;

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

export const POST_LOAN_SEGMENTS = [
  { label: "Current", range: "0 days overdue", color: "#10b981", action: "Renewal offer SMS" },
  { label: "Watch", range: "1–30 days overdue", color: "#f59e0b", action: "Reminder call + SMS" },
  { label: "Sub-Standard", range: "31–90 days", color: "#f97316", action: "Collection team alert" },
  { label: "Doubtful", range: "91–180 days", color: "#ef4444", action: "Legal hold notification" },
  { label: "Loss", range: "180+ days", color: "#7c3aed", action: "Write-off pipeline" },
] as const;

export const REFACTOR_EXAMPLE = {
  legacy: `// ❌ Legacy — MonolithicLoanPage.jsx (847 lines)
import React, { useState, useEffect } from 'react';

export default function LoanPage({ customerId }) {
  const [loans, setLoans] = useState([]);
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);
  // ... 30 more state declarations

  useEffect(() => {
    // 120 lines of data fetching mixed with UI logic
    fetch(\`/api/customers/\${customerId}\`)
      .then(r => r.json())
      .then(data => {
        setCustomer(data);
        fetch(\`/api/loans?customerId=\${customerId}\`)
          .then(r => r.json())
          .then(loans => {
            setLoans(loans);
            setLoading(false);
          });
      });
  }, [customerId]);

  const handleApprove = (loanId) => {
    // 80 lines of inline business logic + UI update
  };

  return (
    // 400+ lines of deeply nested JSX
    <div>
      {/* Customer header, loan table, modals, forms all in one */}
    </div>
  );
}`,
  refactored: `// ✅ Refactored — Modular Architecture (<150 LOC each)

// hooks/useLoanData.ts (45 lines)
export function useLoanData(customerId: string) {
  return useQuery({
    queryKey: ['loans', customerId],
    queryFn: () => loanApi.getByCustomer(customerId),
  });
}

// hooks/useCustomer.ts (38 lines)
export function useCustomer(customerId: string) {
  return useQuery({
    queryKey: ['customer', customerId],
    queryFn: () => customerApi.getById(customerId),
  });
}

// components/LoanTable/LoanRow.tsx (62 lines)
export const LoanRow: FC<LoanRowProps> = ({ loan, onApprove }) => (
  <tr className="border-b border-slate-700">
    <td className="font-mono text-neon-cyan">{loan.id}</td>
    <td>{formatCurrency(loan.amount)}</td>
    <td><StatusBadge status={loan.status} /></td>
    <td><ApproveButton loanId={loan.id} onApprove={onApprove} /></td>
  </tr>
);

// pages/loans/[customerId]/page.tsx (48 lines)
export default function LoanPage({ params }: PageProps) {
  const { data: customer } = useCustomer(params.customerId);
  const { data: loans }    = useLoanData(params.customerId);
  return (
    <CustomerLayout customer={customer}>
      <LoanTable loans={loans} />
    </CustomerLayout>
  );
}`,
} as const;

export const ARCH_NODES = [
  { id: "trigger", label: "Cron Trigger", sublabel: "Daily 02:00 UTC", x: 10, y: 42, color: "#f59e0b" },
  { id: "segment", label: "Segmentation Engine", sublabel: "PostgreSQL Query", x: 32, y: 42, color: "#00d4ff" },
  { id: "queue", label: "Message Queue", sublabel: "Priority-weighted", x: 54, y: 42, color: "#7c3aed" },
  { id: "sms", label: "SMS Gateway", sublabel: "Provider API", x: 76, y: 20, color: "#10b981" },
  { id: "call", label: "Call Centre API", sublabel: "Escalation", x: 76, y: 42, color: "#10b981" },
  { id: "dlq", label: "Dead Letter Queue", sublabel: "Retry / Alert", x: 76, y: 64, color: "#ef4444" },
  { id: "db", label: "Audit Log DB", sublabel: "PostgreSQL", x: 54, y: 70, color: "#00d4ff" },
] as const;

export const RUST_TOPICS = [
  { topic: "Ownership & Borrowing", progress: 80, status: "In Progress" },
  { topic: "Lifetimes", progress: 55, status: "In Progress" },
  { topic: "Traits & Generics", progress: 70, status: "In Progress" },
  { topic: "Async / Tokio", progress: 30, status: "Started" },
  { topic: "Systems Programming", progress: 20, status: "Planned" },
  { topic: "WebAssembly (WASM)", progress: 10, status: "Planned" },
] as const;

export const SKILLS = {
  frontend: ["Next.js 14", "React 18", "TypeScript", "Zustand", "React Query", "Tailwind CSS", "Framer Motion", "Storybook"],
  backend: ["Node.js", "PostgreSQL", "REST APIs", "ACID Transactions", "Query Optimisation", "Cron Pipelines", "Redis"],
  tools: ["Git", "Docker", "Vercel", "ESLint", "Jest", "Cypress", "Prometheus"],
} as const;
