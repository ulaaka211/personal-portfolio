import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./provider/ThemeProvider";

export const metadata = {
  title: "Saikhanbayar — Full-Stack Developer",
  description: "Personal portfolio of Saikhanbayar, a passionate MERN stack full-stack developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={true}
            theme="dark"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
