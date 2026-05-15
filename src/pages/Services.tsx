import { motion } from "framer-motion";
import Layout from "../components/Layout";
import serviceRegular from "../assets/service-regular.jpg";
import serviceDeep from "../assets/service-deep.jpg";
import serviceMovein from "../assets/service-movein.jpg";
import serviceSofa from "../assets/service-sofa.jpg";
import serviceOffice from "../assets/service-office.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const services = [
  {
    title: "Regular Cleaning",
    desc: "Our regular cleaning service keeps your home fresh and tidy. We handle dusting, vacuuming, mopping, and surface cleaning.",
    explanatory: "Our regular cleaning service is designed to maintain a consistently clean and organized home environment. With our trained professionals, we ensure that every corner is attended to, allowing you to enjoy a stress-free living space. Regular cleaning not only enhances the aesthetic appeal of your home but also contributes to a healthier atmosphere for you and your family.",
    price: "From ₹799",
    img: serviceRegular,
  },
  {
    title: "Deep Cleaning",
    desc: "Deep cleaning is a thorough top-to-bottom clean of your entire home. Perfect for seasonal cleaning or move-in preparation.",
    explanatory: "Our deep cleaning service goes beyond the surface to provide a comprehensive clean of your entire home. This service is ideal for those looking to refresh their space, especially before moving in or after a long period of neglect. We meticulously clean every nook and cranny, ensuring that your home is not only clean but also sanitized and ready for you to enjoy.",
    price: "From ₹1,999",
    img: serviceDeep,
  },
  {
    title: "Move-in/Move-out Cleaning",
    desc: "We ensure your new home is spotless before you move in. Our team handles every corner for a complete clean.",
    explanatory: "Our move-in/move-out cleaning service is tailored to make your transition as smooth as possible. We focus on delivering a spotless environment in your new home or ensuring that your previous residence is left in pristine condition for the next occupants. This service includes thorough cleaning of all surfaces, appliances, and hidden areas, providing peace of mind during your moving process.",
    price: "From ₹2,499",
    img: serviceMovein,
  },
  {
    title: "Sofa & Carpet Cleaning",
    desc: "Professional sofa and carpet cleaning removes stains and odours. We use safe cleaning solutions for all fabric types.",
    explanatory: "Our sofa and carpet cleaning service is designed to restore the beauty of your upholstery and flooring. Using specialized equipment and eco-friendly cleaning solutions, we effectively eliminate stains, odors, and allergens. This service not only enhances the appearance of your furniture and carpets but also extends their lifespan, making it a worthwhile investment for a healthier home.",
    price: "From ₹599 per item",
    img: serviceSofa,
  },
  {
    title: "Office Cleaning",
    desc: "Keep your workplace clean and professional with our office cleaning service. Available for daily, weekly, or monthly contracts.",
    explanatory: "Our office cleaning service ensures that your workplace remains a clean and productive environment. We offer flexible cleaning schedules tailored to your needs, whether you require daily, weekly, or monthly services. A clean office not only boosts employee morale but also creates a positive impression on clients and visitors, making it essential for any business.",
    price: "Custom quote",
    img: serviceOffice,
    hasSubheading: true,
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Page header with gradient bg */}
      <div className="section-light pt-20 pb-12">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="tag-pill mb-4">What We Do</div>
            <h1 className="page-header">Our Cleaning Services</h1>
            <p className="page-subtitle font-body">From routine tidying to deep-cleaning transformations, we offer a complete range of professional cleaning services across Bangalore.</p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="section-container">
          <div className="space-y-20">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                custom={0}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-xl)" }}>
                      <img src={s.img} alt="" className="w-full h-72 sm:h-96 object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                  <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">{s.title}</h2>
                    <div className="divider-gradient mb-6" />
                    <div className="text-muted-foreground font-body text-base leading-relaxed mb-6">{s.desc}</div>
                    <div className="text-muted-foreground font-body text-base leading-relaxed mb-6">{s.explanatory}</div>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary font-bold font-body text-lg">
                      {s.price}
                    </div>
                    {s.hasSubheading && (
                      <h4 className="text-lg font-display font-semibold mt-6 text-foreground/80">Contact us for office pricing</h4>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;