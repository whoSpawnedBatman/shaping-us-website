import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ThemeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-border" />
      
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary text-sm tracking-[0.3em] uppercase mb-6 font-body"
        >
          The Theme
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl"
        >
          What Shapes Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-muted-foreground text-lg leading-relaxed mt-8"
        >
          Every individual, community, and generation is shaped by ideas, experiences, challenges, and innovation. TEDxICEAS explores the forces that shape who we are and who we will become — from technology and science to culture, creativity, and human resilience.
        </motion.p>
      </div>
    </section>
  );
};

export default ThemeSection;
