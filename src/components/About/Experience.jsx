import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const { t } = useTranslation();

  const timeline = [
    {
      year: "2023 - Present",
      title: "Senior Full-stack Developer",
      company: "Freelance",
      icon: <Briefcase />,
    },
    {
      year: "2021 - 2023",
      title: "Web Developer",
      company: "Tech Agency",
      icon: <Briefcase />,
    },
    {
      year: "2017 - 2021",
      title: "Software Engineering",
      company: "University of Technology",
      icon: <GraduationCap />,
    }
  ];

  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-20 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">
          {t("about.journey", "Hành trình của tôi")}
        </h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6 p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
            >
              <div className="w-12 h-12 bg-violet-600 text-white rounded-xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="text-sm font-bold text-violet-600 uppercase">{item.year}</span>
                <h3 className="text-xl font-bold dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;