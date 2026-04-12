import { useState, useEffect, useRef } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  UserCircle,
  ChevronDown,
  Languages,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.project"), href: "/project" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = async (lng) => {
    try {
      await i18n.changeLanguage(lng);
      setIsLangOpen(false);
    } catch (error) {
      console.error("Lỗi chuyển đổi ngôn ngữ:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 shadow-sm border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-black text-violet-600 cursor-pointer flex items-center"
          >
            <span>Port</span>
            <span className="text-slate-900 dark:text-white">folio</span>
          </div>

          <div className="hidden md:flex items-center gap-1 h-16">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `flex items-center h-full px-4 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? "text-violet-600 border-violet-600"
                      : "text-slate-600 dark:text-slate-300 border-transparent hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {/* --- DROPDOWN NGÔN NGỮ --- */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-all text-sm font-medium"
            >
              <Languages size={20} strokeWidth={1.5} />
              <span className="uppercase">{i18n.language?.split("-")[0]}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Menu nội dung Dropdown */}
            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl border border-slate-100 bg-white p-1 shadow-xl dark:border-slate-800 dark:bg-slate-900 ring-1 ring-black/5">
                <button
                  onClick={() => changeLanguage("vi")}
                  className={`flex w-full items-center px-3 py-2 text-sm rounded-lg transition-colors ${i18n.language === "vi" ? "bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                >
                  Tiếng Việt
                </button>
                <button
                  onClick={() => changeLanguage("en")}
                  className={`flex w-full items-center px-3 py-2 text-sm rounded-lg transition-colors ${i18n.language === "en" ? "bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* NÚT TOGGLE THEME */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            {isDark ? (
              <Sun className="text-yellow-400" size={20} strokeWidth={1.5} />
            ) : (
              <Moon size={20} strokeWidth={1.5} />
            )}
          </button>

          <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center text-violet-600 cursor-pointer overflow-hidden">
            <UserCircle size={28} />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 pb-4">
          <div className="space-y-1 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block pl-4 pr-3 py-2 text-base font-medium border-l-4 transition-colors ${
                    isActive
                      ? "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 border-violet-600"
                      : "text-slate-600 dark:text-slate-300 border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
