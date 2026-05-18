'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa6';
import styles from './Team.module.css';

export default function Team({ data = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const scrollToSlide = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll(`.${styles['team-card']}`);
    if (cards.length > index) {
      const card = cards[index];
      const gap = parseFloat(window.getComputedStyle(container).gap || 0);
      container.scrollTo({
        left: index * (card.clientWidth + gap),
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll(`.${styles['team-card']}`);
    if (cards.length > 0) {
      const card = cards[0];
      const gap = parseFloat(window.getComputedStyle(container).gap || 0);
      const cardWidth = card.clientWidth + gap;
      const index = Math.round(container.scrollLeft / cardWidth);
      if (index >= 0 && index < data.length && index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    if (data.length <= 1) return;
    const interval = setInterval(() => {
      if (scrollRef.current && scrollRef.current.scrollWidth > scrollRef.current.clientWidth) {
        const next = (activeIndex + 1) % data.length;
        scrollToSlide(next);
      }
    }, 5000); // 5 seconds autoplay
    return () => clearInterval(interval);
  }, [activeIndex, data.length]);

  if (!data || data.length === 0) return null;

  return (
    <section className={styles['team-section']}>
      <div className={styles['container']}>
        <div className={styles['team-header']}>
          <div className={styles['subtitle-wrapper']}>
            <span className={`${styles['line']} ${styles['line-first']}`}></span>
            <span className={styles['team-badge']}>OUR EXPERTS</span>
            <span className={`${styles['line']} ${styles['line-last']}`}></span>
          </div>
          <h2 className={styles['team-title']}>Meet The <span className={styles['highlight']}>Team</span> Behind Intertoons</h2>
        </div>
        
        <div 
          className={styles['team-grid']}
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {data.map((member, index) => (
            <div key={index} className={styles['team-card']}>
              <div className={styles['image-wrapper']}>
                {member.image ? (
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className={styles['image-placeholder']}>
                    <span className={styles['initials']}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
              <div className={styles['member-info']}>
                <h3 className={styles['member-name']}>{member.name}</h3>
                <p className={styles['member-role']}>{member.role}</p>
                {member.linkedin && (
                  <div className={styles['social-links']}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles['social-icon']}>
                      <FaLinkedinIn />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles['dots-row']}>
          {data.map((_, i) => (
            <button
              key={i}
              className={`${styles['dot']} ${i === activeIndex ? styles['dot-active'] : ''}`}
              onClick={() => scrollToSlide(i)}
              aria-label={`Team Member ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
