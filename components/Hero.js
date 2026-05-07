'use client';

import Image from 'next/image';
import Link from 'next/link';
import './Hero.css';

export default function Hero({ data = {} }) {
  console.log("Hero Data from Airtable:", data);
  const content = data;
  
  if (!content['Hero Title']) return null;

  const {
    'Hero Title': title = "",
    'Hero Description': description = "",
    'Hero Subtitle': subtitle = "",
    'Button 1 Text': btn1 = "Explore Services",
    'Button 2 Text': btn2 = "View Our Work"
  } = content;

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
            <Link href="/services" className="btn-primary-hero">
              {btn1} <span className="arrow">→</span>
            </Link>
            <Link href="/work" className="btn-outline-hero">
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
            src="/images/hero-laptop-new.png" 
            alt="Intelligent Digital Solutions" 
            width={750} 
            height={600}
            priority
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </section>
  );
}
