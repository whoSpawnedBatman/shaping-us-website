import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VenueSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Location</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">The Venue</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-border rounded-3xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "300px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location"
              className="grayscale opacity-80"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-display font-bold text-2xl mb-4">
              Impact College of Engineering and Applied Sciences
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Located in the vibrant city of Bengaluru, India's tech capital, our venue provides the perfect setting for a day of inspiration and connection. The modern auditorium offers an intimate space where ideas can truly resonate.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>📍</span>
              <span>Bengaluru, Karnataka, India</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
