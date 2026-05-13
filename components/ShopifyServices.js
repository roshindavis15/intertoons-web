import React from 'react';
import { FaStore, FaPalette, FaCube, FaArrowRight, FaRocket, FaTools } from 'react-icons/fa';
import './ShopifyServices.css';

const services = [
  {
    icon: <FaStore />,
    title: "Shopify Store Development",
    description: "Custom Shopify stores designed to reflect your brand and maximize conversions."
  },
  {
    icon: <FaPalette />,
    title: "Shopify Theme Customization",
    description: "Beautiful, responsive & SEO-friendly themes customized to match your business."
  },
  {
    icon: <FaCube />,
    title: "Shopify App Development",
    description: "Custom apps and integrations to extend store functionality and improve performance."
  },
  {
    icon: <FaArrowRight />,
    title: "Migration to Shopify",
    description: "Seamless migration from any platform to Shopify with zero data loss."
  },
  {
    icon: <FaRocket />,
    title: "Shopify Speed Optimization",
    description: "Improve your store speed, performance and boost SEO rankings for better user experience."
  },
  {
    icon: <FaTools />,
    title: "Support & Maintenance",
    description: "Ongoing support, updates and maintenance to keep your store running smoothly."
  }
];

const ShopifyServices = () => {
  return (
    <section className="shopify-services">
      <div className="container">
        <div className="section-header">
          <h2>Shopify Development Services We Offer</h2>
          <div className="underline"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyServices;
