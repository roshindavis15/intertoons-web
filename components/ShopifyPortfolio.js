import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStore, FaSmile, FaAward, FaHeadset, FaArrowRight } from 'react-icons/fa';
import './ShopifyPortfolio.css';

const statIconMap = {
  'stores': <FaStore />,
  'satisfaction': <FaSmile />,
  'experience': <FaAward />,
  'support': <FaHeadset />,
  'experts': <FaAward />
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

const ShopifyPortfolio = ({ stats = "", projects = [], serviceTitle = "Shopify" }) => {
  const displayStats = stats 
    ? stats.split('\n').filter(s => s.trim() !== '').map(line => {
        const [num, label] = line.split('|').map(s => s.trim());
        const iconKey = label.toLowerCase().split(' ').find(w => statIconMap[w]) || 'experience';
        return {
          num,
          label,
          icon: statIconMap[iconKey]
        };
      })
    : defaultStats;

  const displayProjects = projects.length > 0 
    ? projects.map(p => ({
        title: p.title,
        category: p.Tags ? p.Tags.split('|')[0].trim() : serviceTitle,
        image: p['featured image']?.[0]?.url || "/images/portfolio-placeholder.jpg"
      }))
    : defaultProjects;

  return (
    <section className="shopify-portfolio-section">
      <div className="container">
        {/* Stats Bar */}
        <div className="shopify-stats-bar">
          {displayStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-text">
                <span className="stat-num">{stat.num}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className="portfolio-content">
          <div className="section-header">
            <h2>Our Recent {serviceTitle} Projects</h2>
            <div className="underline"></div>
          </div>

          <div className="projects-grid">
            {displayProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="image-placeholder">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      width={400} 
                      height={300} 
                      style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-footer">
            <Link href="/portfolio" className="btn btn-outline btn-view-more">
              View More Projects <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopifyPortfolio;
