import { AboutMe } from "./_component/AboutMe";
import { Introduction } from "./_component/Introduction";
import { Works } from "./_component/Works";
import { Header } from "./_component/Header";
import { Contact } from "./_component/Contact";
import { Footer } from "./_component/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#090a0b]">
      <Header />
      <Introduction />
      <AboutMe />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}
