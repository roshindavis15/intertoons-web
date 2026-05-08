'use client';

import Image from 'next/image';

export default function TechStack({ data = [] }) {
  const techs = data.length > 0 
    ? data
        .filter(t => t['Technology Name'] || t['Icon/Image'])
        .sort((a, b) => (a['Display Order'] || 0) - (b['Display Order'] || 0))
    : [
        { name: 'shopify', label: 'shopify' },
        { name: 'wix', label: 'WIX STUDIO' },
        { name: 'claude', label: 'Claude' },
        { name: 'google', label: 'Google' },
        { name: 'aws', label: 'aws' },
        { name: 'sql', label: 'Microsoft SQL Server' },
      ];

  return (
    <section className="tech-stack">
      <div className="container">
        <div className="tech-card">
          <div className="tech-label-wrapper">
            <span className="line"></span>
            <div className="tech-label">TECHNOLOGIES WE TRUST</div>
            <span className="line"></span>
          </div>
          <div className="tech-grid">
            {techs.map((tech, index) => {
              const name = tech['Technology Name'] || tech.name || "tech";
              const label = tech['Technology Name'] || tech.label || "Technology";
              const icon = tech['Icon/Image']?.[0]?.url;

              return (
                <div key={tech.id || index} className="tech-item-container">
                  <div className="tech-item">
                    {icon ? (
                      <div className="tech-img-wrapper">
                        <Image 
                          src={icon} 
                          alt={label} 
                          width={200} 
                          height={60} 
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    ) : (
                      <span className={`tech-logo ${name.toString().toLowerCase()}`}>{label}</span>
                    )}
                  </div>
                  {index < techs.length - 1 && <div className="separator"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-stack {
          padding: 0 0 1rem 0;
          background: #ffffff;
        }
        .tech-card {
          background: white;
          border: 1px solid #f0f0f0;
          border-radius: 16px;
          padding: 1.25rem 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.01);
          position: relative;
        }
        .tech-label-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .line {
          height: 1.5px;
          background: #000000;
          flex: 0 1 80px;
          opacity: 0.1;
          position: relative;
        }
        .line::after {
          content: '';
          position: absolute;
          width: 4px;
          height: 4px;
          background: #000000;
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
        }
        .tech-label-wrapper span:first-child::after { right: -2px; }
        .tech-label-wrapper span:last-child::after { left: -2px; }

        .tech-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #000000;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .tech-grid {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          gap: 0;
        }
        .tech-item-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          min-width: 0;
        }
        .tech-item {
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          padding: 0 1.5rem;
          flex: 1;
        }
        .tech-item:hover {
          transform: translateY(-2px);
        }
        .tech-img-wrapper {
          position: relative;
          height: 50px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .separator {
          height: 35px;
          width: 1px;
          background: #f0f0f0;
          flex-shrink: 0;
        }
        .tech-logo {
          font-weight: 800;
          font-size: 1.2rem;
          color: #333;
        }
        .shopify { color: #95BF47; }
        .wix { color: #000; font-family: sans-serif; font-weight: 900; }
        .claude { color: #D97757; }
        .google { color: #4285F4; }
        .aws { color: #FF9900; }
        .sql { color: #CC2927; font-size: 0.9rem; }

        @media (max-width: 1200px) {
          .tech-grid {
            flex-wrap: wrap;
            gap: 2rem;
          }
          .separator {
            display: none;
          }
          .tech-item {
            padding: 0 1rem;
          }
        }
        @media (max-width: 768px) {
          .tech-card {
            padding: 2rem 1rem;
          }
          .tech-grid {
            gap: 1.5rem;
          }
          .tech-item {
            padding: 0 0.5rem;
          }
          .tech-img-wrapper {
            height: 40px;
          }
        }
        @media (max-width: 480px) {
          .tech-label {
            font-size: 0.65rem;
          }
          .tech-grid {
            gap: 1rem;
          }
          .tech-img-wrapper {
            height: 35px;
          }
        }
      `}</style>
    </section>
  );
}
