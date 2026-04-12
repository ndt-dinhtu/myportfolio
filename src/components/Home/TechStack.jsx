import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiFramer,
  SiAntdesign,
  SiMui,
  SiSpringboot,
  SiSpring,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
const techs = [
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  {
    name: "Express.js",
    icon: <SiExpress className="text-slate-800 dark:text-slate-200" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Ant Design", icon: <SiAntdesign className="text-red-500" /> },
  { name: "MUI", icon: <SiMui className="text-blue-500" /> },
  { name: "Java", icon: <FaJava className="text-orange-600" /> },
  { name: "Spring", icon: <SiSpring className="text-green-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "Javascript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Typescript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
];
const TechStack = () => {
  return (
    <div className="relative py-10 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-white dark:before:from-slate-950 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-white dark:after:from-slate-950 after:to-transparent">
      <div className="py-10 overflow-hidden bg-white dark:bg-slate-950/50">
        <div className="flex whitespace-nowrap">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {[...techs, ...techs].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-2xl font-bold text-slate-600 dark:text-slate-400"
              >
                <span className="text-4xl">{tech.icon}</span>
                <span className="uppercase tracking-widest">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
