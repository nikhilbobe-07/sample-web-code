import { motion } from "framer-motion";
import Layout from "../components/Layout";
import bangaloreCity from "../assets/bangalore-city.jpg";

const areas = ["Koramangala", "Indiranagar", "Whitefield", "HSR Layout", "Marathahalli", "Electronic City"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

const Areas = () => {
  return (
    <Layout>
      {/* Hero banner */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <img src={bangaloreCity} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative z-10 section-container h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="tag-pill mb-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20">Locations</div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">Areas We Serve in Bangalore</h1>
          </motion.div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="section-container">
          <p className="text-muted-foreground font-body text-lg mb-14 max-w-2xl">SparkClean provides professional cleaning services across Bangalore.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, i) => (
              <motion.div
                key={area}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-elevated p-8 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-display font-bold">{area} Cleaning Services</h2>
                </div>
                <div className="space-y-3 text-muted-foreground font-body leading-relaxed">
                  <p>SparkClean provides professional home cleaning services in {area}.</p>
                  <p>Our team is available 7 days a week for all types of cleaning in {area}.</p>
                  <p>Book our cleaning services in {area} today.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Areas;
