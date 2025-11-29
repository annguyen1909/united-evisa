#!/bin/bash

# Countries that still need breadcrumb navigation (excluding those already done)
REMAINING_COUNTRIES=(
  "new-zealand" "oman" "pakistan" "qatar" "rwanda" "saint-helena"
  "saudi-arabia" "south-africa" "taiwan" "tajikistan" "tanzania" 
  "uganda" "united-kingdom" "uzbekistan" "zambia" "zimbabwe"
)

echo "Adding breadcrumb navigation to remaining ${#REMAINING_COUNTRIES[@]} countries..."

for country in "${REMAINING_COUNTRIES[@]}"; do
  echo "Processing $country..."
  
  # Convert country name for display (capitalize first letter, replace hyphens with spaces)
  display_name=$(echo "$country" | sed 's/-/ /g' | sed 's/\b\w/\U&/g')
  # Lowercase slug for file paths
  slug=$(echo "$country" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/_/-/g')
  
  # Add import statement if not already present
  if ! grep -q "import BreadcrumbNavigation" "app/requirements-posts/$slug/page.tsx"; then
    sed -i '' '/import CheckEligibilityWithPreset/a\
import BreadcrumbNavigation from '\''../../../components/shared/BreadcrumbNavigation'\'';
' "app/requirements-posts/$slug/page.tsx"
  fi
  
  # Add breadcrumb items if not already present
  if ! grep -q "breadcrumbItems" "app/requirements-posts/$slug/page.tsx"; then
    sed -i '' '/const \[activeSection, setActiveSection\] = useState/a\
\
  // Breadcrumb items\
  const breadcrumbItems = [\
    { label: "Visa Requirements", href: "/requirements-posts" },\
    { label: "'"$display_name"' Requirements" }\
  ];
' "app/requirements-posts/$slug/page.tsx"
  fi
  
  # Add breadcrumb navigation component if not already present
  if ! grep -q "BreadcrumbNavigation items={breadcrumbItems}" "app/requirements-posts/$slug/page.tsx"; then
    sed -i '' '/return (/,/Hero Section/ {
      /Hero Section/i\
      {/* Breadcrumb Navigation */}\
      <div className="w-full bg-white border-b border-slate-200">\
        <div className="max-w-6xl mx-auto px-4 py-3">\
          <BreadcrumbNavigation items={breadcrumbItems} />\
        </div>\
      </div>\
      \
    }' "app/requirements-posts/$slug/page.tsx"
  fi
  
  echo "✅ Completed $country"
done

echo "🎉 All countries updated with breadcrumb navigation!" 