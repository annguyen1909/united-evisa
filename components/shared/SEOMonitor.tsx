// SEO Monitoring and Analytics Component
'use client';

import { useState, useEffect } from 'react';

interface SEOMetrics {
  pageTitle: string;
  metaDescription: string;
  hasStructuredData: boolean;
  internalLinksCount: number;
  headingsStructure: string[];
  pageLoadTime: number;
}

export default function SEOMonitor() {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or for admins
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('seo-monitor') === 'true';
    
    if (shouldShow) {
      setIsVisible(true);
      analyzePage();
    }
  }, []);

  const analyzePage = () => {
    const startTime = performance.now();
    
    // Analyze current page SEO metrics
    const title = document.title;
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    const internalLinks = document.querySelectorAll('a[href^="/"]');
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .map(h => h.tagName.toLowerCase());

    const endTime = performance.now();
    
    setMetrics({
      pageTitle: title,
      metaDescription: metaDesc,
      hasStructuredData: !!structuredData,
      internalLinksCount: internalLinks.length,
      headingsStructure: headings,
      pageLoadTime: endTime - startTime
    });
  };

  const getSEOScore = () => {
    if (!metrics) return 0;
    
    let score = 0;
    
    // Title optimization (25 points)
    if (metrics.pageTitle.length >= 30 && metrics.pageTitle.length <= 60) score += 25;
    else if (metrics.pageTitle.length > 0) score += 15;
    
    // Meta description (25 points)
    if (metrics.metaDescription.length >= 120 && metrics.metaDescription.length <= 160) score += 25;
    else if (metrics.metaDescription.length > 0) score += 15;
    
    // Structured data (20 points)
    if (metrics.hasStructuredData) score += 20;
    
    // Internal links (15 points)
    if (metrics.internalLinksCount >= 5) score += 15;
    else if (metrics.internalLinksCount > 0) score += 10;
    
    // Heading structure (15 points)
    if (metrics.headingsStructure.includes('h1') && metrics.headingsStructure.includes('h2')) score += 15;
    else if (metrics.headingsStructure.includes('h1')) score += 10;
    
    return score;
  };

  if (!isVisible || !metrics) return null;

  const seoScore = getSEOScore();
  const scoreColor = seoScore >= 80 ? 'text-green-600' : seoScore >= 60 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900">SEO Monitor</h3>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>SEO Score:</span>
          <span className={`font-bold ${scoreColor}`}>{seoScore}/100</span>
        </div>
        
        <div className="flex justify-between">
          <span>Title Length:</span>
          <span className={metrics.pageTitle.length >= 30 && metrics.pageTitle.length <= 60 ? 'text-green-600' : 'text-yellow-600'}>
            {metrics.pageTitle.length}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Meta Desc:</span>
          <span className={metrics.metaDescription.length >= 120 && metrics.metaDescription.length <= 160 ? 'text-green-600' : 'text-yellow-600'}>
            {metrics.metaDescription.length}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Structured Data:</span>
          <span className={metrics.hasStructuredData ? 'text-green-600' : 'text-red-600'}>
            {metrics.hasStructuredData ? '✓' : '✗'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>Internal Links:</span>
          <span className={metrics.internalLinksCount >= 5 ? 'text-green-600' : 'text-yellow-600'}>
            {metrics.internalLinksCount}
          </span>
        </div>
        
        <div className="border-t pt-2 mt-2">
          <button 
            onClick={analyzePage}
            className="w-full bg-blue-600 text-white py-1 px-2 rounded text-xs hover:bg-blue-700"
          >
            Refresh Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
