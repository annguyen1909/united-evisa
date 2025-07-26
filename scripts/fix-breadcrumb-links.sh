#!/bin/bash

# All countries that need breadcrumb link fixes
ALL_COUNTRIES=(
  "angola" "armenia" "australia" "azerbaijan" "bahrain" "benin" "cambodia" "canada" "djibouti" "egypt"
  "ethiopia" "gabon" "georgia" "hong-kong" "india" "indonesia" "kazakhstan" "kenya" "kuwait" "kyrgyzstan" "laos"
  "malawi" "malaysia" "moldova" "mongolia" "new-zealand" "oman" "pakistan" "qatar" "rwanda" "saint-helena"
  "saudi-arabia" "south-africa" "sri-lanka" "taiwan" "tajikistan" "tanzania" "uganda" "united-kingdom" "uzbekistan" "vietnam" "zambia" "zimbabwe"
)

echo "Fixing breadcrumb links for ${#ALL_COUNTRIES[@]} countries..."

for country in "${ALL_COUNTRIES[@]}"; do
  echo "Fixing breadcrumb for $country..."
  
  # Replace /requirements-posts with /check-requirements in breadcrumb items
  sed -i '' 's|{ label: "Visa Requirements", href: "/requirements-posts" },|{ label: "Check Visa Requirements", href: "/check-requirements" },|g' "app/requirements-posts/$country/page.tsx"
  
  echo "✅ Fixed breadcrumb for $country"
done

echo "🎉 All breadcrumb links now correctly point to /check-requirements!" 