interface ContentOptimizerProps {
  countryName?: string;
  pageType: 'destination' | 'requirements' | 'homepage' | 'faq';
}

export default function ContentOptimizer({ countryName, pageType }: ContentOptimizerProps) {
  
  const getKeywordRichContent = () => {
    if (pageType === 'destination' && countryName) {
      return {
        title: `${countryName} eVisa Application - Fast & Secure Processing`,
        h2: `Why Choose Our ${countryName} eVisa Service?`,
        benefits: [
          `Expert ${countryName} visa assistance`,
          `Fast ${countryName} eVisa processing`,
          `24/7 customer support for ${countryName} applications`,
          `Secure document handling for ${countryName} visas`,
          `Money-back guarantee on ${countryName} eVisa rejections`
        ],
        ctaText: `Apply for ${countryName} eVisa Now`,
        urgency: `Don't delay your ${countryName} travel plans`
      };
    }
    
    if (pageType === 'homepage') {
      return {
        title: "Global eVisa Applications Made Simple",
        h2: "Your Trusted Partner for International Travel",
        benefits: [
          "50+ countries available for eVisa applications",
          "99.7% approval rate across all destinations",
          "Average processing time: 24-72 hours",
          "Expert document review and assistance",
          "Secure payment and data protection"
        ],
        ctaText: "Start Your eVisa Application",
        urgency: "Join 50,000+ satisfied travelers"
      };
    }

    return null;
  };

  const content = getKeywordRichContent();
  
  if (!content) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {content.h2}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional visa services with guaranteed results and expert support throughout your application process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {content.benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">{content.urgency}</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {content.ctaText}
          </button>
        </div>
      </div>
    </div>
  );
}
