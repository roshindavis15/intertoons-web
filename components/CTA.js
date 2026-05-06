'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-content">
            <div className="cta-icon">🚀</div>
            <div className="cta-text">
              <h3>Let's Build Something Amazing Together!</h3>
              <p>Share your idea and we'll turn it into a powerful digital solution.</p>
            </div>
          </div>
          <Link href="/contact" className="btn btn-white">
            Request a Quote <span className="arrow">→</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .cta {
          padding-bottom: 5rem;
          background: var(--background);
        }
        .cta-banner {
          background: linear-gradient(90deg, var(--primary) 0%, #3B82F6 100%);
          padding: 3rem 4rem;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: white;
          box-shadow: var(--shadow-lg);
        }
        .cta-content {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .cta-icon {
          font-size: 3rem;
        }
        .cta-text h3 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: white;
        }
        .cta-text p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
        }
        .btn-white {
          background: white;
          color: var(--primary);
        }
        .btn-white:hover {
          background: #f0f0f0;
          transform: translateY(-2px);
        }
        .arrow { margin-left: 0.5rem; }

        @media (max-width: 968px) {
          .cta-banner {
            flex-direction: column;
            text-align: center;
            padding: 3rem 2rem;
            gap: 2rem;
          }
          .cta-content {
            flex-direction: column;
            gap: 1rem;
          }
          .cta-text h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
