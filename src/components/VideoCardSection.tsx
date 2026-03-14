import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const VideoCardSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="w-full mt-16 mb-8">


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
  );
};

export default VideoCardSection;
