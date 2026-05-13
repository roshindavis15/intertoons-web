'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { FaCheckCircle, FaStore, FaClock, FaTools } from 'react-icons/fa';
import './ShopifyHero.css';

const ShopifyHero = () => {
  return (
    <section className="shopify-hero">
      <div className="container">
        {/* Left Content */}
        <div className="hero-content">
          <nav className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>Services</span>
            <span>Shopify Developers Kerala</span>
          </nav>

          <span className="hero-subtitle">Shopify Developers Kerala</span>
          <h1>Build. Scale. Succeed with <span>Shopify Experts</span> in Kerala</h1>

          <p className="hero-description">
            Intertoons is a leading Shopify development company in Kerala,
            delivering high-converting, custom Shopify stores that help
            brands grow online and achieve real results.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary btn-hero">
              Talk to Our Shopify Expert <HiArrowRight />
            </Link>
            <Link href="/portfolio" className="btn btn-outline btn-hero">
              View Our Work <IoBriefcaseOutline />
            </Link>
          </div>

          <div className="trust-badges">
            <div className="badge-item">
              <div className="badge-icon">
                <FaCheckCircle />
              </div>
              <div className="badge-text">Shopify Certified<br />Experts</div>
            </div>
            <div className="badge-item">
              <div className="badge-icon">
                <FaStore />
              </div>
              <div className="badge-text">100+ Stores<br />Delivered</div>
            </div>
            <div className="badge-item">
              <div className="badge-icon">
                <FaClock />
              </div>
              <div className="badge-text">On-time<br />Delivery</div>
            </div>
            <div className="badge-item">
              <div className="badge-icon">
                <FaTools />
              </div>
              <div className="badge-text">Ongoing Support<br />& Maintenance</div>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="mockup-wrapper">
            <Image
              key="shopify-mockup-v2"
              src="/images/shopify-hero-mockup.png"
              alt="Shopify Store Mockup"
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
