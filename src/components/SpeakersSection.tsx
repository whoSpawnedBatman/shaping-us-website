import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import SpeakerCard from "./SpeakerCard";

const speakers = [
  {
    name: "Dr. Ananya Sharma",
    role: "Neuroscientist & Author",
    talkTitle: "The Architecture of Memory",
    bio: "Pioneering researcher in neuroplasticity and how our brains reshape themselves through experience.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "Rohan Mehta",
    role: "Social Entrepreneur",
    talkTitle: "Building Bridges, Not Walls",
    bio: "Founded three nonprofits focused on education accessibility in rural India.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Priya Venkatesh",
    role: "AI Ethics Researcher",
    talkTitle: "The Algorithm of Identity",
    bio: "Exploring how artificial intelligence shapes human behavior and societal norms.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
  {
    name: "Karthik Iyer",
    role: "Climate Activist & Filmmaker",
    talkTitle: "Stories That Move Mountains",
    bio: "Award-winning documentary filmmaker advocating for climate action through visual storytelling.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
