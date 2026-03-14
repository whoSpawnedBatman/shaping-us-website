import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import batman from "@/assets/images/batman.gif";

const teamMembers = [
  { name: "Person 1", role: "Organizer & Licensee", imageUrl: "" },
  { name: "Person 2", role: "Co-Organizer", imageUrl: "" },
  { name: "Person 3", role: "Speaker Curation Lead", imageUrl: "" },
  { name: "Person 4", role: "Creative Director", imageUrl: "" },
  { name: "Person 5", role: "Marketing Lead", imageUrl: "" },
  { name: "Batman", role: "Website Manager", imageUrl: batman },
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
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 card-border flex items-center justify-center bg-secondary">
                  {member.imageUrl ? (
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-12 h-12 text-muted-foreground" />
                  )}
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
