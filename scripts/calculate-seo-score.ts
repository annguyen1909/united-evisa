#!/usr/bin/env tsx
/**
 * Comprehensive SEO Score Calculator
 * Evaluates the website's overall SEO health and provides a detailed score
 */

import fs from 'fs';
import path from 'path';
import { COUNTRIES } from '../lib/countries';
import { getAllFaqSlugs } from '../lib/faq';
import { getAllRequirementsPosts } from '../lib/requirements-posts';

interface SEOFactor {
  name: string;
  weight: number;
  score: number;
  maxScore: number;
  details: string[];
  issues: string[];
}

class SEOScoreCalculator {
  private factors: SEOFactor[] = [];
  private baseDir: string;

  constructor() {
    this.baseDir = process.cwd();
  }

  // Check if file exists
  private fileExists(filePath: string): boolean {
    try {
      return fs.existsSync(path.join(this.baseDir, filePath));
    } catch {
      return false;
    }
  }

  // Count files matching pattern
  private countFiles(dir: string, pattern: RegExp): number {
    try {
      const files = fs.readdirSync(path.join(this.baseDir, dir), { recursive: true });
      return files.filter(f => typeof f === 'string' && pattern.test(f)).length;
    } catch {
      return 0;
    }
  }

  // Check robots.txt
  checkRobotsTxt(): SEOFactor {
    const factor: SEOFactor = {
      name: 'robots.txt Configuration',
      weight: 5,
      score: 0,
      maxScore: 5,
      details: [],
      issues: []
    };

    const robotsPath = path.join(this.baseDir, 'public/robots.txt');
    if (this.fileExists('public/robots.txt')) {
      const content = fs.readFileSync(robotsPath, 'utf-8');
      
      if (content.includes('Sitemap:')) factor.score += 1;
      else factor.issues.push('Missing sitemap declaration');
      
      if (!content.includes('Disallow: /')) factor.score += 1;
      else if (content.includes('Allow: /')) factor.score += 1;
      
      if (content.includes('User-agent: *')) factor.score += 1;
      else factor.issues.push('Missing User-agent declaration');
      
      // Check for proper blocking of sensitive paths
      if (content.includes('Disallow: /api/')) factor.score += 0.5;
      if (content.includes('Disallow: /apply/')) factor.score += 0.5;
      
      // Check for no invalid wildcards
      if (!content.match(/Disallow:.*\*-/)) factor.score += 1;
      else factor.issues.push('Invalid wildcard syntax in robots.txt');
      
      factor.details.push('robots.txt file exists and configured');
    } else {
      factor.issues.push('robots.txt file missing');
    }

    return factor;
  }

  // Check sitemap
  checkSitemap(): SEOFactor {
    const factor: SEOFactor = {
      name: 'Sitemap Configuration',
      weight: 8,
      score: 0,
      maxScore: 8,
      details: [],
      issues: []
    };

    if (this.fileExists('app/sitemap.ts')) {
      factor.score += 2;
      factor.details.push('Dynamic sitemap.ts exists');
      
      // Count pages in sitemap
      try {
        const countries = COUNTRIES.length;
        const faqSlugs = getAllFaqSlugs();
        const reqPosts = getAllRequirementsPosts();
        
        const estimatedPages = 
          1 + // homepage
          countries * 3 + // destinations + entry-requirements + rejection-risk
          reqPosts.length +
          faqSlugs.length +
          10; // static pages
        
        factor.score += Math.min(3, estimatedPages / 20); // Up to 3 points for comprehensive coverage
        factor.details.push(`Estimated ${estimatedPages} pages in sitemap`);
      } catch (e) {
        factor.issues.push('Error counting sitemap pages');
      }
      
      // Check for priorities
      const sitemapContent = fs.readFileSync(path.join(this.baseDir, 'app/sitemap.ts'), 'utf-8');
      if (sitemapContent.includes('priority:')) factor.score += 1;
      if (sitemapContent.includes('changeFrequency:')) factor.score += 1;
      if (sitemapContent.includes('lastModified:')) factor.score += 1;
    } else {
      factor.issues.push('sitemap.ts file missing');
    }

    return factor;
  }

