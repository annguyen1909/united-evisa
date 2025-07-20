import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface RequirementsPost {
  title: string;
  description: string;
  country: string;
  countryCode: string;
  slug: string;
  image: string;
  welcomeImage: string;
  capital: string;
  language: string;
  currency: string;
  region: string;
  visaTypes: VisaType[];
  faqs: FAQ[];
  content: string;
}

export interface VisaType {
  id: string;
  name: string;
  type: string;
  description: string;
  entry: string;
  visaDuration: number;
  visaValidity: string;
  govFee: number;
  processingTime: string;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

const postsDirectory = path.join(process.cwd(), 'content/requirements-posts');

export function getAllRequirementsPosts(): RequirementsPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        content,
        ...data,
      } as RequirementsPost;
    });

  return allPostsData;
}

export function getRequirementsPostBySlug(slug: string): RequirementsPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
    } as RequirementsPost;
  } catch (error) {
    return null;
  }
}

export function getRequirementsPostByCountryCode(countryCode: string): RequirementsPost | null {
  const posts = getAllRequirementsPosts();
  return posts.find(post => post.countryCode.toLowerCase() === countryCode.toLowerCase()) || null;
} 