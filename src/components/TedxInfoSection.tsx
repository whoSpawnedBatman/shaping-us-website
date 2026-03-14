import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TedxInfoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">About</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">What is TEDx?</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-muted-foreground leading-relaxed text-center"
        >
          In the spirit of discovering and spreading ideas, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxICEAS, where x = independently organized TED event. At our TEDxICEAS event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.ted.com/tedx"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/30 text-primary px-8 py-3 rounded-lg font-semibold text-sm hover:bg-primary/10 transition-colors inline-block"
          >
            Learn more about TEDx
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TedxInfoSection;
