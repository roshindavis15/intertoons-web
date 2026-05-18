import React from 'react';
import PortfolioHero from '@/components/PortfolioHero';
import PortfolioGrid from '@/components/PortfolioGrid';
import CTA from '@/components/CTA';
import { getPortfolioPageData } from '@/lib/airtable';

export const revalidate = 0; // Force dynamic rendering for live updates

export const metadata = {
  title: "Portfolio - Intertoons Digital Solutions",
  description: "Explore our portfolio of premium custom storefronts, mobile apps, and enterprise solutions built by Intertoons.",
};

export default async function PortfolioPage() {
  const data = await getPortfolioPageData();

  return (
    <>
      {/* Dynamic Portfolio Page Hero Section */}
      <PortfolioHero data={data.hero} />

      {/* Dynamic Filterable Project Grid */}
      <PortfolioGrid projects={data.projects} />

      {/* Bottom Conversion Section */}
      <CTA />
    </>
  );
}
