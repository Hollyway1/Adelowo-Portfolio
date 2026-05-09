import React from "react";
import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle
} from "lucide-react";

/* =========================
   PREMIUM BRAND ICONS (SVG)
   ========================= */

const GitHubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 .5C5.73.5.75 5.7.75 12.2c0 5.2 3.44 9.6 8.2 11.2.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.6-1.4-2-1.4-2-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.3 1.9 1.3 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.6-.3-5.3-1.4-5.3-6 0-1.3.4-2.3 1.1-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.7.9 1.1 1.9 1.1 3.2 0 4.6-2.7 5.7-5.3 6 .4.4.9 1.1.9 2.3v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6 8.2-11.2C23.25 5.7 18.27.5 12 .5z"/>
  </svg>
);

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z"/>
  </svg>
);

const Contact = () => {
  const whatsappNumber = "2347034917189";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-24">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <Reveal>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 w-fit backdrop-blur-xl border border-white/10">
              <Mail size={16} className="text-cyan-400" />
              <span className="text-sm">Let’s Connect</span>
            </div>

            <h2 className="text-4xl font-bold mt-5">
              Get In Touch
            </h2>

            <p className="text-gray-400 mt-3">
              Let’s build something great together.
            </p>
          </Reveal>

          {/* INFO */}
          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <Phone className="text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p>0703 491 7189</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center text-center gap-3 p-8 rounded-xl bg-white/5 border border-white/10">
              <Mail className="text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="break-all">
                  adelowoolaoluwa85@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <MapPin className="text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p>Abeokuta, Nigeria</p>
              </div>
            </div>

            {/* SOCIAL BUTTONS (PREMIUM FIXED ICONS) */}
            <div className="flex gap-3 mt-6">

              {/* GITHUB */}
              <a
                href="https://github.com/Hollyway1"
                target="_blank"
                className="group p-3 rounded-xl bg-white/10 border border-white/10 hover:scale-110 transition relative overflow-hidden"
              >
                <GitHubIcon className="w-5 h-5 text-white group-hover:text-cyan-400 transition" />
              </a>

              {/* LINKEDIN */}
              <a
                href="https://linkedin.com"
                target="_blank"
                className="group p-3 rounded-xl bg-white/10 border border-white/10 hover:scale-110 transition relative overflow-hidden"
              >
                <LinkedInIcon className="w-5 h-5 text-white group-hover:text-blue-400 transition" />
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                className="group p-3 rounded-xl bg-green-500 text-white hover:scale-110 transition relative overflow-hidden"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

            </div>

          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
        >

          <h3 className="text-2xl font-semibold mb-6">
            Send Message
          </h3>

          <form className="flex flex-col gap-4">

            <input className="p-4 rounded-xl bg-black border border-white/10" placeholder="Name" />
            <input className="p-4 rounded-xl bg-black border border-white/10" placeholder="Email" />
            <textarea rows="5" className="p-4 rounded-xl bg-black border border-white/10" placeholder="Message" />

            <button className="bg-cyan-500 py-3 rounded-xl hover:scale-[1.02] transition">
              Send
            </button>

            <a
              href={whatsappLink}
              target="_blank"
              className="text-center border border-green-500 text-green-400 py-3 rounded-xl hover:bg-green-500 hover:text-white transition"
            >
              Chat on WhatsApp
            </a>

          </form>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;