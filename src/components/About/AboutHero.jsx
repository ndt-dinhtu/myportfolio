import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone, Calendar, User, Code } from "lucide-react";
import avatar from "../../assets/avatar.jpg";

// Component số nhảy từ 0
const Counter = ({ from = 0, to, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const animation = animate(count, to, { duration: duration });
    return rounded.onChange((v) => setDisplayValue(v));
  }, [count, to, duration, rounded]);

  return <span>{displayValue}</span>;
};

const AboutHero = () => {
  const { t } = useTranslation();

  const info = [
    { icon: <User size={18} />, label: t("about.name_label"), value: "Nguyễn Đình Tú" },
    { icon: <Calendar size={18} />, label: t("about.dob_label"), value: "06/07/2003" },
    { icon: <Mail size={18} />, label: t("about.email_label"), value: "ndt.2903@gmail.com" },
    { icon: <Phone size={18} />, label: t("about.phone_label"), value: "0376330060" },
    { icon: <MapPin size={18} />, label: t("about.location_label"), value: "Hồ Chí Minh, VN" },
    { icon: <Code size={18} />, label: t("about.exp_label"), value: "1+ Years" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* CỘT TRÁI: ẢNH & QUICK INFO */}
        <motion.div
          className="lg:col-span-5 space-y-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative group w-fit mx-auto lg:mx-0">
            {/* Glow effect đằng sau ảnh */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-violet-600/30 to-cyan-500/30 rounded-[3rem] blur-3xl group-hover:opacity-60 transition-opacity"></div>

            <img
              src={avatar}
              alt="Dinh Tu"
              className="relative rounded-[2.5rem] w-full max-w-sm aspect-[4/5] object-cover shadow-2xl border-4 border-white/10 dark:border-slate-800"
            />

            {/* Badge nổi - Trạng thái làm việc */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 dark:border-slate-800 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div>
                  <p className="text-sm font-black text-slate-900 dark:text-white leading-none mb-1">
                    {t("about.work")}
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-tighter">
                    {t("about.fulltime")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Grid thông tin cá nhân */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {info.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 shadow-sm"
              >
                <div className="text-violet-600 bg-violet-100 dark:bg-violet-900/30 p-2.5 rounded-xl">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">{item.label}</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CỘT PHẢI: TIỂU SỬ & STATS */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]">
              {t("about.hero_title")}
            </h3>
            
            <div className="relative">
               <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-violet-600 to-cyan-500 rounded-full"></div>
               <p className="pl-8 text-xl text-slate-600 dark:text-slate-400 italic leading-relaxed">
                "{t("about.bio_1")}"
               </p>
            </div>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {t("about.bio_2")}
            </p>
          </div>

          {/* Stats Bar với hiệu ứng số nhảy */}
          <div className="pt-10 grid grid-cols-3 gap-4 md:gap-8 border-t border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-black text-violet-600 dark:text-violet-500">
                <Counter to={20} />+
              </p>
              <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">
                {t("about.stats.projects")}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                <Counter to={15} />+
              </p>
              <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">
                {t("about.stats.clients")}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">
                24/7
              </p>
              <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">
                {t("about.stats.support")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;