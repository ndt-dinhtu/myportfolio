import React, { useRef, useState, useTransition } from "react";
import ContactForm from "../Contact/ContactForm";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef();
  const { t } = useTranslation();

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

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 overflow-hidden">
      <div className="text-center mb-16 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white"
        >
          {t("title_main", "Liên Hệ")}{" "}
          <span className="text-violet-600">
            {t("title_accent", "Với Tôi")}
          </span>
        </motion.h2>

        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto uppercase tracking-widest text-xs font-bold">
          {t("subtitle", "Sẵn sàng cho những ý tưởng đột phá")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
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

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 h-full"
        >
          <div className="relative h-full min-h-100 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8430389840123!2d106.67652237597706!3d10.823321289328332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528fd2bd58b37%3A0x5135a22e008ec14f!2zOTA0IE5ndXnhu4VuIEtp4buHbSwgUGjGsOG7nW5nIDMsIEjhuqFuaCBUaMO0bmcsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1776101339585!5m2!1sen!2s"
              className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] dark:invert-[0.9] dark:hue-rotate-180"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Địa chỉ của Tú"
            />

            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 dark:ring-white/5 rounded-[2.5rem]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
