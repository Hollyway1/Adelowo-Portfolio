import { useEffect, useState, useRef } from "react";
import * as Icon from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

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

          {/* BRAND WITH PARTICLE RING */}
          <div className="flex items-center gap-3">

            {/* LOGO WRAPPER */}
            <div className="relative w-12 h-12 flex items-center justify-center">

              {/* OUTER PARTICLE RING */}
              <div className="absolute inset-0 rounded-xl animate-spin-slow">
                <span className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full top-0 left-1/2 -translate-x-1/2"></span>
                <span className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full bottom-0 left-1/2 -translate-x-1/2"></span>
                <span className="absolute w-1.5 h-1.5 bg-purple-500 rounded-full left-0 top-1/2 -translate-y-1/2"></span>
                <span className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full right-0 top-1/2 -translate-y-1/2"></span>
              </div>

              {/* GLOW BACKDROP */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 blur-md opacity-60"></div>

              {/* MAIN LOGO */}
              <div className="relative w-10 h-10 rounded-xl
      bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500
      shadow-lg shadow-cyan-500/30
      flex items-center justify-center text-white font-bold z-10">
                A
              </div>
            </div>

            {/* TEXT */}
            <div>
              <h1 className="text-lg font-semibold text-black dark:text-white">
                AOS
              </h1>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">
                Tech Studio
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
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

            {/* CTA */}
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

           <motion.a
  href="https://wa.me/2347034917189"
  target="_blank"
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.92, rotate: [-1, 1, -1, 0] }}
  transition={{
    type: "spring",
    stiffness: 500,
    damping: 18,
  }}
  className="relative px-4 py-2 text-xs text-white rounded-full
  bg-[#25D366]
  shadow-[0_10px_25px_rgba(37,211,102,0.25)]
  overflow-hidden flex items-center gap-2"
>
  {/* CLEAN SOFT CORE (NO HEAVY BLUR) */}
  <span className="absolute inset-0 rounded-full bg-white/5" />

  {/* ICON */}
  <motion.div
    animate={{ scale: [1, 1.12, 1], rotate: [0, -4, 4, 0] }}
    transition={{ duration: 0.35 }}
    className="relative z-10"
  >
    <MessageCircle size={16} />
  </motion.div>

  {/* TEXT */}
  <span className="relative z-10 font-medium tracking-wide">
    WhatsApp
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

        <button
          onClick={() => setFabOpen(!fabOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-xl"
        >
          {fabOpen ? <Icon.X /> : <Icon.Plus />}
        </button>
      </div>
    </>
  );
};

export default Navbar;