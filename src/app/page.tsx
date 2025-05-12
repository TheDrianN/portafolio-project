import Image from "next/image";
import About from "../components/About";
import Projects from "../components/projects";
import Contact from "../components/Contatc";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="px-20 lg:px-50">
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
