const fs = require('fs');
const path = require('path');

// Manually parse .env.local
const envLocalPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envLocalPath)) {
  const envContent = fs.readFileSync(envLocalPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const parts = line.split('=');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
      process.env[key] = val;
    }
  });
}

const { getServiceBySlug } = require('../lib/airtable.js');

async function debugSlug() {
  try {
    console.log("FETCHING SERVICES...");
    const service = await getServiceBySlug("shopify-store-development");
    console.log("RESULT SERVICE:", service);
  } catch (err) {
    console.error("ERROR FETCHING:", err);
  }
}

debugSlug();
