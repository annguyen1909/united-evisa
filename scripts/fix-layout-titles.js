import fs from 'fs'
import path from 'path'

const base = path.join(process.cwd())
const dir = path.join(base, 'app', 'requirements-posts')

if (!fs.existsSync(dir)) {
  console.error('Directory not found:', dir)
  process.exit(1)
}

const files = fs.readdirSync(dir).map(d => path.join(dir, d, 'layout.tsx')).filter(f => fs.existsSync(f))

files.forEach(file => {
  console.log('Processing', file)
  let s = fs.readFileSync(file, 'utf8')

  // Remove the site suffix from title lines (double and single quotes)
  s = s.replace(/(title:\s*\")(.*?) \| Worldmaxxing Global Services(\")/g, '$1$2$3')
  s = s.replace(/(title:\s*\')(.*?) \| Worldmaxxing Global Services(\')/g, '$1$2$3')

  // Remove from openGraph.title and twitter.title if present
  s = s.replace(/(openGraph:\s*\{[\s\S]*?title:\s*\")(.*?) \| Worldmaxxing Global Services(\")/g, (m, a, b, c) => `${a}${b}${c}`)
  s = s.replace(/(twitter:\s*\{[\s\S]*?title:\s*\")(.*?) \| Worldmaxxing Global Services(\")/g, (m, a, b, c) => `${a}${b}${c}`)

  // Remove alt suffix like ' - Worldmaxxing Global Services'
  s = s.replace(/ - Worldmaxxing Global Services(\")/g, '$1')
  s = s.replace(/ - Worldmaxxing Global Services(\')/g, '$1')

  fs.writeFileSync(file, s, 'utf8')
})

console.log('Done.')
