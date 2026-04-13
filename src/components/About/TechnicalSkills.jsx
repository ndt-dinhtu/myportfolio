import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Layout, Server, Settings2, Globe, Cpu, Sparkles } from "lucide-react";
import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";
import {
  SiAntdesign,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiLinux,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiSpring,
  SiSpringboot,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const TechnicalSkills = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("frontend");

  const skillData = {
    frontend: {
      title: "Frontend",
      subtitle: "UI/UX & Responsiveness",
      icon: <Layout className="w-8 h-8" />,
      color: "from-sky-500 to-blue-600",
      bgLight: "bg-sky-50/50 dark:bg-sky-950/20",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "CSS3", icon: <FaCss3 className="text-[#1572B6]" /> },
        { name: "SCSS", icon: <BsFiletypeScss className="text-[#CC6699]" /> },
        { name: "ReactJS", icon: <FaReact className="text-[#61DAFB]" /> },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-[#3178C6]" />,
        },
        {
          name: "Tailwind",
          icon: <RiTailwindCssFill className="text-[#06B6D4]" />,
        },
        {
          name: "Ant Design",
          icon: <SiAntdesign className="text-[#FF4D4F]" />,
        },
        { name: "MUI", icon: <SiMui className="text-[#007FFF]" /> },
        { name: "Framer", icon: <SiFramer className="text-pink-500" /> },
      ],
    },
    backend: {
      title: "Backend",
      subtitle: "API, Database & Logic",
      icon: <Server className="w-8 h-8" />,
      color: "from-emerald-500 to-green-600",
      bgLight: "bg-emerald-50/50 dark:bg-emerald-950/20",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
        {
          name: "Express",
          icon: <SiExpress className="text-slate-700 dark:text-slate-300" />,
        },
        { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
        { name: "Spring", icon: <SiSpring className="text-[#6DB33F]" /> },
        { name: "Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-[#4169E1]" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
      ],
    },
    tools: {
      title: "Tools & Others",
      subtitle: "Workflow & Deployment",
      icon: <Settings2 className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50/50 dark:bg-amber-950/20",
      skills: [
        { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
        {
          name: "GitHub",
          icon: <SiGithub className="text-slate-800 dark:text-slate-200" />,
        },
        { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        {
          name: "Vercel",
          icon: <SiVercel className="text-black dark:text-white" />,
        },
        { name: "Linux", icon: <SiLinux className="text-[#FCC624]" /> },
      ],
    },
  };

  // Biến thể animation
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const itemVars = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-24 transition-colors">
      {/* Tiêu đề & Giới thiệu */}
      <div className="flex flex-col items-center text-center mb-16 space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 font-bold text-sm"
        ></motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
          {t("about.mastering")}{" "}
          <span className="text-violet-600">{t("about.digital")} </span>
        </h2>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {t(
            "skills.desc",
            "Tôi thành thạo cả frontend và backend, sử dụng các công cụ hiện đại để xây dựng giải pháp toàn diện. Dưới đây là bộ kỹ năng kỹ thuật của tôi, được tổ chức thành ba lĩnh vực chính:",
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
        {Object.keys(skillData).map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setActiveTab(tab)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3, scale: 1.02 }}
            viewport={{ once: true }}
            className={`group relative p-4 rounded-2xl transition-all duration-300 overflow-hidden border ${
              activeTab === tab
                ? `bg-gradient-to-br ${skillData[tab].color} text-white shadow-lg border-transparent`
                : `bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-slate-100 dark:border-slate-800 hover:border-violet-300 dark:hover:border-violet-700`
            }`}
          >
            {/* Hiệu ứng gradient mờ */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${skillData[tab].color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${activeTab === tab ? "opacity-100" : ""}`}
            />

            <div className="relative z-10 flex items-center gap-4">
              {/* Icon nhỏ lại */}
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  activeTab === tab
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-violet-600"
                }`}
              >
                <div className="scale-75">{skillData[tab].icon}</div>
              </div>

              <div className="text-left">
                <h3 className="text-lg font-bold capitalize leading-none">
                  {skillData[tab].title}
                </h3>
                <p
                  className={`text-[10px] mt-1 uppercase tracking-wider font-medium ${
                    activeTab === tab ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {skillData[tab].subtitle.split(" & ")[0]}{" "}
                </p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Skills Content - Bento Thẻ Kĩ năng */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVars}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`relative p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 ${skillData[activeTab].bgLight}`}
        >
          <div
            className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 bg-gradient-to-br ${skillData[activeTab].color}`}
          />

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skillData[activeTab].skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVars}
                whileHover={{ y: -5, rotate: [0, -1, 1, 0], scale: 1.05 }}
                className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl border border-slate-100/50 dark:border-slate-800/50 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="font-semibold text-center text-slate-800 dark:text-slate-200 text-sm tracking-tight">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default TechnicalSkills;
