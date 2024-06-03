import { AboutMe } from "./_component/AboutMe";
import { Introduction } from "./_component/Introduction";
import { Works } from "./_component/Works";
import { Contact } from "./_component/Contact";
import { Header } from "./_component/Header";
import { Footer } from "./_component/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Introduction />
      <AboutMe />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
