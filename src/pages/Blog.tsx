import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import blogClean from "../assets/blog-clean-home.jpg";
import blogDeep from "../assets/blog-deep-clean.jpg";
import blogMonsoon from "../assets/blog-monsoon.jpg";

const posts = [
  {
    slug: "keep-home-clean",
    title: "How to Keep Your Home Clean Between Professional Visits",
    excerpt: "Simple daily habits can keep your home fresh between cleanings. Learn how to maintain a tidy home with just a few minutes each day.",
    img: blogClean,
  },
  {
    slug: "deep-clean-signs",
    title: "5 Signs You Need a Deep Clean",
    excerpt: "Not sure if your home needs a deep clean? Here are five telltale signs that it is time to call in the professionals.",
    img: blogDeep,
  },
  {
    slug: "monsoon-cleaning-tips",
    title: "Cleaning Tips for Bangalore Monsoon Season",
    excerpt: "The monsoon brings unique cleaning challenges to Bangalore homes. Here are practical tips to keep your home clean and dry.",
    img: blogMonsoon,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Blog = () => {
  return (
    <Layout>
      <div className="section-light pt-20 pb-12">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="tag-pill mb-4">Blog</div>
            <h1 className="page-header">Cleaning Tips & Advice</h1>
            <p className="page-subtitle font-body">Expert insights to help you maintain a clean and healthy home.</p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="card-elevated group flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={post.img} alt="" className="img-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-lg font-display font-bold mb-3 leading-snug group-hover:text-primary transition-colors">{post.title}</div>
                  <p className="text-muted-foreground text-sm font-body mb-5 flex-1 leading-relaxed">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="text-primary font-semibold text-sm font-body hover:underline inline-flex items-center gap-1 group/link">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover/link:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
