import { motion } from "framer-motion";
import Layout from "../components/Layout";
import blogImg from "../assets/blog-clean-home.jpg";

const BlogPost1 = () => {
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
              <h1 className="text-3xl sm:text-4xl font-display font-bold leading-tight">How to Keep Your Home Clean Between Professional Visits</h1>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Daily Habits That Make a Difference</h2>
              <div className="divider-gradient mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed text-lg">Keeping your home clean between professional visits does not have to be difficult. Simple daily habits like wiping kitchen counters after cooking, doing a quick sweep of high-traffic areas, and putting things back in their place can make a significant difference to how clean your home feels throughout the week.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Focus on High-Traffic Areas</h2>
              <div className="divider-gradient mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed text-lg">The entrance, kitchen, and bathrooms are the areas that get dirty the fastest. Spending just ten minutes each day on these zones will help maintain cleanliness. Keep a small cleaning caddy in each bathroom with basic supplies so you can do a quick wipe-down without having to fetch supplies from another room.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">Create a Simple Weekly Routine</h2>
              <div className="divider-gradient mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed text-lg">A short weekly routine of around 30 minutes can prevent dirt and clutter from building up. Assign one room per day, rotate tasks like vacuuming and mopping, and try to involve all family members. Consistency is more effective than occasional marathon cleaning sessions.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">When to Call the Professionals</h2>
              <div className="divider-gradient mb-6" />
              <p className="text-muted-foreground font-body leading-relaxed text-lg">Even with regular maintenance, some tasks are best left to professionals. Deep cleaning of upholstery, inside appliances, and hard-to-reach areas requires specialist equipment and expertise. Booking a professional clean every few weeks will keep your home in excellent condition year round.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost1;
