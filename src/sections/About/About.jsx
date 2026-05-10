import React, { useState } from "react";
import Reveal from "../../components/Reveal";
import { UserRound, Trophy, Rocket, TrendingUp } from "lucide-react";
import Mypic from "../../assets/images/Mypic.png";
import { motion } from "framer-motion";

/* ===========================
   PREMIUM SECTION TRANSITIONS
   =========================== */
const sectionVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const skillData = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  "Frameworks & Libraries": [
    "React",
    "Next.js",
    "React Native",
    "Framer Motion",
    "Redux Toolkit",
  ],
  "Styling & UI": [
    "Tailwind CSS",
    "CSS Modules",
    "Responsive Design",
    "Design Systems",
  ],
  "Tools & Workflow": [
    "Git & GitHub",
    "Vite",
    "Figma",
    "Vercel",
    "CI/CD Basics",
  ],
  "Core Competencies": [
    "Responsive UI Design",
    "Animation & Micro-Interactions",
    "Design-to-Code Translation",
    "Frontend Testing Basics",
    "Agile Collaboration",
  ],
};

const About = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="min-h-screen bg-white dark:bg-[#050505] text-gray-900 dark:text-white px-6 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <Reveal>
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-white/10 shadow-sm bg-white dark:bg-white/5">
              <UserRound size={16} className="text-cyan-500" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                About Me
              </span>
            </div>
          </motion.div>
        </Reveal>

        {/* PROFILE SECTION */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-12 mt-16 items-start"
        >
          {/* LEFT */}
          <Reveal>
            <div>
              <div className="relative mb-10">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-cyan-400/20 blur-[120px] rounded-full"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="relative group">
                    <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition"></div>

                    <div className="relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl bg-white dark:bg-white/5">
                      <img
                        src={Mypic}
                        alt="profile"
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl md:text-3xl font-semibold">
                    Adelowo Olaoluwa Samuel
                  </h3>

                  <p className="text-cyan-600 mt-2 font-medium">
                    Frontend Developer
                  </p>

                  <p className="max-w-xl text-gray-600 dark:text-gray-300 mt-5 leading-relaxed">
                    I build high-performance websites using React, Next.js, and
                    React Native.
                  </p>
                </div>
              </div>

              {/* CONTACT */}
              <div className="text-sm space-y-1">
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Email:
                  </span>{" "}
                  adelowoolaoluwa85@gmail.com
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Phone:
                  </span>{" "}
                  +234 703 491 7189
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Location:
                  </span>{" "}
                  Abeokuta, Nigeria
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-gray-900 dark:text-white">
                    Status:
                  </span>{" "}
                  Open to Opportunities
                </p>
              </div>
            </div>
          </Reveal>

          {/* RIGHT STATS */}
          <Reveal>
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  icon: <Trophy size={22} />,
                  num: "2+",
                  label: "Years Experience",
                },
                {
                  icon: <Rocket size={22} />,
                  num: "10+",
                  label: "Projects Delivered",
                },
                {
                  icon: <UserRound size={22} />,
                  num: "10+",
                  label: "Happy Clients",
                },
                {
                  icon: <TrendingUp size={22} />,
                  num: "15+",
                  label: "Technologies",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="relative rounded-3xl border border-gray-100 dark:border-white/10 p-6 hover:shadow-lg transition bg-white dark:bg-white/5"
                >
                  <div className="flex justify-center mb-3 text-cyan-500 relative">
                    <div className="absolute w-10 h-10 bg-cyan-400/20 rounded-full blur-xl"></div>
                    {item.icon}
                  </div>

                  <h4 className="text-3xl font-bold text-cyan-500 text-center">
                    {item.num}
                  </h4>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-300 text-center">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </motion.div>

        {/* SKILLS / STACK SECTION */}
        <div className="mt-24">
          <Reveal>
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-semibold">
                Skills & Tech Stack
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A focused toolkit for building modern, scalable, and polished
                frontend products.
              </p>
            </motion.div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skillData).map(([category, skills], index) => (
              <Reveal key={category}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6"
                >
                  <h4 className="text-lg font-semibold mb-5 text-cyan-600 dark:text-cyan-400">
                    {category}
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, i) => {
                      const id = `${index}-${i}`;

                      return (
                        <button
                          key={skill}
                          onMouseEnter={() => setActiveSkill(id)}
                          onMouseLeave={() => setActiveSkill(null)}
                          className={`px-4 py-2 rounded-full text-sm border transition duration-300 ${
                            activeSkill === id
                              ? "bg-cyan-500 text-white border-cyan-500"
                              : "bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10"
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;