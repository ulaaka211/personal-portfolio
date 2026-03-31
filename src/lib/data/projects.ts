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
