import React from "react";
import Reveal from "../../components/Reveal";
import { Code2 } from "lucide-react";
import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";

const skills = [
  { name: "React.js", level: 95, icon: <SiIcons.SiReact />, color: "#61DAFB" },
  { name: "Next.js", level: 90, icon: <SiIcons.SiNextdotjs />, color: "#ffffff" },
  { name: "TypeScript", level: 88, icon: <SiIcons.SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", level: 95, icon: <SiIcons.SiJavascript />, color: "#F7DF1E" },
  { name: "TailwindCSS", level: 92, icon: <SiIcons.SiTailwindcss />, color: "#38BDF8" },
  { name: "Redux", level: 85, icon: <SiIcons.SiRedux />, color: "#764ABC" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-20 text-white bg-[#050505] overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* HEADER */}
        <Reveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
              <Code2 size={16} className="text-cyan-400" />
              <span className="text-sm text-gray-300">Skills Universe</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-6">
              Technical Arsenal
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A blend of modern frontend technologies and production-ready tools
              used to build scalable digital experiences.
            </p>
          </div>
        </Reveal>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT → ORBIT */}
          <div className="flex justify-center">
            <div className="scene">
              <div className="orbit">

                <div className="core">
                  <div className="pulse" />
                  <span className="text-sm font-semibold">DEV</span>
                </div>

                {skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className="planet"
                    style={{
                      "--i": i,
                      "--total": skills.length,
                    }}
                  >
                    <div className="planet-inner">
                      <span style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* RIGHT → SKILL BARS */}
          <div className="space-y-8">

            {skills.map((skill, idx) => (
              <Reveal key={idx}>
                <motion.div whileHover={{ scale: 1.02 }}>

                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>

                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                    />

                  </div>

                </motion.div>
              </Reveal>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;