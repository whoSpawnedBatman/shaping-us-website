import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const sponsors = {
  gold: [
    { name: "TechVision Inc.", logo: "TV" },
    { name: "InnovateCo", logo: "IC" },
  ],
  silver: [
    { name: "FutureWorks", logo: "FW" },
    { name: "DataStream", logo: "DS" },
    { name: "CloudNine Labs", logo: "C9" },
  ],
  community: [
    { name: "Bengaluru Startups", logo: "BS" },
    { name: "Code For India", logo: "CFI" },
  ],
};

const SponsorTier = ({ title, items, delay }: { title: string; items: { name: string; logo: string }[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="mb-16"
  >
    <h3 className="font-display font-semibold text-lg text-center mb-8 text-muted-foreground">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {items.map((sponsor) => (
        <div
          key={sponsor.name}
          className="card-border rounded-xl p-8 bg-card flex flex-col items-center justify-center min-w-[160px] hover:border-primary/30 transition-colors"
        >
          <span className="font-display font-bold text-xl text-muted-foreground">{sponsor.logo}</span>
          <span className="text-xs text-muted-foreground mt-2">{sponsor.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const Sponsors = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Our Partners</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl">Sponsors</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              TEDxICEAS is made possible by the generous support of our sponsors.
            </p>
          </motion.div>

          {/* TEDx logo prominence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center mb-20"
          >
            <span className="font-display font-bold text-5xl">
              TEDx<span className="text-primary">ICEAS</span>
            </span>
          </motion.div>

          <SponsorTier title="Gold Sponsors" items={sponsors.gold} delay={0.2} />
          <SponsorTier title="Silver Sponsors" items={sponsors.silver} delay={0.3} />
          <SponsorTier title="Community Partners" items={sponsors.community} delay={0.4} />
        </div>
      </section>
    </Layout>
  );
};

export default Sponsors;
