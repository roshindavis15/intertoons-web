import React from 'react';
import { FaCheckCircle, FaSearch, FaLightbulb, FaCode, FaVial, FaRocket } from 'react-icons/fa';
import Image from 'next/image';
import styles from './ShopifyProcess.module.css';

const stepIconMap = {
  'discover': <FaSearch />,
  'plan': <FaLightbulb />,
  'build': <FaCode />,
  'test': <FaVial />,
  'launch': <FaRocket />,
  'grow': <FaRocket />
};

const defaultSteps = [
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

const ShopifyProcess = ({ whyChooseList = "", processSteps = "", serviceTitle = "Shopify Development" }) => {
  const points = whyChooseList 
    ? whyChooseList.split('\n').filter(p => p.trim() !== '') 
    : [
        "Official Shopify Partners with experienced developers",
        "Deep understanding of eCommerce & user experience",
        "Custom solutions tailored to your business goals",
        "Transparent communication & on-time delivery",
        "Post-launch support to help your business grow"
      ];

  const steps = processSteps 
    ? processSteps.split('\n').filter(p => p.trim() !== '').map((line, index) => {
        const [title, desc] = line.split('|').map(s => s.trim());
        const iconKey = title.toLowerCase().split(' ')[0]; // Use first word as icon key
        return {
          num: (index + 1).toString().padStart(2, '0'),
          title,
          desc,
          icon: stepIconMap[iconKey] || <FaCheckCircle />
        };
      })
    : defaultSteps;

  return (
    <section className={styles['shopify-process-section']}>
      <div className={styles['sd-container']}>
        <div className={styles['sd-process-grid']}>
          {/* Left: Why Choose */}
          <div className={styles['sd-why-choose']}>
            <h2>Why Choose Intertoons for <span>{serviceTitle} in Kerala?</span></h2>
            <ul className={styles['sd-points-list']}>
              {points.map((point, index) => (
                <li key={index}>
                  <FaCheckCircle className={styles['sd-check-icon']} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
            <div className={styles['sd-shopify-partner-badge']}>
              <div className={styles['sd-partner-logo']}>
                <Image src="/images/shopify-partners-icon.png" alt="Official Shopify Partner" width={150} height={150} />
              </div>
              <div className={styles['sd-partner-text']}>
                <strong>Official Shopify Partner</strong>
                <p>Building successful eCommerce businesses together.</p>
              </div>
            </div>
          </div>

          {/* Right: Process */}
          <div className={styles['sd-process-container']}>
            <h3 
              className={styles['sd-process-title']}
              dangerouslySetInnerHTML={{ 
                __html: `Our ${serviceTitle} Process`.replace('Shopify Developers', 'Shopify Development').replace('Shopify', '<span>Shopify</span>') 
              }}
            />
            <div className={styles['sd-steps-wrapper']}>
              {steps.map((step, index) => (
                <div key={index} className={styles['sd-step-item']}>
                  <div className={styles['sd-step-icon-wrapper']}>
                    <div className={styles['sd-step-icon']}>{step.icon}</div>
                    {index < steps.length - 1 && <div className={styles['sd-step-connector']}></div>}
                  </div>
                  <div className={styles['sd-step-content']}>
                    <span className={styles['sd-step-num']}>{step.num}</span>
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
