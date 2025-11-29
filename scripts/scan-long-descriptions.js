const fs = require('fs')
const path = require('path')

const exts = ['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx']

function walk(dir, files=[]) {
  const items = fs.readdirSync(dir, { withFileTypes: true })
  for (const it of items) {
    const full = path.join(dir, it.name)
    if (it.isDirectory()) {
      walk(full, files)
    } else if (exts.includes(path.extname(it.name))) {
      files.push(full)
    }
  }
  return files
}

function extractDescriptions(file) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)
  const results = []
  const re = /description:\s*["']([\s\S]*?)["']/
  for (let i=0;i<lines.length;i++) {
    const m = lines[i].match(re)
    if (m) {
      const text = m[1].trim()
      results.push({file, line: i+1, text, length: text.length})
    }
  }
  return results
}

const repoRoot = process.cwd()
const files = walk(repoRoot)

const long = []
for (const f of files) {
  try {
    const items = extractDescriptions(f)
    for (const it of items) {
      if (it.length > 160) long.push(it)
    }
  } catch (e) {
    // ignore unreadable files
  }
}

const outPath = path.join(repoRoot, 'tmp_long_descriptions.json')
fs.writeFileSync(outPath, JSON.stringify(long, null, 2), 'utf8')
console.log(`Found ${long.length} description(s) longer than 160 characters. Results written to ${outPath}`)
if (long.length>0) console.log(long.slice(0,50).map(l=>`${l.file}:${l.line} (${l.length}) - ${l.text.slice(0,120)}${l.text.length>120?'...':''}`).join('\n'))
