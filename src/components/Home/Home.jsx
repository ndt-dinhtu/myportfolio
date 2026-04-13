import TechStack from "./TechStack";
import Stats from "./Stats";
import Hero from "./Hero";
import SoftSkills from "./SoftSkills";
import DownloadCV from "../DownloadCV";

const Home = () => {
  return (
    <div className="space-y-8 pb-20">
      <Hero />
      <Stats />
      <TechStack />
      <SoftSkills />
    </div>
  );
};

export default Home;
