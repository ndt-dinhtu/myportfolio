import { ArrowUpCircle, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
const { t } = useTranslation()
  return (
    <footer className="relative mt-20 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
              DINH<span className="text-violet-600">TU.</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} {t("footer.description")}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ndt-dinhtu"
              title="https://github.com/ndt-dinhtu"
              rel="noreferrer"
              target="_blank"
              className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://github.com/ndt-dinhtu"
              title="https://github.com/ndt-dinhtu"
              rel="noreferrer"
              target="_blank"
              className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:ndt.290303060703@gmail.com"
              title="ndt.2903030060703@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.facebook.com/tuminh.vuong.50"
              title="https://www.facebook.com/tuminh.vuong.50"
              rel="noreferrer"
              target="_blank"
              className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 rounded-2xl hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-sm"
            >
              <FaFacebook size={20} />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-violet-600 transition-colors font-bold text-sm uppercase tracking-widest"
          >
            {t("footer.back")}
            <ArrowUpCircle
              size={24}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>

        {/* Bottom Bar - Local Info */}
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800/50 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Available for hire
          </div>
          <div>Ho Chi Minh City, Vietnam</div>
          <div>Full-stack Web Developer</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
