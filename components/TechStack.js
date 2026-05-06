'use client';

export default function TechStack() {
  const techs = [
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
        <div className="tech-label">TECHNOLOGIES WE TRUST</div>
        <div className="tech-grid">
          {techs.map((tech) => (
            <div key={tech.name} className="tech-item">
              <span className={`tech-logo ${tech.name}`}>{tech.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-stack {
          padding: 3rem 0;
          border-bottom: 1px solid var(--border);
          background: white;
        }
        .tech-label {
          text-align: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 2rem;
          letter-spacing: 0.1em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }
        .tech-label::before, .tech-label::after {
          content: "";
          height: 1px;
          width: 50px;
          background: var(--border);
        }
        .tech-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .tech-item {
          filter: grayscale(100%);
          opacity: 0.6;
          transition: var(--transition);
        }
        .tech-item:hover {
          filter: grayscale(0%);
          opacity: 1;
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

        @media (max-width: 768px) {
          .tech-grid {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
