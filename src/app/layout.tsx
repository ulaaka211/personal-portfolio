import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Saikhanbayar — Systems & Performance Engineer",
  description:
    "Advanced Engineering Portfolio: 2 years building modular Next.js interfaces and ACID-compliant PostgreSQL pipelines at Invescore (Fintech/NBFI).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0e1a] font-sans">
        <ThemeProvider>
          {children}
          <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
