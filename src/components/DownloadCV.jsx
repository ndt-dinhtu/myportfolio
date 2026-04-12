import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import cvUrl from "../assets/cv.pdf"
const DownloadCV = () => {
  const { t } = useTranslation();


  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-linear-to-br from-violet-600 to-indigo-700 p-8 md:p-12 text-white shadow-2xl"
      >
        {/* Họa tiết trang trí nền */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium">
              <FileText size={16} />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black">
              {t("cv.title", "Bạn muốn tìm hiểu kỹ hơn về tôi?")}
            </h2>
            <p className="text-indigo-100 max-w-xl text-lg">
              {t("cv.desc", "Tải xuống bản CV đầy đủ để xem chi tiết về quá trình làm việc, các dự án và kỹ năng chuyên môn của tôi.")}
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-indigo-100">
                <CheckCircle size={16} className="text-emerald-400" />
                <span>PDF Format</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-100">
                <CheckCircle size={16} className="text-emerald-400" />
                <span>Updated 2024</span>
              </div>
            </div>
          </div>

          <motion.a
            href={cvUrl}
            download="NguyenVanTu_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-3 px-8 py-4 bg-white text-violet-700 font-bold rounded-2xl shadow-xl hover:bg-indigo-50 transition-colors shrink-0"
          >
            <Download size={20} className="group-hover:bounce transition-transform" />
            <span>{t("cv.button", "Tải CV Ngay")}</span>
            
            {/* Hiệu ứng viền sáng khi hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/0 group-hover:border-white/50 transition-all scale-105"></div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadCV;