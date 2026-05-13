import ShopifyHero from "@/components/ShopifyHero";
import ShopifyServices from "@/components/ShopifyServices";
import ShopifyProcess from "@/components/ShopifyProcess";
import ShopifyPortfolio from "@/components/ShopifyPortfolio";
import ShopifyCTA from "@/components/ShopifyCTA";
import CTA from "@/components/CTA";
import { getServiceBySlug } from "@/lib/airtable";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Intertoons`,
    description: service['short description'] || service['full description'],
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Determine if we should show the specialized Shopify hero
  // We'll match if the slug contains 'shopify'
  const isShopify = slug.toLowerCase().includes('shopify');

  return (
    <div className="service-page">
      {isShopify ? (
        <>
          <ShopifyHero />
          <ShopifyServices />
          <ShopifyProcess />
          <ShopifyPortfolio />
          <ShopifyCTA />
        </>
      ) : (
        <section className="generic-service-hero" style={{ padding: '160px 0 100px', background: '#f8faff' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#0c1a3d', marginBottom: '1.5rem' }}>
              {service.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#4a5568', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: '1.8' }}>
              {service['full description'] || service['short description']}
            </p>
          </div>
        </section>
      )}
      {!isShopify && <CTA />}
    </div>
  );
}
