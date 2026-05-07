'use client';

export default function Testimonials({ data = [] }) {
  console.log("Testimonials Data from Airtable:", data);
  const testimonials = data
    .filter(item => item['Client Name'])
    .map(item => ({
      name: item['Client Name'],
      role: item['Company'],
      text: item['Testimonial Text'],
      rating: item['Rating'] || 5
    }));

  if (testimonials.length === 0) return null;

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-small">WHAT OUR CLIENTS SAY</span>
          <h2>Trusted By Industry Leaders</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="rating">{'★'.repeat(t.rating)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonial-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <style jsx>{`
        .testimonials { background: var(--primary); color: white; }
        .badge-small { color: rgba(255, 255, 255, 0.8); font-weight: 700; font-size: 0.8rem; letter-spacing: 0.1em; margin-bottom: 0.5rem; display: block; }
        .testimonials h2 { color: white; }
        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .testimonials { padding: 4rem 0; }
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .testimonial-card { padding: 1.5rem; }
          .testimonial-text { font-size: 1rem; }
          .testimonials h2 { font-size: 1.8rem; }
        }
      `}</style>
    </section>
  );
}
