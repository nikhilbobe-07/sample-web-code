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
    price: "From ₹799",
    img: serviceRegular,
  },
  {
    title: "Deep Cleaning",
    desc: "Deep cleaning is a thorough top-to-bottom clean of your entire home. Perfect for seasonal cleaning or move-in preparation.",
    price: "From ₹1,999",
    img: serviceDeep,
  },
  {
    title: "Move-in/Move-out Cleaning",
    desc: "We ensure your new home is spotless before you move in. Our team handles every corner for a complete clean.",
    price: "From ₹2,499",
    img: serviceMovein,
  },
  {
    title: "Sofa & Carpet Cleaning",
    desc: "Professional sofa and carpet cleaning removes stains and odours. We use safe cleaning solutions for all fabric types.",
    price: "From ₹599 per item",
    img: serviceSofa,
  },
  {
    title: "Office Cleaning",
    desc: "Keep your workplace clean and professional with our office cleaning service. Available for daily, weekly, or monthly contracts.",
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

      {/* FAQ Section */}
      <div className="faq-section bg-white p-6 rounded-lg shadow-md mt-12">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="faq-item mb-4">
          <h3 className="text-lg font-semibold">What services do you offer?</h3>
          <p className="text-gray-700">We offer a variety of cleaning services, including residential, commercial, and specialized cleaning.</p>
        </div>
        <div className="faq-item mb-4">
          <h3 className="text-lg font-semibold">How do I book a service?</h3>
          <p className="text-gray-700">You can book a service by visiting our website and filling out the booking form or by calling us directly.</p>
        </div>
        <div className="faq-item mb-4">
          <h3 className="text-lg font-semibold">What areas do you service?</h3>
          <p className="text-gray-700">We service several areas, including [City A], [City B], and surrounding regions.</p>
        </div>
        <div className="faq-item mb-4">
          <h3 className="text-lg font-semibold">What are your payment options?</h3>
          <p className="text-gray-700">We accept major credit cards, PayPal, and direct bank transfers.</p>
        </div>
        <div className="faq-item mb-4">
          <h3 className="text-lg font-semibold">Do you provide guarantees for your services?</h3>
          <p className="text-gray-700">Yes, we offer a satisfaction guarantee for all our cleaning services.</p>
        </div>
      </div>

      <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a variety of cleaning services, including residential, commercial, and specialized cleaning."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book a service by visiting our website and filling out the booking form or by calling us directly."
            }
          },
          {
            "@type": "Question",
            "name": "What areas do you service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We service several areas, including [City A], [City B], and surrounding regions."
            }
          },
          {
            "@type": "Question",
            "name": "What are your payment options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept major credit cards, PayPal, and direct bank transfers."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide guarantees for your services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a satisfaction guarantee for all our cleaning services."
            }
          }
        ]
      }
      `}
      </script>
    </Layout>
  );
};

export default Services;