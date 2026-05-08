'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Products({ data = [] }) {
  
  const products = data
    .filter(item => item.Title)
    .map(item => ({
      title: item.Title,
      desc: item.Description,
      image: item.Image?.[0]?.url || null
    }));

  if (products.length === 0) return null;

  return (
    <section className="products-section">
      <div className="container">
        <div className="products-header">
          <div className="header-line"></div>
          <h2 className="products-subtitle">OUR PRODUCTS</h2>
          <div className="header-line"></div>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image-wrapper">
                {product.image && (
                  <img src={product.image} alt={product.title} className="product-img" />
                )}
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.desc}</p>
                <div className="product-action">
                  <div className="arrow-circle">
                    <FaArrowRight className="arrow-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products-section {
          padding: 1.5rem 0 5rem 0;
          background: #ffffff;
          font-family: 'Inter', sans-serif;
        }
        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .products-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }
        .header-line {
          height: 1px;
          width: 60px;
          background: linear-gradient(90deg, transparent, #0056D2, transparent);
        }
        .products-subtitle {
          font-size: 0.9rem;
          font-weight: 800;
          color: #0c1a3a;
          letter-spacing: 0.05em;
          margin: 0;
          text-transform: uppercase;
        }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .product-card {
          background: #ffffff;
          border: 1px solid #f0f0f0;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border-color: #0056D2;
        }
        .product-image-wrapper {
          height: 200px;
          width: 100%;
          overflow: hidden;
          background: #f8faff;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .product-img {
          transform: scale(1.05);
        }
        .product-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          position: relative;
        }
        .product-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }
        .product-description {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }
        .product-action {
          display: flex;
          justify-content: flex-end;
          margin-top: auto;
        }
        .arrow-circle {
          width: 30px;
          height: 30px;
          border: 2px solid #0056D2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0056D2;
          background: transparent;
          transition: all 0.3s ease;
        }
        .product-card:hover .arrow-circle {
          background: #0056D2;
          color: white;
          border-color: #0056D2;
          transform: scale(1.1);
        }
        .arrow-icon {
          font-size: 0.65rem;
        }

        @media (max-width: 1200px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          .product-image-wrapper {
            height: 220px;
          }
        }
      `}</style>
    </section>
  );
}
