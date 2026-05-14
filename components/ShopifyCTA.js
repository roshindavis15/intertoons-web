import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi';
import styles from './ShopifyCTA.module.css';

const ShopifyCTA = () => {
  return (
    <section className={styles['shopify-cta-section']}>
      <div className={styles['sc-container']}>
        <div className={styles['shopify-cta-banner']}>
          <div className={styles['sc-cta-content']}>
            <h2>Ready to Build Your Dream Shopify Store?</h2>
            <p>Let's create a powerful eCommerce store that drives sales and grows your brand.</p>
          </div>
          
          <div className={styles['sc-right-wrapper']}>
            <Link href="/contact" className={styles['sc-cta-button']}>
              Request a Free Quote <HiArrowRight />
            </Link>
            
            <div className={styles['sc-cta-image']}>
              <Image 
                src="/images/shopify-bag.png" 
                alt="Shopify bag" 
                width={130} 
                height={130}
                className={styles['sc-floating-bag']}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyCTA;
