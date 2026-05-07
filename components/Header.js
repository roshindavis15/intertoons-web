'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link href="/" className="logo-link">
            <div className="logo-it">
              <span className="i">i</span>
              <span className="t">T</span>
            </div>
            <div className="logo-text">
              <span className="brand">INTERTOONS</span>
              <span className="tagline">IMAGINATION MEETS INNOVATION</span>
            </div>
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <ul>
            <li className={pathname === '/' ? 'active' : ''}>
              <Link href="/">Home</Link>
            </li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
        
        <div className="header-actions desktop-actions">
          <Link href="/contact" className="btn-quote">
            Request a Quote <span className="arrow">→</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <ul>
            <li className={pathname === '/' ? 'active' : ''}>
              <Link href="/">Home</Link>
            </li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
          <div className="mobile-actions">
            <Link href="/contact" className="btn-quote mobile-btn">
              Request a Quote <span className="arrow">→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
