import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog tags — English slugs in frontmatter, displayed in Chinese via
 * src/utils/tags.ts. Keep both lists in sync.
 */
export const BLOG_TAGS = [
  'cs-fundamentals',
  'go',
  'java',
  'python',
  'rust',
  'ai',
  'containers',
  'middleware',
  'architecture',
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.enum(BLOG_TAGS)).default([]),
    series: z.string().optional(),
    seriesOrder: z.number().int().positive().optional(),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    stack: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    order: z.number().int().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
