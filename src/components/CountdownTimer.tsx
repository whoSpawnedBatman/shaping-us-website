import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-07-18T00:00:00").getTime();

const CountdownTimer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const calcTimeLeft = () => {
    const diff = TARGET_DATE - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Mark Your Calendar</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">July 18, 2026</h2>
        </motion.div>

        <div className="flex items-center justify-center gap-4 sm:gap-8">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
              className="flex flex-col items-center"
            >
              <div className="card-border rounded-xl bg-card w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center glow-red-sm">
                <span className="font-display font-bold text-3xl sm:text-5xl text-primary">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm mt-3 uppercase tracking-wider font-body">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
