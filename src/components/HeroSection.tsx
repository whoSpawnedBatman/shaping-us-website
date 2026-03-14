import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import FloatingShapes from "./FloatingShapes";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y: yBg, willChange: "transform" }} className="absolute inset-0 z-0">
        <FloatingShapes />
      </motion.div>

      {/* Pulsing radial glow behind hero - Restored */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full bg-primary/10 blur-[100px] md:blur-[140px]"
        />
      </motion.div>

      <motion.div className="container mx-auto px-6 relative z-10 text-center" style={{ y: yText, willChange: "transform" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-body">
            Ideas Worth Spreading
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <img
            src="/tedxiceas-logo.png"
            alt="TEDxICEAS"
            className="h-24 sm:h-32 lg:h-40 xl:h-48 w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-xl sm:text-2xl lg:text-3xl text-muted-foreground mt-6 font-light"
        >
          What Shapes Us
        </motion.p>



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <Link
              to="/register"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-primary/90 transition-shadow hover:shadow-[0_0_20px_rgba(235,0,40,0.3)] inline-block"
            >
              Register Now
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
            <Link
              to="/speakers"
              className="border border-border text-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-secondary/50 transition-colors inline-block"
            >
              View Speakers
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

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
