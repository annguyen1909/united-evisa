#!/bin/bash

# All countries that need JSX structure fixes
ALL_COUNTRIES=(
  "angola" "armenia" "australia" "azerbaijan" "bahrain" "benin" "cambodia" "canada" "djibouti" "egypt"
  "ethiopia" "gabon" "georgia" "hong-kong" "india" "indonesia" "kazakhstan" "kenya" "kuwait" "kyrgyzstan" "laos"
  "malawi" "malaysia" "moldova" "mongolia" "new-zealand" "oman" "pakistan" "qatar" "rwanda" "saint-helena"
  "saudi-arabia" "south-africa" "sri-lanka" "taiwan" "tajikistan" "tanzania" "uganda" "united-kingdom" "uzbekistan" "vietnam" "zambia" "zimbabwe"
)

echo "🔧 Fixing JSX structure for ${#ALL_COUNTRIES[@]} countries..."

for country in "${ALL_COUNTRIES[@]}"; do
  echo "Fixing JSX structure for $country..."
  
  # Convert country name for display (capitalize)
  display_name=$(echo "$country" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  # Lowercase slug for paths
  slug=$(echo "$country" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/_/-/g')
  
  FILE="app/requirements-posts/$slug/page.tsx"
  
  # First, ensure there's a proper return statement before the fragment
  sed -i '' '/^[[:space:]]*<>$/i\
  return (' "$FILE"
  
  # Ensure the fragment has proper opening
  sed -i '' 's/^[[:space:]]*<>$/    <>/' "$FILE"
  
  # Find the last line of the file and ensure proper closing
  # Remove any existing malformed closing
  sed -i '' '/^[[:space:]]*<\/>/d' "$FILE"
  sed -i '' '/^[[:space:]]*);$/d' "$FILE"
  sed -i '' '/^[[:space:]]*}$/d' "$FILE"
  
  # Add proper closing at the end
  echo "    </>" >> "$FILE"
  echo "  );" >> "$FILE" 
  echo "}" >> "$FILE"
  
  # Fix the country name in structured data to be properly capitalized
  sed -i '' "s/country=\"$slug\"/country=\"$display_name\"/g" "$FILE"
  
  echo "✅ Fixed JSX structure for $country"
done

echo "🎉 All JSX structures fixed!" 