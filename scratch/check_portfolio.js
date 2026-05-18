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

async function checkPortfolio() {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Portfolio`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
    },
  });
  const data = await res.json();
  console.log("ALL RECORDS:");
  data.records.forEach((r, idx) => {
    console.log(`\nRecord ${idx + 1}:`);
    console.log(JSON.stringify(r.fields, null, 2));
  });
}

checkPortfolio();
