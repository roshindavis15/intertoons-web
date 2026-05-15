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
  // Keeping map as a backup but user wants to use API icons
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

      // Handle icon from Airtable attachment field
      let icon = fields.icon || fields.Icon || fields['Service Icon'] || fields['Feature Icon'];
      let iconUrl = "";
      
      if (Array.isArray(icon) && icon.length > 0) {
        iconUrl = icon[0].url || "";
      } else if (typeof icon === 'string' && icon.startsWith('http')) {
        iconUrl = icon;
      }
      
      const iconName = typeof icon === 'string' && !icon.startsWith('http') ? icon : "";

      return {
        title,
        desc,
        iconUrl,
        iconName: iconName.toLowerCase()
      };
    })
    : defaultFeatures;

  return (
    <section className={styles['shopify-services']}>
      <div className={styles['ss-container']}>
        <div className={styles['ss-section-header']}>
          <h2>Shopify Development Services We Offer</h2>
          <div className={styles['ss-underline']}></div>
        </div>

        <div className={styles['ss-services-grid']}>
          {displayFeatures.map((service, index) => {
            const IconComponent = service.iconUrl ? (
              <img src={service.iconUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
              iconMap[service.iconName] || <FaRocket />
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
