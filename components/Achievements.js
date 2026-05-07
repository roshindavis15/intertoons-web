'use client';

import Image from 'next/image';

export default function Achievements({ achievementsData = [], awardsData = [] }) {
  console.log("Achievements Data:", achievementsData);
  console.log("Awards Data:", awardsData);

  const stats = achievementsData
    .map(item => ({
      value: item.Count + (item.Count > 100 ? '+' : ''),
      label: item.Title,
      icon: item.Icon?.[0]?.url || null
    }));

  const awards = awardsData
    .map(item => ({
      title: item.Title,
      icon: item.Icon?.[0]?.url || null
    }));

  return (
    <section className="achievements-section">
      <div className="container">
        <div className="dual-card-wrapper">
          {/* Achievements Card */}
          <div className="content-card">
            <h4 className="card-subtitle">OUR ACHIEVEMENTS</h4>
            <div className="card-grid achievements-grid">
              {stats.map((stat, i) => (
                <div key={i} className="grid-item">
                  <div className="item-icon">
                    {stat.icon && (
                      <img src={stat.icon} alt={stat.label} />
                    )}
                  </div>
                  <div className="item-value">{stat.value}</div>
                  <div className="item-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Card */}
          <div className="content-card">
            <h4 className="card-subtitle">AWARDS & RECOGNITIONS</h4>
            <div className="card-grid awards-grid">
              {awards.map((award, i) => (
                <div key={i} className="grid-item award-item">
                  <div className="award-icon-wrapper">
                    {award.icon && (
                      <img src={award.icon} alt={award.title} />
                    )}
                  </div>
                  <div className="item-label award-label">{award.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .achievements-section {
          padding: 4rem 0;
          background: #fdfdfd;
          font-family: 'Inter', sans-serif;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .dual-card-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .content-card {
          background: #ffffff;
          border: 1px solid #eef2f8;
          border-radius: 12px;
          padding: 2.5rem 1.5rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }
        .card-subtitle {
          font-size: 0.8rem;
          font-weight: 800;
          color: #0c1a3a;
          margin-bottom: 2.5rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .card-grid {
          display: grid;
          align-items: flex-start;
        }
        .achievements-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .awards-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .grid-item {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 1rem;
        }
        .grid-item:not(:last-child)::after {
          content: "";
          position: absolute;
          right: 0;
          top: 10%;
          height: 80%;
          width: 1px;
          background: #eef2f8;
        }
        .item-icon {
          height: 40px;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .item-icon img {
          max-height: 100%;
          object-fit: contain;
        }
        .item-value {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0056D2;
          margin-bottom: 0.5rem;
        }
        .item-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #111;
          line-height: 1.4;
        }
        .award-icon-wrapper {
          height: 80px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .award-icon-wrapper img {
          max-height: 100%;
          max-width: 90%;
          object-fit: contain;
        }
        .award-label {
          font-size: 0.9rem;
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .dual-card-wrapper {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem 0;
          }
          .grid-item:nth-child(2n)::after {
            display: none;
          }
          .awards-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .award-item::after {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
