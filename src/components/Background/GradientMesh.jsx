import { motion } from "framer-motion";

const GradientMesh = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050505]">

      {/* 🌈 Floating gradient blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
        style={{
          background: "radial-gradient(circle, #22d3ee, transparent 60%)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, #3b82f6, transparent 60%)",
          bottom: "-20%",
          right: "-10%",
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, -50, 30, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
        style={{
          background: "radial-gradient(circle, #a855f7, transparent 60%)",
          top: "40%",
          left: "60%",
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🧊 subtle noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />
    </div>
  );
};

export default GradientMesh;