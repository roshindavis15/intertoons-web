'use client';

export default function Testimonials({ data = [] }) {
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
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 3rem; }
        .testimonial-card { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); padding: 2.5rem; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.2); transition: var(--transition); }
        .testimonial-card:hover { background: rgba(255, 255, 255, 0.15); transform: translateY(-5px); }
        .rating { color: #FFD700; font-size: 1.2rem; margin-bottom: 1rem; }
        .testimonial-text { font-size: 1.1rem; line-height: 1.6; margin-bottom: 2rem; font-style: italic; color: rgba(255, 255, 255, 0.9); }
        .testimonial-author { display: flex; align-items: center; gap: 1rem; }
        .author-avatar { width: 50px; height: 50px; background: rgba(255, 255, 255, 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
        .author-name { font-weight: 700; font-size: 1rem; }
        .author-role { font-size: 0.85rem; color: rgba(255, 255, 255, 0.7); }
        .testimonial-dots { display: flex; justify-content: center; gap: 0.5rem; }
        .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255, 255, 255, 0.3); }
        .dot.active { background: white; width: 24px; border-radius: 4px; }
      `}</style>
    </section>
  );
}
