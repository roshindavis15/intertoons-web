export async function fetchAirtable(tableIdOrName, options = {}) {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${tableIdOrName}`;
  
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
    },
    ...options,
    next: { revalidate: 0 }, // Disable Next.js cache
    cache: 'no-store',       // Standard fetch no-cache
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch Airtable data: ${res.statusText}`);
  }

  return res.json();
}

/**
 * Fetches the master record for the home page.
 */
async function getHomeRecord() {
  const data = await fetchAirtable('tblcseElytztktORZ');
  // Look for the consolidated "Home" record
  return data.records.find(r => r.fields['Page Title'] === 'Home') || data.records[0];
}

export async function getHeroData() {
  const homeRecord = await getHomeRecord();
  if (!homeRecord) return {};

  const heroIds = homeRecord.fields['Featured Hero'] || [];
  if (heroIds.length === 0) {
    // Fallback: Fetch the first record from Hero Sections if no link exists
    const data = await fetchAirtable('Hero Sections');
    return data.records[0]?.fields || {};
  }

  const data = await fetchAirtable('Hero Sections');
  const heroRecord = data.records.find(r => r.id === heroIds[0]);
  return heroRecord?.fields || {};
}

async function getLinkedData(fieldName, tableName) {
  const homeRecord = await getHomeRecord();
  if (!homeRecord) return [];

  const linkedIds = homeRecord.fields[fieldName] || [];
  if (linkedIds.length === 0) return [];

  const data = await fetchAirtable(tableName);
  // Filter for records linked to the home page and sort by Display Order or sort order
  return data.records
    .filter(record => linkedIds.includes(record.id))
    .map(record => ({ id: record.id, ...record.fields }))
    .sort((a, b) => {
      const orderA = a['sort order'] ?? a['Display Order'] ?? 0;
      const orderB = b['sort order'] ?? b['Display Order'] ?? 0;
      return orderA - orderB;
    });
}

export async function getServicesData() {
  return getLinkedData('Featured Services', 'Services');
}

export async function getProductsData() {
  return getLinkedData('Featured Products', 'Product');
}

export async function getTestimonialsData() {
  return getLinkedData('Featured Testimonials', 'Testimonials');
}

export async function getTechnologiesData() {
  return getLinkedData('Featured Technologies', 'Technologies');
}

export async function getAchievementsData() {
  return getLinkedData('Featured Achievements', 'Achievements');
}

export async function getAwardsData() {
  // Awards are now linked directly in the Home record
  return getLinkedData('Awards', 'Awards');
}

export async function getHeaderData() {
  try {
    // 1. Fetch all navigation items from the Header table
    const headerData = await fetchAirtable('Header'); // tblDQmPZBlANIgbc1
    if (!headerData.records) return [];

    const navItems = headerData.records
      .map(record => ({
        id: record.id,
        title: record.fields['Title'],
        slug: record.fields['URL Slug'] || '/',
        order: record.fields['Display Order'] ?? 0,
        // Check if there's a link to Services (if we eventually use the link field)
        serviceIds: record.fields['Services'] || []
      }))
      .sort((a, b) => a.order - b.order);

    // 2. Enhance "Services" item with dropdown children
    // We'll fetch all published services to show in the dropdown
    const servicesData = await fetchAirtable('Services'); // tblSF57auuRbXky0U
    const allServices = servicesData.records
      .filter(r => r.fields['status'] === 'Published' || !r.fields['status'])
      .map(r => {
        const title = r.fields['title'];
        const slug = r.fields['slug'];
        
        return {
          title: title,
          slug: slug ? `/services/${slug}` : '#'
        };
      })
      .sort((a, b) => (a['sort order'] || 0) - (b['sort order'] || 0));

    // Attach services to the "Services" nav item
    return navItems.map(item => {
      if (item.title === 'Services') {
        return { ...item, children: allServices };
      }
      return item;
    });
  } catch (error) {
    console.error('Error fetching header data:', error);
    return [];
  }
}

export async function getServiceBySlug(slug) {
  try {
    const data = await fetchAirtable('Services');
    const serviceRecord = data.records.find(r => {
      const apiSlug = r.fields['slug'];
      const titleSlug = r.fields['title']?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return apiSlug === slug || titleSlug === slug;
    });

    if (!serviceRecord) return null;

    const serviceData = {
      id: serviceRecord.id,
      ...serviceRecord.fields
    };

    // 1. Resolve Hero Link
    const heroIds = serviceData['Featured Hero (Link)'] || [];
    if (heroIds.length > 0) {
      try {
        const heroData = await fetchAirtable(`Hero Sections/${heroIds[0]}`);
        serviceData.hero = heroData.fields;
      } catch (heroError) {
        console.error('Error fetching linked hero data:', heroError);
      }
    }

    // 2. Resolve Portfolio Links
    const portfolioIds = serviceData['Portfolio'] || [];
    if (portfolioIds.length > 0) {
      try {
        // Fetch all portfolio records and filter for those linked to this service
        const portfolioData = await fetchAirtable('Portfolio');
        serviceData.portfolio = portfolioData.records
          .filter(r => portfolioIds.includes(r.id))
          .map(r => ({ id: r.id, ...r.fields }))
          .sort((a, b) => (a['sort order'] || 0) - (b['sort order'] || 0));
      } catch (portfolioError) {
        console.error('Error fetching linked portfolio data:', portfolioError);
        serviceData.portfolio = [];
      }
    } else {
      serviceData.portfolio = [];
    }

    // 3. Resolve Service Features List Links
    const featureIds = serviceData['Service Features List'] || [];
    if (featureIds.length > 0) {
      try {
        const featureData = await fetchAirtable('Service Features');
        serviceData.features = featureData.records
          .filter(r => featureIds.includes(r.id))
          .map(r => ({ id: r.id, ...r.fields }));
      } catch (featureError) {
        console.error('Error fetching linked features data:', featureError);
        serviceData.features = [];
      }
    } else {
      serviceData.features = [];
    }

    return serviceData;
  } catch (error) {
    console.error(`Error fetching service by slug (${slug}):`, error);
    return null;
  }
}

export async function getServiceFeatures(slug) {
  try {
    const data = await fetchAirtable('Service Features');
    return data.records
      .filter(r => r.fields['Parent Service Slug'] === slug)
      .map(r => ({
        id: r.id,
        ...r.fields
      }))
      .sort((a, b) => (a['Sort Order'] || 0) - (b['Sort Order'] || 0));
  } catch (error) {
    console.error(`Error fetching service features for slug (${slug}):`, error);
    return [];
  }
}

export async function getPortfolioByServiceSlug(slug) {
  try {
    const data = await fetchAirtable('Portfolio');
    return data.records
      .filter(r => r.fields['Parent Service Slug'] === slug && r.fields['status'] === 'Published')
      .map(r => ({
        id: r.id,
        ...r.fields
      }))
      .sort((a, b) => (a['sort order'] || 0) - (b['sort order'] || 0));
  } catch (error) {
    console.error(`Error fetching portfolio for slug (${slug}):`, error);
    return [];
  }
}
