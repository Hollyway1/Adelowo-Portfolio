import React from "react";
import { Sparkles, MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center bg-white dark:bg-[#050505] text-gray-900 dark:text-white px-6 md:px-20 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto w-full text-center relative z-10">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-2xl shadow-sm hover:scale-105 transition">
          <Sparkles size={18} className="text-cyan-600 dark:text-cyan-400" />
          <span className="text-sm md:text-base text-gray-800 dark:text-gray-300 font-semibold tracking-wide">
            Available for Opportunities
          </span>
        </div>

        {/* ROLE */}
        <p className="mt-8 text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white max-w-3xl mx-auto font-bold leading-tight">
          Frontend Developer • UI Engineer • Creative Builder
        </p>

        {/* DESCRIPTION */}
        <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
          I design and build fast, responsive, and scalable web & mobile applications using React,
          React Native Expo, Node.js, and modern cloud technologies. Let's create something impactful together.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-12 flex justify-center gap-5 flex-wrap">

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

        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">

          {[
            ["2+", "Years Experience"],
            ["10+", "Projects Delivered"],
            ["10+", "Happy Clients"],
            ["15+", "Technologies"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="p-6 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-white/5 backdrop-blur-2xl shadow-sm hover:scale-105 hover:shadow-xl transition"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-cyan-600 dark:text-cyan-400">
                {num}
              </h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 mt-2 font-semibold">
                {label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Home;