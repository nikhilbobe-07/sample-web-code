import { motion } from "framer-motion";
import Layout from "../components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const packages = [
  {
    name: "Basic Package",
    emoji: "🏠",
    body: "Our basic package costs rupees 999 and includes a standard clean of up to two bedrooms, one bathroom, kitchen surfaces, and living room. Cleaning time is approximately two hours. This package is suitable for small apartments and studio flats.",
  },
  {
    name: "Standard Package",
    emoji: "⭐",
    body: "The standard package is priced at rupees 1799 and covers up to three bedrooms, two bathrooms, full kitchen cleaning including appliances, living and dining areas. Cleaning time is approximately three to four hours. Ideal for medium-sized homes and 2BHK flats.",
  },
  {
    name: "Premium Package",
    emoji: "💎",
    body: "Our premium package costs rupees 2999 and includes everything in the standard package plus inside-fridge cleaning, oven cleaning, balcony sweep, and window cleaning. Cleaning time is four to six hours. Best suited for large homes and 3BHK or larger flats.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      <div className="section-light pt-20 pb-12">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="tag-pill mb-4">Packages</div>
            <h1 className="page-header">Cleaning Service Packages</h1>
            <p className="page-subtitle font-body">Choose the package that fits your home and budget. All packages include professional-grade cleaning supplies.</p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-elevated p-8 flex flex-col"
              >
                <div className="text-4xl mb-4">{pkg.emoji}</div>
                <h2 className="text-2xl font-display font-bold mb-2">{pkg.name}</h2>
                <div className="divider-gradient mb-6" />
                <p className="text-muted-foreground font-body leading-relaxed flex-1">{pkg.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
