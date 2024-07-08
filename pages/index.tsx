import About from "@/components/about";
import Contact from "@/components/contact";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <LandingPage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
