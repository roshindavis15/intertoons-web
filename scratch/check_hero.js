const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

async function checkHero() {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_HERO_TABLE_ID}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
    },
  });
  const data = await res.json();
  console.log(JSON.stringify(data.records[0]?.fields, null, 2));
}

checkHero();
