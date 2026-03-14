import Layout from "@/components/Layout";
import SpeakerCard from "@/components/SpeakerCard";
import { motion } from "framer-motion";

const allSpeakers = [
  {
    name: "Kim Jong Un",
    role: "Supreme Leader",
    talkTitle: "The Architecture of Power",
    bio: "Looking at things. Pointing at things. Sometimes pushing the big red button (metaphorically... we hope).",
    imageUrl: "/image.jpg",
  },
  {
    name: "Donald Trump",
    role: "45th U.S. President",
    talkTitle: "The Art of the Deal",
    bio: "This talk is going to be tremendous. The best talk. Everyone says it. Bigly.",
    imageUrl: "/trump.png",
  },
  {
    name: "Ronnie Coleman",
    role: "8x Mr. Olympia",
    talkTitle: "YEAH BUDDY!",
    bio: "Light weight baby! Nothin' but a peanut!",
    imageUrl: "/ronnie.webp",
  },
];

const Speakers = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Meet Our</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl">Speakers</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Visionary thinkers sharing ideas that shape our understanding of the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto group/list">
            {allSpeakers.map((speaker, i) => (
              <SpeakerCard key={speaker.name} {...speaker} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speakers;
