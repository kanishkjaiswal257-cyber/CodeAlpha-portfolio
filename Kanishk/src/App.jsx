import Kanishk from "./Kanishk.jsx";
import kanishk from "./assets/Kanishk5.jpg";
import resume from "./assets/Kanishk-Resume.jpg";
import About from "./About.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import ProjectCard from "./Projects.jsx";
import Recognition from "./Recognition.jsx";
import Contact from "./Contact.jsx";
import End from "./End.jsx"

function App() {
  return (
    <>
      <Kanishk
        name="Kanishk Jaiswal"
        duggu={kanishk}
        resume={resume}
      />
      <About />
      <Education />
      <Experience />
      <Skills />
      <ProjectCard />
      <Recognition />
      <Contact />
      <End />
    </>
  );
}

export default App;