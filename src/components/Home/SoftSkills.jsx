import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Clock,
  HardHat,
  GraduationCap,
  Users,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

const SoftSkills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      icon: <Clock className="text-blue-500" />,
      title: t("skills.time_mgmt", "Quản lý thời gian"),
      desc: t(
        "skills.time_mgmt_desc",
        "Tối ưu hóa quy trình làm việc để đạt hiệu suất cao nhất.",
      ),
    },
    {
      icon: <HardHat className="text-orange-500" />,
      title: t("skills.hard_working", "Cần cù & Trách nhiệm"),
      desc: t(
        "skills.hard_working_desc",
        "Luôn tận tâm và hoàn thành công việc đúng thời hạn đề ra.",
      ),
    },
    {
      icon: <GraduationCap className="text-green-500" />,
      title: t("skills.eager_learn", "Ham học hỏi"),
      desc: t(
        "skills.eager_learn_desc",
        "Liên tục cập nhật các công nghệ mới và cải thiện tư duy lập trình.",
      ),
    },
    {
      icon: <Users className="text-purple-500" />,
      title: t("skills.teamwork", "Làm việc nhóm"),
      desc: t(
        "skills.teamwork_desc",
        "Giao tiếp hiệu quả và hỗ trợ đồng đội trong mọi dự án.",
      ),
    },
    {
      icon: <Lightbulb className="text-yellow-500" />,
      title: t("skills.problem_solving", "Giải quyết vấn đề"),
      desc: t(
        "skills.problem_solving_desc",
        "Phân tích và tìm ra giải pháp tối ưu cho các bài toán khó.",
      ),
    },
    {
      icon: <ShieldCheck className="text-red-500" />,
      title: t("skills.reliability", "Sự tin cậy"),
      desc: t(
        "skills.reliability_desc",
        "Luôn giữ vững cam kết về chất lượng và bảo mật sản phẩm.",
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          {t("skills.title", "Kĩ Năng Mềm")}
        </h2>
        <div className="h-1.5 w-20 bg-violet-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>{" "}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              {skill.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
