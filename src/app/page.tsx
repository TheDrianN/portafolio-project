import Image from "next/image";
import About from "../components/About";
import Projects from "../components/projects";
import Contact from "../components/Contatc";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
