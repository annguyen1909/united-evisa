import { notFound } from 'next/navigation';
import { getRequirementsPostBySlug } from '@/lib/requirements-posts';
import RequirementsPostClient from './RequirementsPostClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function RequirementsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getRequirementsPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return <RequirementsPostClient post={post} />;
} 