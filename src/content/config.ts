import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    image: z.string().optional().default('/uploads/default-agent.jpg'),
    author: z.string().default('Agentes IA Team'),
    draft: z.boolean().default(false),
    category: z.string().default('Inteligencia Artificial'),
    readTime: z.string().optional().default('4 min de lectura'),
  }),
});

export const collections = {
  blog: blogCollection,
};
