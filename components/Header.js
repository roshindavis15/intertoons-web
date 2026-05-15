'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header({ navItems = [] }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    }
  }, [isMenuOpen]);

  return (
    <header className={styles['header']}>
      <div className={`${styles['container']} ${styles['header-content']}`}>

        {/* Logo */}
        <div className={styles['logo']}>
          <Link href="/" className={styles['logo-link']}>
            <Image
              src="/images/intertoonslogo.png"
              alt="Intertoons Logo"
              width={180}
              height={45}
              className={styles['header-logo-img']}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className={`${styles['nav']} ${styles['desktop-nav']}`}>
          <ul>
            {navItems.map((item, i) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <li
                  key={i}
                  className={`${pathname === item.slug ? styles['active'] : ''} ${hasChildren ? styles['has-dropdown'] : ''}`}
                >
                  <Link href={item.slug}>
                    {item.title}
                    {hasChildren && <span className={styles['dropdown-arrow']}>▾</span>}
                  </Link>

                  {hasChildren && (
                    <ul className={styles['dropdown-menu']}>
                      {item.children.map((child, j) => (
                        <li key={j}>
                          <Link href={child.slug}>{child.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className={`${styles['header-actions']} ${styles['desktop-actions']}`}>
          <Link href="/contact" className={styles['btn-quote']}>
            Request for a Quote <span className={styles['arrow']}>→</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`${styles['mobile-toggle']} ${isMenuOpen ? styles['open'] : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles['mobile-menu']} ${isMenuOpen ? styles['active'] : ''}`}>
        <nav className={styles['mobile-nav']}>
          <ul>
            {navItems.map((item, i) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <li key={i} className={`${pathname === item.slug ? styles['active'] : ''} ${hasChildren ? styles['mobile-has-dropdown'] : ''}`}>
                  <Link href={item.slug}>{item.title}</Link>
                  {hasChildren && (
                    <ul className={styles['mobile-dropdown']}>
                      {item.children.map((child, j) => (
                        <li key={j}>
                          <Link href={child.slug} onClick={() => setIsMenuOpen(false)}>
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className={styles['mobile-actions']}>
            <Link href="/contact" className={`${styles['btn-quote']} ${styles['mobile-btn']}`}>
              Request for a Quote <span className={styles['arrow']}>→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
