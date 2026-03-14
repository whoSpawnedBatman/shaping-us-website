import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const VideoCardSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-body">Watch</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">TEDx Talks</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative rounded-2xl overflow-hidden card-border aspect-video bg-card group cursor-pointer"
        >
          {/* Placeholder / Thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-card to-card flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
              </div>
              <p className="text-muted-foreground text-sm font-body">Video coming soon</p>
            </div>
          </div>
          
          {/* Subtle glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 blur-[80px] rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoCardSection;
