import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Star,
  GitFork,
  Code2,
} from "lucide-react";
import useGithubProjects from "../../stores/useGithubProjects";
import { GiThunderBlade } from "react-icons/gi";
// Import hook của mày


const Projects = () => {
  const [filter, setFilter] = useState("all");
  // Gọi hook - Thay username của mày vào đây
  const { projects, loading } = useGithubProjects("ndt-dinhtu");

  // Logic lọc theo ngôn ngữ chính
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) =>
          p.tech.some((t) => t.toLowerCase() === filter.toLowerCase()),
        );

  if (loading)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center dark:bg-slate-950">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="w-10 h-10 border-4 border-violet-600 border-t-transparent rounded-full"
        />
        <p className="mt-4 text-slate-500 font-bold animate-pulse uppercase tracking-widest text-xs">
          Fetching Repositories...
        </p>
      </div>
    );

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Title Section */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-block p-2 px-4 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 text-xs font-black mb-4"
        >
          MY WORK
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6">
          Featured <span className="text-violet-600">Projects</span>
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {["all", "JavaScript", "TypeScript", "Reactjs", "Java"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-2xl text-xs font-black uppercase tracking-tighter transition-all ${
              filter === cat
                ? "bg-violet-600 text-white shadow-xl shadow-violet-500/40"
                : "bg-white dark:bg-slate-900 text-slate-500 border border-slate-100 dark:border-slate-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Projects */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x400?text=Development";
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-white text-xs font-bold">
                      <Star
                        size={14}
                        className="text-amber-400"
                        fill="currentColor"
                      />{" "}
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1 text-white text-xs font-bold">
                      <GitFork size={14} className="text-blue-400" />{" "}
                      {project.forks}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white capitalize leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 hover:text-violet-600 transition-colors"
                    >
                      <GiThunderBlade size={20} />
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        className="p-2 bg-violet-600 text-white rounded-xl hover:bg-black transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.desc ||
                    "No description provided for this repository."}
                </p>

                {/* Tech Badges */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1 px-3 py-1 bg-slate-50 dark:bg-slate-800/50 text-slate-400 text-[10px] font-black uppercase rounded-lg border border-slate-100 dark:border-slate-800"
                    >
                      <Code2 size={10} /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