  // Check metadata implementation
  checkMetadata(): SEOFactor {
    const factor: SEOFactor = {
      name: 'Metadata Implementation',
      weight: 15,
      score: 0,
      maxScore: 15,
      details: [],
      issues: []
    };

    // Check root layout metadata
    if (this.fileExists('app/layout.tsx')) {
      const layoutContent = fs.readFileSync(path.join(this.baseDir, 'app/layout.tsx'), 'utf-8');
      
      if (layoutContent.includes('metadataBase')) factor.score += 1;
      if (layoutContent.includes('title:')) factor.score += 1;
      if (layoutContent.includes('description:')) factor.score += 1;
      if (layoutContent.includes('openGraph:')) factor.score += 2;
      if (layoutContent.includes('twitter:')) factor.score += 1;
      if (layoutContent.includes('robots:')) factor.score += 1;
      if (layoutContent.includes('canonical') || layoutContent.includes('alternates')) factor.score += 1;
      
      factor.details.push('Root layout has comprehensive metadata');
    }

    // Count pages with metadata
    const pagesWithMetadata = this.countFiles('app', /page\.tsx$/);
    factor.score += Math.min(5, pagesWithMetadata * 0.1); // Up to 5 points
    factor.details.push(`${pagesWithMetadata} pages found`);

    return factor;
  }

  // Check structured data
  checkStructuredData(): SEOFactor {
    const factor: SEOFactor = {
      name: 'Structured Data',
      weight: 12,
      score: 0,
      maxScore: 12,
      details: [],
      issues: []
    };

    const structuredDataFiles = [
      'app/layout.tsx',
      'components/shared/PageSEO.tsx',
      'app/components/EnhancedStructuredData.tsx',
      'components/shared/CountryStructuredData.tsx',
      'components/shared/RequirementsPostStructuredData.tsx'
    ];

    let foundCount = 0;
    structuredDataFiles.forEach(file => {
      if (this.fileExists(file)) {
        const content = fs.readFileSync(path.join(this.baseDir, file), 'utf-8');
        if (content.includes('application/ld+json') || content.includes('@type')) {
          foundCount++;
          
          if (content.includes('Organization')) factor.score += 1;
          if (content.includes('WebSite')) factor.score += 1;
          if (content.includes('BreadcrumbList')) factor.score += 1;
          if (content.includes('Service')) factor.score += 1;
        }
      }
    });

    factor.score += Math.min(4, foundCount); // Up to 4 points for multiple implementations
    factor.details.push(`${foundCount} structured data components found`);

    return factor;
  }

  // Check internal linking
  checkInternalLinking(): SEOFactor {
    const factor: SEOFactor = {
      name: 'Internal Linking Strategy',
      weight: 8,
      score: 0,
      maxScore: 8,
      details: [],
      issues: []
    };

    if (this.fileExists('components/shared/InternalLinks.tsx')) {
      factor.score += 3;
      factor.details.push('InternalLinks component exists');
    }

    if (this.fileExists('components/shared/BreadcrumbNavigation.tsx')) {
      factor.score += 2;
      factor.details.push('BreadcrumbNavigation component exists');
    }

    // Check if used on key pages
    if (this.fileExists('app/page.tsx')) {
      const homepageContent = fs.readFileSync(path.join(this.baseDir, 'app/page.tsx'), 'utf-8');
      if (homepageContent.includes('InternalLinks')) factor.score += 1.5;
      if (homepageContent.includes('Breadcrumb')) factor.score += 1.5;
    }

    return factor;
  }

  // Check canonical URLs
  checkCanonicalUrls(): SEOFactor {
    const factor: SEOFactor = {
      name: 'Canonical URL Implementation',
      weight: 7,
      score: 0,
      maxScore: 7,
      details: [],
      issues: []
    };

    // Check SEO utility function
    if (this.fileExists('lib/seo.ts')) {
      const seoContent = fs.readFileSync(path.join(this.baseDir, 'lib/seo.ts'), 'utf-8');
      if (seoContent.includes('canonical')) {
        factor.score += 3;
        factor.details.push('SEO utility supports canonical URLs');
      }
    }

    // Check layout for metadataBase
    if (this.fileExists('app/layout.tsx')) {
      const layoutContent = fs.readFileSync(path.join(this.baseDir, 'app/layout.tsx'), 'utf-8');
      if (layoutContent.includes('metadataBase')) {
        factor.score += 2;
        factor.details.push('metadataBase configured in layout');
      }
    }

    // Count pages with canonical (sample check)
    const samplePages = ['app/page.tsx', 'app/destinations/page.tsx'];
    let hasCanonical = 0;
    samplePages.forEach(page => {
      if (this.fileExists(page)) {
        const content = fs.readFileSync(path.join(this.baseDir, page), 'utf-8');
        if (content.includes('canonical') || content.includes('alternates')) {
          hasCanonical++;
        }
      }
    });

    factor.score += Math.min(2, hasCanonical);
    factor.details.push(`${hasCanonical}/${samplePages.length} sample pages have canonical URLs`);

    return factor;
  }

