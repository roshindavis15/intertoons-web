'use client';

import Link from 'next/link';

export default function Products({ data = [] }) {
  console.log("Products Data from Airtable:", data);
  const products = data
    .filter(item => item['Product Name'])
    .map(item => ({
      title: item['Product Name'],
      desc: item['Description'],
      image: '/images/placeholder.png'
    }));

  if (products.length === 0) return null;

  return (
    <section className="section products">
      <div className="container">
        <div className="section-header text-center">
          <span className="badge-small">OUR PRODUCTS</span>
          <h2>Innovation In Every Solution</h2>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <div className="placeholder-box">
                  <span>{product.title} Image</span>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <div className="card-footer">
                  <span className="arrow-circle">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .products { background: #ffffff; }
        .badge-small { color: var(--primary); font-weight: 700; font-size: 0.8rem; letter-spacing: 0.1em; margin-bottom: 0.5rem; display: block; }
        .products-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .product-card { background: white; border-radius: 20px; border: 1px solid var(--border); overflow: hidden; transition: var(--transition); }
        .product-card:hover { transform: translateY(-5px); box-shadow: var(--shadow-lg); border-color: var(--primary-soft); }
        .product-image { height: 200px; background: var(--bg-soft); display: flex; align-items: center; justify-content: center; }
        .placeholder-box { color: var(--text-muted); font-weight: 600; font-size: 0.9rem; }
        .product-info { padding: 1.5rem; }
        .product-info h3 { font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 800; }
        .product-info p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; }
        .card-footer { margin-top: 1.5rem; display: flex; justify-content: flex-end; }
        .arrow-circle { display: flex; align-items: center; justify-content: center; width: 30px; height: 30px; border: 1px solid var(--border); border-radius: 50%; color: var(--primary); font-size: 0.8rem; transition: var(--transition); }
        .product-card:hover .arrow-circle { background: var(--primary); color: white; border-color: var(--primary); }
      `}</style>
    </section>
  );
}
