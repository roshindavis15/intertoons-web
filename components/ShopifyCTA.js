import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import './ShopifyCTA.css';

const ShopifyCTA = () => {
  return (
    <section className="shopify-cta-section">
      <div className="container">
        <div className="shopify-cta-card">
          <div className="cta-content">
            <h2>Ready to Build Your Dream Shopify Store?</h2>
            <p>Let&apos;s create a powerful eCommerce store that drives sales and grows your brand.</p>
          </div>
          <div className="cta-actions">
            <button className="cta-button">
              Request a Free Quote <FaArrowRight />
            </button>
          </div>
          <div className="cta-image">
            <Image 
              src="/images/shopify-bag.png" 
              alt="Shopify Shopping Bag" 
              width={120} 
              height={120}
              className="floating-bag"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyCTA;
