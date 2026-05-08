'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

export default function Header({ navItems = [] }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container header-content">

        {/* Logo */}
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
            {navItems.map((item, i) => (
              <li key={i} className={pathname === item.slug ? 'active' : ''}>
                <Link href={item.slug}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="header-actions desktop-actions">
          <Link href="/contact" className="btn-quote">
            Request for a Quote <span className="arrow">→</span>
          </Link>
        </div>

        {/* Hamburger Toggle */}
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

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <ul>
            {navItems.map((item, i) => (
              <li key={i} className={pathname === item.slug ? 'active' : ''}>
                <Link href={item.slug}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className="mobile-actions">
            <Link href="/contact" className="btn-quote mobile-btn">
              Request for a Quote <span className="arrow">→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
