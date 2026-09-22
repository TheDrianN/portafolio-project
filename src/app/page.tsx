import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}
