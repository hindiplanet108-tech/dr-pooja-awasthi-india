const fs = require('fs');
const code = fs.readFileSync('/tmp/live_site_bundle.js', 'utf8');

// 1. Find all image references
const imgMatches = code.match(/["'`][^"'`]*\.(?:jpg|jpeg|png|webp|svg|avif)[^"'`]*["'`]/gi) || [];
console.log('--- ALL IMAGES ---');
console.log(JSON.stringify([...new Set(imgMatches)], null, 2));

// 2. Find objects containing title or awards
console.log('--- CONTACT & DETAILS ---');
const contactMatches = code.match(/(\+91[0-9\s-]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|₹\s*5,?100|5100)/g) || [];
console.log([...new Set(contactMatches)]);

// 3. Search for awards array or objects
const idxAwards = code.indexOf('awards');
console.log('Index of awards:', idxAwards);
if (idxAwards !== -1) {
  console.log('Awards context:', code.substring(Math.max(0, idxAwards - 200), idxAwards + 1500));
}
