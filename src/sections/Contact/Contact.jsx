import React from "react";
import Reveal from "../../components/Reveal";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Globe
} from "lucide-react";

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

            {/* SOCIAL BUTTONS (SAFE ICONS) */}
            <div className="flex gap-3 mt-6">

              <a
                href="https://github.com/Hollyway1"
                target="_blank"
                className="p-3 rounded-xl bg-white/10 border border-white/10 hover:scale-110 transition"
              >
                <Globe />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-3 rounded-xl bg-white/10 border border-white/10 hover:scale-110 transition"
              >
                <Globe />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                className="p-3 rounded-xl bg-green-500 text-white hover:scale-110 transition"
              >
                <MessageCircle />
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