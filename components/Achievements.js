'use client';

import styles from './Achievements.module.css';

export default function Achievements({ achievementsData = [], awardsData = [] }) {
  const stats = (achievementsData || [])
    .sort((a, b) => {
      const orderA = Number(a['sort order'] || a['Sort Order'] || a['Display Order'] || 0);
      const orderB = Number(b['sort order'] || b['Sort Order'] || b['Display Order'] || 0);
      return orderA - orderB;
    })
    .map(item => {
      const count = item.Count || item.Value || item.count || 0;
      const title = item.Title || item.title || item.Name || item.Label || "";
      
      return {
        value: count + (count >= 100 ? '+' : ''),
        label: title,
        icon: item.Icon?.[0]?.url || item.icon?.[0]?.url || null
      };
    });

  return (
    <section className={styles['achievements-section']}>
      <div className={styles['container']}>
        <div className={styles['achievements-header']}>
          <div className={styles['subtitle-wrapper']}>
            <span className={`${styles['line']} ${styles['line-first']}`}></span>
            <span className={styles['achievements-badge']}>OUR MILESTONES</span>
            <span className={`${styles['line']} ${styles['line-last']}`}></span>
          </div>
          <h2 className={styles['achievements-title']}>
            Driving Success Through <span className={styles['highlight']}>Proven Results</span>
          </h2>
        </div>

        <div className={styles['milestones-row']}>
          {stats.map((stat, i) => (
            <div key={i} className={styles['milestone-col']}>
              <div className={styles['milestone-num']}>{stat.value}</div>
              <div className={styles['milestone-divider']}></div>
              <div className={styles['milestone-info']}>
                {stat.icon && (
                  <div className={styles['milestone-icon-wrap']}>
                    <img src={stat.icon} alt="" />
                  </div>
                )}
                <span className={styles['milestone-lbl']}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
