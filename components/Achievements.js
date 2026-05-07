'use client';

import Image from 'next/image';

export default function Achievements({ data = [] }) {
  console.log("Achievements Data from Airtable:", data);

  // Filter out empty records and ensure we have valid titles
  const stats = data
    .filter(item => item.Title && item.Count)
    .map(item => ({
      value: item.Count + '+',
      label: item.Title,
      icon: item.Icon?.[0]?.url || '📈'
    }));

  if (stats.length === 0) return null;

  return (
    <section className="section achievements">
      <div className="container">
        <div className="achievements-card">
          <div className="sub-title">OUR ACHIEVEMENTS</div>
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-icon-wrapper">
                  {stat.icon.startsWith('http') ? (
                    <Image 
                      src={stat.icon} 
                      alt={stat.label} 
                      width={48} 
                      height={48} 
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <span className="stat-emoji">{stat.icon}</span>
                  )}
                </div>
                <div className="stat-content">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .achievements {
          background: #fcfcfc;
          padding: 5rem 0;
        }
        .achievements-card {
          background: white;
          border-radius: 30px;
          padding: 3rem;
          border: 1px solid #f0f0f0;
          box-shadow: 0 10px 40px rgba(0,0,0,0.02);
        }
        .sub-title {
          font-size: 0.85rem;
          font-weight: 800;
          color: #0056D2;
          margin-bottom: 3.5rem;
          letter-spacing: 0.15em;
          text-align: center;
          text-transform: uppercase;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          align-items: center;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          transition: transform 0.3s ease;
        }
        .stat-item:hover {
          transform: translateY(-5px);
        }
        .stat-icon-wrapper {
          width: 80px;
          height: 80px;
          background: #f8faff;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }
        .stat-item:hover .stat-icon-wrapper {
          background: #eef4ff;
        }
        .stat-emoji {
          font-size: 2rem;
        }
        .stat-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .stat-value {
          font-size: 2.5rem;
          font-weight: 900;
          color: #111;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.9rem;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .achievements-card {
            padding: 2rem;
          }
          .stats-grid {
            gap: 2rem;
          }
          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
