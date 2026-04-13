import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import cvUrl from "../assets/cv.pdf";

const DownloadCV = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-600 to-indigo-700  dark:from-slate-900/80
         dark:to-slate-900/40 dark:backdrop-blur-2xl p-8 md:p-14 text-white shadow-2xl border border-white/10 dark:border-slate-800"
      >
        {/* Họa tiết trang trí nền - Ở Dark Mode dùng màu dịu hơn */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-80 h-80 bg-white/10 dark:bg-violet-500/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-80 h-80 bg-indigo-400/20 dark:bg-blue-500/10 rounded-full blur-[80px]"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 dark:bg-slate-800/50 backdrop-blur-md text-sm font-bold tracking-wide">
              <FileText size={16} className="text-violet-200" />
              <span className="uppercase">
                {t("cv.badge", "Curriculum Vitae")}
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black leading-tight">
              {t("cv.title", "Bạn muốn tìm hiểu kỹ hơn về tôi?")}
            </h2>

            <p className="text-indigo-100 dark:text-slate-400 max-w-xl text-lg md:text-xl font-medium">
              {t(
                "cv.desc",
                "Tải xuống bản CV đầy đủ để xem chi tiết về quá trình làm việc và kỹ năng chuyên môn.",
              )}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-50 dark:text-slate-300">
                <CheckCircle
                  size={18}
                  className="text-emerald-400 dark:text-emerald-500"
                />
                <span>{t("cv.format", "PDF Format")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-indigo-50 dark:text-slate-300">
                <CheckCircle
                  size={18}
                  className="text-emerald-400 dark:text-emerald-500"
                />
                <span>{t("cv.updated", "Updated 2026")}</span>
              </div>
            </div>
          </div>

          <motion.a
            href={cvUrl}
            download="NguyenVanTu_CV.pdf"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-4 px-10 py-5 bg-white dark:bg-violet-600 text-violet-700
             dark:text-white font-black text-lg rounded-2xl shadow-2xl  hover:bg-indigo-50 dark:hover:bg-violet-500 
             transition-all shrink-0"
          >
            <Download
              size={22}
              className="group-hover:animate-bounce transition-transform"
            />
            <span>{t("cv.button", "Tải CV Ngay")}</span>

            <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/50 dark:group-hover:border-violet-400/50 transition-all scale-105"></div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadCV;
