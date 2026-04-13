import { Send, CheckCircle, Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactForm = ({ formRef, sendEmail, loading, isSent }) => {
  const { t } = useTranslation();

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="p-8 md:p-10 rounded-3xl bg-linear-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-100 dark:border-slate-800 shadow-xl space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">
            {t("contact.form_name", "Họ tên")}
          </label>
          <input
            name="user_name"
            type="text"
            required
            placeholder="Your name"
            className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email</label>
          <input
            name="user_email"
            type="email"
            required
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
          name="message"
          rows="5"
          required
          placeholder="How can I help you?"
          className="w-full px-5 py-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all dark:text-white"
        ></textarea>
      </div>

      <input type="hidden" name="date" value={new Date().toLocaleString()} />

      <button
        type="submit"
        disabled={loading || isSent}
        className={`w-full md:w-fit px-10 py-4 font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 group active:scale-95 cursor-pointer ${
          isSent ? "bg-emerald-500 text-white" : "bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/30"
        }`}
      >
        {loading ? (
          <><span>Đang gửi...</span><Loader2 size={18} className="animate-spin" /></>
        ) : isSent ? (
          <><span>Đã gửi thành công!</span><CheckCircle size={18} /></>
        ) : (
          <>
            <span>{t("contact.send", "Gửi tin nhắn")}</span>
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;