'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { FaCheckCircle, FaStore, FaClock, FaTools } from 'react-icons/fa';
import './ShopifyHero.css';

const ShopifyHero = ({ data = {}, serviceTitle = "Shopify Developers" }) => {
  const {
    'Title': heroTitle = "",
    'Subtitle': heroSubtitle = "Build. Scale. Succeed with Shopify Experts in Kerala",
    'Description': description = "Intertoons is a leading Shopify development company in Kerala...",
    'CTA Button Text': ctaText = "Talk to Our Shopify Expert",
    'Secondary CTA Button Text': secondaryCtaText = "View Our Work",
    'Desktop Image': bannerImage = [],
    'Trust Points': trustPointsRaw = ""
  } = data;

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
    <section className="shopify-hero">
      <div className="container">
        {/* Left Content */}
        <div className="hero-content">
          <nav className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>Services</span>
            <span>{serviceTitle}</span>
          </nav>

          <span className="hero-subtitle">{serviceTitle}</span>
          <h1 dangerouslySetInnerHTML={{ 
            __html: heroSubtitle.replace('Shopify Experts', '<span>Shopify Experts</span>') 
          }} />

          <p className="hero-description">{description}</p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-hero">
              {ctaText} <HiArrowRight />
            </Link>
            <Link href="/portfolio" className="btn btn-outline btn-hero">
              {secondaryCtaText} <IoBriefcaseOutline />
            </Link>
          </div>

          <div className="trust-badges">
            {trustPoints.map((point, index) => {
              // Split point into two lines if it has spaces and is long
              const parts = point.split(' ');
              const mid = Math.ceil(parts.length / 2);
              const line1 = parts.slice(0, mid).join(' ');
              const line2 = parts.slice(mid).join(' ');

              return (
                <div className="badge-item" key={index}>
                  <div className="badge-icon">
                    {icons[index % icons.length]}
                  </div>
                  <div className="badge-text">
                    {line1}<br />{line2}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="mockup-wrapper">
            <Image
              key="shopify-mockup-v2"
              src={heroImageUrl}
              alt={serviceTitle}
              width={1200}
              height={900}
              style={{ width: '100%', height: 'auto' }}
              className="mockup-image"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyHero;
