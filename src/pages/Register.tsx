import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration submitted! We'll be in touch soon.");
    setForm({ name: "", email: "", phone: "", reason: "" });
  };

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Join Us</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl">Register</h1>
            <p className="text-muted-foreground mt-4">
              Secure your spot at TEDxICEAS — What Shapes Us.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
              { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              { key: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
            ].map((field) => (
              <div key={field.key}>
                <label className="text-sm font-medium mb-2 block">{field.label}</label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-card card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-medium mb-2 block">Why do you want to attend?</label>
              <textarea
                placeholder="Tell us what excites you about TEDxICEAS..."
                rows={4}
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                className="w-full bg-card card-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Submit Registration
            </button>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
