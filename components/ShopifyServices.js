import React from 'react';
import { FaStore, FaPalette, FaCube, FaArrowRight, FaRocket, FaTools } from 'react-icons/fa';
import './ShopifyServices.css';

const iconMap = {
  'setup': <FaStore />,
  'theme': <FaPalette />,
  'app': <FaCube />,
  'migration': <FaArrowRight />,
  'speed': <FaRocket />,
  'support': <FaTools />
};

const defaultServices = [
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

const ShopifyServices = ({ features = [] }) => {
  let displayServices = [];

  if (features.length > 0) {
    // Case 1: Check if it's a single record with a bulk string (User's latest setup)
    if (features.length === 1 && features[0]['Feature Title']?.includes('|')) {
      const bulkString = features[0]['Feature Title'];
      // The bulk string might have newlines, but if not, we try to split by known patterns
      // However, usually it's one per line.
      displayServices = bulkString.split('\n').filter(s => s.trim() !== '').map(line => {
        const [title, description, iconName] = line.split('|').map(s => s.trim());
        return {
          title,
          description,
          icon: iconMap[iconName?.toLowerCase()] || <FaStore />
        };
      });
    } 
    // Case 2: Standard array of feature objects
    else {
      displayServices = features.map(f => {
        const iconAttachment = f['Feature Icon']?.[0]?.url;
        const iconName = f['Icon Name']?.toLowerCase();
        
        return {
          title: f['Feature Title'],
          description: f['Feature Description'],
          icon: iconAttachment ? (
            <img src={iconAttachment} alt={f['Feature Title']} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          ) : (
            iconMap[iconName] || <FaStore />
          )
        };
      });
    }
  } else {
    displayServices = defaultServices;
  }

  return (
    <section className="shopify-services">
      <div className="container">
        <div className="section-header">
          <h2>Shopify Development Services We Offer</h2>
          <div className="underline"></div>
        </div>
        
        <div className="services-grid">
          {displayServices.map((service, index) => (
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
