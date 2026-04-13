import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import anh7 from "../../assets/anh7.png";
import anh8 from "../../assets/anh8.png";
import anh9 from "../../assets/anh9.jpg";
import anh10 from "../../assets/anh10.jpg";

const Testimonials = () => {
  const testimonial = [
    {
      image: anh7,
      content:
        "I strive to learn from the past, but I look toward the future by focusing on the present",
      name: "Donald Trump",
    },
    {
      image: anh8,
      content: "To succeed, we must first believe that we can",
      name: "Nikos Kazantzakis",
    },
    {
      image: anh9,
      content:
        "Don't wait until tomorrow to do what you can today, because if you enjoy today, you can do it again tomorrow",
      name: "James A. Michener",
    },
    {
      image: anh10,
      content:
        "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
      name: "Colin Powell",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className=" px-4 flex justify-center items-center overflow-hidden">
      <div className="max-w-4xl w-full text-center">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-slate-900 to-violet-600 dark:from-white dark:to-violet-400 bg-clip-text text-transparent">
            Testi<span className="dark:text-amber-50">monials </span>
          </h2>
          <div className="h-1.5 w-20 bg-violet-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          {/* Content Card - Glassmorphism */}
          <div className="relative min-h-62.5 md:min-h-50 flex flex-col justify-center p-8 md:p-12 rounded-[2.5rem] bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-white/20 dark:border-slate-800 shadow-2xl mb-10 transition-all">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3 className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 italic leading-relaxed">
                  ❝ {testimonial[activeTab].content} ❞
                </h3>
                <p className="mt-6 text-violet-600 dark:text-violet-400 font-black uppercase tracking-[0.2em] text-sm">
                  — {testimonial[activeTab].name} —
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Avatar Tabs Headers */}
          <div className="flex justify-center items-center gap-4 md:gap-8">
            {testimonial.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className="relative group focus:outline-none"
              >
                <div
                  className={`relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-4 transition-all duration-500 ease-out
                                    ${
                                      activeTab === index
                                        ? "border-violet-600 scale-110 shadow-lg shadow-violet-500/40 grayscale-0"
                                        : "border-transparent grayscale opacity-40 hover:opacity-70 group-hover:scale-105"
                                    }`}
                >
                  <img
                    src={tab.image}
                    alt={tab.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Indicator line for active tab */}
                {activeTab === index && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-violet-600 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
