import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
import emailjs from "@emailjs/browser";
import ContactItem from "./ContactItem";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_rjz4lu9",
        "template_303r8n7",
        formRef.current,
        "x5tkSbx5x80geIogS",
      )
      .then(
        () => {
          setLoading(false);
          setIsSent(true);
          formRef.current.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        () => {
          setLoading(false);
          alert("Có lỗi xảy ra, vui lòng thử lại sau!");
        },
      );
  };

  const contactDetails = [
    {
      icon: <Mail className="text-blue-500" />,
      label: "Email",
      value: "ndt.290303060703@gmail.com",
      link: "mailto:ndt.290303060703@gmail.com",
    },
    {
      icon: <Phone className="text-green-500" />,
      label: t("contact.phone", "Điện thoại"),
      value: "+84 376330060",
      link: "tel:+84376330060",
    },
    {
      icon: <MapPin className="text-red-500" />,
      label: t("contact.address", "Địa chỉ"),
      value: "HCM, Việt Nam",
      link: "https://maps.google.com",
    },
  ];

  const socialLinks = [<GiThunderBlade />, <LiaLinkedin />, <FaFacebook />];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          {t("contact.title", "Liên Hệ Với Tôi")}
        </h2>
        <div className="h-1.5 w-20 bg-violet-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* CỘT TRÁI: THÔNG TIN */}
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
            {t("contact.desc", "Tôi luôn sẵn sàng thảo luận...")}
          </p>

          <div className="space-y-4">
            {contactDetails.map((item, index) => (
              <ContactItem key={index} item={item} />
            ))}
          </div>

          <div className="pt-8">
            <p className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest italic">
              Follow me
            </p>
            <div className="flex gap-4">
              {socialLinks.map((icon, i) => (
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

        {/* CỘT PHẢI: FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <ContactForm
            formRef={formRef}
            sendEmail={sendEmail}
            loading={loading}
            isSent={isSent}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
