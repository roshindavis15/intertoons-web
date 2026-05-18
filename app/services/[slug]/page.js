import ShopifyHero from "@/components/ShopifyHero";
import ShopifyServices from "@/components/ShopifyServices";
import ShopifyProcess from "@/components/ShopifyProcess";
import ShopifyPortfolio from "@/components/ShopifyPortfolio";
import ShopifyCTA from "@/components/ShopifyCTA";
import Testimonials from "@/components/Testimonials";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import { getServiceBySlug } from "@/lib/airtable";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  
  if (!service) return { title: "Service Not Found" };
  
  return {
    title: service['seo title'] || service['SEO Title'] || `${service.title} | Intertoons`,
    description: service['seo description'] || service['SEO Description'] || service['short description'] || service['full description'],
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  console.log("DYNAMIC SERVICE ROUTE: Slug received =", slug);
  const service = await getServiceBySlug(slug);
  console.log("DYNAMIC SERVICE ROUTE: Service returned =", service ? service.title : null);

  if (!service) {
    console.log("DYNAMIC SERVICE ROUTE: Service not found! Triggering notFound().");
    notFound();
  }

  // Determine if we should show the specialized Shopify hero
  const isShopify = slug.toLowerCase().includes('shopify');

  // Handle schema markup field variants
  const schemaMarkup = service['shema markup'] || service['Schema Markup'] || service['schema markup'];

  return (
    <div className="service-page">
      {/* Dynamic Schema Injection */}
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
        />
      )}

      {isShopify ? (
        <>
          <ShopifyHero data={service.hero} serviceTitle={service.title} />
          <ShopifyServices features={service.features || []} />
          
          {service.technologies && service.technologies.length > 0 && (
            <TechStack data={service.technologies} />
          )}

          <ShopifyProcess 
            whyChooseList={service['Why Choose Us List']} 
            processSteps={service['Service Process Steps']} 
            serviceTitle={service.title}
          />
          <ShopifyPortfolio 
            stats={service.milestones && service.milestones.length > 0 ? service.milestones : (service['Service Stats List'] || "")} 
            projects={service.portfolio}
            serviceTitle={service.title}
          />
          {service.testimonials && service.testimonials.length > 0 && (
            <div style={{ background: '#ffffff' }}>
              <Testimonials data={service.testimonials} />
            </div>
          )}
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
