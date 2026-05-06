import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_TOKEN }).base(process.env.AIRTABLE_BASE_ID);

export async function getHeroData() {
  const records = await base(process.env.AIRTABLE_HERO_TABLE_ID).select({
    maxRecords: 1,
    view: 'Grid view' // Default view name
  }).firstPage();
  
  return records[0]?.fields || {};
}

export async function getServicesData() {
  const records = await base('Services').select({
    sort: [{ field: 'Display Order', direction: 'asc' }]
  }).all();
  
  return records.map(record => ({
    id: record.id,
    ...record.fields
  }));
}

export async function getProductsData() {
  const records = await base('Products').select({
    sort: [{ field: 'Display Order', direction: 'asc' }]
  }).all();
  
  return records.map(record => ({
    id: record.id,
    ...record.fields
  }));
}

export async function getTestimonialsData() {
  const records = await base('Testimonials').select({
    sort: [{ field: 'Display Order', direction: 'asc' }]
  }).all();
  
  return records.map(record => ({
    id: record.id,
    ...record.fields
  }));
}
