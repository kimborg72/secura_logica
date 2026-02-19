import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    slug: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    excerpt: z.string(),
    introduction: z.string(),
    benefits: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
    process: z.array(
      z.object({
        step: z.number(),
        title: z.string(),
        description: z.string(),
      }),
    ),
    deliverables: z.array(z.string()),
    relatedServices: z.array(z.string()),
    ctaText: z.string().optional(),
    order: z.number(),
  }),
});

const team = defineCollection({
  loader: file('./src/content/team/members.yaml', {
    parser: (text) => {
      const yaml = import('js-yaml');
      return yaml.then((m) => m.default.load(text) as any[]);
    },
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    linkedin: z.string().optional(),
    order: z.number(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    category: z.string(),
    draft: z.boolean().default(false),
  }),
});

const industries = defineCollection({
  loader: file('./src/content/industries/industries.yaml', {
    parser: (text) => {
      const yaml = import('js-yaml');
      return yaml.then((m) => m.default.load(text) as any[]);
    },
  }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    applicableServices: z.array(z.string()),
    challenges: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { services, team, insights, industries };
