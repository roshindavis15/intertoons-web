'use client';

import Link from 'next/link';
import { FaRocket } from 'react-icons/fa';

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-content">
            <div className="cta-icon">
              <FaRocket />
            </div>
            <div className="cta-text">
              <h3>Let's Build Something Amazing Together!</h3>
              <p>Share your idea and we'll turn it into a powerful digital solution.</p>
            </div>
          </div>
          <Link href="/contact" className="btn-white">
            Request for a Quote <span className="arrow">→</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .cta {
          padding: 0 0 3rem 0;
          background: #ffffff;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .cta-banner {
          background: linear-gradient(90deg, #0044cc 0%, #3B82F6 100%);
          padding: 1.25rem 2.5rem;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }
        .cta-content {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .cta-icon {
          font-size: 2.8rem;
          color: #ffffff;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .cta-text h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.2rem 0;
          white-space: nowrap;
        }
        .cta-text p {
          color: rgba(255, 255, 255, 0.88);
          font-size: 0.88rem;
          margin: 0;
        }
        .btn-white {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ffffff;
          color: #111111;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.6rem 1.5rem;
          border-radius: 8px;
          border: 2px solid #ffffff;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .btn-white:hover {
          background: #f0f4ff;
          transform: translateY(-1px);
        }
        .arrow {
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
            gap: 1.25rem;
          }
          .cta-content {
            flex-direction: column;
            gap: 0.75rem;
          }
          .cta-text h3 { white-space: normal; font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
}
