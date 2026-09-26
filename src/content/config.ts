import { defineCollection, z } from 'astro:content';

const apps = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().or(z.date()).optional(),
    category: z.string().optional(),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().or(z.date()),
    author: z.string().default('Yudhasono Aditio'),
    tags: z.array(z.string()).optional(),
    linkedinEmbedUrl: z.string().optional(),
    isLinkedinPost: z.boolean().default(false),
  }),
});

const downloads = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    version: z.string().optional(),
    repoUrl: z.string().optional(),
    downloadUrl: z.string().optional(),
    category: z.string().optional(),
  }),
});

const resume = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    updatedDate: z.string().or(z.date()).optional(),
  }),
});

export const collections = {
  apps,
  blog,
  downloads,
  resume,
};
