import React, { useState } from "react";
import * as SiIcons from "react-icons/si";
import "./SkillsOrbit.css";

const skills = [
  { name: "React", icon: <SiIcons.SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiIcons.SiNextdotjs />, color: "#ffffff" },
  { name: "TypeScript", icon: <SiIcons.SiTypescript />, color: "#3178C6" },
  { name: "JavaScript", icon: <SiIcons.SiJavascript />, color: "#F7DF1E" },
  { name: "Tailwind", icon: <SiIcons.SiTailwindcss />, color: "#38BDF8" },
  { name: "Redux", icon: <SiIcons.SiRedux />, color: "#764ABC" },
];

const SkillsOrbit = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white px-6 overflow-hidden">

      {/* 🌌 CINEMATIC BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/20 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-600/20 blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white dark:from-black dark:via-black/90 dark:to-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center">

        {/* ✨ HEADER */}
        <div className="text-center max-w-4xl mb-10">

          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Skills
          </h2>

          <div className="h-[2px] w-24 bg-cyan-400 mx-auto my-6 shadow-[0_0_20px_#22d3ee]" />

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            I specialize in modern front-end technologies and consistently apply best practices
            to build <span className="text-black dark:text-white font-semibold">high-performance</span>,
            scalable, and visually immersive web applications.
          </p>

        </div>

        {/* 🧩 SKILL TAGS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 max-w-3xl">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "ReactJS",
            "Redux",
            "NextJS",
            "TailwindCSS",
          ].map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-sm md:text-base rounded-full
              bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10
              text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white
              hover:border-cyan-400
              hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
              transition duration-300 backdrop-blur-xl"
            >
              {item}
            </span>
          ))}
        </div>

        {/* 🌌 ORBIT TITLE */}
        <h3 className="text-lg tracking-widest text-gray-500 dark:text-gray-400 mb-10 uppercase">
          Skills Universe
        </h3>

        {/* 🪐 ORBIT (INTERACTIVE + SCALED) */}
        <div className="scale-125 md:scale-150">

          <div className="scene">

            <div className={`orbit ${active !== null ? "paused" : ""}`}>

              {/* CORE */}
              <div className={`core ${active !== null ? "core-active" : ""}`}>
                <div className="pulse" />
                <span className="text-sm font-bold tracking-widest">
                  DEV
                </span>
              </div>

              {/* PLANETS */}
              {skills.map((skill, i) => {
                const isActive = active === i;
                const isDimmed = active !== null && !isActive;

                return (
                  <div
                    key={skill.name}
                    className={`planet ${isDimmed ? "dim" : ""}`}
                    style={{
                      "--i": i,
                      "--total": skills.length,
                    }}
                    onMouseEnter={() => setActive(i)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <div
                      className="planet-inner"
                      style={{
                        boxShadow: isActive
                          ? `0 0 30px ${skill.color}`
                          : "none",
                        transform: isActive ? "scale(1.5)" : "scale(1)",
                      }}
                    >
                      <span
                        style={{
                          color: skill.color,
                          fontSize: "22px",
                          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))",
                        }}
                      >
                        {skill.icon}
                      </span>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SkillsOrbit;