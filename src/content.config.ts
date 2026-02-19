import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Include subdirectory in the entry ID for YAML files (e.g. "sv/nis2") */
const yamlId = ({ entry }: { entry: string }) => entry.replace(/\.\w+$/, '');

const services = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/services', generateId: yamlId }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    slug: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    excerpt: z.string(),
    introLead: z.string().optional(),
    introduction: z.string(),
    targetAudience: z.object({
      heading: z.string(),
      description: z.string(),
      segments: z.array(z.string()),
    }).optional(),
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
        duration: z.string().optional(),
      }),
    ),
    deliverables: z.array(z.string()),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      }),
    ).optional(),
    securapilotConnection: z.object({
      heading: z.string(),
      description: z.string(),
      features: z.array(z.string()),
    }).optional(),
    relatedServices: z.array(z.string()),
    ctaText: z.string().optional(),
    ctaDescription: z.string().optional(),
    order: z.number(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/team', generateId: yamlId }),
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
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const industries = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/industries', generateId: yamlId }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    displayTitle: z.string(),
    longDescription: z.string(),
    applicableServices: z.array(z.string()),
    challenges: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { services, team, insights, industries };
