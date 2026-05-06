'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link href="/">
            <span className="logo-it">IT</span>
            <div className="logo-text">
              <span className="brand">INTERTOONS</span>
              <span className="tagline">IMAGINATION MEETS INNOVATION</span>
            </div>
          </Link>
        </div>
        
        <nav className="nav">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/industries">Industries</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <Link href="/contact" className="btn btn-primary">
            Request a Quote
          </Link>
        </div>
      </div>

      <style jsx>{`
        .header {
          padding: 1rem 0;
          background: var(--white);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: var(--shadow-sm);
        }
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo a {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .logo-it {
          background: var(--primary);
          color: white;
          font-weight: 900;
          font-size: 1.5rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
        }
        .brand {
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: 0.05em;
          color: var(--text-main);
        }
        .tagline {
          font-size: 0.6rem;
          color: var(--text-secondary);
          letter-spacing: 0.1em;
        }
        .nav ul {
          display: flex;
          gap: 2rem;
        }
        .nav a {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .nav a:hover {
          color: var(--primary);
        }
        @media (max-width: 1024px) {
          .nav { display: none; }
        }
      `}</style>
    </header>
  );
}
