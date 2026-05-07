'use client';

import Link from 'next/link';

export default function Services({ data = [] }) {
  console.log("Services Data from Airtable:", data);
  // Map icons based on service name if not provided
  const getIcon = (name) => {
    if (!name) return '⚙️';
    if (name.includes('AI')) return '🧠';
    if (name.includes('Shopify')) return '🛍️';
    if (name.includes('E-commerce')) return '🛒';
    if (name.includes('Mobile')) return '📱';
    return '⚙️';
  };

  const services = data
    .filter(item => item['Service Name']) // Only show what is in Airtable
    .map(item => ({
      title: item['Service Name'],
      desc: item['Description'],
      icon: getIcon(item['Service Name'])
    }));

  if (services.length === 0) return null; // Don't show the section if no data

  return (
    <section className="section services">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-small">WHAT WE DO</span>
          <h2>Powerful Solutions For Your Business</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="card-footer">
                <span className="arrow-circle">→</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/services" className="btn btn-primary">
            View All Services
          </Link>
        </div>
      </div>

      <style jsx>{`
        .services { background: #fdfdfd; }
        .badge-small { color: var(--primary); font-weight: 700; font-size: 0.8rem; letter-spacing: 0.1em; margin-bottom: 0.5rem; display: block; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.5rem; margin-bottom: 3rem; }
        .service-card { background: white; padding: 2.5rem 1.5rem; border-radius: 16px; border: 1px solid var(--border); transition: var(--transition); display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; }
        .service-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-lg); border-color: var(--primary-soft); }
        .service-icon { font-size: 2.5rem; margin-bottom: 1.5rem; background: var(--bg-soft); width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
        .service-card h3 { font-size: 1.1rem; margin-bottom: 1rem; font-weight: 800; }
        .service-card p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; }
        .arrow-circle { display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border: 1px solid var(--border); border-radius: 50%; color: var(--primary); font-size: 0.8rem; transition: var(--transition); }
        .service-card:hover .arrow-circle { background: var(--primary); color: white; border-color: var(--primary); }
        .mt-8 { margin-top: 3rem; }
      `}</style>
    </section>
  );
}
