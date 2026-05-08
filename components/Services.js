'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function Services({ data = [] }) {
  
  const services = data
    .filter(item => item['Service Name'])
    .map(item => ({
      title: item['Service Name'],
      desc: item['Description'],
      icon: item['Icon/Image']?.[0]?.url || null,
    }));

  if (services.length === 0) return null;

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <span className="services-badge">WHAT WE DO</span>
          <h2 className="services-title">Powerful Solutions For Your Business</h2>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon && (
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="service-img"
                  />
                )}
              </div>
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.desc}</p>
              <div className="service-arrow">
                <FaArrowRight className="arrow-icon" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <Link 
            href="/services" 
            className="view-all-btn"
            style={{ 
              backgroundColor: '#0056D2', 
              color: '#ffffff', 
              padding: '12px 35px', 
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '1rem',
              gap: '0.75rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            View All Services <span className="btn-arrow" style={{ color: '#ffffff', fontSize: '1.2rem' }}>→</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 2.5rem 0 2.5rem 0;
          background: #ffffff;
          font-family: 'Inter', sans-serif;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .services-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .services-badge {
          color: #0056D2;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.75rem;
        }
        .services-title {
          font-size: 2.1rem;
          font-weight: 600;
          color: #0c1a3a;
          margin: 0;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }
        .service-card {
          background: #ffffff;
          border: 1px solid #f0f0f0;
          border-radius: 12px;
          padding: 2.5rem 1.25rem;
          text-align: center;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .service-card:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transform: translateY(-5px);
          border-color: #0056D2;
        }
        .service-icon-wrapper {
          margin: 0 auto 1.5rem auto;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .service-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .service-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .service-description {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 2rem;
          flex-grow: 1;
          font-weight: 600;
        }
        .service-arrow {
          position: absolute;
          bottom: 1.25rem;
          right: 1.25rem;
          width: 28px;
          height: 28px;
          background: transparent;
          border: 2px solid #0056D2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0056D2;
          transition: all 0.3s ease;
        }
        .service-card:hover .service-arrow {
          background: #0056D2;
          color: white;
          transform: scale(1.1);
        }
        .arrow-icon {
          font-size: 0.65rem;
        }
        .services-footer {
          text-align: center;
        }
        .view-all-btn {
          background-color: #0056D2 !important;
          color: #ffffff !important;
          padding: 12px 35px !important;
          border-radius: 8px !important;
          font-weight: 700 !important;
          font-size: 1rem !important;
          text-decoration: none !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.75rem !important;
          transition: all 0.3s ease !important;
          border: none !important;
          cursor: pointer !important;
        }
        .view-all-btn:hover {
          background-color: #0044aa !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(0, 86, 210, 0.3) !important;
        }
        .btn-arrow {
          font-size: 1.2rem;
          color: #ffffff !important;
        }

        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .services-title {
            font-size: 1.8rem;
          }
        }
        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .container {
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
