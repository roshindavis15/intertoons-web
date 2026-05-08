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

export async function getHeroData() {
  console.log("Fetching Hero Data from Homepage Content...");
  const data = await fetchAirtable('tblcseElytztktORZ');
  const heroRecord = data.records.find(r => r.fields.Section === 'Hero Section');
  if (heroRecord) {
    console.log("Found Hero Section record:", heroRecord.id);
  } else {
    console.error("Hero Section record NOT found! Records available:", data.records.map(r => r.fields.Section));
  }
  return heroRecord?.fields || data.records[0]?.fields || {};
}

async function getLinkedData(sectionName, fieldName, tableName) {
  console.log(`Fetching linked data for section: ${sectionName}, field: ${fieldName}, table: ${tableName}`);
  const homepageData = await fetchAirtable('tblcseElytztktORZ');
  
  const section = homepageData.records.find(r => r.fields.Section === sectionName) || 
                  homepageData.records.find(r => r.fields[fieldName]);
  
  if (!section) {
    console.error(`Section not found for: ${sectionName} or field: ${fieldName}`);
    return [];
  }

  const linkedIds = section.fields[fieldName] || [];
  console.log(`Linked IDs for ${sectionName}:`, linkedIds);

  if (linkedIds.length === 0) return [];

  const data = await fetchAirtable(tableName);
  const filtered = data.records
    .filter(record => linkedIds.includes(record.id))
    .map(record => ({ id: record.id, ...record.fields }))
    .sort((a, b) => (a['Display Order'] || 0) - (b['Display Order'] || 0));
  
  console.log(`Found ${filtered.length} records for ${sectionName}`);
  return filtered;
}

export async function getServicesData() {
  return getLinkedData('Services', 'Service Name', 'Services');
}

export async function getProductsData() {
  return getLinkedData('Products', 'Product', 'Product');
}

export async function getTestimonialsData() {
  return getLinkedData('Testimonials', 'Homepage Testimonials', 'Testimonials');
}

export async function getTechnologiesData() {
  return getLinkedData('Technologies', 'Homepage Technologies', 'Technologies');
}

export async function getAchievementsData() {
  return getLinkedData('Achievements', 'Achievements', 'Achievements');
}

export async function getAwardsData() {
  // Awards might be linked in the Services record or its own record
  return getLinkedData('Services', 'Awards', 'Awards');
}

export async function getHeaderData() {
  console.log("Fetching Header nav data...");
  const data = await fetchAirtable('tblcseElytztktORZ');
  const headerRecord = data.records.find(r => r.fields.Section === 'Header');
  if (!headerRecord) {
    console.error("Header record NOT found!");
    return [];
  }
  const titles = headerRecord.fields['Header Title'] || [];
  const slugs  = headerRecord.fields['Header URL Slug'] || [];
  const orders = headerRecord.fields['Header Display Order'] || [];

  return titles
    .map((title, i) => ({ title, slug: slugs[i] || '/', order: orders[i] ?? i }))
    .sort((a, b) => a.order - b.order);
}
