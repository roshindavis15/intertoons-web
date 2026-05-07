'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css';

export default function Header() {
  const pathname = usePathname();

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
        
        <nav className="nav">
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
        
        <div className="header-actions">
          <Link href="/contact" className="btn-quote">
            Request a Quote <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
