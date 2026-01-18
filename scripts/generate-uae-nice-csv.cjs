const fs = require('fs');

const sql = fs.readFileSync('test.ts', 'utf8');

// Extract VALUES tuples
const tupleRe = /\('([^']+)'\s*,\s*'([^']+)'\s*,\s*'([^']+)'\s*,\s*([0-9.]+)\s*,\s*'[^']*'\s*,\s*'([^']+)'\s*,\s*'[^']*'\s*,\s*([0-9]+)\s*\)/g;

const groups = new Map(); // group -> { natSet: Set, fees: {key: fee} }
let m;
while ((m = tupleRe.exec(sql))) {
  const id = m[1];
  const fee = Number(m[4]);
  const allowed = JSON.parse(m[5]);

  const groupMatch = id.match(/^group-(\d+)-/);
  const group = groupMatch ? `Group ${groupMatch[1]}` : 'Unknown';

  let feeKey = null;
  if (id.includes('30-days-single')) feeKey = '30 Days Tourist Single';
  else if (id.includes('30-days-multiple')) feeKey = '30 Days Tourist Multiple';
  else if (id.includes('60-days-single')) feeKey = '60 Days Tourist Single';
  else if (id.includes('60-days-multiple')) feeKey = '60 Days Tourist Multiple';

  if (!groups.has(group)) {
    groups.set(group, { natSet: new Set(), fees: {} });
  }
  const entry = groups.get(group);
  allowed.forEach((c) => entry.natSet.add(c));
  if (feeKey) entry.fees[feeKey] = fee;
}

const headers = ['Group', 'Nationality', '30 Days Tourist Single', '30 Days Tourist Multiple', '60 Days Tourist Single', '60 Days Tourist Multiple'];
const rows = [headers];

[...groups.keys()].sort((a,b)=>{
  const na = Number(a.replace('Group ', ''));
  const nb = Number(b.replace('Group ', ''));
  return na - nb;
}).forEach((group) => {
  const entry = groups.get(group);
  const fees = entry.fees;
  const natList = Array.from(entry.natSet).sort();
  natList.forEach((nat) => {
    rows.push([
      group,
      nat,
      fees['30 Days Tourist Single'] ?? '',
      fees['30 Days Tourist Multiple'] ?? '',
      fees['60 Days Tourist Single'] ?? '',
      fees['60 Days Tourist Multiple'] ?? ''
    ]);
  });
});

const csv = rows
  .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
  .join('\n');

fs.writeFileSync('uae_visa_types_nice.csv', csv);
console.log('Wrote uae_visa_types_nice.csv');
