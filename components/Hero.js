'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ data = {} }) {
  const {
    'Hero Title': title = "We Build Intelligent Digital Solutions That Drive Real Growth",
    'Hero Description': description = "AI Development, AI Automations, Shopify Experts, E-commerce Development & Mobile App Development — All Under One Roof.",
    'Hero Subtitle': subtitle = "AI-POWERED. FUTURE-FOCUSED.",
    'Button 1 Text': btn1 = "Explore Services",
    'Button 2 Text': btn2 = "View Our Work"
  } = data;

  // Split title if it has line breaks or just use it as is
  const displayTitle = title.includes('\n') ? title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>) : title;

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="badge">{subtitle}</span>
          <h1>{displayTitle}</h1>
          <p>{description}</p>
          
          <div className="hero-btns">
            <Link href="/services" className="btn btn-primary">
              {btn1} <span className="arrow">→</span>
            </Link>
            <Link href="/work" className="btn btn-outline">
              {btn2} <span className="play-icon">▶</span>
            </Link>
          </div>
          
          <div className="trust-indicator">
            <div className="avatars">
              <div className="avatar">👤</div>
              <div className="avatar">👤</div>
              <div className="avatar">👤</div>
            </div>
            <span>Trusted by 170+ businesses worldwide</span>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-wrapper">
            <Image 
              src="/images/hero-laptop.png" 
              alt="Intelligent Digital Solutions" 
              width={700} 
              height={500}
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero { padding: 6rem 0; background: linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%); overflow: hidden; }
        .hero-content { display: flex; align-items: center; gap: 4rem; }
        .hero-text { flex: 1; }
        .badge { display: inline-block; padding: 0.5rem 1rem; background: var(--primary-soft); color: var(--primary); font-weight: 700; font-size: 0.75rem; border-radius: 9999px; margin-bottom: 1.5rem; letter-spacing: 0.05em; }
        h1 { font-size: 3.8rem; margin-bottom: 1.5rem; line-height: 1.1; }
        p { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2.5rem; max-width: 550px; }
        .hero-btns { display: flex; gap: 1rem; margin-bottom: 3rem; }
        .arrow { margin-left: 0.5rem; }
        .play-icon { font-size: 0.8rem; margin-left: 0.5rem; }
        .trust-indicator { display: flex; align-items: center; gap: 1rem; font-size: 0.9rem; color: var(--text-secondary); }
        .avatars { display: flex; }
        .avatar { width: 32px; height: 32px; border-radius: 50%; background: #e5e7eb; border: 2px solid white; margin-right: -10px; display: flex; align-items: center; justify-content: center; }
        .hero-visual { flex: 1; position: relative; }
        @media (max-width: 1024px) {
          .hero-content { flex-direction: column; text-align: center; }
          .hero-text p { margin-left: auto; margin-right: auto; }
          .hero-btns { justify-content: center; }
          .trust-indicator { justify-content: center; }
          h1 { font-size: 2.8rem; }
        }
      `}</style>
    </section>
  );
}
