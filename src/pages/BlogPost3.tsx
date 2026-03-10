import { motion } from "framer-motion";
import Layout from "../components/Layout";
import blogImg from "../assets/blog-monsoon.jpg";

const BlogPost3 = () => {
  return (
    <Layout>
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img src={blogImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="section-padding bg-background -mt-20 relative z-10">
        <div className="section-container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="card-glass p-8 sm:p-12 mb-12">
              <h1 className="text-3xl sm:text-4xl font-display font-bold leading-tight">Cleaning Tips for Bangalore Monsoon Season</h1>
            </div>
          </motion.div>

          <div className="space-y-12">
            {[
              { title: "Managing Mud and Moisture at Entrances", body: "The monsoon season brings mud, wet shoes, and damp umbrellas into your home every day. Placing a thick doormat at every entrance and wiping floors in the hallway daily prevents mud from spreading through the house. Consider keeping a small towel rack near the door for wet items." },
              { title: "Preventing Mould in Bathrooms and Kitchens", body: "High humidity during the Bangalore monsoon creates ideal conditions for mould in bathrooms and behind kitchen cabinets. Ensure proper ventilation, wipe down wet surfaces after use, and check corners and grout for early signs of mould growth. A professional clean during or after monsoon season can remove mould that has already developed." },
              { title: "Keeping Upholstery and Carpets Fresh", body: "Upholstery and carpets absorb moisture during monsoon and can develop a musty odour. Avoid placing wet items on sofas, use a dehumidifier if available, and consider a professional upholstery or carpet clean at the end of monsoon season to restore freshness." },
              { title: "Dealing with Pest Concerns", body: "The monsoon season increases pest activity in Bangalore homes. Keeping surfaces clean and dry, sealing food containers, and ensuring your kitchen is cleaned thoroughly reduces the risk of pest infestations. Pay special attention to areas under the sink and behind the refrigerator." },
            ].map((section, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">{section.title}</h2>
                <div className="divider-gradient mb-6" />
                <p className="text-muted-foreground font-body leading-relaxed text-lg">{section.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost3;
