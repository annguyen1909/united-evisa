#!/bin/bash

# All countries that need duplicate return statement fixes
ALL_COUNTRIES=(
  "angola" "armenia" "australia" "azerbaijan" "bahrain" "benin" "cambodia" "canada" "djibouti" "egypt"
  "ethiopia" "gabon" "georgia" "hong-kong" "india" "indonesia" "kazakhstan" "kenya" "kuwait" "kyrgyzstan" "laos"
  "malawi" "malaysia" "moldova" "mongolia" "new-zealand" "oman" "pakistan" "qatar" "rwanda" "saint-helena"
  "saudi-arabia" "south-africa" "sri-lanka" "taiwan" "tajikistan" "tanzania" "uganda" "united-kingdom" "uzbekistan" "vietnam" "zambia" "zimbabwe"
)

echo "🔧 Fixing duplicate return statements in ${#ALL_COUNTRIES[@]} countries..."

for country in "${ALL_COUNTRIES[@]}"; do
  echo "Fixing $country..."
  
  # Convert country name for display
  display_name=$(echo "$country" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  
  FILE="app/requirements-posts/$country/page.tsx"
  
  # Remove the duplicate return statement and fix the structure
  # This removes lines that have the pattern: "return (" followed by just opening div
  sed -i '' '/return ($/,/^[[:space:]]*<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">$/ {
    /return ($/d
    /^[[:space:]]*<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">$/d
  }' "$FILE"
  
  # Also ensure proper closing fragment at the end
  # Find the last occurrence of closing div and add fragment closing
  sed -i '' '$s/$//' "$FILE"  # Remove any trailing newlines
  sed -i '' '$ {
    /};$/!s/$/\
    <\/>\
  );\
}/
  }' "$FILE"
  
  echo "✅ Fixed $country"
done

echo "🎉 All duplicate return statements fixed!" 