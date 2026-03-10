import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section-dark text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-2xl font-display font-bold">SparkClean</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed font-body mb-6">
              Professional Home Cleaning Services in Bangalore
            </p>
            <div className="space-y-3 text-sm text-primary-foreground/60 font-body">
              <div>123 MG Road Bangalore 560001</div>
              <div className="flex items-center gap-2">
                {/* Phone as SVG icon only — number NOT as text */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>hello@sparkclean.in</div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-5 font-body">Quick Links</div>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60 font-body">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
              <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
              <Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-5 font-body">Company</div>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60 font-body">
              <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link to="/areas" className="hover:text-primary transition-colors">Service Areas</Link>
              <Link to="/contact" className="hover:text-primary transition-colors text-xs opacity-70">Contact Us</Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40 mb-5 font-body">Follow Us</div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary/30 transition-colors flex items-center justify-center" aria-label="Facebook">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z'/%3E%3C/svg%3E" alt="" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary/30 transition-colors flex items-center justify-center" aria-label="Instagram">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='2' y='2' width='20' height='20' rx='5' ry='5'/%3E%3Cpath d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z'/%3E%3Cline x1='17.5' y1='6.5' x2='17.51' y2='6.5'/%3E%3C/svg%3E" alt="" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary/30 transition-colors flex items-center justify-center" aria-label="Twitter">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'/%3E%3C/svg%3E" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40 font-body">
          Copyright SparkClean 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
