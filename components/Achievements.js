'use client';

import Image from 'next/image';
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

  const awards = (awardsData || [])
    .sort((a, b) => {
      const orderA = Number(a['sort order'] || a['Sort Order'] || a['Display Order'] || 0);
      const orderB = Number(b['sort order'] || b['Sort Order'] || b['Display Order'] || 0);
      return orderA - orderB;
    })
    .map(item => ({
      title: item.Title || item.title || item.Name || item.Award || "",
      icon: item.Icon?.[0]?.url || item.icon?.[0]?.url || null
    }));

  return (
    <section className={styles['achievements-section']}>
      <div className={styles['container']}>
        <div className={styles['dual-card-wrapper']}>
          {/* Achievements Card (Milestones) */}
          <div className={styles['content-card']}>
            <div className={styles['subtitle-wrapper']}>
              <span className={`${styles['line']} ${styles['line-first']}`}></span>
              <h4 className={styles['card-subtitle']}>OUR MILESTONES</h4>
              <span className={`${styles['line']} ${styles['line-last']}`}></span>
            </div>
            <div className={`${styles['card-grid']} ${styles['achievements-grid']}`}>
              {stats.map((stat, i) => (
                <div key={i} className={styles['grid-item']}>
                  <div className={styles['item-icon']}>
                    {stat.icon ? (
                      <img src={stat.icon} alt={stat.label} />
                    ) : (
                      <div className={styles['icon-placeholder']} />
                    )}
                  </div>
                  <div className={styles['item-value']}>{stat.value}</div>
                  <div className={styles['item-label']}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Awards Card */}
          <div className={styles['content-card']}>
            <div className={styles['subtitle-wrapper']}>
              <span className={`${styles['line']} ${styles['line-first']}`}></span>
              <h4 className={styles['card-subtitle']}>AWARDS & RECOGNITIONS</h4>
              <span className={`${styles['line']} ${styles['line-last']}`}></span>
            </div>
            <div className={`${styles['card-grid']} ${styles['awards-grid']}`}>
              {awards.map((award, i) => (
                <div key={i} className={`${styles['grid-item']} ${styles['award-item']}`}>
                  <div className={styles['award-icon-wrapper']}>
                    {award.icon ? (
                      <img src={award.icon} alt={award.title} />
                    ) : (
                      <div className={styles['icon-placeholder']} />
                    )}
                  </div>
                  <div className={`${styles['item-label']} ${styles['award-label']}`}>{award.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
