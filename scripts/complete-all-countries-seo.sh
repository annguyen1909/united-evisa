#!/bin/bash

# All remaining countries to process (excluding the 4 already done: angola, armenia, australia, azerbaijan)
REMAINING_COUNTRIES=(
  "bahrain" "benin" "cambodia" "canada" "djibouti" "egypt"
  "ethiopia" "gabon" "georgia" "hong-kong" "india" "indonesia" "kazakhstan" "kenya" "kuwait" "kyrgyzstan" "laos"
  "malawi" "malaysia" "moldova" "mongolia" "new-zealand" "oman" "pakistan" "qatar" "rwanda" "saint-helena"
  "saudi-arabia" "south-africa" "sri-lanka" "taiwan" "tajikistan" "tanzania" "uganda" "united-kingdom" "uzbekistan" "vietnam" "zambia" "zimbabwe"
)

echo "🚀 Starting comprehensive SEO optimization for ${#REMAINING_COUNTRIES[@]} countries..."

for country in "${REMAINING_COUNTRIES[@]}"; do
  echo "Processing $country..."
  
  # Convert country name for display (capitalize and handle hyphens)
  display_name=$(echo "$country" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
    # Lowercase slug for file paths and URLs
    slug=$(echo "$country" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/_/-/g')
  
    FILE="app/requirements-posts/$slug/page.tsx"
  
  # Backup the original file
  cp "$FILE" "${FILE}.backup"
  
  # 1. Add imports at the top (after existing imports)
  sed -i '' '/import CheckEligibilityWithPreset/a\
import BreadcrumbNavigation from '\''@/components/shared/BreadcrumbNavigation'\'';\'$'\n''import RequirementsPostStructuredData from '\''@/components/shared/RequirementsPostStructuredData'\'';' "$FILE"

  # 2. Add breadcrumbItems array before the export default function
  sed -i '' '/export default function/i\
\'$'\n''const breadcrumbItems = [\
  { label: "Home", href: "/" },\
  { label: "Check Visa Requirements", href: "/check-requirements" },\
  { label: "'"$display_name"' Requirements" }\
];\'$'\n' "$FILE"

  # 3. Add structured data and breadcrumbs after return statement (use lowercase slug)
  sed -i '' '/return (/,/className="min-h-screen/ {
    /return (/c\
  return (\
    <>\
      <RequirementsPostStructuredData country="'"$display_name"'" countrySlug="'"$slug"'" />\
      \
      {/* Breadcrumb Navigation */}\
      <div className="w-full bg-white border-b border-slate-200">\
        <div className="max-w-6xl mx-auto px-4 py-3">\
          <BreadcrumbNavigation items={breadcrumbItems} />\
        </div>\
      </div>\
\
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
  }' "$FILE"

  # 4. Update H1 title to be SEO optimized
  sed -i '' 's/<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">[^<]*<\/h1>/<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">'"$display_name"' eVisa Requirements \& Application Guide 2024<\/h1>/g' "$FILE"
  
  # 5. Update alt tag for hero image to be SEO optimized
  sed -i '' 's/alt="[^"]*"/alt="'"$display_name"' eVisa requirements - beautiful destinations and landmarks for visa travelers"/g' "$FILE"
  
  # 6. Fix closing tags - add proper fragment closing
  # Find the last closing div and add fragment closing
  sed -i '' '$s/.*/&\
      <\/>\
    );\
  }/' "$FILE"
  
  # 7. Remove old closing div and add new proper structure
  sed -i '' 's/<\/div>$/&\
      <\/>\
    );\
  }/g; t; b; s/$/\
      <\/>\
    );\
  }/' "$FILE"
  
  echo "✅ Completed SEO optimization for $country"
done

echo "🎉 All countries SEO optimization completed!" 