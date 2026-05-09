import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full z-40 px-4 mt-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 bg-gray-50/80 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-4 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)]">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Adelowo Olaoluwa Samuel
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Frontend Developer • React • React Native
          </p>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-6">

          {/* EMAIL */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="mailto:adelowoolaoluwa85@gmail.com"
            className="group relative p-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-cyan-400 transition"
          >
            <Mail size={18} className="text-gray-700 dark:text-white" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition text-xs px-2 py-1 rounded-md bg-black text-white">
              Email
            </span>
          </motion.a>

          {/* GITHUB */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/Hollyway1"
            target="_blank"
            rel="noreferrer"
            className="group relative p-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-gray-900 transition"
          >
            <FaGithub className="text-lg text-gray-800 dark:text-white group-hover:text-black" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition text-xs px-2 py-1 rounded-md bg-black text-white">
              GitHub
            </span>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://linkedin.com/in/adelowo-olaoluwa"
            target="_blank"
            rel="noreferrer"
            className="group relative p-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-blue-500 transition"
          >
            <FaLinkedin className="text-lg text-blue-600 group-hover:text-blue-500" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition text-xs px-2 py-1 rounded-md bg-black text-white">
              LinkedIn
            </span>
          </motion.a>

          {/* INDEED */}
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.indeed.com/adelowo-olaoluwa-samuel"
            target="_blank"
            rel="noreferrer"
            className="group relative p-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-indigo-500 transition"
          >
            <span className="text-indigo-600 font-bold text-sm">in</span>

            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition text-xs px-2 py-1 rounded-md bg-black text-white">
              Indeed
            </span>
          </motion.a>

        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500 text-center md:text-right">
          © 2026 Adelowo Olaoluwa. All rights reserved.
        </p>

      </div>
    </motion.div>
  );
};

export default Footer;