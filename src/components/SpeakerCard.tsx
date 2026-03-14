import { motion } from "framer-motion";

interface SpeakerCardProps {
  name: string;
  role: string;
  talkTitle: string;
  bio: string;
  imageUrl: string;
  index: number;
}

const SpeakerCard = ({ name, role, talkTitle, bio, imageUrl, index }: SpeakerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="card-border rounded-xl bg-card overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_30px_-5px_hsl(3_78%_51%/0.15)]"
    >
      <div className="aspect-[4/5] overflow-hidden bg-secondary">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg">{name}</h3>
        <p className="text-primary text-xs mt-1 font-medium">{role}</p>
        <p className="text-muted-foreground text-sm mt-3 font-medium">"{talkTitle}"</p>
        <p className="text-muted-foreground/70 text-xs mt-2 line-clamp-2 leading-relaxed">{bio}</p>
      </div>
    </motion.div>
  );
};

export default SpeakerCard;
