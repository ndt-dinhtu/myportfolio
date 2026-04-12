import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Counter = ({ value, title }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const incrementTime = Math.max(duration / value, 10);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 transition-colors"
    >
      <div className="text-5xl font-extrabold text-violet-600">{count}+</div>
      <div className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400 uppercase tracking-widest">
        {title}
      </div>
    </div>
  );
};

const Stats = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Counter value={100} title={t("projects_done")} />
        <Counter value={10} title={t("years_exp")} />
        <Counter value={50} title={t("happy_clients", "Khách hàng hài lòng")} />
        <Counter value={25} title={t("tech_stack", "Công nghệ sử dụng")} />
      </div>
    </motion.section>
  );
};

export default Stats;
