import React from "react";
import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white px-6 md:px-20 py-28 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Experience
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Since 2025 — building scalable web experiences with modern frontend
              engineering practices.
            </p>
          </div>
        </Reveal>

        {/* INTRO TEXT */}
        <Reveal>
          <p className="text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed mb-20">
            I specialize in React and modern JavaScript, focusing on scalable
            architecture, reusable components, and high-performance UI systems.
            My experience spans small business platforms to complex frontend
            systems.
          </p>
        </Reveal>

        {/* EXPERIENCE TIMELINE */}
        <div className="space-y-10">
          {/* JOB 1 */}
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5" />

              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Front-End Developer
                  </h3>

                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">
                    Obatech-ark
                  </p>

                  <p className="text-sm text-gray-500 mt-1">2025 - Present</p>
                </div>

                <span className="text-xs px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 w-fit">
                  Active Role
                </span>
              </div>

              <ul className="relative mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>
                  • Implementing reusable UI components and scalable architecture
                </li>
                <li>• Participating in large-scale application development</li>
                <li>• Optimizing performance for modern web applications</li>
                <li>• Designing better user experience flows</li>
              </ul>
            </motion.div>
          </Reveal>

          {/* JOB 2 */}
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5" />

              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Web Developer
                  </h3>

                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">
                    Obatech-ark
                  </p>

                  <p className="text-sm text-gray-500 mt-1">2025 - Present</p>
                </div>

                <span className="text-xs px-4 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-white/10 w-fit">
                  Previous Role
                </span>
              </div>

              <ul className="relative mt-6 space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li>• Built responsive web applications using React</li>
                <li>• Collaborated with designers and backend engineers</li>
                <li>• Wrote clean, maintainable and reusable code</li>
                <li>• Debugged and improved performance issues</li>
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;