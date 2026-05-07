'use client';

import Image from 'next/image';

export default function TechStack({ data = [] }) {
  console.log("TechStack Data from Airtable:", data);
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
          padding: 4rem 0;
          background: #fcfcfc;
        }
        .tech-card {
          background: white;
          border: 1px solid #eaeaea;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          position: relative;
        }
        .tech-label-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
          position: relative;
        }
        .line {
          height: 1px;
          background: linear-gradient(to right, transparent, #0056D2, transparent);
          flex: 0 1 100px;
          opacity: 0.3;
        }
        .tech-label {
          font-size: 0.8rem;
          font-weight: 800;
          color: #0056D2;
          letter-spacing: 0.15em;
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
          padding: 0 2rem;
          flex: 1;
        }
        .tech-item:hover {
          transform: translateY(-3px);
        }
        .tech-img-wrapper {
          position: relative;
          height: 60px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .separator {
          height: 50px;
          width: 1.5px;
          background: #f0f0f0;
          flex-shrink: 0;
        }
        .tech-logo {
          font-weight: 800;
          font-size: 1.4rem;
          color: #333;
        }
        .shopify { color: #95BF47; }
        .wix { color: #000; font-family: sans-serif; font-weight: 900; }
        .claude { color: #D97757; }
        .google { color: #4285F4; }
        .aws { color: #FF9900; }
        .sql { color: #CC2927; font-size: 1rem; }

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
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
