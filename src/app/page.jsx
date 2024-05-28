import { AboutMe } from "./_component/AboutMe";
import { Introduction } from "./_component/Introduction";
import { Works } from "./_component/Works";
import { Header } from "./_component/Header";
import { Footer } from "./_component/footer";
import { Contact } from "./_component/Contact";

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