import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Aditi Rao", role: "Organizer & Licensee", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" },
  { name: "Vikram Singh", role: "Co-Organizer", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop" },
  { name: "Sneha Kulkarni", role: "Speaker Curation Lead", imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop" },
  { name: "Arun Nair", role: "Creative Director", imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop" },
  { name: "Kavya Menon", role: "Marketing Lead", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop" },
  { name: "Rahul Gupta", role: "Technical Director", imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop" },
];

const Team = () => {
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
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">The People Behind</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl">Our Team</h1>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              The passionate individuals organizing TEDxICEAS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 card-border">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display font-semibold">{member.name}</h3>
                <p className="text-primary text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
