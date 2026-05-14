'use client';

import Link from 'next/link';
import { FaRocket } from 'react-icons/fa';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles['cta']}>
      <div className={styles['container']}>
        <div className={styles['cta-banner']}>
          <div className={styles['cta-content']}>
            <div className={styles['cta-icon']}>
              <FaRocket />
            </div>
            <div className={styles['cta-text']}>
              <h3>Let's Build Something Amazing Together!</h3>
              <p>Share your idea and we'll turn it into a powerful digital solution.</p>
            </div>
          </div>
          <Link href="/contact" className={styles['btn-white']}>
            Request for a Quote <span className={styles['arrow']}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
