import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message!");
  };

  return (
    <Layout>
      <div className="section-light pt-20 pb-12">
        <div className="section-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="tag-pill mb-4">Contact</div>
            <h1 className="page-header">Get In Touch</h1>
            <p className="page-subtitle font-body">Have a question or ready to book? We would love to hear from you.</p>
          </motion.div>
        </div>
      </div>

      <div className="section-padding bg-background">
        <div className="section-container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-body">Name</label>
                    <input type="text" className="w-full border border-input rounded-xl px-4 py-3 bg-background font-body focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 font-body">Email</label>
                    <input type="email" className="w-full border border-input rounded-xl px-4 py-3 bg-background font-body focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 font-body">Phone</label>
                  <input type="tel" className="w-full border border-input rounded-xl px-4 py-3 bg-background font-body focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 font-body">Message</label>
                  <textarea rows={5} className="w-full border border-input rounded-xl px-4 py-3 bg-background font-body focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none" />
                </div>
                <button type="submit" className="btn-primary text-base">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="card-elevated p-8 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div className="font-semibold font-body">Address</div>
                  </div>
                  <div className="text-muted-foreground font-body pl-[52px]">MG Road, Bengaluru - 560 001</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div className="font-semibold font-body">Phone</div>
                  </div>
                  <div className="text-muted-foreground font-body pl-[52px]">+91 98765 43210</div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="font-semibold font-body">Email</div>
                  </div>
                  <div className="text-muted-foreground font-body pl-[52px]">hello@sparkclean.in</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
