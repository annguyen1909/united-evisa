import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";

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

export interface IndividualFaq {
  slug: string;
  title: string;
  description: string;
  category: string;
  content: string;
  date?: string;
  readTime?: string;
  image?: string;
  destinationSlug: string;
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

// Get individual FAQ item by destination and FAQ slug
export async function getIndividualFaq(destinationSlug: string, faqSlug: string): Promise<IndividualFaq | null> {
  try {
    // First check if there's a destination-specific folder
    const destinationFaqDirectory = path.join(process.cwd(), 'content/faq', destinationSlug);
    
    if (fs.existsSync(destinationFaqDirectory)) {
      // Look for individual FAQ files in the destination folder
      const faqFileName = `${faqSlug}.md`;
      const faqFilePath = path.join(destinationFaqDirectory, faqFileName);
      
      if (fs.existsSync(faqFilePath)) {
        const fileContents = fs.readFileSync(faqFilePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Process markdown content to HTML
        const processedContent = await remark()
          .use(remarkGfm)
          .use(remarkRehype)
          .use(rehypeSlug) // Adds IDs to headings
          .use(rehypeStringify)
          .process(content);

        const contentHtml = processedContent.toString();
        
        return {
          slug: faqSlug,
          title: data.title || 'FAQ',
          description: data.description || content.substring(0, 160) + '...',
          category: data.category || destinationSlug.replace('-evisa-faq', ''),
          content: contentHtml,
          date: data.date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
          readTime: data.readTime || `${Math.ceil(content.split(' ').length / 200)} min read`,
          image: data.image,
          destinationSlug
        };
      }
    }
    
    // Fallback to the old method (parsing from the main FAQ file)
    const destinationFaq = getFaqBySlug(destinationSlug);
    if (!destinationFaq) {
      return null;
    }

    // Find the specific FAQ item
    const faqIndex = parseInt(faqSlug.replace('faq-', '')) - 1;
    if (faqIndex < 0 || faqIndex >= destinationFaq.faqs.length) {
      return null;
    }

    const faqItem = destinationFaq.faqs[faqIndex];
    
    return {
      slug: faqSlug,
      title: faqItem.question,
      description: faqItem.answer.substring(0, 160) + '...',
      category: destinationFaq.category,
      content: faqItem.answer,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: `${Math.ceil(faqItem.answer.split(' ').length / 200)} min read`,
      image: destinationFaq.image,
      destinationSlug
    };
  } catch (error) {
    return null;
  }
}

// Get all individual FAQ slugs for a destination
export function getAllIndividualFaqSlugs(destinationSlug: string): string[] {
  try {
    // First check if there's a destination-specific folder
    const destinationFaqDirectory = path.join(process.cwd(), 'content/faq', destinationSlug);
    
    if (fs.existsSync(destinationFaqDirectory)) {
      const fileNames = fs.readdirSync(destinationFaqDirectory);
      return fileNames
        .filter(name => name.endsWith('.md'))
        .map(name => name.replace(/\.md$/, ''))
        .sort();
    }
    
    // Fallback to the old method
    const destinationFaq = getFaqBySlug(destinationSlug);
    if (!destinationFaq) {
      return [];
    }

    return destinationFaq.faqs.map((_, index) => `faq-${index + 1}`);
  } catch (error) {
    return [];
  }
}
