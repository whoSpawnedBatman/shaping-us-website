import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Users } from "lucide-react";

const EventInfoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { icon: Calendar, label: "Date", value: "Coming Soon 2026" },
    { icon: MapPin, label: "Venue", value: "Impact College of Engineering and Applied Sciences" },
    { icon: Users, label: "City", value: "Bengaluru, India" },
  ];

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Event Details</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">TEDxICEAS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="card-border rounded-xl p-8 bg-card text-center hover:border-primary/30 transition-colors duration-300"
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{item.label}</p>
              <p className="font-display font-semibold text-sm">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground text-center mt-12 max-w-2xl mx-auto leading-relaxed"
        >
          TEDxICEAS brings together visionary thinkers, creators, and change-makers to explore the ideas, innovations, and experiences that shape our world. Join us for a day of powerful talks and deep connections.
        </motion.p>
      </div>
    </section>
  );
};

export default EventInfoSection;
