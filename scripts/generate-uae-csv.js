const fs = require('fs');

const uaeText = fs.readFileSync('lib/countries/uae.ts', 'utf8');
const natText = fs.readFileSync('lib/nationalities.ts', 'utf8');

const natMap = new Map();
const natRe = /\{\s*name:\s*"([^"]+)",\s*code:\s*"([^"]+)"\s*\}/g;
let m;
while ((m = natRe.exec(natText))) {
  natMap.set(m[2].toUpperCase(), m[1]);
}

const start = uaeText.indexOf('const uaeVisaFeeTable = [');
if (start === -1) throw new Error('uaeVisaFeeTable not found');
const slice = uaeText.slice(start);
const openIdx = slice.indexOf('[');
const closeIdx = slice.indexOf('];');
const arrayText = slice.slice(openIdx, closeIdx + 1);
// eslint-disable-next-line no-eval
const uaeVisaFeeTable = eval(arrayText);

const headers = [
  'Nationality',
  '30 Days Tourist Single',
  '30 Days Tourist Multiple',
  '60 Days Tourist Single',
  '60 Days Tourist Multiple'
];

const rows = [headers];
uaeVisaFeeTable.forEach((group) => {
  const names = group.countries.map((c) => natMap.get(c) || c).join(', ');
  rows.push([
    names,
    String(group.govFee['30_days_single']),
    String(group.govFee['30_days_multiple']),
    String(group.govFee['60_days_single']),
    String(group.govFee['60_days_multiple'])
  ]);
});

const csv = rows
  .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(','))
  .join('\n');

fs.writeFileSync('uae_visa_groups.csv', csv);
console.log('Wrote uae_visa_groups.csv');
