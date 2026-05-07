import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { 
  getHeroData, 
  getServicesData, 
  getProductsData, 
  getTestimonialsData,
  getTechnologiesData,
  getAchievementsData
} from "@/lib/airtable";

export const revalidate = 0;

export default function Home() {
  // Fetch data on the server
  const heroDataPromise = getHeroData();
  const servicesDataPromise = getServicesData();
  const productsDataPromise = getProductsData();
  const testimonialsDataPromise = getTestimonialsData();
  const technologiesDataPromise = getTechnologiesData();
  const achievementsDataPromise = getAchievementsData();

  return (
    <HomeContent 
      heroDataPromise={heroDataPromise}
      servicesDataPromise={servicesDataPromise}
      productsDataPromise={productsDataPromise}
      testimonialsDataPromise={testimonialsDataPromise}
      technologiesDataPromise={technologiesDataPromise}
      achievementsDataPromise={achievementsDataPromise}
    />
  );
}

// Separate component to handle the async data (using Suspense or just awaiting)
async function HomeContent({ 
  heroDataPromise, 
  servicesDataPromise, 
  productsDataPromise, 
  testimonialsDataPromise,
  technologiesDataPromise,
  achievementsDataPromise
}) {
  const heroData = await heroDataPromise;
  const servicesData = await servicesDataPromise;
  const productsData = await productsDataPromise;
  const testimonialsData = await testimonialsDataPromise;
  const technologiesData = await technologiesDataPromise;
  const achievementsData = await achievementsDataPromise;

  return (
    <>
      <Hero data={heroData} />
      <TechStack data={technologiesData} />
      <Services data={servicesData} />
      <Achievements data={achievementsData} />
      <Products data={productsData} />
      <Testimonials data={testimonialsData} />
      <CTA />
    </>
  );
}
