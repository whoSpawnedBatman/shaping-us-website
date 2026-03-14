import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import VideoCardSection from "@/components/VideoCardSection";

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
              <h2 className="font-display font-semibold text-2xl mb-4">About TEDx, x = independently organized event</h2>
              <p className="text-muted-foreground leading-relaxed">
                In the spirit of discovering and spreading ideas, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)
              </p>
            </div>

            <VideoCardSection />

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">About TED</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TED is a nonprofit, nonpartisan organization dedicated to discovering, debating and spreading ideas that spark conversation, deepen understanding and drive meaningful change. Our organization is devoted to curiosity, reason, wonder and the pursuit of knowledge — without an agenda. We welcome people from every discipline and culture who seek a deeper understanding of the world and connection with others, and we invite everyone to engage with ideas and activate them in your community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                TED began in 1984 as a conference where Technology, Entertainment and Design converged, but today it spans a multitude of worldwide communities and initiatives exploring everything from science and business to education, arts and global issues. In addition to the TED Talks curated from our annual conferences and published on TED.com, we produce original podcasts, short video series, animated educational lessons (TED-Ed) and TV programs that are translated into more than 100 languages and distributed via partnerships around the world. Each year, thousands of independently run TEDx events. Through the Audacious Project, TED has helped catalyze $6.6 billion in funding for projects that support bold solutions to the world's most urgent challenges — working to make the world more beautiful, sustainable and just. In 2020, TED launched Countdown, an initiative to accelerate solutions to the climate crisis and mobilize a movement for a net-zero future, and in 2023 TED launched TED Democracy to spark a new kind of conversation focused on realistic pathways towards a more vibrant and equitable future. View a full list of TED’s many programs and initiatives.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Follow TED</h2>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="https://www.facebook.com/TED" target="_blank" rel="noopener noreferrer" className="card-border rounded-lg px-5 py-3 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-sm font-medium inline-flex items-center gap-2">
                  Facebook
                </a>
                <a href="https://www.instagram.com/ted/" target="_blank" rel="noopener noreferrer" className="card-border rounded-lg px-5 py-3 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-sm font-medium inline-flex items-center gap-2">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/company/ted-conferences" target="_blank" rel="noopener noreferrer" className="card-border rounded-lg px-5 py-3 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-sm font-medium inline-flex items-center gap-2">
                  LinkedIn
                </a>
                <a href="https://www.tiktok.com/@tedtoks" target="_blank" rel="noopener noreferrer" className="card-border rounded-lg px-5 py-3 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-sm font-medium inline-flex items-center gap-2">
                  TikTok
                </a>
                <a href="https://twitter.com/TEDTalks" target="_blank" rel="noopener noreferrer" className="card-border rounded-lg px-5 py-3 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-sm font-medium inline-flex items-center gap-2">
                  X
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="inline-block">
              <a
                href="https://www.ted.com/tedx"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary/30 text-primary px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/10 hover:border-primary transition-colors block"
              >
                Learn more about TEDx
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
