'use client';

import Image from 'next/image';
import Link from 'next/link';
import './Hero.css';

export default function Hero({ data = {} }) {
  const content = data;
  
  if (!content['Title']) return null;

  const {
    'Title': title = "",
    'Description': description = "",
    'Subtitle': subtitle = "",
    'Button 1 Text': btn1 = "Explore Services",
    'Button 2 Text': btn2 = "View Our Work",
    'Desktop Image': bannerImage = [],
    'CTA Button Link': btn1Link = "/services",
    'Secondary CTA Button': btn2Link = "/work"
  } = content;

  // Use the first attachment from the Desktop Image field if available
  const heroImageUrl = bannerImage?.[0]?.url || "/images/hero-laptop-new.png";

  // Process title to highlight "Real Growth" or the last two words
  const highlightWords = (text) => {
    if (!text) return "";
    
    // Explicit match for "Real Growth"
    if (text.includes("Real Growth")) {
      const parts = text.split("Real Growth");
      return (
        <>
          {parts[0]}<span className="highlight">Real Growth</span>{parts[1]}
        </>
      );
    }

    // Default: Highlight the last two words
    const words = text.split(" ");
    if (words.length > 2) {
      const lastTwo = words.slice(-2).join(" ");
      const rest = words.slice(0, -2).join(" ");
      return (
        <>
          {rest} <span className="highlight">{lastTwo}</span>
        </>
      );
    }
    
    return text;
  };

  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="badge">{subtitle}</div>
          <h1>{highlightWords(title)}</h1>
          <p className="hero-description">{description}</p>
          
          <div className="hero-btns">
            <Link href={btn1Link} className="btn-primary-hero">
              {btn1} <span className="arrow">→</span>
            </Link>
            <Link href={btn2Link} className="btn-outline-hero">
              {btn2} <span className="play-icon-circle">▶</span>
            </Link>
          </div>
          
          <div className="trust-indicator">
            <div className="avatars">
              {/* Using high-quality placeholder faces for the trust indicator */}
              <div className="avatar-img">
                <Image src="https://i.pravatar.cc/100?img=1" alt="Client" width={44} height={44} />
              </div>
              <div className="avatar-img">
                <Image src="https://i.pravatar.cc/100?img=2" alt="Client" width={44} height={44} />
              </div>
              <div className="avatar-img">
                <Image src="https://i.pravatar.cc/100?img=3" alt="Client" width={44} height={44} />
              </div>
              <div className="avatar-img">
                <Image src="https://i.pravatar.cc/100?img=4" alt="Client" width={44} height={44} />
              </div>
            </div>
            <div className="trust-text">Trusted by 170+ businesses worldwide</div>
          </div>
        </div>
        
        <div className="hero-visual">
          <Image 
            src={heroImageUrl} 
            alt="Intelligent Digital Solutions" 
            width={580} 
            height={464}
            priority
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}
