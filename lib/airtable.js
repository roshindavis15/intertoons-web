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
  const data = await fetchAirtable(process.env.AIRTABLE_HERO_TABLE_ID);
  return data.records[0]?.fields || {};
}

export async function getServicesData() {
  const data = await fetchAirtable('Services');
  return data.records
    .map(record => ({ id: record.id, ...record.fields }))
    .sort((a, b) => (a['Display Order'] || 0) - (b['Display Order'] || 0));
}

export async function getProductsData() {
  const data = await fetchAirtable('Products');
  return data.records
    .map(record => ({ id: record.id, ...record.fields }))
    .sort((a, b) => (a['Display Order'] || 0) - (b['Display Order'] || 0));
}

export async function getTestimonialsData() {
  const data = await fetchAirtable('Testimonials');
  return data.records
    .map(record => ({ id: record.id, ...record.fields }))
    .sort((a, b) => (a['Display Order'] || 0) - (b['Display Order'] || 0));
}
