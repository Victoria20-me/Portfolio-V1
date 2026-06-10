import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <SectionWrapper>
        <Projects />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <TechStack />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
<Footer/>
    </main>
  );
}
