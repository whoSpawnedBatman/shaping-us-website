import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingShapes from "./FloatingShapes";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingShapes />
      
      {/* Radial glow behind hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-body">
            Ideas Worth Spreading
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.9]"
        >
          TEDx<span className="text-primary">ICEAS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-display text-xl sm:text-2xl lg:text-3xl text-muted-foreground mt-6 font-light"
        >
          What Shapes Us
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground"
        >
          <span>📍 Bengaluru, India</span>
          <span className="hidden sm:block">·</span>
          <span>📅 Coming Soon 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/register"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Register Now
          </Link>
          <Link
            to="/speakers"
            className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors"
          >
            View Speakers
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-muted-foreground/30 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 bg-muted-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
