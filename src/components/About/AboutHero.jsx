import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone, Calendar, User, Code } from "lucide-react";
import avatar from "../../assets/avatar.jpg";


const AboutHero = () => {
  const { t } = useTranslation();

  const info = [
    {
      icon: <User size={18} />,
      label: t("about.name_label", "Họ tên"),
      value: "Nguyễn Văn Tú",
    },
    {
      icon: <Calendar size={18} />,
      label: t("about.dob_label", "Ngày sinh"),
      value: "01/01/2000",
    },
    {
      icon: <Mail size={18} />,
      label: t("about.email_label", "Email"),
      value: "tu.dev@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      label: t("about.phone_label", "Điện thoại"),
      value: "0987.xxx.xxx",
    },
    {
      icon: <MapPin size={18} />,
      label: t("about.location_label", "Địa chỉ"),
      value: "Hà Nội, Việt Nam",
    },
    {
      icon: <Code size={18} />,
      label: t("about.exp_label", "Kinh nghiệm"),
      value: "2+ Years",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* CỘT TRÁI: ẢNH & QUICK INFO */}
        <motion.div
          className="lg:col-span-5 space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative group w-fit mx-auto lg:mx-0">
            {/* Background trang trí */}
            <div className="absolute -inset-4 bg-linear-to-tr from-violet-600 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>

            <img
              src={avatar}
              alt="About me"
              className="relative rounded-3xl w-full max-w-sm aspect-[4/5] object-cover shadow-2xl transition-all duration-500"
            />

            {/* Badge nổi */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
              <p className="text-sm font-bold text-violet-600">
                Available for Work
              </p>
              <p className="text-xs text-slate-500">Freelance / Full-time</p>
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {info.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
              >
                <div className="text-violet-600 bg-violet-100 dark:bg-violet-900/30 p-2 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CỘT PHẢI: TIỂU SỬ & QUOTE */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-violet-600 uppercase tracking-[0.2em]">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              {t(
                "about.hero_title",
                "Xây dựng giải pháp từ tâm hồn của một lập trình viên.",
              )}
            </h3>
          </div>

          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-violet-600 pl-6">
            <p>
              {t(
                "about.bio_1",
                "Tôi là một Full-stack Developer với niềm đam mê xây dựng các ứng dụng web tối ưu. Tôi bắt đầu hành trình từ những dòng code HTML đầu tiên và giờ đây tôi làm chủ hệ sinh thái MERN.",
              )}
            </p>
          </div>

          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            <p>
              {t(
                "about.bio_2",
                "Với tôi, lập trình không chỉ là gõ code, mà là nghệ thuật giải quyết vấn đề. Tôi luôn chú trọng vào hiệu suất hệ thống và trải nghiệm người dùng cuối cùng.",
              )}
            </p>
          </div>

          {/* Một vài con số nổi bật khác (nếu muốn) */}
          <div className="pt-8 grid grid-cols-3 gap-8 border-t border-slate-100 dark:border-slate-800">
            <div>
              <p className="text-3xl font-black text-slate-900 dark:text-white">
                20+
              </p>
              <p className="text-sm text-slate-500">Dự án hoàn thành</p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900 dark:text-white">
                15+
              </p>
              <p className="text-sm text-slate-500">Khách hàng quốc tế</p>
            </div>
            <div>
              <p className="text-3xl font-black text-slate-900 dark:text-white">
                24/7
              </p>
              <p className="text-sm text-slate-500">Hỗ trợ tận tâm</p>
            </div>
          </div>
        </motion.div>
      
      </div>
    </section>
  );
};

export default AboutHero;
