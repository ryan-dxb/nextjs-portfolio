import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Ryan Portfolio</title>
      </Head>

      {/* Header */}
      <Header />
      {/* End Header */}

      {/* Hero */}
      <section id="hero" className="snap-start scroll-smooth">
        <Hero />
      </section>
      {/* End Hero */}

      {/* About */}
      <section id="about" className="snap-center scroll-smooth">
        <About />
      </section>
      {/* End About */}

      {/* Experience */}
      <section id="experience" className="snap-center scroll-smooth">
        <WorkExperience />
      </section>
      {/* End Experience */}

      {/* Skills */}
      <section id="skills" className="snap-center scroll-smooth">
        <Skills />
      </section>
      {/* End Skills */}

      {/* Projects */}
      <section id="projects" className="snap-center scroll-smooth">
        <Projects />
      </section>
      {/* End Projects */}

      {/* Contact */}
      <section id="contact" className="snap-center scroll-smooth">
        <Contact />
      </section>
      {/* End Contact */}
    </div>
  );
}
