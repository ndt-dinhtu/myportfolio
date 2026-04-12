import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  const { t } = useTranslation();

  const contactDetails = [
    {
      icon: <Mail className="text-blue-500" />,
      label: "Email",
      value: "tu.dev@gmail.com",
      link: "mailto:tu.dev@gmail.com",
    },
    {
      icon: <Phone className="text-green-500" />,
      label: t("contact.phone", "Điện thoại"),
      value: "+84 987 xxx xxx",
      link: "tel:+84987xxxxxx",
    },
    {
      icon: <MapPin className="text-red-500" />,
      label: t("contact.address", "Địa chỉ"),
      value: "Hà Nội, Việt Nam",
      link: "#",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          {t("contact.title", "Liên Hệ Với Tôi")}
        </h2>
        <div className="h-1.5 w-20 bg-violet-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* CỘT TRÁI: THÔNG TIN LIÊN HỆ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {t("contact.subtitle", "Bạn có dự án trong đầu?")}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            {t(
              "contact.desc",
              "Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc các cơ hội hợp tác.",
            )}
          </p>

          <div className="space-y-4">
            {contactDetails.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-violet-500 transition-all group shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* SOCIAL LINKS */}
          <div className="pt-8">
            <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest italic">
              Follow me
            </p>
            <div className="flex gap-4">
              {[<GiThunderBlade />, <LiaLinkedin />, <FaFacebook />].map((icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-violet-600 hover:text-white transition-all cursor-pointer"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CỘT PHẢI: CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <form className="p-8 md:p-10 rounded-3xl bg-linear-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-100 dark:border-slate-800 shadow-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  {t("contact.form_name", "Họ tên")}
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
                {t("contact.form_msg", "Lời nhắn")}
              </label>
              <textarea
                rows="5"
                placeholder="How can I help you?"
                className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white"
              ></textarea>
            </div>

            <button className="w-full md:w-fit px-10 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg shadow-violet-500/30 transition-all flex items-center justify-center gap-3 group active:scale-95 cursor-pointer">
              <span>{t("contact.send", "Gửi tin nhắn")}</span>
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
