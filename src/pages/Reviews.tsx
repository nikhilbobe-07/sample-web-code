import { motion } from "framer-motion";
import Layout from "../components/Layout";

const reviews = [
  { name: "Rahul", text: "The team was very professional and efficient. My home looks spotless." },
  { name: "Sunita", text: "Excellent service. I have been using SparkClean for 3 months now and always satisfied." },
  { name: "Kiran", text: "They cleaned every corner of my flat perfectly. Highly recommend." },
  { name: "Deepa", text: "Very punctual and hardworking team. Will definitely use again." },
  { name: "Arjun", text: "Great value for money. The house was sparkling clean after the deep clean." },
  { name: "Meena", text: "Friendly staff and thorough cleaning. Happy with the results." },
  { name: "Suresh", text: "Used the move-out cleaning service. Everything was perfect for the handover." },
  { name: "Pooja", text: "The sofa cleaning service was outstanding. Removed stains I thought were permanent." },
];

const colors = ["bg-primary/10 text-primary", "bg-accent/20 text-accent-foreground", "bg-secondary text-secondary-foreground", "bg-primary/10 text-primary"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

const Reviews = () => {
  return (
    <Layout>
      <div className="section-light pt-20 pb-12">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="tag-pill mb-4">Reviews</div>
            <h1 className="page-header">Customer Reviews</h1>
            <p className="page-subtitle font-body">Hear from real customers across Bangalore who trust SparkClean for their homes.</p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="p-7 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary/15 mb-3">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
                </svg>
                <p className="text-muted-foreground italic font-body leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-body text-sm ${colors[i % colors.length]}`}>
                    {r.name[0]}
                  </div>
                  <div className="font-semibold text-foreground font-body">{r.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
