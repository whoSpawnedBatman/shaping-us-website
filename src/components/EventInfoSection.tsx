import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Users, Clock } from "lucide-react";

const eventDetails = [
  { icon: Calendar, label: "Date", value: "July 18, 2025" },
  { icon: MapPin, label: "Venue", value: "Impact College of Engineering and Applied Sciences" },
  { icon: Users, label: "City", value: "Bengaluru, India" },
];

const schedule = [
  { time: "9:00 AM", title: "Registration & Check-in", description: "Arrival, networking, and welcome refreshments" },
  { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome address and event kick-off" },
  { time: "10:30 AM", title: "Session 1 — Ideas That Shape", description: "First round of speaker talks" },
  { time: "12:00 PM", title: "Lunch & Networking", description: "Connect with speakers and attendees" },
  { time: "1:30 PM", title: "Session 2 — Forces of Change", description: "Second round of speaker talks" },
  { time: "3:00 PM", title: "Interactive Break", description: "Workshops and collaborative activities" },
  { time: "3:45 PM", title: "Session 3 — Shaping Tomorrow", description: "Final round of speaker talks" },
  { time: "5:00 PM", title: "Closing & After-Party", description: "Closing remarks and celebration" },
];

const EventInfoSection = () => {
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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Event Details</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">TEDxICEAS</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {eventDetails.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
              className="card-border rounded-3xl p-8 bg-card text-center hover:border-primary/30 transition-colors duration-300"
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

        {/* Event Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <p className="text-primary text-sm tracking-[0.3em] uppercase">Schedule</p>
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl">Event Day Timeline</h3>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] sm:left-[9px] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-6">
              {schedule.map((item, i) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + 0.08 * i }}
                  className="flex gap-6 group"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-card border-2 border-primary/40 group-hover:border-primary group-hover:bg-primary/20 transition-colors mt-1" />
                  </div>

                  <div className="card-border rounded-3xl p-5 bg-card flex-1 group-hover:border-primary/20 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
                      <span className="text-primary font-display font-semibold text-sm">{item.time}</span>
                      <h4 className="font-display font-semibold text-sm sm:text-base">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventInfoSection;
