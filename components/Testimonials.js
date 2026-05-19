'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function Testimonials({ data = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const testimonials = (data || [])
    .filter(item => (item['Name'] || item['name']) && (item['Review'] || item['review']))
    .map(item => ({
      name: item['Name'] || item['name'],
      profession: item['Profession'] || item['profession'] || '',
      text: item['Review'] || item['review'],
      rating: item['Rating'] || item['rating'] || 5,
      photo: item['Photo']?.[0]?.url || item['photo']?.[0]?.url || null,
    }));

  const scrollToSlide = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cards = container.querySelectorAll(`.${styles['tcard']}`);
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
    const cards = container.querySelectorAll(`.${styles['tcard']}`);
    if (cards.length > 0) {
      const card = cards[0];
      const gap = parseFloat(window.getComputedStyle(container).gap || 0);
      const cardWidth = card.clientWidth + gap;
      const index = Math.round(container.scrollLeft / cardWidth);
      if (index >= 0 && index < testimonials.length && index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      const next = (activeIndex + 1) % testimonials.length;
      scrollToSlide(next);
    }, 5000); // 5 seconds autoplay
    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length]);

  if (testimonials.length === 0) return null;

  return (
    <section className={styles['testimonials-outer']}>
      <div className={styles['container']}>
        <div className={styles['testimonials-box']}>
          <div className={styles['testimonials-header']}>
            <div className={styles['subtitle-wrapper']}>
              <span className={`${styles['line']} ${styles['line-first']}`}></span>
              <span className={styles['testimonials-badge']}>TESTIMONIALS</span>
              <span className={`${styles['line']} ${styles['line-last']}`}></span>
            </div>
            <h2 className={styles['testimonials-title']}>What Our <span className={styles['highlight']}>Clients</span> Say</h2>
          </div>

          <div 
            className={styles['cards-row']} 
            ref={scrollRef}
            onScroll={handleScroll}
          >
            {testimonials.map((t, i) => (
              <div key={i} className={styles['tcard']}>
                <div className={styles['card-top']}>
                  <div className={styles['stars-row']}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span 
                        key={s} 
                        className={`${styles['star']} ${s < t.rating ? styles['star-filled'] : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className={styles['quote-mark']}>&ldquo;</span>
                </div>

                <div className={styles['card-middle']}>
                  <p className={styles['tcard-text']}>{t.text}</p>
                </div>

                <div className={styles['card-bottom']}>
                  <div className={styles['author-photo-wrap']}>
                    {t.photo ? (
                    <Image
                        src={t.photo}
                        alt={t.name}
                        width={80}
                        height={80}
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    ) : (
                      <div className={styles['author-placeholder']}>{t.name.charAt(0)}</div>
                    )}
                  </div>
                  <div className={styles['author-info']}>
                    <span className={styles['author-name']}>{t.name}</span>
                    <span className={styles['author-profession']}>{t.profession}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles['dots-row']}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles['dot']} ${i === activeIndex ? styles['dot-active'] : ''}`}
                onClick={() => scrollToSlide(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
