import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Clock, DollarSign, FileText, MapPin, Users, CheckCircle, XCircle, AlertCircle, ArrowRight } from 'lucide-react';
import EnhancedStructuredData from '@/app/components/EnhancedStructuredData';

interface Props {
  params: Promise<{ slug: string }>;
}

// Define available comparison slugs
const validSlugs = [
  'kenya-vs-tanzania-evisa',
  'vietnam-vs-cambodia-evisa',
  'uae-gcc-countries-evisa',
  'east-africa-evisa-options'
];

export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const year = new Date().getFullYear();

  if (!validSlugs.includes(slug)) {
    return {
      title: 'Comparison Not Found',
      description: 'The requested comparison page could not be found.',
    };
  }

  const comparisons: Record<string, { title: string; description: string; countries: string[] }> = {
    'kenya-vs-tanzania-evisa': {
      title: `Kenya vs Tanzania eVisa Comparison ${year} | Which is Better?`,
      description: 'Compare Kenya and Tanzania eVisa requirements, processing times, costs, and travel benefits. Complete guide to help you choose the best East African destination.',
      countries: ['Kenya', 'Tanzania']
    },
    'vietnam-vs-cambodia-evisa': {
      title: `Vietnam vs Cambodia eVisa Comparison ${year} | Travel Guide`,
      description: 'Detailed comparison of Vietnam and Cambodia eVisa processes, costs, requirements, and travel experiences. Make the right choice for your Southeast Asian adventure.',
      countries: ['Vietnam', 'Cambodia']
    },
    'uae-gcc-countries-evisa': {
      title: `UAE vs GCC Countries eVisa Comparison ${year} | Gulf Travel Guide`,
      description: 'Compare UAE with other GCC countries eVisa options including Saudi Arabia, Qatar, Oman, and Bahrain. Find the best Gulf destination for your needs.',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain']
    },
    'east-africa-evisa-options': {
      title: `East Africa eVisa Options Comparison ${year} | Complete Guide`,
      description: 'Compare all East African eVisa options including Kenya, Tanzania, Uganda, Rwanda, and Ethiopia. Find the perfect destination for your African safari.',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Ethiopia']
    }
  };

  const comparison = comparisons[slug];

  return {
    title: comparison.title,
    description: comparison.description,
    keywords: `eVisa comparison, ${slug.replace(/-/g, ' ')}, travel visa, online visa application`,
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      type: 'article',
      url: `https://worldmaxxing.com/compare/${slug}`,
      images: [{
        url: `/images/compare/${slug}.jpg`,
        width: 1200,
        height: 630,
        alt: comparison.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: comparison.title,
      description: comparison.description,
      images: [`/images/compare/${slug}.jpg`]
    },
    alternates: {
      canonical: `https://worldmaxxing.com/compare/${slug}`
    }
  };
}

