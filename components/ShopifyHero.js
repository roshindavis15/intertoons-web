'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { FaCheckCircle, FaStore, FaClock, FaTools } from 'react-icons/fa';
import styles from './ShopifyHero.module.css';

const ShopifyHero = ({ data = {}, serviceTitle = "Shopify Developers" }) => {
  // Extract data with fallbacks for both Title Case and lowercase field names
  const heroTitle = data.Title || data.title || "";
  const heroSubtitle = data.Subtitle || data.subtitle || "Build. Scale. Succeed with Shopify Experts in Kerala";
  const description = data.Description || data.description || "Intertoons is a leading Shopify development company in Kerala, helping businesses build high-converting online stores.";
  const ctaText = data['CTA Button Text'] || data['cta button text'] || "Talk to Our Shopify Expert";
  const secondaryCtaText = data['Secondary CTA Button Text'] || data['secondary cta button text'] || "View Our Work";
  const bannerImage = data['Desktop Image'] || data['desktop image'] || [];
  const trustPointsRaw = data['Trust Points'] || data['trust points'] || "";

  // Split trust points by newline
  const trustPoints = trustPointsRaw 
    ? trustPointsRaw.split('\n').filter(p => p.trim() !== '') 
    : [
        "Shopify Certified Experts",
        "100+ Stores Delivered",
        "On-time Delivery",
        "Ongoing Support & Maintenance"
      ];

  const heroImageUrl = bannerImage?.[0]?.url || "/images/shopify-hero-mockup.png";

  // Icons mapping for trust points
  const icons = [<FaCheckCircle />, <FaStore />, <FaClock />, <FaTools />];

  return (
    <section className={styles['shopify-hero']}>
      <div className={styles['sh-container']}>
        {/* Left Content */}
        <div className={styles['sh-hero-content']}>
          <nav className={styles['sh-breadcrumbs']}>
            <Link href="/">Home</Link>
            <span>Services</span>
            <span>{serviceTitle}</span>
          </nav>

          <span className={styles['sh-hero-subtitle']}>{serviceTitle}</span>
          <h1 dangerouslySetInnerHTML={{ 
            __html: heroSubtitle.replace('Shopify Experts', `<span>Shopify Experts</span>`) 
          }} className={styles['sh-hero-title']} />

          <p className={styles['sh-hero-description']}>{description}</p>

          <div className={styles['sh-hero-actions']}>
            <Link href="/contact" className={`btn btn-primary ${styles['sh-btn-hero']}`}>
              {ctaText} <HiArrowRight />
            </Link>
            <Link href="/portfolio" className={`btn btn-outline ${styles['sh-btn-hero']}`}>
              {secondaryCtaText} <IoBriefcaseOutline />
            </Link>
          </div>

          <div className={styles['sh-trust-badges']}>
            {trustPoints.map((point, index) => {
              // Split point into two lines if it has spaces and is long
              const parts = point.split(' ');
              const mid = Math.ceil(parts.length / 2);
              const line1 = parts.slice(0, mid).join(' ');
              const line2 = parts.slice(mid).join(' ');

              return (
                <div className={styles['sh-badge-item']} key={index}>
                  <div className={styles['sh-badge-icon']}>
                    {icons[index % icons.length]}
                  </div>
                  <div className={styles['sh-badge-text']}>
                    {line1}<br />{line2}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Visual */}
        <div className={styles['sh-hero-visual']}>
          <div className={styles['sh-mockup-wrapper']}>
            <Image
              key="shopify-mockup-v2"
              src={heroImageUrl}
              alt={serviceTitle}
              width={1200}
              height={900}
              style={{ width: '100%', height: 'auto' }}
              className={styles['sh-mockup-image']}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyHero;
