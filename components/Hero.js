'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

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
          {parts[0]}<span className={styles['highlight']}>Real Growth</span>{parts[1]}
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
          {rest} <span className={styles['highlight']}>{lastTwo}</span>
        </>
      );
    }
    
    return text;
  };

  return (
    <section className={styles['hero']}>
      <div className={`${styles['container']} ${styles['hero-content']}`}>
        <div className={styles['hero-text']}>
          <div className={styles['badge']}>{subtitle}</div>
          <h1>{highlightWords(title)}</h1>
          <p className={styles['hero-description']}>{description}</p>
          
          <div className={styles['hero-btns']}>
            <Link href={btn1Link} className={styles['btn-primary-hero']}>
              {btn1} <span className={styles['arrow']}>→</span>
            </Link>
            <Link href={btn2Link} className={styles['btn-outline-hero']}>
              {btn2} <span className={styles['play-icon-circle']}>▶</span>
            </Link>
          </div>
          
          <div className={styles['trust-indicator']}>
            <div className={styles['avatars']}>
              {/* Using high-quality placeholder faces for the trust indicator */}
              <div className={styles['avatar-img']}>
                <Image src="https://i.pravatar.cc/100?img=1" alt="Client" width={44} height={44} />
              </div>
              <div className={styles['avatar-img']}>
                <Image src="https://i.pravatar.cc/100?img=2" alt="Client" width={44} height={44} />
              </div>
              <div className={styles['avatar-img']}>
                <Image src="https://i.pravatar.cc/100?img=3" alt="Client" width={44} height={44} />
              </div>
              <div className={styles['avatar-img']}>
                <Image src="https://i.pravatar.cc/100?img=4" alt="Client" width={44} height={44} />
              </div>
            </div>
            <div className={styles['trust-text']}>Trusted by 170+ businesses worldwide</div>
          </div>
        </div>
        
        <div className={styles['hero-visual']}>
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
