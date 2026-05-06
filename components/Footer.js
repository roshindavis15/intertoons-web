'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo mb-4">
              <span className="logo-it">IT</span>
              <div className="logo-text">
                <span className="brand">INTERTOONS</span>
                <span className="tagline">IMAGINATION MEETS INNOVATION</span>
              </div>
            </div>
            <p className="footer-desc">
              We help businesses grow with AI, automation and digital solutions that create real impact.
            </p>
            <div className="social-links">
              {/* Social icons placeholders */}
              <div className="social-icon">f</div>
              <div className="social-icon">in</div>
              <div className="social-icon">ig</div>
              <div className="social-icon">yt</div>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/industries">Industries</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>AI Development</li>
              <li>AI Automations</li>
              <li>Shopify Developers</li>
              <li>E-commerce Development</li>
              <li>Mobile App Development</li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Our Products</h4>
            <ul>
              <li>Travel Agency Portal</li>
              <li>Car Rental System</li>
              <li>Food Delivery Apps</li>
              <li>AI Chatbots</li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>📞 +91 98765 43210</li>
              <li>✉️ hello@intertoons.com</li>
              <li>🌐 www.intertoons.com</li>
              <li>📍 Gurugram, India</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Intertoons. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #fdfdfd;
          padding: 5rem 0 2rem;
          border-top: 1px solid var(--border);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .footer-brand .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-it {
          background: var(--primary);
          color: white;
          font-weight: 800;
          padding: 0.2rem 0.4rem;
          border-radius: 4px;
        }
        .brand { font-weight: 800; font-size: 1.1rem; }
        .tagline { font-size: 0.5rem; display: block; }
        .footer-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          max-width: 250px;
        }
        .social-links {
          display: flex;
          gap: 0.75rem;
        }
        .social-icon {
          width: 32px;
          height: 32px;
          background: var(--bg-soft);
          border: 1px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        ul li {
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        .contact-info li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .footer-legal {
          display: flex;
          gap: 1rem;
        }
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
