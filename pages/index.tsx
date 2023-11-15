import About from '@/components/About';
import Contact from '@/components/Contact';
import LandingPage from '@/components/LandingPage';
import Navbar from '@/components/Navbar/Navbar';
import Projects from '@/components/Projects';



export default function Home() {
  return (
    <div>
    <Navbar />
    <LandingPage />
    <About />
    <Contact />
    <Projects />
    </div>
  )
}