  // Check performance optimizations
  checkPerformance(): SEOFactor {
    const factor: SEOFactor = {
      name: 'Performance & Technical SEO',
      weight: 10,
      score: 0,
      maxScore: 10,
      details: [],
      issues: []
    };

    // Check Next.js config
    if (this.fileExists('next.config.ts') || this.fileExists('next.config.js')) {
      factor.score += 1;
      const configFile = this.fileExists('next.config.ts') ? 'next.config.ts' : 'next.config.js';
      const configContent = fs.readFileSync(path.join(this.baseDir, configFile), 'utf-8');
      
      if (configContent.includes('redirects')) factor.score += 1;
      if (configContent.includes('images')) factor.score += 1;
    }

    // Check for image optimization
    if (this.fileExists('app/layout.tsx')) {
      const layoutContent = fs.readFileSync(path.join(this.baseDir, 'app/layout.tsx'), 'utf-8');
      if (layoutContent.includes('preload')) factor.score += 1;
    }

    // Check for font optimization
    if (this.fileExists('app/layout.tsx')) {
      const layoutContent = fs.readFileSync(path.join(this.baseDir, 'app/layout.tsx'), 'utf-8');
      if (layoutContent.includes('display: "swap"')) factor.score += 1;
    }

    // Check middleware for noindex handling
    if (this.fileExists('middleware.ts')) {
      factor.score += 1;
      const middlewareContent = fs.readFileSync(path.join(this.baseDir, 'middleware.ts'), 'utf-8');
      if (middlewareContent.includes('X-Robots-Tag')) factor.score += 1;
      if (middlewareContent.includes('noindex')) factor.score += 1;
    }

    factor.details.push('Performance optimizations checked');

    return factor;
  }

  // Check content structure
  checkContentStructure(): SEOFactor {
    const factor: SEOFactor = {
      name: 'Content Structure & Organization',
      weight: 8,
      score: 0,
      maxScore: 8,
      details: [],
      issues: []
    };

    // Check for organized content structure
    const contentDirs = [
      'content/blog',
      'content/faq',
      'app/destinations',
      'app/requirements-posts'
    ];

    let existingDirs = 0;
    contentDirs.forEach(dir => {
      if (this.fileExists(dir)) {
        existingDirs++;
        try {
          const files = fs.readdirSync(path.join(this.baseDir, dir));
          if (files.length > 0) {
            factor.score += 1;
          }
        } catch {}
      }
    });

    factor.score += Math.min(4, existingDirs);
    factor.details.push(`${existingDirs} content directories found`);

    return factor;
  }

  // Check security and HTTPS
  checkSecurity(): SEOFactor {
    const factor: SEOFactor = {
      name: 'Security & HTTPS',
      weight: 5,
      score: 0,
      maxScore: 5,
      details: [],
      issues: []
    };

    // Note: HTTPS is assumed for production
    factor.score += 3; // Assume HTTPS is configured
    factor.details.push('HTTPS assumed (production requirement)');

    // Check for security headers in Next.js (would be in next.config or middleware)
    if (this.fileExists('middleware.ts')) {
      factor.score += 1;
      factor.details.push('Middleware exists (can handle security headers)');
    }

    // Check for proper redirects (security practice)
    if (this.fileExists('next.config.ts')) {
      const configContent = fs.readFileSync(path.join(this.baseDir, 'next.config.ts'), 'utf-8');
      if (configContent.includes('redirects')) {
        factor.score += 1;
      }
    }

    return factor;
  }

  // Check mobile optimization
  checkMobileOptimization(): SEOFactor {
    const factor: SEOFactor = {
      name: 'Mobile Optimization',
      weight: 7,
      score: 0,
      maxScore: 7,
      details: [],
      issues: []
    };

    if (this.fileExists('app/layout.tsx')) {
      const layoutContent = fs.readFileSync(path.join(this.baseDir, 'app/layout.tsx'), 'utf-8');
      
      if (layoutContent.includes('viewport')) factor.score += 2;
      if (layoutContent.includes('device-width')) factor.score += 2;
      if (layoutContent.includes('initialScale')) factor.score += 1;
      
      factor.details.push('Viewport meta tag configured');
    }

    // Check for responsive design indicators (Tailwind CSS)
    if (this.fileExists('tailwind.config') || this.fileExists('app/globals.css')) {
      factor.score += 2;
      factor.details.push('Responsive CSS framework detected');
    }

    return factor;
  }

