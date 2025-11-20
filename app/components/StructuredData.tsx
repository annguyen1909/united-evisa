export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Worldmaxxing Global Services",
    "description": "Professional eVisa application services for 50+ countries worldwide. Fast processing, 24/7 support, and guaranteed approval.",
    "url": "https://worldmaxxing.com",
    "logo": "https://worldmaxxing.com/images/logo.png",
    "image": "https://worldmaxxing.com/images/hero/hero.jpg",
    "telephone": "+1 323 286 4541",
    "email": "support@worldmaxxing.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/worldmaxxing",
      "https://facebook.com/worldmaxxing",
      "https://linkedin.com/company/worldmaxxing"
    ],
    "serviceType": [
      "eVisa Application",
      "Visa Processing",
      "Travel Documentation",
      "Immigration Services"
    ],
    "areaServed": [
      "Kenya",
      "Canada", 
      "Vietnam",
      "Australia",
      "United Kingdom",
      "Saudi Arabia",
      "Qatar",
      "Oman",
      "United Arab Emirates",
      "India",
      "Indonesia",
      "Malaysia",
      "Thailand",
      "Singapore",
      "Japan",
      "South Korea",
      "China",
      "Hong Kong",
      "Taiwan",
      "Philippines",
      "Cambodia",
      "Laos",
      "Myanmar",
      "Brunei",
      "Timor-Leste",
      "Papua New Guinea",
      "Fiji",
      "Vanuatu",
      "Solomon Islands",
      "New Caledonia",
      "French Polynesia",
      "Cook Islands",
      "Niue",
      "Tokelau",
      "Wallis and Futuna",
      "American Samoa",
      "Guam",
      "Northern Mariana Islands",
      "Palau",
      "Marshall Islands",
      "Micronesia",
      "Nauru",
      "Tuvalu",
      "Kiribati",
      "Samoa",
      "Tonga",
      "Vanuatu",
      "Fiji",
      "New Zealand",
      "Australia"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "eVisa Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kenya eVisa",
            "description": "Apply for Kenya eVisa online. Fast processing, 24/7 support."
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Canada eVisa",
            "description": "Apply for Canada eVisa online. Fast processing, 24/7 support."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Vietnam eVisa",
            "description": "Apply for Vietnam eVisa online. Fast processing, 24/7 support."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Johnson"
        },
        "reviewBody": "Excellent service! Got my Kenya visa in just 2 days. Highly recommended!"
      },
      {
        "@type": "Review", 
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Michael Chen"
        },
        "reviewBody": "Fast and reliable service. The Vietnam visa process was smooth and efficient."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 