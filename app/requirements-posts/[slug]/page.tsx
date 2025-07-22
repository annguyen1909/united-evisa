import { notFound } from 'next/navigation';
import { getRequirementsPostBySlug } from '@/lib/requirements-posts';
import RequirementsPostClient from './RequirementsPostClient';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getRequirementsPostBySlug(slug);

  if (!post) {
    return {
      title: 'Page Not Found | Worldmaxxing Global Services',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `${post.title} | Worldmaxxing Global Services`,
    description: post.description || `Visa requirements and information for ${post.title}`,
    keywords: `${post.title}, visa requirements, eVisa, travel, ${post.country}, Worldmaxxing Global Services`,
    alternates: {
      canonical: `https://visa.worldmaxxing.com/requirements-posts/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Worldmaxxing Global Services`,
      description: post.description || `Visa requirements and information for ${post.title}`,
      url: `https://visa.worldmaxxing.com/requirements-posts/${slug}`,
      siteName: 'Worldmaxxing Global Services',
      images: [
        {
          url: `/images/country/${post.country.toLowerCase()}/${post.country.toLowerCase()}-bg.jpg`,
          width: 1200,
          height: 630,
          alt: `${post.title} - Worldmaxxing Global Services`,
        }
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Worldmaxxing Global Services`,
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

  return <RequirementsPostClient post={post} />;
} 