'use client';

import Image from 'next/image';
import styles from './TechStack.module.css';

export default function TechStack({ data = [] }) {
  const techs = data.length > 0 
    ? data
        .filter(t => t['title'] || t['Technology Name'] || t['icon'] || t['Icon/Image'])
        .sort((a, b) => {
          const orderA = a['sort order'] ?? a['Display Order'] ?? 0;
          const orderB = b['sort order'] ?? b['Display Order'] ?? 0;
          return orderA - orderB;
        })
    : [
        { name: 'shopify', label: 'shopify' },
        { name: 'wix', label: 'WIX STUDIO' },
        { name: 'claude', label: 'Claude' },
        { name: 'google', label: 'Google' },
        { name: 'aws', label: 'aws' },
        { name: 'sql', label: 'Microsoft SQL Server' },
      ];

  return (
    <section className={styles['tech-stack']}>
      <div className={styles['container']}>
        <div className={styles['tech-card']}>
          <div className={styles['tech-label-wrapper']}>
            <span className={`${styles['line']} ${styles['line-first']}`}></span>
            <div className={styles['tech-label']}>TECHNOLOGIES WE TRUST</div>
            <span className={`${styles['line']} ${styles['line-last']}`}></span>
          </div>
          <div className={styles['tech-grid']}>
            {techs.map((tech, index) => {
              const name = tech['title'] || tech['Technology Name'] || tech.name || "tech";
              const label = tech['title'] || tech['Technology Name'] || tech.label || "Technology";
              const icon = tech['icon']?.[0]?.url || tech['Icon/Image']?.[0]?.url;

              return (
                <div key={tech.id || index} className={styles['tech-item-container']}>
                  <div className={styles['tech-item']}>
                    {icon ? (
                      <div className={styles['tech-img-wrapper']}>
                        <Image 
                          src={icon} 
                          alt={label} 
                          width={200} 
                          height={60} 
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    ) : (
                      <span className={`${styles['tech-logo']} ${styles[name.toString().toLowerCase()]}`}>{label}</span>
                    )}
                  </div>
                  {index < techs.length - 1 && <div className={styles['separator']}></div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
