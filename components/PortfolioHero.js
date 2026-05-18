'use client';

import React from 'react';
import Image from 'next/image';
import { FaStore, FaMobileScreenButton, FaBuilding } from 'react-icons/fa6';
import styles from './PortfolioHero.module.css';

const defaultIconMap = {
  'store': <FaStore />,
  'app': <FaMobileScreenButton />,
  'industr': <FaBuilding />
};

export default function PortfolioHero({ data = {} }) {
  const { title = "Our Work. Your Success", subtitle = "OUR PORTFOLIO", description = "", image = "", milestones = [] } = data;

  const highlightTitle = (text) => {
    if (!text) return '';
    // Force exactly 2 lines by splitting at the dot separator
    let formatted = text;
    if (text.includes('. ')) {
      formatted = text.replace('. ', '.<br />');
    } else if (text.includes('.')) {
      formatted = text.replace('.', '.<br />');
    }
    // Safely wrap 'Success' in a highlighted blue span
    return formatted.replace('Success', `<span class="${styles['highlight']}">Success</span>`);
  };

  const getMilestoneIcon = (milestone) => {
    if (milestone.icon) {
      return (
        <div className={styles['custom-icon-wrapper']}>
          <Image src={milestone.icon} alt={milestone.title} fill style={{ objectFit: 'contain' }} />
        </div>
      );
    }
    
    // Find dynamic keyword match
    const titleLower = milestone.title.toLowerCase();
    const matchedKey = Object.keys(defaultIconMap).find(k => titleLower.includes(k));
    return defaultIconMap[matchedKey] || <FaStore />;
  };

  return (
    <section 
      className={styles['portfolio-hero-section']}
      style={{
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundSize: 'contain',
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className={styles['ph-container']}>
        {/* Left side text and milestones panel */}
        <div className={styles['ph-content']}>
          <div className={styles['badge-wrapper']}>
            <span className={styles['badge']}>{subtitle.toUpperCase()}</span>
          </div>

          <h1 
            className={styles['ph-title']}
            dangerouslySetInnerHTML={{ __html: highlightTitle(title) }}
          />

          <p className={styles['ph-description']}>{description}</p>

          <div className={styles['milestones-bar']}>
            {milestones.map((milestone, idx) => (
              <div key={idx} className={styles['milestone-item']}>
                <div className={styles['milestone-icon-box']}>
                  {getMilestoneIcon(milestone)}
                </div>
                <div className={styles['milestone-text']}>
                  <h3 className={styles['milestone-count']}>
                    {milestone.count.includes('+') ? milestone.count : `${milestone.count}+`}
                  </h3>
                  <p className={styles['milestone-label']}>{milestone.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
