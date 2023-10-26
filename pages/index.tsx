import About from '@/components/About';
import Contact from '@/components/Contact';
import LandingPage from '@/components/LandingPage';
import Navbar from '@/components/Navbar/Navbar';



export default function Home() {
  return (
    <div>
    <Navbar />
    <LandingPage />
    <About />
    <Contact />
    </div>
  )
}
