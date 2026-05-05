import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import EnterMind from "./components/EnterMind"
import SkillsSection from "./components/skils"
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
<SkillsSection />
      {/* <EnterMind/> */}
            <AboutMe/>
      <Projects/>
    <Contact/>

    </main>
  );
}