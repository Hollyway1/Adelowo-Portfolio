import React from "react";
import Reveal from "../../components/Reveal";
import { FolderKanban, ExternalLink } from "lucide-react";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 md:px-20 py-24"
    >
      <div className="max-w-6xl mx-auto text-center">

        <Reveal>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-sm">
            <FolderKanban size={16} className="text-cyan-500" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Selected Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 tracking-tight">
            Featured Projects
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-world projects showcasing website development expertise.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 mt-16 text-left">

          {projects.map((project, index) => (
            <Reveal key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group relative block rounded-3xl overflow-hidden border border-gray-100 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* gradient glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />

                {/* IMAGE */}
                <div className="overflow-hidden relative">

                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700 ease-out"
                  />

                  {/* HOVER OVERLAY (ICON + TEXT) */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition">

                      <ExternalLink className="text-white w-5 h-5" />

                      <span className="text-white text-xs font-medium">
                        View Live Project
                      </span>

                    </div>

                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6 relative z-10">

                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-cyan-500 transition">
                      {project.name}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-3 py-1 rounded-full
                        bg-gray-100 dark:bg-white/10
                        text-gray-600 dark:text-gray-300
                        border border-transparent group-hover:border-cyan-400/40
                        transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </a>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;