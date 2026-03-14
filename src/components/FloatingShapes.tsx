import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const FloatingShapes = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for tracking
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30, mass: 0.5 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large red glow */}
      <motion.div
        style={{
          x: useSpring(useMotionValue(springX.get() * 30), { stiffness: 50, damping: 30 }),
          y: useSpring(useMotionValue(springY.get() * 30), { stiffness: 50, damping: 30 }),
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-pulse-glow"
      />

      {/* Floating sphere 1 */}
      <motion.div
        style={{
          x: useSpring(useMotionValue(springX.get() * 20), { stiffness: 40, damping: 25 }),
          y: useSpring(useMotionValue(springY.get() * 15), { stiffness: 40, damping: 25 }),
        }}
        className="absolute top-[20%] left-[15%] w-3 h-3 rounded-full bg-primary/30 animate-float"
      />

      {/* Floating sphere 2 */}
      <motion.div
        style={{
          x: useSpring(useMotionValue(springX.get() * -15), { stiffness: 35, damping: 20 }),
          y: useSpring(useMotionValue(springY.get() * -20), { stiffness: 35, damping: 20 }),
        }}
        className="absolute top-[60%] right-[20%] w-2 h-2 rounded-full bg-primary/20 animate-float-slow"
      />

      {/* Floating sphere 3 */}
      <motion.div
        style={{
          x: useSpring(useMotionValue(springX.get() * 25), { stiffness: 30, damping: 25 }),
          y: useSpring(useMotionValue(springY.get() * -10), { stiffness: 30, damping: 25 }),
          animationDelay: "2s"
        }}
        className="absolute top-[40%] right-[10%] w-4 h-4 rounded-full bg-primary/15 animate-float"
      />

      {/* Line element */}
      <motion.div
        style={{
          x: useSpring(useMotionValue(springX.get() * -10), { stiffness: 45, damping: 30 }),
          y: useSpring(useMotionValue(springY.get() * 10), { stiffness: 45, damping: 30 }),
          animationDelay: "1s"
        }}
        className="absolute top-[30%] left-[40%] w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-float-slow"
      />

      {/* Ring */}
      <motion.div
        style={{
          x: useSpring(useMotionValue(springX.get() * -20), { stiffness: 35, damping: 25 }),
          y: useSpring(useMotionValue(springY.get() * 15), { stiffness: 35, damping: 25 }),
          animationDelay: "3s"
        }}
        className="absolute bottom-[25%] left-[25%] w-16 h-16 rounded-full border border-primary/10 animate-float-slow"
      />

      {/* Small dot cluster */}
      <motion.div
        style={{
          x: useSpring(useMotionValue(springX.get() * 15), { stiffness: 40, damping: 20 }),
          y: useSpring(useMotionValue(springY.get() * 20), { stiffness: 40, damping: 20 }),
          animationDelay: "4s"
        }}
        className="absolute top-[70%] left-[60%] w-1.5 h-1.5 rounded-full bg-primary/25 animate-float"
      />
    </div>
  );
};

export default FloatingShapes;
