import Navbar from "./components/Navbar/Navbar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import SkillsOrbit from "./components/SkillsOrbit/SkillsOrbit";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import CursorGlow from "./components/CursorGlow/CursorGlow";
import { MessageCircle } from "lucide-react";
import GradientMesh from "./components/Background/GradientMesh";

function App() {
  return (
   <div className="relative min-h-screen overflow-x-hidden bg-white dark:bg-[#050505] text-black dark:text-white antialiased">

      {/* BACKGROUND LAYERS */}
      <GradientMesh />
      <CursorGlow />

      {/* NAV */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="relative z-10">

        {/* HERO */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6">
          <Home />
        </section>

        {/* SECTIONS WRAPPER STYLE FIX */}
        <div className="space-y-32 px-6 md:px-16 lg:px-24">

          <section id="about">
            <About />
          </section>

          <section id="experience">
            <Experience />
          </section>

          {/* SKILLS CENTERPIECE */}
          <section id="skills" className="flex justify-center items-center">
            <SkillsOrbit />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>

        </div>
      </main>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/2347034917189"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="absolute inset-0 rounded-full bg-green-400/20 blur-xl group-hover:scale-125 transition duration-300" />

        <div className="relative w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:scale-110 transition">
          <MessageCircle size={22} className="text-green-400" />
        </div>
      </a>

      <Footer />
    </div>
  );
}

export default App;