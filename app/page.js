import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Products from "@/components/Products";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { 
  getHomeData,
  getHeroData, 
  getServicesData, 
  getProductsData, 
  getTestimonialsData,
  getTechnologiesData,
  getAchievementsData,
  getAwardsData,
  getTeamData
} from "@/lib/airtable";

export const revalidate = 0;

export default function Home() {
  // Fetch data on the server
  const homeDataPromise = getHomeData();
  const heroDataPromise = getHeroData();
  const servicesDataPromise = getServicesData();
  const productsDataPromise = getProductsData();
  const testimonialsDataPromise = getTestimonialsData();
  const technologiesDataPromise = getTechnologiesData();
  const achievementsDataPromise = getAchievementsData();
  const awardsDataPromise = getAwardsData();
  const teamDataPromise = getTeamData();

  return (
    <HomeContent 
      homeDataPromise={homeDataPromise}
      heroDataPromise={heroDataPromise}
      servicesDataPromise={servicesDataPromise}
      productsDataPromise={productsDataPromise}
      testimonialsDataPromise={testimonialsDataPromise}
      technologiesDataPromise={technologiesDataPromise}
      achievementsDataPromise={achievementsDataPromise}
      awardsDataPromise={awardsDataPromise}
      teamDataPromise={teamDataPromise}
    />
  );
}

// Separate component to handle the async data (using Suspense or just awaiting)
async function HomeContent({ 
  homeDataPromise,
  heroDataPromise, 
  servicesDataPromise, 
  productsDataPromise, 
  testimonialsDataPromise,
  technologiesDataPromise,
  achievementsDataPromise,
  awardsDataPromise,
  teamDataPromise
}) {
  const homeData = await homeDataPromise;
  const heroData = await heroDataPromise;
  const servicesData = await servicesDataPromise;
  const productsData = await productsDataPromise;
  const testimonialsData = await testimonialsDataPromise;
  const technologiesData = await technologiesDataPromise;
  const achievementsData = await achievementsDataPromise;
  const awardsData = await awardsDataPromise;
  const teamData = await teamDataPromise;

  const schemaMarkup = homeData['shema markup'] || homeData['Schema Markup'] || homeData['schema markup'];

  return (
    <>
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
        />
      )}
      <Hero data={heroData} />
      <TechStack data={technologiesData} />
      <Services data={servicesData} />
      <Achievements 
        achievementsData={achievementsData} 
        awardsData={awardsData} 
      />
      <Products data={productsData} />
      <Team data={teamData} />
      <Testimonials data={testimonialsData} />
      <CTA />
    </>
  );
}
