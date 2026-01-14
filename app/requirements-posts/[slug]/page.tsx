import { notFound } from 'next/navigation';
import { getRequirementsPostBySlug } from '@/lib/requirements-posts';
import RequirementsPostClient from './RequirementsPostClient';
import { Metadata } from 'next';
import EnhancedStructuredData from '@/app/components/EnhancedStructuredData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getRequirementsPostBySlug(slug);

  if (!post) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `${post.title} | ${post.country} eVisa Official Requirements 2024`,
    description: post.description || `Comprehensive visa requirements and application guide for ${post.country}. Learn about documents, fees, and processing times.`,
    keywords: `${post.title}, visa requirements, eVisa, travel, ${post.country}, ${post.country} visa application`,
    alternates: {
      canonical: `https://worldmaxxing.com/requirements-posts/${slug}`,
    },
    openGraph: {
      title: `${post.title} | ${post.country} eVisa Requirements`,
      description: post.description || `Visa requirements and information for ${post.title}`,
      url: `https://worldmaxxing.com/requirements-posts/${slug}`,
      siteName: 'Worldmaxxing Global Services',
      images: [
        {
          url: `/images/country/${post.country.toLowerCase()}/${post.country.toLowerCase()}-bg.jpg`,
          width: 1200,
          height: 630,
          alt: `${post.title}`,
        }
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || `Visa requirements and information for ${post.title}`,
      images: [`/images/country/${post.country.toLowerCase()}/${post.country.toLowerCase()}-bg.jpg`],
    },
  };
}

export default async function RequirementsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getRequirementsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <EnhancedStructuredData
        pageType="requirements"
        country={post.country.toLowerCase()}
        title={post.title}
        description={post.description}
      />
      <RequirementsPostClient post={post} />
    </>
  );
}