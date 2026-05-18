'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import styles from './PortfolioGrid.module.css';

export default function PortfolioGrid({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState('All');

  if (!projects || projects.length === 0) return null;

  // Extract unique categories dynamically from the database response
  const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className={styles['portfolio-grid-section']}>
      <div className={styles['container']}>
        {/* Dynamic Filter Categories Bar */}
        <div className={styles['filter-bar']}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`${styles['filter-btn']} ${activeFilter === cat ? styles['active-btn'] : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles['projects-grid']}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles['project-card']}>
              <div className={styles['image-wrapper']}>
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    className={styles['project-image']}
                  />
                ) : (
                  <div className={styles['image-placeholder']}>
                    <span>{project.title[0]}</span>
                  </div>
                )}
                {/* Glassmorphic Category Badge */}
                <span className={styles['card-category']}>{project.category}</span>
              </div>

              <div className={styles['project-info']}>
                <h3 className={styles['project-title']}>{project.title}</h3>
                
                {project.tags && project.tags.length > 0 && (
                  <div className={styles['tags-row']}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles['tag']}>{tag}</span>
                    ))}
                  </div>
                )}
                
                <div className={styles['card-footer']}>
                  <span className={styles['view-details-text']}>View Showcase</span>
                  <div className={styles['arrow-box']}>
                    <FaArrowUpRightFromSquare />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
