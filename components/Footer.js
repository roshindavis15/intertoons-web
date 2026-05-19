'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import styles from './Footer.module.css';

export default function Footer({ awardsData = [] }) {
  const awards = (awardsData || [])
    .sort((a, b) => {
      const orderA = Number(a['sort order'] || a['Sort Order'] || a['Display Order'] || 0);
      const orderB = Number(b['sort order'] || b['Sort Order'] || b['Display Order'] || 0);
      return orderA - orderB;
    })
    .map(item => ({
      title: item.Title || item.title || item.Name || item.Award || "",
      icon: item.Icon?.[0]?.url || item.icon?.[0]?.url || null
    }));

  return (
    <footer className={styles['footer']}>
      <div className={styles['container']}>
        <div className={styles['footer-grid']}>
          <div className={styles['footer-brand']}>
            <div className={`${styles['logo']} mb-4`}>
              <Image
                src="/images/intertoonslogo.png"
                alt="Intertoons Logo"
                width={180}
                height={45}
                className={styles['footer-logo-img']}
              />
            </div>
            <p className={styles['footer-desc']}>
              We help businesses grow with AI, automation and digital solutions that create real impact.
            </p>
            <div className={styles['social-links']}>
              <Link href="https://www.facebook.com/intertoons" target="_blank" className={styles['social-icon']}>
                <FaFacebookF />
              </Link>
              <Link href="https://in.linkedin.com/company/intertoons" target="_blank" className={styles['social-icon']}>
                <FaLinkedinIn />
              </Link>
              <Link href="https://www.instagram.com/intertoon.s" target="_blank" className={styles['social-icon']}>
                <FaInstagram />
              </Link>
              <Link href="https://x.com/intertoons" target="_blank" className={styles['social-icon']}>
                <FaXTwitter />
              </Link>
            </div>

            {/* Awards & Recognition below social links */}
            {awards && awards.length > 0 && (
              <div className={styles['footer-awards-brand-block']}>
                <h5 className={styles['footer-awards-brand-title']}>Awards & Recognitions</h5>
                <div className={styles['footer-awards-brand-list']}>
                  {awards.map((award, idx) => (
                    <div key={idx} className={styles['footer-award-brand-badge']} title={award.title}>
                      {award.icon ? (
                        <img src={award.icon} alt={award.title} className={styles['footer-award-brand-img']} />
                      ) : (
                        <span className={styles['footer-award-brand-fallback']}>{award.title}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={styles['footer-links']}>
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

          <div className={styles['footer-links']}>
            <h4>Our Services</h4>
            <ul>
              <li>AI Development</li>
              <li>AI Automations</li>
              <li>Shopify Developers</li>
              <li>E-commerce Development</li>
              <li>Mobile App Development</li>
            </ul>
          </div>

          <div className={styles['footer-links']}>
            <h4>Our Products</h4>
            <ul>
              <li>Travel Agency Portal</li>
              <li>Car Rental System</li>
              <li>Food Delivery Apps</li>
              <li>AI Chatbots</li>
            </ul>
          </div>

          <div className={styles['footer-links']}>
            <h4>Contact Us</h4>
            <ul className={styles['contact-info']}>
              <li className={styles['company-name']}>Intertoons Internet Services Pvt.Ltd.</li>
              <li><span className={styles['icon']}>📍</span> <span>First Floor, Sanjo Square, Ashariparampu Road, Edapally, Kochi, Kerala, INDIA 682024</span></li>
              <li><span className={styles['icon']}>📞</span> <span>+91 79078 06606</span></li>
              <li><span className={styles['icon']}>✉️</span> <span>support@intertoons.com</span></li>
            </ul>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          <p>&copy; {new Date().getFullYear()} Intertoons. All Rights Reserved.</p>
          <div className={styles['footer-legal']}>
            <Link href="/privacy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
