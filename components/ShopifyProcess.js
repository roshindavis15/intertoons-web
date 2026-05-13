import React from 'react';
import { FaCheckCircle, FaSearch, FaLightbulb, FaCode, FaVial, FaRocket } from 'react-icons/fa';
import Image from 'next/image';
import './ShopifyProcess.css';

const ShopifyProcess = () => {
  const points = [
    "Official Shopify Partners with experienced developers",
    "Deep understanding of eCommerce & user experience",
    "Custom solutions tailored to your business goals",
    "Transparent communication & on-time delivery",
    "Post-launch support to help your business grow"
  ];

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We understand your business, goals & requirements.",
      icon: <FaSearch />
    },
    {
      num: "02",
      title: "Plan",
      desc: "We plan the architecture, design & functionality.",
      icon: <FaLightbulb />
    },
    {
      num: "03",
      title: "Build",
      desc: "Our experts build a fast, secure & high-converting Shopify store.",
      icon: <FaCode />
    },
    {
      num: "04",
      title: "Test",
      desc: "Rigorous testing to ensure quality, performance & compatibility.",
      icon: <FaVial />
    },
    {
      num: "05",
      title: "Launch & Grow",
      desc: "We launch your store and support you to grow consistently.",
      icon: <FaRocket />
    }
  ];

  return (
    <section className="shopify-process-section">
      <div className="container">
        <div className="process-grid">
          {/* Left: Why Choose */}
          <div className="why-choose">
            <h2>Why Choose Intertoons for <span>Shopify Development in Kerala?</span></h2>
            <ul className="points-list">
              {points.map((point, index) => (
                <li key={index}>
                  <FaCheckCircle className="check-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="shopify-partner-badge">
              <div className="partner-logo">
                <Image src="/images/shopify-partners-logo.png" alt="Shopify Partner" width={140} height={40} />
              </div>
              <div className="partner-text">
                <strong>Official Shopify Partner</strong>
                <p>Building successful eCommerce businesses together.</p>
              </div>
            </div>
          </div>

          {/* Right: Process */}
          <div className="process-container">
            <h3 className="process-title">Our Shopify Development Process</h3>
            <div className="steps-wrapper">
              {steps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-icon-wrapper">
                    <div className="step-icon">{step.icon}</div>
                    {index < steps.length - 1 && <div className="step-connector"></div>}
                  </div>
                  <div className="step-content">
                    <span className="step-num">{step.num}</span>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyProcess;
