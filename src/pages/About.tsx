import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">About</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl">About TEDx</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">About TEDx</h2>
              <p className="text-muted-foreground leading-relaxed">
                In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">About TEDxICEAS</h2>
              <p className="text-muted-foreground leading-relaxed">
                TEDxICEAS is an independently organized TEDx event hosted at Impact College of Engineering and Applied Sciences in Bengaluru, India. Our theme, "What Shapes Us," explores the ideas, experiences, people, and innovations that shape our identities, communities, and future. We bring together visionary speakers, performers, and thinkers to inspire meaningful conversations.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">About TED</h2>
              <p className="text-muted-foreground leading-relaxed">
                TED is a nonprofit organization devoted to Ideas Worth Spreading, often in the form of short talks delivered by leading thinkers and doers. Many of these talks are given at TED conferences, including the annual TED Conference and TEDGlobal. TED talks are shared freely online at TED.com and through the TED app, reaching millions of viewers worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <a
              href="https://www.ted.com/tedx"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary/30 text-primary px-8 py-3 rounded-lg font-semibold text-sm hover:bg-primary/10 transition-colors inline-block"
            >
              Learn more about TEDx
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
