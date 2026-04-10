import { useState } from "react";
import { Sun, Moon, Bell, Menu, X, UserCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/project" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 shadow-sm border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div
            onClick={() => navigate("/")}
            className="text-2xl font-black text-violet-600 cursor-pointer"
          >
            S
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

        <div className="flex items-center gap-4">
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

          <button className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
            <Bell size={20} strokeWidth={1.5} />
          </button>

          <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center text-violet-600 cursor-pointer">
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

      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 pb-4">
          <div className="space-y-1 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
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
