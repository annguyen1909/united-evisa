import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { COUNTRIES } from './countries';

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
  updatedAt?: string;
  author?: string;
  reviewer?: string;
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
  // If directory doesn't exist, fall back to global countries data
  if (!fs.existsSync(postsDirectory)) {
    return COUNTRIES.map(country => ({
      slug: country.slug,
      title: `${country.name} eVisa Requirements`,
      description: country.description,
      country: country.name,
      countryCode: country.code,
      image: country.imageUrl || '',
      welcomeImage: country.welcomeImgUrl || '',
      capital: (country.info as any)?.capital || '', // Explicitly casting to any as capital isn't in base type
      language: country.info?.language || '',
      currency: country.info?.currency || '',
      region: country.region || '',
      visaTypes: (country.visaTypes || []).map(v => ({
        id: v.id,
        name: v.name,
        type: v.type,
        description: v.description || '',
        entry: v.entry || '',
        visaDuration: v.visaDuration || 0,
        visaValidity: v.visaValidity || '',
        govFee: v.govFee || 0,
        processingTime: v.processingTimes?.normal || '',
        features: (v as any).features || [] // Explicitly casting as features isn't in base type
      })),
      faqs: (country as any).faqs || [], // Explicitly casting as faqs isn't in base type
      content: country.welcomeMessage || '',
      updatedAt: new Date().toISOString(),
      author: 'Worldmaxxing Global Services',
      reviewer: 'Visa Compliance Team',
    } as RequirementsPost));
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      const stat = fs.statSync(fullPath);
      const updatedAt =
        (data as any).updatedAt ||
        (data as any).lastUpdated ||
        stat.mtime.toISOString();

      return {
        slug,
        content,
        updatedAt,
        author: (data as any).author || 'Worldmaxxing Global Services',
        reviewer: (data as any).reviewer || 'Visa Compliance Team',
        ...data,
      } as RequirementsPost;
    });

  return allPostsData;
}

export function getRequirementsPostBySlug(slug: string): RequirementsPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      // Fallback to searching in COUNTRIES
      const country = COUNTRIES.find(c => c.slug === slug);
      if (country) {
        return {
          slug: country.slug,
          title: `${country.name} eVisa Requirements`,
          description: country.description,
          country: country.name,
          countryCode: country.code,
          image: country.imageUrl || '',
          welcomeImage: country.welcomeImgUrl || '',
          capital: (country.info as any)?.capital || '',
          language: country.info?.language || '',
          currency: country.info?.currency || '',
          region: country.region || '',
          visaTypes: (country.visaTypes || []).map(v => ({
            id: v.id,
            name: v.name,
            type: v.type,
            description: v.description || '',
            entry: v.entry || '',
            visaDuration: v.visaDuration || 0,
            visaValidity: v.visaValidity || '',
            govFee: v.govFee || 0,
            processingTime: v.processingTimes?.normal || '',
            features: (v as any).features || []
          })),
          faqs: (country as any).faqs || [],
          content: country.welcomeMessage || '',
          updatedAt: new Date().toISOString(),
          author: 'Worldmaxxing Global Services',
          reviewer: 'Visa Compliance Team',
        } as RequirementsPost;
      }
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const stat = fs.statSync(fullPath);
    const updatedAt =
      (data as any).updatedAt ||
      (data as any).lastUpdated ||
      stat.mtime.toISOString();

    return {
      slug,
      content,
      updatedAt,
      author: (data as any).author || 'Worldmaxxing Global Services',
      reviewer: (data as any).reviewer || 'Visa Compliance Team',
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
 