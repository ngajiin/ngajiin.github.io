import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artikel = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/artikel' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().default('Ust. Achmad Syauqi Hifni, Lc., M.Ag'),
    pubDate: z.coerce.date(), // Use coerce to handle various date formats
    category: z.string(),
    image: image().refine((img) => img, {
      message: 'Cover image (cover.webp) is required in the article folder',
    }),
    tags: z.array(z.string()).optional().default(['Fiqih']),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { artikel };
