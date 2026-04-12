import TechStack from "./Home/TechStack";
import Stats from "./Home/Stats";
import Hero from "./Home/Hero";
import SoftSkills from "./Home/SoftSkills";
import DownloadCV from "./DownloadCV";

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
