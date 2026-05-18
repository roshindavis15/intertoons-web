'use client';

export default function RootLoading() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', background: '#ffffff', overflow: 'hidden' }}>
      
      {/* 1. Hero Skeleton */}
      <section style={{ padding: '8rem 0 6rem 0', background: '#f8faff', borderBottom: '1px solid #f0f4f8' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="skeleton" style={{ width: '150px', height: '24px' }}></div>
            <div className="skeleton" style={{ width: '85%', height: '56px' }}></div>
            <div className="skeleton" style={{ width: '90%', height: '48px' }}></div>
            <div className="skeleton" style={{ width: '70%', height: '80px' }}></div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <div className="skeleton" style={{ width: '220px', height: '48px', borderRadius: '10px' }}></div>
              <div className="skeleton" style={{ width: '160px', height: '48px', borderRadius: '10px' }}></div>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="desktop-only-skeleton">
            <div className="skeleton" style={{ width: '550px', height: '360px', borderRadius: '20px' }}></div>
          </div>
        </div>
      </section>

      {/* 2. Tech Stack Skeleton */}
      <section style={{ padding: '3rem 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="skeleton" style={{ width: '140px', height: '40px', borderRadius: '8px' }}></div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Skeleton */}
      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div className="skeleton" style={{ width: '100px', height: '20px' }}></div>
            <div className="skeleton" style={{ width: '320px', height: '36px' }}></div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="skeleton" style={{ width: '200px', height: '260px', borderRadius: '12px' }}></div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Achievements Skeleton */}
      <section style={{ padding: '4rem 0', background: '#fcfdfe' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                <div className="skeleton" style={{ width: '80px', height: '48px' }}></div>
                <div className="skeleton" style={{ width: '120px', height: '20px' }}></div>
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
      `}</style>
    </div>
  );
}
