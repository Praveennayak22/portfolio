import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechTicker from "@/components/TechTicker";
import LiveAiSimulator from "@/components/LiveAiSimulator";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import HowIWork from "@/components/HowIWork";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechTicker />
        <LiveAiSimulator />
        <Experience />
        <Projects />
        <Services />
        <HowIWork />
        <About />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
