import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingShapes = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large red glow */}
      <motion.div
        animate={{
          x: mouse.x * 30,
          y: mouse.y * 30,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow"
      />
      
      {/* Floating sphere 1 */}
      <motion.div
        animate={{
          x: mouse.x * 20,
          y: mouse.y * 15,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
        className="absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-primary/30 animate-float"
      />
      
      {/* Floating sphere 2 */}
      <motion.div
        animate={{
          x: mouse.x * -15,
          y: mouse.y * -20,
        }}
        transition={{ type: "spring", stiffness: 35, damping: 20 }}
        className="absolute top-[60%] right-[20%] w-2 h-2 rounded-full bg-primary/20 animate-float-slow"
      />
      
      {/* Floating sphere 3 */}
      <motion.div
        animate={{
          x: mouse.x * 25,
          y: mouse.y * -10,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 25 }}
        className="absolute top-[40%] right-[10%] w-4 h-4 rounded-full bg-primary/15 animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Line element */}
      <motion.div
        animate={{
          x: mouse.x * -10,
          y: mouse.y * 10,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 30 }}
        className="absolute top-[30%] left-[40%] w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-float-slow"
        style={{ animationDelay: "1s" }}
      />

      {/* Ring */}
      <motion.div
        animate={{
          x: mouse.x * -20,
          y: mouse.y * 15,
        }}
        transition={{ type: "spring", stiffness: 35, damping: 25 }}
        className="absolute bottom-[25%] left-[25%] w-16 h-16 rounded-full border border-primary/10 animate-float-slow"
        style={{ animationDelay: "3s" }}
      />

      {/* Small dot cluster */}
      <motion.div
        animate={{
          x: mouse.x * 15,
          y: mouse.y * 20,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        className="absolute top-[70%] left-[60%] w-1.5 h-1.5 rounded-full bg-primary/25 animate-float"
        style={{ animationDelay: "4s" }}
      />
    </div>
  );
};

export default FloatingShapes;
