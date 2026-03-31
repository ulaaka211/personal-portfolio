import Hero from "@/components/sections/Hero";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import ProjectSpotlight from "@/components/sections/ProjectSpotlight";
import RefactoringCaseStudy from "@/components/sections/RefactoringCaseStudy";
import ArchitectureVisualizer from "@/components/sections/ArchitectureVisualizer";
import RustProgress from "@/components/sections/RustProgress";
import { Contact } from "./_component/Contact";
import { Header } from "./_component/Header";
import { Footer } from "./_component/Footer";

export default function Home() {
  return (
    <main className="bg-carbon-900 min-h-screen">
      <Header />
      <Hero />
      <ExperienceTimeline />
      <ProjectSpotlight />
      <ArchitectureVisualizer />
      <RefactoringCaseStudy />
      <RustProgress />
      <Contact />
      <Footer />
    </main>
  );
}
