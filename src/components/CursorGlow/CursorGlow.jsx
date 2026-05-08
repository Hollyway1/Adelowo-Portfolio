import { useEffect } from "react";

const CursorGlow = () => {
  useEffect(() => {
    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "300px";
    glow.style.height = "300px";
    glow.style.borderRadius = "50%";
    glow.style.pointerEvents = "none";
    glow.style.background =
      "radial-gradient(circle, rgba(0,212,255,0.15), transparent 70%)";
    glow.style.transform = "translate(-50%, -50%)";
    glow.style.zIndex = "9999";

    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);

  return null;
};

export default CursorGlow;