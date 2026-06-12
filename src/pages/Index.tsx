import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import heroImage from "../assets/hero-living-room.jpg";
import serviceRegular from "../assets/service-regular.jpg";
import serviceDeep from "../assets/service-deep.jpg";
import serviceMovein from "../assets/service-movein.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Index = () => {
  const services = [
    { name: "Regular Cleaning", desc: "Keep your home fresh and tidy with our regular cleaning service tailored for busy families.", img: serviceRegular },
    { name: "Deep Cleaning", desc: "A thorough top-to-bottom clean that reaches every corner of your home for a fresh start.", img: serviceDeep },
    { name: "Move-in/Move-out Cleaning", desc: "Ensure your new home is spotless before you move in, or leave your old home in perfect condition.", img: serviceMovein },
  ];

  return (
    <Layout>
      <head>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "LocalBusiness",
              "name": "SparkClean",
              "image": "https://sparkclean-geo-aeo.lovable.app/logo.png",
              "@id": "https://sparkclean-geo-aeo.lovable.app",
              "url": "https://sparkclean-geo-aeo.lovable.app",
              "telephone": "+1234567890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Cleaning St.",
                "addressLocality": "Clean City",
                "addressRegion": "CC",
                "postalCode": "12345",
                "addressCountry": "US"
              },
              "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
              "priceRange": "$$",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7128,
                "longitude": -74.0060
              },
              "sameAs": [
                "https://www.facebook.com/sparkclean",
                "https://twitter.com/sparkclean"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Service",
              "serviceType": "Residential Cleaning",
              "provider": {
                "@type": "LocalBusiness",
                "name": "SparkClean",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Cleaning St.",
                  "addressLocality": "Clean City",
                  "addressRegion": "CC",
                  "postalCode": "12345",
                  "addressCountry": "US"
                }
              },
              "areaServed": {
                "@type": "Place",
                "name": "Clean City"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What cleaning services do you offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer residential and commercial cleaning services."
                }
              }, {
                "@type": "Question",
                "name": "How can I book a cleaning service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book our services via our website or by calling us directly."
                }
              }]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "How do I schedule a cleaning service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can schedule a cleaning service through our website's booking page or by calling our customer service hotline at (123) 456-7890."
                }
              }, {
                "@type": "Question",
                "name": "What areas do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We currently provide services in the greater metropolitan area. Please check our service area map for more details."
                }
              }]
            }
          `}
        </script>
      </head>
      <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Living room with modern decor and furniture" className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-hero-overlay/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/90 via-transparent to-hero-overlay/30" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-foreground/10 text-primary-foreground/90 border border-primary-foreground/20 backdrop-blur-sm font-body">
              Professional Home Cleaning in Bangalore
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-[1.1]"
          >
            Welcome to SparkClean
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl sm:text-2xl text-primary-foreground/80 mb-10 font-body font-light"
          >
            Your trusted cleaning partner in Bangalore
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary text-lg">
              Book Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/services" className="btn-outline text-lg">
              See Our Services
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="section-padding bg-background relative">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0} className="tag-pill mb-4 mx-auto">Our Services</motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-display font-bold mb-4">Our Services</motion.h2>
            <motion.div variants={fadeUp} custom={2} className="divider-gradient mx-auto" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="card-elevated group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={s.img} alt={`${s.name} service with detailed cleaning`} className="img-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xl font-display font-bold mb-2">{s.name}</div>
                  <div className="text-muted-foreground text-sm font-body mb-4 leading-relaxed">{s.desc}</div>
                  <Link to="/services" className="text-primary font-semibold text-sm font-body hover:underline inline-flex items-center gap-1 group/link">
                    Learn More
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

      <div className="section-padding section-light">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0} className="tag-pill mb-4 mx-auto">Why Us</motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-display font-bold mb-4">Why Choose Us</motion.h2>
            <motion.div variants={fadeUp} custom={2} className="divider-gradient mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "🏆", text: "We are the best cleaning service in the city" },
              { icon: "👥", text: "Our team is highly trained and professional" },
              { icon: "✨", text: "We use quality products for every job" },
              { icon: "💚", text: "Customer satisfaction is our top priority" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <span className="text-foreground font-body text-base leading-relaxed">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0} className="tag-pill mb-4 mx-auto">Testimonials</motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-display font-bold mb-4">What Our Customers Say</motion.h2>
            <motion.div variants={fadeUp} custom={2} className="divider-gradient mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul", text: "SparkClean did a fantastic job. Very happy with the service." },
              { name: "Priya", text: "The team was punctual and thorough. Will definitely book again." },
              { name: "Amit", text: "Good service overall. The house looked great after they left." },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative p-8 rounded-2xl bg-card border border-border/50"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-primary/15 mb-4">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
                </svg>
                <p className="text-muted-foreground italic mb-6 font-body leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-body text-sm">
                    {t.name[0]}
                  </div>
                  <div className="font-semibold text-foreground font-body">{t.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0} className="tag-pill mb-4 mx-auto">FAQ</motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl font-display font-bold mb-4">Frequently Asked Questions</motion.h2>
            <motion.div variants={fadeUp} custom={2} className="divider-gradient mx-auto" />
          </motion.div>

          <div className="faq-section">
            <div className="faq-item">
              <h3 className="cursor-pointer text-primary font-semibold">How do I schedule a cleaning service?</h3>
              <p className="text-muted-foreground font-body leading-relaxed">You can schedule a cleaning service through our website's booking page or by calling our customer service hotline at (123) 456-7890.</p>
            </div>
            <div className="faq-item">
              <h3 className="cursor-pointer text-primary font-semibold">What areas do you service?</h3>
              <p className="text-muted-foreground font-body leading-relaxed">We currently provide services in the greater metropolitan area. Please check our service area map for more details.</p>
            </div>
            <div className="faq-item">
              <h3 className="cursor-pointer text-primary font-semibold">What certifications do your team members have?</h3>
              <p className="text-muted-foreground font-body leading-relaxed">Our team members are certified in various cleaning techniques and safety protocols, ensuring the highest quality of service.</p>
            </div>
            <div className="faq-item">
              <h3 className="cursor-pointer text-primary font-semibold">Can I request a specific team member for my cleaning?</h3>
              <p className="text-muted-foreground font-body leading-relaxed">Yes, you can request a specific team member when booking your service, and we will do our best to accommodate your request.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;