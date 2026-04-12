import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch, MessageCircleCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import avatar from "../../assets/avatar.jpg";
import cvUrl from "../../assets/cv.pdf";
import { Download } from "lucide-react";
const Hero = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const titleText = t("welcome") + " Full-stack MERN";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentText = "";
    let words = titleText.split(" ");
    let i = 0;
    setTypedText("");

    const typingInterval = setInterval(() => {
      if (i < words.length) {
        currentText += words[i] + " ";
        setTypedText(currentText);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [i18n.language, titleText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center pt-16 md:pt-24 px-4 max-w-7xl mx-auto">
      {/* Ảnh đại diện */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative order-2 md:order-1"
      >
        <div className="absolute -inset-4 bg-violet-100 dark:bg-violet-900/30 rounded-full blur-3xl opacity-70"></div>
        <motion.img
          src={avatar}
          alt="Developer"
          className="relative z-10 w-full max-w-md mx-auto aspect-square object-cover rounded-full border-8 border-white dark:border-slate-950 shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Nội dung text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6 order-1 md:order-2 text-center md:text-left"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block px-4 py-1.5 text-sm font-medium text-violet-600 bg-violet-50 dark:bg-violet-900/20 dark:text-violet-400 rounded-full"
        >
          {t("intro_short", "Chào, tôi là Tú. Một lập trình viên")}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white transition-colors"
        >
          {typedText}
          <span className="animate-pulse text-violet-600">|</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-xl mx-auto md:mx-0 text-lg text-slate-600 dark:text-slate-400"
        >
          {t(
            "intro_desc",
            "Tôi tập trung vào hiệu năng, giao diện tối giản và code sạch.",
          )}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="pt-6 flex flex-wrap items-center justify-center md:justify-start gap-4"
        >
        
          <button
            onClick={() => navigate("/project")}
            className="flex items-center gap-2 px-6 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-500/25 active:scale-95 cursor-pointer"
          >
            {t("view_project")} <ArrowRight size={18} />
          </button>

          <motion.a
            href={cvUrl}
            download="NguyenVanTu_CV.pdf"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-slate-900 text-violet-600 dark:text-violet-400 font-bold rounded-xl border-2 border-violet-600/20 hover:border-violet-600 transition-all shadow-sm cursor-pointer"
          >
            <Download size={18} />
            <span>{t("cv.button", "Tải CV")}</span>
          </motion.a>

      
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
            <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(124, 58, 237, 0.1)",
              }}
              href="#"
              className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-violet-600 transition-colors rounded-lg"
              title="GitHub"
            >
              <GitBranch size={20} />
            </motion.a>

            <div className="w-[1px] h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>

            <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(124, 58, 237, 0.1)",
              }}
              href="#"
              className="p-2.5 text-slate-600 dark:text-slate-400 hover:text-violet-600 transition-colors rounded-lg"
              title="Contact"
            >
              <MessageCircleCheck size={20} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
