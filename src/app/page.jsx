import { AboutMe } from "./_component/AboutMe";
import { Introduction } from "./_component/Introduction";
import { Skills } from "./_component/Skills";
import { Works } from "./_component/Works";
import { Contact } from "./_component/Contact";
import { Header } from "./_component/Header";
import { Footer } from "./_component/Footer";

export default function Home() {
  return (
    <main className="bg-white dark:bg-dark overflow-x-hidden">
      <Header />
      <Introduction />
      <AboutMe />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
