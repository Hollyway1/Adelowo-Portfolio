import React from "react";
import { Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center bg-white dark:bg-[#050505] text-gray-900 dark:text-white px-6 md:px-20 overflow-hidden transition-colors duration-300"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-cyan-400/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        {/* BADGE */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-2xl shadow-sm hover:scale-105 transition"
        >
          <Sparkles size={18} className="text-cyan-600 dark:text-cyan-400" />
          <span className="text-sm md:text-base text-gray-800 dark:text-gray-300 font-semibold tracking-wide">
            Available for Opportunities
          </span>
        </motion.div>

        {/* SMALL INTRO */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.08}
          className="mt-8 text-sm md:text-base uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400 font-semibold"
        >
          Frontend Engineer
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.15}
          className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-5xl mx-auto"
        >
          Building polished digital experiences that feel fast, modern, and
          intuitive.
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.22}
          className="mt-7 text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          I design and build scalable frontend products using React, Next.js,
          React Native Expo, Node.js, and modern cloud technologies —
          transforming ideas into responsive, high-performance digital products.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.3}
          className="mt-12 flex justify-center gap-5 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-base md:text-lg hover:scale-105 transition shadow-lg shadow-cyan-500/20"
          >
            View My Work
          </a>

          <a
            href="https://wa.me/2347034917189"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-2xl hover:scale-105 transition flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-200 text-base md:text-lg"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.4}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
        >
          {[
            "Frontend Development",
            "Responsive UI",
            "Design-to-Code",
            "Performance Optimization",
          ].map((item) => (
            <div
              key={item}
              className="px-4 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-xl text-sm md:text-base font-medium text-gray-800 dark:text-gray-300 hover:-translate-y-1 transition"
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* FOOTNOTE */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          custom={0.56}
          className="mt-14 text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Open to freelance projects, startup collaborations, and frontend
          engineering roles.
        </motion.p>
      </div>
    </section>
  );
};

export default Home;