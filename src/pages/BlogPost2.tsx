import { motion } from "framer-motion";
import Layout from "../components/Layout";
import blogImg from "../assets/blog-deep-clean.jpg";

const BlogPost2 = () => {
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
              <h1 className="text-3xl sm:text-4xl font-display font-bold leading-tight">5 Signs You Need a Deep Clean</h1>
            </div>
          </motion.div>

          <div className="space-y-12">
            {[
              { title: "Sign 1: There is a Persistent Smell", body: "If your home has a lingering smell even after regular cleaning, it is a sign that dirt and bacteria have built up in places your routine clean does not reach. Deep cleaning targets areas like under furniture, inside appliances, and grout lines where odour-causing bacteria thrive." },
              { title: "Sign 2: Dust is Building Up Quickly", body: "If surfaces are dusty again within a day or two of cleaning, there may be a build-up in air vents, on ceiling fans, or behind large furniture. A deep clean addresses these hidden dust sources and reduces how quickly surfaces get dirty again." },
              { title: "Sign 3: Grout and Tiles Look Discoloured", body: "Bathroom and kitchen tiles can look clean on the surface but have discoloured grout that regular mopping does not fix. Professional deep cleaning uses specialist tools to restore grout to its original colour." },
              { title: "Sign 4: You Have Not Cleaned Behind Appliances", body: "The area behind your refrigerator, washing machine, and oven accumulates dust, grease, and debris over time. If you cannot remember the last time you cleaned back there, it is overdue for a deep clean." },
              { title: "Sign 5: Guests Are Coming", body: "Before hosting a family gathering or having guests stay, a deep clean ensures every room is at its best. This is one of the most common reasons people in Bangalore book a professional deep cleaning service." },
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

export default BlogPost2;
