'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Services.module.css';

export default function Services({ data = [] }) {
  
  const services = data
    .filter(item => item['title'])
    .map(item => {
      const title = item['title'];
      const slug = item['slug'];
      
      return {
        title,
        slug: slug ? `/services/${slug}` : '#',
        desc: item['short description'],
        icon: item['icon']?.[0]?.url || null,
      };
    });

  if (services.length === 0) return null;

  return (
    <section className={styles['services-section']}>
      <div className={styles['container']}>
        <div className={styles['services-header']}>
          <div className={styles['subtitle-wrapper']}>
            <span className={`${styles['line']} ${styles['line-first']}`}></span>
            <span className={styles['services-badge']}>WHAT WE DO</span>
            <span className={`${styles['line']} ${styles['line-last']}`}></span>
          </div>
          <h2 className={styles['services-title']}>Powerful Solutions For Your Business</h2>
        </div>
        
        <div className={styles['services-grid']}>
          {services.map((service, index) => (
            <Link href={service.slug} key={index} className={styles['service-card-link']}>
              <div className={styles['service-card']}>
                <div className={styles['service-icon-wrapper']}>
                  {service.icon && (
                    <img 
                      src={service.icon} 
                      alt={service.title} 
                      className={styles['service-img']}
                    />
                  )}
                </div>
                <h3 className={styles['service-name']}>{service.title}</h3>
                <p className={styles['service-description']}>{service.desc}</p>
                <div className={styles['service-arrow']}>
                  <FaArrowRight className={styles['arrow-icon']} />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className={styles['services-footer']}>
          <Link 
            href="/services" 
            className={styles['view-all-btn']}
          >
            View All Services <span className={styles['btn-arrow']}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
