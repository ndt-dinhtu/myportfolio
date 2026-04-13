import { motion } from "framer-motion";

const ContactItem = ({ item }) => (
  <a
    href={item.link}
    target={
      item.label === "Email" || item.label === "Điện thoại" ? "_self" : "_blank"
    }
    rel="noreferrer"
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
);

export default ContactItem;
