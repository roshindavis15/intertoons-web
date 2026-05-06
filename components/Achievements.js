'use client';

export default function Achievements({ data = {} }) {
  const achievementsText = data['Achievements Section Content'] || "";
  const awardsText = data['Awards Section Content'] || "";

  // Parse achievements (assuming each line is an achievement)
  const statsLines = achievementsText.split('\n').filter(line => line.trim());
  const stats = statsLines.map(line => {
    const match = line.match(/^(\d+\+?)\s+(.+)$/);
    if (match) return { value: match[1], label: match[2], icon: '📈' };
    return { value: "", label: line, icon: '✨' };
  });

  const displayStats = stats;
  const awards = awardsText.split('\n').filter(line => line.trim()).map(line => ({ 
    name: line, 
    label: line.split(' ')[0] 
  }));
  const displayAwards = awards;

  if (displayStats.length === 0 && displayAwards.length === 0) return null;

  return (
    <section className="section achievements">
      <div className="container achievements-grid">
        <div className="stats-box">
          <div className="sub-title">OUR ACHIEVEMENTS</div>
          <div className="stats-grid">
            {displayStats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="awards-box">
          <div className="sub-title">AWARDS & RECOGNITIONS</div>
          <div className="awards-grid">
            {displayAwards.map((award, i) => (
              <div key={i} className="award-item">
                <div className="award-logo">{award.label}</div>
                <div className="award-name">{award.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .achievements { background: #ffffff; }
        .achievements-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 4rem; }
        .sub-title { font-size: 0.8rem; font-weight: 700; color: var(--text-muted); margin-bottom: 2rem; letter-spacing: 0.1em; text-align: center; }
        .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; background: var(--bg-soft); padding: 2.5rem; border-radius: 20px; }
        .stat-item { text-align: center; }
        .stat-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .stat-value { font-size: 2rem; font-weight: 800; color: var(--primary); line-height: 1; margin-bottom: 0.25rem; }
        .stat-label { font-size: 0.85rem; color: var(--text-secondary); font-weight: 600; }
        .awards-grid { display: flex; gap: 1.5rem; background: var(--bg-soft); padding: 2.5rem; border-radius: 20px; height: 100%; align-items: center; justify-content: center; }
        .award-item { background: white; padding: 1.5rem; border-radius: 12px; border: 1px solid var(--border); text-align: center; flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 120px; }
        .award-logo { font-weight: 900; font-size: 1rem; margin-bottom: 0.5rem; }
        .award-name { font-size: 0.7rem; color: var(--text-secondary); font-weight: 700; }
        @media (max-width: 968px) { .achievements-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}
