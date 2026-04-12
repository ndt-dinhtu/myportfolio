import AboutHero from "./AboutHero";
import Experience from "./Experience";
//import TechStack from "../Home/TechStack";
import SoftSkills from "../Home/SoftSkills";
import TechnicalSkills from "./TechnicalSkills";
import DownloadCV from "../DownloadCV";
const About = () => {
  return (
    <div className="pb-20">
      <AboutHero />
      <DownloadCV />
      <Experience />
      <TechnicalSkills />
      <SoftSkills />
    </div>
  );
};

export default About;
