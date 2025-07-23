import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  slug: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  faqs: FaqItem[];
}

const faqDirectory = path.join(process.cwd(), 'content/faq');

export function getAllFaqSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(faqDirectory);
    return fileNames
      .filter(name => name.endsWith('.md'))
      .map(name => name.replace(/\.md$/, ''));
  } catch (error) {
    return [];
  }
}

export function getFaqBySlug(slug: string): FaqData | null {
  try {
    const fullPath = path.join(faqDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Parse FAQ content - looking for markdown format with ## questions and answers
    const faqRegex = /## (.+?)\n\n((?:(?!##)[\s\S])+)/g;
    const faqs: FaqItem[] = [];
    
    let match;
    while ((match = faqRegex.exec(content)) !== null) {
      const question = match[1].trim();
      const answer = match[2].trim();
      faqs.push({ question, answer });
    }

    return {
      slug,
      title: data.title,
      description: data.description,
      category: data.category,
      image: data.image,
      faqs
    };
  } catch (error) {
    return null;
  }
}

export function getAllFaqs(): FaqData[] {
  const slugs = getAllFaqSlugs();
  return slugs
    .map(slug => getFaqBySlug(slug))
    .filter((faq): faq is FaqData => faq !== null)
    .sort((a, b) => a.category.localeCompare(b.category));
}
