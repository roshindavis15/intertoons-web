'use client';

import React from 'react';
import { 
  FaRocket, 
  FaMobileAlt, 
  FaMagic, 
  FaSync, 
  FaSearch, 
  FaHeadset, 
  FaCogs, 
  FaChartLine 
} from 'react-icons/fa';
import styles from './ShopifyServices.module.css';

const iconMap = {
  'setup': <FaRocket />,
  'mobile': <FaMobileAlt />,
  'custom': <FaMagic />,
  'migration': <FaSync />,
  'seo': <FaSearch />,
  'support': <FaHeadset />,
  'integration': <FaCogs />,
  'growth': <FaChartLine />
};

const defaultFeatures = [
  {
    title: "Store Setup",
    desc: "End-to-end store setup from theme selection to payment gateway integration.",
    icon: 'setup'
  },
  {
    title: "Custom Development",
    desc: "Tailored Shopify solutions with custom features and unique user experiences.",
    icon: 'custom'
  },
  {
    title: "App Integration",
    desc: "Seamless integration of third-party apps to extend your store functionality.",
    icon: 'integration'
  },
  {
    title: "Theme Customization",
    desc: "Modifying existing themes to perfectly match your brand identity.",
    icon: 'mobile'
  },
  {
    title: "Migration",
    desc: "Safe and secure migration from other platforms to Shopify without data loss.",
    icon: 'sync'
  },
  {
    title: "SEO & Speed",
    desc: "Optimizing your store for search engines and lightning-fast performance.",
    icon: 'seo'
  }
];

const ShopifyServices = ({ features = [] }) => {
  // Map features and handle multiple possible field name variants from Airtable
  const displayFeatures = features && features.length > 0 
    ? features.map(f => {
        // Airtable records might be raw record objects or flattened field objects
        const fields = f.fields || f; 
        
        // Comprehensive search for a title-like field
        // We look for any property that matches common title names
        const title = 
          fields.title || 
          fields.Title || 
          fields['Service Title'] || 
          fields['Feature Title'] || 
          fields['Service Name'] || 
          fields.Name || 
          fields.Name || 
          fields.Feature || 
          fields['Feature Name'] || 
          fields.Label || 
          fields.Heading || 
          fields.title || 
          // Last resort: find the first string property that isn't ID or icon
          Object.entries(fields).find(([k, v]) => 
            typeof v === 'string' && 
            !['id', 'ID', 'icon', 'Icon', 'Slug', 'slug', 'status', 'Status'].includes(k)
          )?.[1] || 
          "Shopify Service";

        // Comprehensive search for a description-like field
        const desc = 
          fields.description || 
          fields.Description || 
          fields['Service Description'] || 
          fields['Feature Description'] || 
          fields.desc || 
          fields.Summary || 
          fields.summary || 
          fields['short description'] || 
          fields.text || 
          fields.Content || 
          fields.content || 
          "";
        
        // Handle icon which could be a string key or an Airtable attachment array
        let icon = fields.icon || fields.Icon || fields['Icon Name'] || fields['icon name'] || fields['Service Icon'] || 'setup';
        if (Array.isArray(icon) && icon.length > 0) {
          icon = icon[0].filename || icon[0].url || 'setup';
        }
        
        return {
          title,
          desc,
          icon: icon.toString()
        };
      })
    : defaultFeatures;

  return (
    <section className={styles['shopify-services']}>
      <div className={styles['ss-container']}>
        <div className={styles['ss-section-header']}>
          <h2>Expert Shopify Services We Provide</h2>
          <div className={styles['ss-underline']}></div>
        </div>
        
        <div className={styles['ss-services-grid']}>
          {displayFeatures.map((service, index) => {
            const iconKey = service.icon.toLowerCase();
            const IconComponent = iconMap[iconKey] || (
              service.icon.includes('http') ? <img src={service.icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <FaRocket />
            );

            return (
              <div className={styles['ss-service-card']} key={index}>
                <div className={styles['ss-service-icon']}>
                  {IconComponent}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopifyServices;
