'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials({ data = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = data
    .filter(item => item['Name'] && item['Review'])
    .map(item => ({
      name: item['Name'],
      profession: item['Profession'] || '',
      text: item['Review'],
      rating: item['Rating'] || 5,
      photo: item['Photo']?.[0]?.url || null,
    }));

  if (testimonials.length === 0) return null;

  return (
    <section className="testimonials-outer">
      {/* Rounded blue container — does NOT touch left/right edges */}
      <div className="testimonials-box">

        {/* Title inside the blue box */}
        <h2 className="testimonials-title">WHAT OUR CLIENTS SAY</h2>

        {/* Cards */}
        <div className="cards-row">
          {testimonials.map((t, i) => (
            <div key={i} className="tcard">

              {/* Quote + Stars */}
              <div className="card-top">
                <span className="quote-mark">&ldquo;</span>
                <div className="stars-row">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className={s < t.rating ? 'star filled' : 'star'}>★</span>
                  ))}
                </div>
              </div>

              {/* Photo + Review — same row */}
              <div className="card-middle">
                <div className="author-photo-wrap">
                  {t.photo ? (
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={60}
                      height={60}
                      style={{ objectFit: 'cover', borderRadius: '50%', width: '60px', height: '60px' }}
                    />
                  ) : (
                    <div className="author-placeholder">{t.name.charAt(0)}</div>
                  )}
                </div>
                <p className="tcard-text">{t.text}</p>
              </div>

              {/* Name + Profession */}
              <div className="card-bottom">
                <span className="author-name">– {t.name}</span>
                <span className="author-profession">{t.profession}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="dots-row">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
      <style jsx>{`
        /* White page background, the blue box floats inside */
        .testimonials-outer {
          background: #ffffff;
          padding: 1rem 2rem 2rem 2rem;
          font-family: 'Inter', sans-serif;
        }

        /* Rounded blue container with margins from page edges */
        .testimonials-box {
          background: #3b82f6;
          border-radius: 20px;
          max-width: 1150px;
          margin: 0 auto;
          padding: 1.25rem 1.5rem 1rem 1.5rem;
        }

        .testimonials-title {
          text-align: center;
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }

        /* 3-column grid */
        .cards-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1rem;
        }

        /* White card */
        .tcard {
          background: #ffffff;
          border-radius: 12px;
          padding: 0.85rem 1rem 0.75rem 1rem;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .card-top {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .quote-mark {
          font-size: 2rem;
          line-height: 1;
          color: #c5d8ff;
          font-family: Georgia, serif;
          font-weight: 700;
          display: block;
        }
        .stars-row {
          display: flex;
          gap: 2px;
        }
        .star { font-size: 1rem; color: #d0d0d0; }
        .star.filled { color: #f5a623; }

        /* Photo + review side by side */
        .card-middle {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
        }
        .author-photo-wrap {
          flex-shrink: 0;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #dce8ff;
        }
        .author-placeholder {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #0056D2;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
        }
        .tcard-text {
          font-size: 0.82rem;
          color: #333;
          line-height: 1.55;
          margin: 0;
          flex: 1;
        }

        /* Name + profession below */
        .card-bottom {
          display: flex;
          flex-direction: column;
          gap: 1px;
          padding-top: 0.25rem;
          border-top: 1px solid #f0f4ff;
        }
        .author-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #111;
        }
        .author-profession {
          font-size: 0.8rem;
          color: #555;
        }

        /* Dots */
        .dots-row {
          display: flex;
          justify-content: center;
          gap: 7px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          padding: 0;
          transition: all 0.2s ease;
        }
        .dot.active {
          background: #ffffff;
          width: 22px;
          border-radius: 4px;
        }

        @media (max-width: 1024px) {
          .cards-row { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cards-row { grid-template-columns: 1fr; }
          .testimonials-outer { padding: 1rem; }
          .testimonials-box { padding: 1.5rem 1rem 1.25rem; border-radius: 14px; }
        }
      `}</style>
    </section>
  );
}
