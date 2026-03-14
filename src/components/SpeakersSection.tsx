import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import SpeakerCard from "./SpeakerCard";
import speaker1 from "@/assets/images/image.jpg";
import speaker2 from "@/assets/images/trump.png";
import speaker3 from "@/assets/images/ronnie.webp";

const speakers = [
  {
    name: "Kim Jong Un",
    role: "Supreme Leader",
    talkTitle: "The Architecture of Power",
    bio: "Looking at things. Pointing at things. Sometimes pushing the big red button (metaphorically... we hope).",
    imageUrl: speaker1,
  },
  {
    name: "Donald Trump",
    role: "45th U.S. President",
    talkTitle: "The Art of the Deal",
    bio: "This talk is going to be tremendous. The best talk. Everyone says it. Bigly.",
    imageUrl: speaker2,
  },
  {
    name: "Ronnie Coleman",
    role: "8x Mr. Olympia",
    talkTitle: "YEAH BUDDY!",
    bio: "Light weight baby! Nothin' but a peanut!",
    imageUrl: speaker3,
  },
];

const SpeakersSection = () => {
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
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Featured</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl">Speakers</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Visionary thinkers sharing ideas that shape our understanding of the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 group/list">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={speaker.name} {...speaker} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/speakers"
            className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors inline-block"
          >
            View All Speakers
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;