function KenyaVsTanzaniaComparison() {
  const year = new Date().getFullYear();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/destinations" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Destinations
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-4">Kenya vs Tanzania eVisa: Complete Comparison Guide {year}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Planning an East African safari? Compare Kenya and Tanzania eVisa options to choose the perfect destination for your adventure.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">East Africa</Badge>
            <Badge variant="secondary">Safari Destinations</Badge>
            <Badge variant="secondary">eVisa Comparison</Badge>
            <Badge variant="secondary">Travel Guide</Badge>
          </div>
        </div>

        {/* Quick Comparison Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Quick Comparison Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Feature</th>
                    <th className="text-left p-2">Kenya eVisa</th>
                    <th className="text-left p-2">Tanzania eVisa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Processing Time</td>
                    <td className="p-2">3-5 business days</td>
                    <td className="p-2">5-10 business days</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Tourist Visa Cost</td>
                    <td className="p-2">$51 USD</td>
                    <td className="p-2">$50 USD</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Validity</td>
                    <td className="p-2">90 days single entry</td>
                    <td className="p-2">90 days single entry</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Best For</td>
                    <td className="p-2">Maasai Mara, Beach Combo</td>
                    <td className="p-2">Serengeti, Mt. Kilimanjaro</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Comparisons */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                Kenya eVisa Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-1 text-green-500" />
                  <span>Faster processing (3-5 days)</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-green-500" />
                  <span>Famous Maasai Mara National Reserve</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 mt-1 text-green-500" />
                  <span>Better tourism infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-green-500" />
                  <span>Easy access to coastal areas (Mombasa)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-600">
                <CheckCircle className="h-5 w-5" />
                Tanzania eVisa Advantages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-blue-500" />
                  <span>Home to Mount Kilimanjaro</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-blue-500" />
                  <span>Serengeti National Park</span>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 mt-1 text-blue-500" />
                  <span>Slightly lower visa cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 text-blue-500" />
                  <span>Zanzibar archipelago access</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Application Process Comparison */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Application Process Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Kenya eVisa Process</h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-sm font-medium">1</span>
                    <span>Visit official Kenya eVisa portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-sm font-medium">2</span>
                    <span>Complete online application form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-sm font-medium">3</span>
                    <span>Upload required documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-sm font-medium">4</span>
                    <span>Pay $51 processing fee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-green-100 text-green-600 rounded-full px-2 py-1 text-sm font-medium">5</span>
                    <span>Receive eVisa in 3-5 days</span>
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Tanzania eVisa Process</h3>
                <ol className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-sm font-medium">1</span>
                    <span>Access Tanzania eVisa system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-sm font-medium">2</span>
                    <span>Fill out application details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-sm font-medium">3</span>
                    <span>Submit supporting documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-sm font-medium">4</span>
                    <span>Pay $50 application fee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-blue-100 text-blue-600 rounded-full px-2 py-1 text-sm font-medium">5</span>
                    <span>Wait 5-10 days for approval</span>
                  </li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card>
          <CardContent className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Apply for Your East African Adventure?</h2>
            <p className="text-muted-foreground mb-6">
              Choose your destination and start your eVisa application today. Our expert team is here to assist you throughout the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/apply?country=kenya">Apply for Kenya eVisa</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/apply?country=tanzania">Apply for Tanzania eVisa</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function VietnamVsCambodiaComparison() {
  const year = new Date().getFullYear();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/destinations" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Destinations
            </Link>
          </Button>

          <h1 className="text-4xl font-bold mb-4">Vietnam vs Cambodia eVisa: Southeast Asia Travel Comparison {year}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Discover the differences between Vietnam and Cambodia eVisa options to plan your perfect Southeast Asian journey.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary">Southeast Asia</Badge>
            <Badge variant="secondary">Cultural Tourism</Badge>
            <Badge variant="secondary">eVisa Guide</Badge>
            <Badge variant="secondary">Backpacking</Badge>
          </div>
        </div>

        {/* Quick Comparison */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Quick Comparison Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Feature</th>
                    <th className="text-left p-2">Vietnam eVisa</th>
                    <th className="text-left p-2">Cambodia eVisa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Processing Time</td>
                    <td className="p-2">3 business days</td>
                    <td className="p-2">3 business days</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Tourist Visa Cost</td>
                    <td className="p-2">$25 USD</td>
                    <td className="p-2">$36 USD</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Validity</td>
                    <td className="p-2">30 days single entry</td>
                    <td className="p-2">30 days single entry</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Multiple Entry</td>
                    <td className="p-2">Available (90 days)</td>
                    <td className="p-2">Not available online</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Travel Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Vietnam Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Ha Long Bay UNESCO World Heritage</li>
                <li>• Ho Chi Minh City modern metropolis</li>
                <li>• Hanoi's ancient charm</li>
                <li>• Sapa rice terraces</li>
                <li>• Hoi An historic town</li>
                <li>• Phu Quoc pristine beaches</li>
                <li>• Rich coffee culture</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">Cambodia Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>• Angkor Wat temple complex</li>
                <li>• Phnom Penh capital exploration</li>
                <li>• Siem Reap cultural hub</li>
                <li>• Tonle Sap floating villages</li>
                <li>• Koh Rong tropical islands</li>
                <li>• Kampot pepper farms</li>
                <li>• Authentic Khmer cuisine</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/apply">Start Your eVisa Application</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default async function ComparisonPage({ params }: Props) {
  const { slug } = await params;
  const year = new Date().getFullYear();

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const comparisons: Record<string, { title: string; description: string; countries: string[] }> = {
    'kenya-vs-tanzania-evisa': {
      title: `Kenya vs Tanzania eVisa Comparison ${year} | Which is Better?`,
      description: 'Compare Kenya and Tanzania eVisa requirements, processing times, costs, and travel benefits. Complete guide to help you choose the best East African destination.',
      countries: ['Kenya', 'Tanzania']
    },
    'vietnam-vs-cambodia-evisa': {
      title: `Vietnam vs Cambodia eVisa Comparison ${year} | Travel Guide`,
      description: 'Detailed comparison of Vietnam and Cambodia eVisa processes, costs, requirements, and travel experiences. Make the right choice for your Southeast Asian adventure.',
      countries: ['Vietnam', 'Cambodia']
    },
    'uae-gcc-countries-evisa': {
      title: `UAE vs GCC Countries eVisa Comparison ${year} | Gulf Travel Guide`,
      description: 'Compare UAE with other GCC countries eVisa options including Saudi Arabia, Qatar, Oman, and Bahrain. Find the best Gulf destination for your needs.',
      countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Oman', 'Bahrain']
    },
    'east-africa-evisa-options': {
      title: `East Africa eVisa Options Comparison ${year} | Complete Guide`,
      description: 'Compare all East African eVisa options including Kenya, Tanzania, Uganda, Rwanda, and Ethiopia. Find the perfect destination for your African safari.',
      countries: ['Kenya', 'Tanzania', 'Uganda', 'Rwanda', 'Ethiopia']
    }
  };

  const comparison = comparisons[slug];

  const getPage = () => {
    switch (slug) {
      case 'kenya-vs-tanzania-evisa':
        return <KenyaVsTanzaniaComparison />;
      case 'vietnam-vs-cambodia-evisa':
        return <VietnamVsCambodiaComparison />;
      case 'uae-gcc-countries-evisa':
        return <UaeGccComparison />;
      case 'east-africa-evisa-options':
        return <EastAfricaComparison />;
      default:
        notFound();
    }
  }

  return (
    <>
      <EnhancedStructuredData
        pageType="comparison"
        title={comparison.title}
        description={comparison.description}
        comparisonCountries={comparison.countries}
      />
      {getPage()}
    </>
  )
}

function UaeGccComparison() {
  const year = new Date().getFullYear();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">UAE vs GCC Countries eVisa Comparison {year}</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Compare visa options across Gulf Cooperation Council countries including UAE, Saudi Arabia, Qatar, Oman, and Bahrain.
        </p>

        <Card>
          <CardContent className="py-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Gulf Countries Visa Comparison</h2>
              <p className="mb-6">Choose the best Gulf destination for business or leisure travel.</p>
              <Button asChild>
                <Link href="/apply">Explore GCC Visa Options</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function EastAfricaComparison() {
  const year = new Date().getFullYear();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">East Africa eVisa Options Comparison {year}</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Complete guide to East African visa options including Kenya, Tanzania, Uganda, Rwanda, and Ethiopia.
        </p>

        <Card>
          <CardContent className="py-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">East African Safari Destinations</h2>
              <p className="mb-6">Compare all major East African countries for your safari adventure.</p>
              <Button asChild>
                <Link href="/apply">Plan Your African Safari</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}