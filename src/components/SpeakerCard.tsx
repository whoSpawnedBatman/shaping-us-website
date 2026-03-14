import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface SpeakerCardProps {
  name: string;
  role: string;
  talkTitle: string;
  bio: string;
  imageUrl: string;
  index: number;
}

const SpeakerCard = ({ name, role, talkTitle, bio, imageUrl, index }: SpeakerCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="card-border rounded-3xl bg-card overflow-hidden group relative cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.2)] group-hover/list:opacity-40 hover:!opacity-100 min-h-[400px] flex flex-col justify-end"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--primary) / 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="absolute inset-0 overflow-hidden bg-secondary">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative p-6 z-10 w-full transform transition-transform duration-500 group-hover:translate-y-[-4px]">
        <h3 className="font-display font-semibold text-xl text-white">{name}</h3>
        <p className="text-primary text-sm mt-1 font-medium">{role}</p>

        {/* Hidden on initial State, expands on hover */}
        <div className="overflow-hidden h-0 group-hover:h-auto group-hover:mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <p className="text-white/90 text-sm font-medium">"{talkTitle}"</p>
          <p className="text-white/70 text-xs mt-2 line-clamp-2 leading-relaxed">{bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SpeakerCard;
