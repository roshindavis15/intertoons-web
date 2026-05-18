'use client';

export default function ServiceLoading() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#ffffff', overflow: 'hidden' }}>
      
      {/* 1. Service Hero Skeleton */}
      <section style={{ padding: '8rem 0 5rem 0', background: '#ffffff', borderBottom: '1px solid #f0f4f8' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="skeleton" style={{ width: '180px', height: '24px' }}></div>
            <div className="skeleton" style={{ width: '80%', height: '52px' }}></div>
            <div className="skeleton" style={{ width: '90%', height: '72px' }}></div>
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '1rem' }}>
              <div className="skeleton" style={{ width: '240px', height: '50px', borderRadius: '10px' }}></div>
              <div className="skeleton" style={{ width: '150px', height: '50px', borderRadius: '10px' }}></div>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="desktop-only-skeleton">
            <div className="skeleton" style={{ width: '500px', height: '320px', borderRadius: '16px' }}></div>
          </div>
        </div>
      </section>

      {/* 2. Service Features Skeleton */}
      <section style={{ padding: '4rem 0', background: '#f8faff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div className="skeleton" style={{ width: '140px', height: '20px' }}></div>
            <div className="skeleton" style={{ width: '380px', height: '36px' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="skeleton" style={{ height: '180px', borderRadius: '12px' }}></div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tech Stack / Process Skeleton */}
      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '3rem' }} className="responsive-flex-skeleton">
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="skeleton" style={{ width: '220px', height: '32px' }}></div>
            <div className="skeleton" style={{ width: '90%', height: '80px' }}></div>
            <div className="skeleton" style={{ width: '260px', height: '90px', borderRadius: '12px' }}></div>
          </div>
          <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div className="skeleton" style={{ width: '48px', height: '48px', borderRadius: '50%', flexShrink: 0 }}></div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className="skeleton" style={{ width: '180px', height: '18px' }}></div>
                  <div className="skeleton" style={{ width: '90%', height: '14px' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-only-skeleton {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .responsive-flex-skeleton {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
}