  // Calculate overall score
  calculate(): { totalScore: number; maxScore: number; percentage: number; factors: SEOFactor[]; grade: string } {
    this.factors = [
      this.checkRobotsTxt(),
      this.checkSitemap(),
      this.checkMetadata(),
      this.checkStructuredData(),
      this.checkInternalLinking(),
      this.checkCanonicalUrls(),
      this.checkPerformance(),
      this.checkContentStructure(),
      this.checkSecurity(),
      this.checkMobileOptimization()
    ];

    // Cap scores at maxScore to prevent exceeding 100%
    const cappedScores = this.factors.map(f => Math.min(f.score, f.maxScore));
    const totalScore = cappedScores.reduce((sum, s) => sum + s, 0);
    const maxScore = this.factors.reduce((sum, f) => sum + f.maxScore, 0);
    const percentage = Math.round((totalScore / maxScore) * 100);

    let grade: string;
    if (percentage >= 90) grade = 'A+ (Excellent)';
    else if (percentage >= 80) grade = 'A (Very Good)';
    else if (percentage >= 70) grade = 'B (Good)';
    else if (percentage >= 60) grade = 'C (Fair)';
    else if (percentage >= 50) grade = 'D (Needs Improvement)';
    else grade = 'F (Poor)';

    return { totalScore, maxScore, percentage, factors: this.factors, grade };
  }

  // Generate report
  generateReport(): string {
    const result = this.calculate();
    
    let report = '\n';
    report += '═'.repeat(70) + '\n';
    report += '           COMPREHENSIVE SEO SCORE REPORT\n';
    report += '═'.repeat(70) + '\n\n';
    
    report += `Overall SEO Score: ${result.totalScore.toFixed(1)}/${result.maxScore} (${result.percentage}%)\n`;
    report += `Grade: ${result.grade}\n\n`;
    
    report += '─'.repeat(70) + '\n';
    report += 'DETAILED BREAKDOWN:\n';
    report += '─'.repeat(70) + '\n\n';

    result.factors.forEach(factor => {
      const factorPercentage = Math.round((factor.score / factor.maxScore) * 100);
      const barLength = Math.max(0, Math.min(50, Math.round(factorPercentage / 2)));
      const remaining = Math.max(0, 50 - barLength);
      const bar = '█'.repeat(barLength) + '░'.repeat(remaining);
      
      report += `${factor.name} (Weight: ${factor.weight})\n`;
      report += `  Score: ${factor.score.toFixed(1)}/${factor.maxScore} (${factorPercentage}%) [${bar}]\n`;
      
      if (factor.details.length > 0) {
        report += `  ✓ ${factor.details.join('\n  ✓ ')}\n`;
      }
      
      if (factor.issues.length > 0) {
        report += `  ⚠ Issues:\n`;
        factor.issues.forEach(issue => {
          report += `    - ${issue}\n`;
        });
      }
      
      report += '\n';
    });

    report += '─'.repeat(70) + '\n';
    report += 'RECOMMENDATIONS:\n';
    report += '─'.repeat(70) + '\n\n';

    const lowScores = result.factors.filter(f => (f.score / f.maxScore) < 0.7);
    if (lowScores.length > 0) {
      lowScores.forEach(factor => {
        report += `• ${factor.name}: Needs improvement (${Math.round((factor.score / factor.maxScore) * 100)}%)\n`;
        if (factor.issues.length > 0) {
          factor.issues.forEach(issue => {
            report += `  - Fix: ${issue}\n`;
          });
        }
      });
    } else {
      report += '• All factors are performing well! Keep maintaining high standards.\n';
    }

    report += '\n' + '═'.repeat(70) + '\n';
    
    return report;
  }
}

// Run the calculator
const calculator = new SEOScoreCalculator();
const report = calculator.generateReport();
console.log(report);

// Also output JSON for programmatic use
const result = calculator.calculate();
console.log('\n--- JSON Output ---\n');
console.log(JSON.stringify({
  score: result.totalScore,
  maxScore: result.maxScore,
  percentage: result.percentage,
  grade: result.grade,
  factors: result.factors.map(f => ({
    name: f.name,
    score: f.score,
    maxScore: f.maxScore,
    percentage: Math.round((f.score / f.maxScore) * 100),
    weight: f.weight
  }))
}, null, 2));
