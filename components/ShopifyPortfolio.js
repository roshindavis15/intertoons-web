import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStore, FaSmile, FaAward, FaHeadset, FaArrowRight, FaChartLine, FaUsers, FaHistory } from 'react-icons/fa';
import styles from './ShopifyPortfolio.module.css';

const statIconMap = {
  'stores': <FaStore />,
  'satisfaction': <FaSmile />,
  'experience': <FaAward />,
  'support': <FaHeadset />,
  'experts': <FaAward />,
  'launched': <FaStore />,
  'clients': <FaUsers />,
  'years': <FaHistory />,
  'growth': <FaChartLine />
};

const defaultStats = [
  { icon: <FaStore />, num: "170+", label: "Shopify Stores Launched" },
  { icon: <FaSmile />, num: "98%", label: "Client Satisfaction" },
  { icon: <FaAward />, num: "5+", label: "Years of Shopify Experience" },
  { icon: <FaHeadset />, num: "24/7", label: "Support & Maintenance" }
];

const defaultProjects = [
  {
    title: "Fashion Store",
    category: "Apparel & Accessories",
    image: "/images/project-fashion.png"
  },
  {
    title: "Organic Skincare",
    category: "Health & Beauty",
    image: "/images/project-skincare.png"
  },
  {
    title: "Home Essentials",
    category: "Home & Living",
    image: "/images/project-home.png"
  },
  {
    title: "Gourmet Foods",
    category: "Food & Beverages",
    image: "/images/project-foods.png"
  }
];

const ShopifyPortfolio = ({ stats = [], projects = [], serviceTitle = "Shopify" }) => {
  let displayStats = [];

  // Handle various data formats for stats (linked record objects or string-based)
  if (Array.isArray(stats) && stats.length > 0) {
    displayStats = stats.map(item => {
      // Handle Airtable linked record objects
      const num = item.Count || item.Value || item.count || "";
      const label = item.Title || item.title || item.Name || item.label || "";
      const iconUrl = item.Icon?.[0]?.url || item.icon?.[0]?.url;
      
      // Smart icon matching based on label keywords
      const iconKey = label.toLowerCase().split(' ').find(w => statIconMap[w]) || 'experience';
      
      return {
        num: num.toString() + (parseInt(num) >= 100 && !num.toString().includes('+') ? '+' : ''),
        label: label,
        icon: iconUrl ? <img src={iconUrl} alt={label} style={{ width: '100%', height: '100%' }} /> : statIconMap[iconKey]
      };
    });
  } else if (typeof stats === 'string' && stats.trim() !== '') {
    // Handle legacy string-based format: "170+|Shopify Stores Launched\n98%|Client Satisfaction"
    displayStats = stats.split('\n').filter(s => s.trim() !== '').map(line => {
      const parts = line.split('|').map(s => s.trim());
      const num = parts[0] || "";
      const label = parts[1] || "";
      const iconKey = label.toLowerCase().split(' ').find(w => statIconMap[w]) || 'experience';
      return {
        num,
        label,
        icon: statIconMap[iconKey]
      };
    });
  } else {
    // We strictly avoid fallbacks if the user provided data, but keep a safety net
    displayStats = defaultStats;
  }

  const displayProjects = projects && projects.length > 0 
    ? projects.map(p => {
        const rawCat = p.categroy || p.category || p.Category || p.Categroy || p.Tags || "";
        return {
          title: p.title || p.Title || "Project",
          category: rawCat ? rawCat.split('|')[0].trim() : serviceTitle,
          image: p['featured image']?.[0]?.url || p['Featured Image']?.[0]?.url || "/images/portfolio-placeholder.jpg"
        };
      })
    : defaultProjects;

  return (
    <section className={styles['shopify-portfolio-section']}>
      <div className={styles['sp-container']}>
        {/* Stats Bar */}
        <div className={styles['sp-stats-bar']}>
          {displayStats.map((stat, index) => (
            <div key={index} className={styles['sp-stat-item']}>
              <div className={styles['sp-stat-icon']}>{stat.icon}</div>
              <div className={styles['sp-stat-text']}>
                <span className={styles['sp-stat-num']}>{stat.num}</span>
                <span className={styles['sp-stat-label']}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className={styles['sp-portfolio-content']}>
          <div className={styles['sp-section-header']}>
            <h2>Our Recent {serviceTitle} Projects</h2>
            <div className={styles['sp-underline']}></div>
          </div>

          <div className={styles['sp-projects-grid']}>
            {displayProjects.map((project, index) => (
              <div key={index} className={styles['sp-project-card']}>
                <div className={styles['sp-project-image']}>
                  <div className={styles['sp-image-placeholder']}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={400} 
                      height={300} 
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles['sp-project-info']}>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles['sp-portfolio-footer']}>
            <Link href="/portfolio" className={`btn btn-outline ${styles['sp-btn-view-more']}`}>
              View More Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyPortfolio;
