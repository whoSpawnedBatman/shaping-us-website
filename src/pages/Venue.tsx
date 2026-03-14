import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Venue = () => {
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
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Location</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl">The Venue</h1>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-center"
            >
              <h2 className="font-display font-bold text-2xl mb-4">
                Impact College of Engineering and Applied Sciences
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Located in the vibrant city of Bengaluru, India's technology capital, our venue provides the perfect setting for a day of inspiration, innovation, and connection. The modern auditorium and campus facilities offer an intimate space where powerful ideas can truly resonate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="card-border rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5!2d77.5!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Venue Map"
                className="grayscale opacity-80"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                { label: "Capacity", value: "500+ Attendees" },
                { label: "Facilities", value: "Modern Auditorium" },
                { label: "Accessibility", value: "Fully Accessible" },
              ].map((item) => (
                <div key={item.label} className="card-border rounded-xl p-6 bg-card text-center">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="font-display font-semibold">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Venue;
