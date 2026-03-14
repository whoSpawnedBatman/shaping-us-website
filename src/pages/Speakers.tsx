import Layout from "@/components/Layout";
import SpeakerCard from "@/components/SpeakerCard";
import { motion } from "framer-motion";

const allSpeakers = [
  {
    name: "Dr. Ananya Sharma",
    role: "Neuroscientist & Author",
    talkTitle: "The Architecture of Memory",
    bio: "Pioneering researcher in neuroplasticity, exploring how our brains reshape themselves through experience and learning.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    name: "Rohan Mehta",
    role: "Social Entrepreneur",
    talkTitle: "Building Bridges, Not Walls",
    bio: "Founded three nonprofits focused on education accessibility in rural India, impacting over 50,000 students.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
  },
  {
    name: "Priya Venkatesh",
    role: "AI Ethics Researcher",
    talkTitle: "The Algorithm of Identity",
    bio: "Exploring how artificial intelligence shapes human behavior, societal norms, and our sense of self.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
  },
  {
    name: "Karthik Iyer",
    role: "Climate Activist & Filmmaker",
    talkTitle: "Stories That Move Mountains",
    bio: "Award-winning documentary filmmaker advocating for climate action through powerful visual storytelling.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Meera Patel",
    role: "Geneticist",
    talkTitle: "The Code Within Us",
    bio: "Leading geneticist researching how epigenetics shapes human development and potential across generations.",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=400&h=500&fit=crop",
  },
  {
    name: "Arjun Desai",
    role: "Urban Designer",
    talkTitle: "Cities That Shape Communities",
    bio: "Reimagining urban spaces to foster human connection, sustainability, and inclusive communities.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
