import { Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black py-12 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 bg-gray-50 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-2xl p-6"
      >
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Adelowo Olaoluwa Samuel
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Frontend Developer • React • React Native
          </p>
        </div>

        <div className="flex items-center gap-5">
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="mailto:adelowoolaoluwa85@gmail.com"
            className="p-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10"
          >
            <Mail size={18} className="text-gray-700 dark:text-white" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/Hollyway1"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10"
          >
            <Globe size={18} className="text-gray-700 dark:text-white" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://linkedin.com/in/adelowo-olaoluwa"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10"
          >
            <Globe size={18} className="text-gray-700 dark:text-white" />
          </motion.a>
        </div>

        <p className="text-xs text-gray-500 text-center md:text-right">
          © 2026 Adelowo Olaoluwa. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;