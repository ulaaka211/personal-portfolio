import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./provider/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saikhanbyar",
  description: "Saikhanbayar Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
