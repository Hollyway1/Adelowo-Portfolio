import { useEffect, useState, useRef } from "react";
import * as Icon from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [glowStyle, setGlowStyle] = useState({ top: 0, height: 0 });

  const navRef = useRef(null);
  const hoverSound = useRef(null);

  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const links = ["home", "about", "experience", "skills", "projects", "contact"];

  /* THEME */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  /* SOUND */
  useEffect(() => {
    hoverSound.current = new Audio("/hover.mp3");
    hoverSound.current.volume = 0.08;
  }, []);

  const playSound = () => {
    if (window.innerWidth < 768) return;
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play();
    }
  };

  /* NAV CLICK */
  const handleNavClick = (e, link) => {
    e.preventDefault();

    const section = document.getElementById(link);
    if (!section) return;

    setActive(link);
    setMenuOpen(false);

    const top = section.offsetTop - 95;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  /* SCROLL */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 10);

      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress((currentY / total) * 100);

      links.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (currentY >= top && currentY < bottom) {
          setActive(id);
          setGlowStyle({
            top: section.offsetTop,
            height: section.offsetHeight,
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* PILL */
  useEffect(() => {
    const activeEl = document.getElementById(`nav-${active}`);
    if (!activeEl || !navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const rect = activeEl.getBoundingClientRect();

    setPillStyle({
      left: rect.left - navRect.left,
      width: rect.width,
    });
  }, [active]);

  /* 3D TILT EFFECT */
  const handleTilt = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    el.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.08)
    `;
  };

  const resetTilt = (e) => {
    e.currentTarget.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <>
      {/* SCROLL BAR */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.7)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 w-full z-50 backdrop-blur-2xl
        border-b border-white/10
        bg-white/40 dark:bg-black/30
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
          {/* BRAND */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl animate-spin-slow">
                <span className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full top-0 left-1/2 -translate-x-1/2"></span>
                <span className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full bottom-0 left-1/2 -translate-x-1/2"></span>
                <span className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full left-0 top-1/2 -translate-y-1/2"></span>
                <span className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full right-0 top-1/2 -translate-y-1/2"></span>
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 blur-md opacity-60"></div>

              <div
                className="relative w-10 h-10 rounded-xl
                bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500
                shadow-lg shadow-cyan-500/30
                flex items-center justify-center text-white font-bold z-10"
              >
                A
              </div>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-black dark:text-white">
                AOS
              </h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                Tech Studio
              </p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <div
            ref={navRef}
            className="hidden md:flex relative items-center gap-6 px-5 py-2 rounded-full
            bg-white/40 dark:bg-white/5
            border border-white/10
            backdrop-blur-2xl
            shadow-inner shadow-white/10"
          >
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-black/5 dark:bg-white/10"
              style={{ left: pillStyle.left, width: pillStyle.width }}
            />

            {links.map((link) => (
              <a
                key={link}
                id={`nav-${link}`}
                href={`#${link}`}
                onClick={(e) => handleNavClick(e, link)}
                onMouseEnter={playSound}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className="relative z-10 text-xs font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              >
                {link.toUpperCase()}
              </a>
            ))}

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="relative ml-2 px-4 py-1.5 text-xs font-semibold text-white rounded-full
              bg-gradient-to-r from-cyan-500 to-blue-600 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 animate-pulse" />
              <span className="relative z-10">Hire Me</span>
            </a>
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white dark:bg-white/5 border"
            >
              {darkMode ? <Icon.Sun size={16} /> : <Icon.Moon size={16} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-full bg-white dark:bg-white/5 border"
            >
              {menuOpen ? <Icon.X /> : <Icon.Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22 }}
            className="md:hidden fixed top-[74px] left-0 w-full z-40 px-4"
          >
            <div
              className="mx-auto w-full max-w-md rounded-3xl
              bg-white/90 dark:bg-black/85
              backdrop-blur-2xl
              border border-white/10
              shadow-2xl p-4"
            >
              <div className="flex flex-col gap-2">
                {links.map((link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`px-4 py-3 rounded-2xl text-sm font-medium transition ${active === link
                        ? "bg-cyan-500 text-white"
                        : "text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="mt-2 px-4 py-3 rounded-2xl text-sm font-semibold text-center text-white
                  bg-gradient-to-r from-cyan-500 to-blue-600"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING ACTION MENU */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {fabOpen && (
          <div className="flex flex-col gap-3 items-end">

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="px-4 py-2 text-xs bg-blue-600 text-white rounded-full"
            >
              Hire Me
            </a>

            {/* WHATSAPP BUTTON (ENHANCED BUBBLE STYLE) */}
            <motion.a
              href="https://wa.me/2347034917189"
              target="_blank"
              rel="noreferrer"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, y: [0, -4, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="relative flex items-center gap-2 px-4 py-2 text-xs text-white rounded-full bg-green-500 shadow-[0_10px_30px_rgba(37,211,102,0.35)]"
            >
              {/* PING RING (ATTENTION EFFECT) */}
              <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-30"></span>

              {/* SMALL BUBBLE POINTER */}
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rotate-45"></span>

              {/* ICON */}
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <FaWhatsapp className="text-white text-base" />
              </motion.div>

              {/* TEXT */}
              <span className="relative z-10 font-medium tracking-wide">
                Chat on WhatsApp
              </span>
            </motion.a>

            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="px-4 py-2 text-xs bg-black text-white rounded-full"
            >
              Top
            </a>
          </div>
        )}

        {/* MAIN FAB BUTTON */}
<button
  onClick={() => setFabOpen(!fabOpen)}
  className="relative w-14 h-14 rounded-full  flex items-center justify-center transition-transform hover:scale-110 shadow-[0_10px_25px_rgba(37,211,102,0.4)]"
>
  {/* OUTER PULSE */}
  <span className="absolute w-full h-full rounded-full animate-ping bg-green-400 opacity-30"></span>

  {/* INNER GLOW RING (fixes visual imbalance) */}
  <span className="absolute w-[85%] h-[85%] rounded-full border border-white/20"></span>

  {/* WHATSAPP ICON (FIXED PROPER CENTER + FILL + SCALE) */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="relative z-10 w-[20px] h-[20px] text-white drop-shadow-md"
  >
    <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.3-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.12 2.81c.14.18 1.94 2.96 4.7 4.15.66.28 1.18.45 1.58.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
  </svg>
</button>
      </div>
    </>
  );
};

export default Navbar;