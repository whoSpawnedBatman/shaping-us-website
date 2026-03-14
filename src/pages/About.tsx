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
              <h2 className="font-display font-semibold text-2xl mb-4">About TED</h2>
              <p className="text-muted-foreground leading-relaxed">
                TED is a nonprofit organization devoted to Ideas Worth Spreading, often in the form of short talks delivered by leading thinkers and doers. Many of these talks are given at TED conferences, including the annual TED Conference and TEDGlobal. TED talks are shared freely online at TED.com and through the TED app, reaching millions of viewers worldwide.
              </p>
            </div>

            <div>
              <h2 className="font-display font-semibold text-2xl mb-4">Follow TED</h2>
              <div className="flex gap-4 items-center">
                <a href="https://www.instagram.com/ted/" target="_blank" rel="noopener noreferrer" className="card-border rounded-lg px-5 py-3 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-sm font-medium inline-flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </a>
                <a href="https://twitter.com/TEDTalks" target="_blank" rel="noopener noreferrer" className="card-border rounded-lg px-5 py-3 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-sm font-medium inline-flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  Twitter
                </a>
                <a href="https://www.youtube.com/ted" target="_blank" rel="noopener noreferrer" className="card-border rounded-lg px-5 py-3 bg-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors text-sm font-medium inline-flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
                  YouTube
                </a>
              </div>
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
