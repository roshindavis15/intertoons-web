import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { getHeroData, getServicesData, getProductsData, getTestimonialsData } from "@/lib/airtable";

export const revalidate = 0;

export default function Home() {
  // Fetch data on the server
  const heroDataPromise = getHeroData();
  const servicesDataPromise = getServicesData();
  const productsDataPromise = getProductsData();
  const testimonialsDataPromise = getTestimonialsData();

  return (
    <HomeContent 
      heroDataPromise={heroDataPromise}
      servicesDataPromise={servicesDataPromise}
      productsDataPromise={productsDataPromise}
      testimonialsDataPromise={testimonialsDataPromise}
    />
  );
}

// Separate component to handle the async data (using Suspense or just awaiting)
async function HomeContent({ heroDataPromise, servicesDataPromise, productsDataPromise, testimonialsDataPromise }) {
  const heroData = await heroDataPromise;
  const servicesData = await servicesDataPromise;
  const productsData = await productsDataPromise;
  const testimonialsData = await testimonialsDataPromise;

  return (
    <>
      <Hero data={heroData} />
      <TechStack />
      <Services data={servicesData} />
      <Achievements data={heroData} />
      <Products data={productsData} />
      <Testimonials data={testimonialsData} />
      <CTA />
    </>
  );
}
