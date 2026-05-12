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
    // Fallback: Fetch the first record from Hero Banner if no link exists
    const data = await fetchAirtable('Hero Banner');
    return data.records[0]?.fields || {};
  }

  const data = await fetchAirtable('Hero Banner');
  const heroRecord = data.records.find(r => r.id === heroIds[0]);
  return heroRecord?.fields || {};
}

async function getLinkedData(fieldName, tableName) {
  const homeRecord = await getHomeRecord();
  if (!homeRecord) return [];

  const linkedIds = homeRecord.fields[fieldName] || [];
  if (linkedIds.length === 0) return [];

  const data = await fetchAirtable(tableName);
  // Filter for records linked to the home page and sort by Display Order
  return data.records
    .filter(record => linkedIds.includes(record.id))
    .map(record => ({ id: record.id, ...record.fields }))
    .sort((a, b) => (a['Display Order'] || 0) - (b['Display Order'] || 0));
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
  const homeRecord = await getHomeRecord();
  if (!homeRecord) return [];

  const titles = homeRecord.fields['Header Title'] || [];
  const slugs  = homeRecord.fields['Header URL Slug'] || [];
  const orders = homeRecord.fields['Header Display Order'] || [];

  return titles
    .map((title, i) => ({ 
      title, 
      slug: slugs[i] || '/', 
      order: orders[i] ?? i 
    }))
    .sort((a, b) => a.order - b.order);
}
