import { motion } from "framer-motion";
import Layout from "../components/Layout";
import teamPhoto from "../assets/team-photo.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <img src={teamPhoto} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="relative z-10 section-container h-full flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="tag-pill mb-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20">Our Story</div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-primary-foreground">About SparkClean</h1>
          </motion.div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="section-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold mb-4"
          >
            Our Mission
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground font-body leading-relaxed text-lg mb-20 max-w-3xl"
          >
            SparkClean is a professional home cleaning company based in Bangalore. We started with a simple goal: to make clean homes accessible and affordable for busy families across the city. Our team of trained cleaners is committed to delivering a high-quality service every time.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-display font-bold mb-4"
          >
            Our Team
          </motion.h2>
          <div className="divider-gradient mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: "Suresh", title: "Head Cleaner", color: "from-primary/20 to-primary/5" },
              { name: "Meena", title: "Customer Relations", color: "from-accent/20 to-accent/5" },
              { name: "Ravi", title: "Operations Lead", color: "from-primary/20 to-primary/5" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-elevated text-center overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-b ${member.color} flex items-center justify-center`}>
                  <img
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='50' fill='%23e2e8f0'/%3E%3Ctext x='50' y='58' text-anchor='middle' font-size='36' fill='%2394a3b8' font-family='sans-serif' font-weight='bold'%3E${member.name[0]}%3C/text%3E%3C/svg%3E`}
                    alt=""
                    className="rounded-full w-24 h-24"
                    style={{ boxShadow: "var(--shadow-lg)" }}
                  />
                </div>
                <div className="p-6">
                  <div className="text-xl font-display font-bold mb-1">{member.name}</div>
                  <div className="text-muted-foreground text-sm font-body">{member.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;