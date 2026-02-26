#!/usr/bin/env bash
set -euo pipefail

echo "Fixing per-country layout titles to remove trailing site name..."

FILES=(app/requirements-posts/*/layout.tsx)

for f in "${FILES[@]}"; do
  [ -f "$f" ] || continue
  echo "Processing $f"
  # Remove " | United Evisa Global Services" from title lines with double quotes
  sed -E -i "s/(title:\s*\")([^"]*) \| United Evisa Global Services(\")/\1\2\3/g" "$f"
  # Remove from single-quoted title lines
  sed -E -i "s/(title:\s*\')([^']*) \| United Evisa Global Services(\')/\1\2\3/g" "$f"
  # Remove from openGraph.title and twitter.title double-quoted
  sed -E -i "s/(openGraph:\s*\{[^\n]*\n\s*title:\s*\")([^"]*) \| United Evisa Global Services(\")/\1\2\3/g" "$f" || true
  sed -E -i "s/(twitter:\s*\{[^\n]*\n\s*title:\s*\")([^"]*) \| United Evisa Global Services(\")/\1\2\3/g" "$f" || true
  # Remove alt suffix ' - United Evisa Global Services'
  sed -E -i "s/ - United Evisa Global Services(\")/\1/g" "$f" || true
  sed -E -i "s/ - United Evisa Global Services(\')/\1/g" "$f" || true
done

echo "Done."
