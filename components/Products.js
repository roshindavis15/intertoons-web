'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from './Products.module.css';

export default function Products({ data = [] }) {
  
  const products = data
    .filter(item => item.Title)
    .map(item => ({
      title: item.Title,
      desc: item.Description,
      image: item.Image?.[0]?.url || null
    }));

  if (products.length === 0) return null;

  return (
    <section className={styles['products-section']}>
      <div className={styles['container']}>
        <div className={styles['products-header']}>
          <span className={`${styles['header-line']} ${styles['line-first']}`}></span>
          <h2 className={styles['products-subtitle']}>OUR PRODUCTS</h2>
          <span className={`${styles['header-line']} ${styles['line-last']}`}></span>
        </div>
        
        <div className={styles['products-grid']}>
          {products.map((product, index) => (
            <div key={index} className={styles['product-card']}>
              <div className={styles['product-image-wrapper']}>
                {product.image && (
                  <img src={product.image} alt={product.title} className={styles['product-img']} />
                )}
              </div>
              <div className={styles['product-content']}>
                <h3 className={styles['product-title']}>{product.title}</h3>
                <div className={styles['product-info-row']}>
                  <p className={styles['product-description']}>{product.desc}</p>
                  <div className={styles['product-action']}>
                    <div className={styles['arrow-circle']}>
                      <FaArrowRight className={styles['arrow-icon']} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
