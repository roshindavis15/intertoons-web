'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function Testimonials({ data = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = (data || [])
    .filter(item => (item['Name'] || item['name']) && (item['Review'] || item['review']))
    .map(item => ({
      name: item['Name'] || item['name'],
      profession: item['Profession'] || item['profession'] || '',
      text: item['Review'] || item['review'],
      rating: item['Rating'] || item['rating'] || 5,
      photo: item['Photo']?.[0]?.url || item['photo']?.[0]?.url || null,
    }));

  if (testimonials.length === 0) return null;

  return (
    <section className={styles['testimonials-outer']}>
      <div className={styles['testimonials-box']}>
        <h2 className={styles['testimonials-title']}>WHAT OUR CLIENTS SAY</h2>

        <div className={styles['cards-row']}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles['tcard']}>
              <div className={styles['card-top']}>
                <span className={styles['quote-mark']}>&ldquo;</span>
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
              </div>

              <div className={styles['card-middle']}>
                <div className={styles['author-photo-wrap']}>
                  {t.photo ? (
                    <Image
                      src={t.photo}
                      alt={t.name}
                      width={50}
                      height={50}
                      style={{ objectFit: 'cover', borderRadius: '50%', width: '100%', height: '100%' }}
                    />
                  ) : (
                    <div className={styles['author-placeholder']}>{t.name.charAt(0)}</div>
                  )}
                </div>
                <p className={styles['tcard-text']}>{t.text}</p>
              </div>

              <div className={styles['card-bottom']}>
                <span className={styles['author-name']}>– {t.name}</span>
                <span className={styles['author-profession']}>{t.profession}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles['dots-row']}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles['dot']} ${i === activeIndex ? styles['dot-active'] : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
