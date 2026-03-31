import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./provider/ThemeProvider";

export const metadata = {
  title: "Saikhanbayar | Full-Stack Developer",
  description:
    "Saikhanbayar — Full-Stack Developer specializing in the MERN stack. Building modern, scalable web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
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
